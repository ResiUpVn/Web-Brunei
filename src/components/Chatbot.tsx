import { useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const GEMINI_API_KEY = 'AIzaSyDxmNwwNANtRW9s3kd6e0PJin0F_aXDULM';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Xin chào! Tôi là Brunei Assistant được hỗ trợ bởi Google Gemini AI. Tôi có thể giúp bạn khám phá Brunei, gợi ý địa điểm, lịch trình và trả lời câu hỏi về văn hóa, ẩm thực. Bạn cần hỗ trợ gì?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickReplies = [
    'Gợi ý lịch trình 2 ngày',
    'Địa điểm nổi tiếng',
    'Món ăn đặc sản',
    'Chi phí du lịch',
  ];

  const getBotResponseFromGemini = async (userMessage: string): Promise<string> => {
    try {
      const systemPrompt = `Bạn là Brunei Assistant, trợ lý du lịch chuyên nghiệp về Brunei Darussalam. Hãy trả lời bằng tiếng Việt một cách thân thiện, nhiệt tình và chi tiết.

Thông tin về Brunei:
- Thủ đô: Bandar Seri Begawan
- Quốc gia Hồi giáo với luật Sharia
- Nổi tiếng: Kampong Ayer (làng nước lớn nhất thế giới), các nhà thờ Hồi giáo tráng lệ
- Top địa điểm: Masjid Sultan Omar Ali Saifuddien, Kampong Ayer, Royal Regalia Museum, Ulu Temburong National Park, Jerudong Park
- Món ăn: Ambuyat, Nasi Katok, Beef Rendang, Satay, Soto
- Chi phí: 15-30 triệu VNĐ cho 3-4 ngày
- Lưu ý: Cấm rượu công khai, ăn mặc lịch sự, tôn trọng văn hóa Hồi giáo

Hãy trả lời câu hỏi của người dùng một cách hữu ích, sử dụng emoji phù hợp và format dễ đọc.`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: systemPrompt + '\n\nCâu hỏi của người dùng: ' + userMessage,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (botResponse) {
        return botResponse;
      } else {
        throw new Error('No response from API');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      // Fallback to basic responses if API fails
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();

    if (lower.includes('lịch trình') || lower.includes('lich trinh')) {
      return 'Đây là lịch trình gợi ý 2 ngày tại Brunei:\n\n📅 Ngày 1:\n- Sáng: Tham quan Masjid Omar Ali Saifuddien\n- Trưa: Ăn trưa tại Gadong Night Market\n- Chiều: Khám phá Royal Regalia Museum\n- Tối: Đi dạo tại Kampong Ayer\n\n📅 Ngày 2:\n- Sáng: Tham quan Ulu Temburong National Park\n- Chiều: Ghé Jerudong Park\n- Tối: Mua sắm tại Yayasan Complex';
    }

    if (lower.includes('địa điểm') || lower.includes('dia diem') || lower.includes('nổi tiếng')) {
      return 'Top 5 địa điểm du lịch nổi tiếng nhất Brunei:\n\n1. 🕌 Masjid Sultan Omar Ali Saifuddien - Nhà thờ Hồi giáo tuyệt đẹp\n2. 🏘️ Kampong Ayer - Làng nước lớn nhất thế giới\n3. 🏛️ Royal Regalia Museum - Bảo tàng hoàng gia\n4. 🌳 Ulu Temburong National Park - Vườn quốc gia nguyên sinh\n5. 🎢 Jerudong Park - Công viên giải trí lớn nhất';
    }

    return 'Tôi có thể giúp bạn về:\n\n📍 Gợi ý địa điểm du lịch\n📅 Lập lịch trình 1-3 ngày\n🍽️ Thông tin về ẩm thực\n🏛️ Văn hóa và phong tục\n💰 Chi phí ước tính\n\nBạn muốn tìm hiểu về điều gì?';
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponseText = await getBotResponseFromGemini(inputValue);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'Xin lỗi, tôi gặp sự cố kỹ thuật. Vui lòng thử lại sau.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        id="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="flex-1">
                <h3>Brunei Assistant</h3>
                <p className="text-xs text-blue-100">Powered by Google Gemini AI</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 rounded-2xl rounded-bl-sm shadow-sm border border-gray-200 px-4 py-2">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-2 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Gợi ý câu hỏi:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map(reply => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                  placeholder="Nhập câu hỏi của bạn..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:bg-gray-100"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className="w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}