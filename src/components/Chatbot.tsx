import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Volume2, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isPreset?: boolean;
}

interface ApiStatus {
  isAvailable: boolean;
  lastChecked: Date;
}

const GEMINI_API_KEY = 'AIzaSyDxmNwwNANtRW9s3kd6e0PJin0F_aXDULM';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Xin chào! 👋 Tôi là Brunei Assistant - trợ lý du lịch thông minh của bạn. Tôi được hỗ trợ bởi Google Gemini AI và có kho kiến thức lưu trữ sẵn.\n\n✨ Tôi có thể giúp bạn:\n📍 Gợi ý địa điểm du lịch\n📅 Lập kế hoạch lịch trình\n🍽️ Tìm hiểu ẩm thực Brunei\n💰 Ước tính chi phí du lịch\n🏛️ Khám phá văn hóa & phong tục\n\nHãy đặt câu hỏi hoặc chọn một gợi ý dưới đây!',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState<ApiStatus>({
    isAvailable: true,
    lastChecked: new Date(),
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { text: 'Lịch trình 2 ngày', icon: '📅' },
    { text: 'Top địa điểm', icon: '📍' },
    { text: 'Ẩm thực đặc sản', icon: '🍽️' },
    { text: 'Chi phí du lịch', icon: '💰' },
  ];

  // Auto scroll to bottom khi có tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Kịch bản sẵn cho các chủ đề phổ biến
  const presetScenarios: Record<string, string> = {
    'lịch trình': 'Đây là lịch trình gợi ý 2 ngày tại Brunei:\n\n📅 Ngày 1:\n- Sáng: Tham quan Masjid Omar Ali Saifuddien (nhà thờ tuyệt đẹp)\n- Trưa: Ăn trưa tại Gadong Night Market\n- Chiều: Khám phá Royal Regalia Museum (bảo tàng hoàng gia)\n- Tối: Đi dạo tại Kampong Ayer (làng nước cổ kính)\n\n📅 Ngày 2:\n- Sáng: Tham quan Ulu Temburong National Park\n- Chiều: Ghé Jerudong Park\n- Tối: Mua sắm tại Yayasan Complex\n\nTổng chi phí ước tính: 2-3 triệu VNĐ/người',
    
    'địa điểm': 'Top 5 địa điểm du lịch nổi tiếng nhất Brunei:\n\n1. 🕌 Masjid Sultan Omar Ali Saifuddien\n   - Nhà thờ Hồi giáo tuyệt đẹp với kiến trúc lộng lẫy\n   - Tọa lạc bên bờ sông Brunei\n   - Giờ mở: 8:30 - 16:30 (không phải thứ 6)\n   - Phí vào: Miễn phí\n\n2. 🏘️ Kampong Ayer\n   - Làng nước lớn nhất thế giới (khoảng 40,000 dân)\n   - Những ngôi nhà truyền thống nổi trên nước\n   - Cách đến: Chèo thuyền từ Bandar Seri Begawan (10-15 phút)\n\n3. 🏛️ Royal Regalia Museum\n   - Bảo tàng hoàng gia với những kỷ vật quý báu\n   - Trưng bày về lịch sử hoàng gia Brunei\n   - Phí vào: 5$\n\n4. 🌳 Ulu Temburong National Park\n   - Vườn quốc gia nguyên sinh\n   - Thiên đường cho những người yêu thiên nhiên\n   - Cách Bandar: 45 phút lái xe\n\n5. 🎢 Jerudong Park\n   - Công viên giải trí lớn nhất khu vực\n   - Miễn phí vào cửa, chỉ tính tiền trò chơi',
    
    'ẩm thực': 'Những món ăn đặc sản Brunei không nên bỏ qua:\n\n🍲 Ambuyat (Món Quốc Dân)\n   - Làm từ bột cây sú + nước hột vịt\n   - Ăn với nước sốt cá muối hoặc tôm\n   - Ăn ở nhà hàng truyền thống\n\n🍚 Nasi Katok (Cơm Nhanh)\n   - Cơm trắng + cá muối nướng + nước sốt cà chua\n   - Ăn uống bình dân, giá rẻ\n   - Nơi: Gadong Night Market\n\n🥘 Beef Rendang (Thịt Bò Kho Dừa)\n   - Thịt bò nấu với nước cốt dừa & gia vị\n   - Mùi vị đậm đà, thơm ngon\n   - Ăn kèm cơm trắng\n\n🍢 Satay (Thịt Nướng Xiên)\n   - Thịt (gà, bò) nướng xiên\n   - Ăn kèm nước sốt nạo dừa\n   - Phổ biến tại các quán nướng\n\n🥣 Soto (Canh Truyền Thống)\n   - Canh gia vị Brunei đặc trưng\n   - Ấm áp, tốt cho sức khỏe\n   - Ăn sáng hoặc xen như món phụ\n\nNơi ăn ngon: Gadong Night Market, Pasar Malam Tamu, các quán địa phương',
    
    'chi phí': 'Chi phí ước tính cho chuyến du lịch Brunei (3-4 ngày):\n\n✈️ Vé máy bay (Việt Nam - Brunei):\n   - Vé khứ hồi: 5-10 triệu VNĐ\n   - Tùy vào mùa và hãng hàng không\n\n🏨 Khách sạn (theo đêm):\n   - Budget: 30-50$/đêm (700k-1.2 triệu VNĐ)\n   - Mid-range: 50-100$/đêm (1.2-2.3 triệu VNĐ)\n   - Luxury: 100+$/đêm (2.3 triệu VNĐ trở lên)\n\n🍽️ Ăn uống (mỗi ngày):\n   - Bình dân: 10-15$/ngày (230k-350k VNĐ)\n   - Trung bình: 15-25$/ngày (350k-600k VNĐ)\n   - Cao cấp: 25+$/ngày (600k+ VNĐ)\n\n🚕 Di chuyển trong nước:\n   - Taxi: 2-5$ mỗi chuyến\n   - Tour: 50-100$ (1.2-2.3 triệu VNĐ)\n   - Tổng: 3-5 triệu VNĐ\n\n🎫 Vào cửa các địa điểm:\n   - Hầu hết miễn phí\n   - Một số bảo tàng: 3-5$ mỗi cái\n   - Tổng: 1-3 triệu VNĐ\n\n💰 TỔNG CỘNG: 15-30 triệu VNĐ/người (3-4 ngày)',
    
    'văn hóa': 'Thông tin về văn hóa & phong tục Brunei:\n\n🕌 Tôn giáo:\n   - Hơn 80% dân số theo Hồi giáo\n   - Đất nước Hồi giáo với luật Sharia\n   - Tôn trọng quy tắc tôn giáo là rất quan trọng\n\n👗 Trang phục:\n   - Nam: Quần dài, áo sơ mi dài (tôn trọng văn hóa)\n   - Nữ: Tránh mặc áo crop top, quần short ngắn\n   - Khi vào nhà thờ: Phụ nữ mặc áo dài, đội khăn\n\n🍷 Đồ uống:\n   - CẤM uống rượu công khai\n   - Không được mang rượu vào nước này\n   - Phạt tiền hoặc bỏ tù nếu vi phạm\n\n🤝 Lịch sự:\n   - Chào hỏi: Hai tay như cầu nguyện giữa ngực\n   - Tôn trọng các già có địa vị\n   - Không chỉ tay trực tiếp (dùng cả bàn tay)\n   - Cởi giày khi vào nhà hay điện thờ\n\n📸 Nhiếp ảnh:\n   - Xin phép trước khi chụp mọi người\n   - Tránh chụp các nơi quân sự\n   - Được chụp các địa điểm du lịch',
    
    'khác': 'Tôi có thể giúp bạn về:\n\n📍 Gợi ý địa điểm du lịch\n📅 Lập lịch trình 1-3 ngày\n🍽️ Thông tin về ẩm thực Brunei\n🏛️ Văn hóa và phong tục địa phương\n💰 Chi phí ước tính\n✈️ Thông tin vé bay và khách sạn\n🛂 Quy định nhập cảnh\n🛍️ Mua sắm tại Brunei\n🏥 Thông tin y tế & an toàn\n\nBạn muốn tìm hiểu về điều gì?'
  };

  const getBotResponseFromGemini = async (userMessage: string): Promise<{ text: string; isPreset: boolean }> => {
    try {
      if (!GEMINI_API_KEY) {
        throw new Error('API Key không được cấu hình');
      }

      const systemPrompt = `Bạn là Brunei Assistant, trợ lý du lịch chuyên nghiệp về Brunei Darussalam. Hãy trả lời bằng tiếng Việt một cách thân thiện, nhiệt tình và chi tiết.

Thông tin cơ bản về Brunei:
- Thủ đô: Bandar Seri Begawan
- Quốc gia Hồi giáo với luật Sharia
- Dân số: ~450,000 người
- Tiền tệ: Brunei Dollar (BND)
- Nổi tiếng: Kampong Ayer (làng nước lớn nhất thế giới), các nhà thờ Hồi giáo tráng lệ
- Top địa điểm: Masjid Sultan Omar Ali Saifuddien, Kampong Ayer, Royal Regalia Museum, Ulu Temburong National Park, Jerudong Park
- Món ăn: Ambuyat, Nasi Katok, Beef Rendang, Satay, Soto
- Thời gian bay từ Việt Nam: ~2-3 giờ
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
            safetySettings: [
              {
                category: 'HARM_CATEGORY_UNSPECIFIED',
                threshold: 'BLOCK_NONE',
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error Details:', errorData);
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (botResponse) {
        setApiStatus({ isAvailable: true, lastChecked: new Date() });
        return { text: botResponse, isPreset: false };
      } else {
        throw new Error('Không nhận được phản hồi từ API');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      setApiStatus({ isAvailable: false, lastChecked: new Date() });
      
      // Fallback to preset scenarios
      const presetResponse = getFallbackResponse(userMessage);
      return { text: presetResponse, isPreset: true };
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();

    // Kiểm tra các từ khóa và trả về kịch bản sẵn
    if (lower.includes('lịch trình') || lower.includes('lich trinh')) {
      return presetScenarios['lịch trình'];
    }

    if (lower.includes('địa điểm') || lower.includes('dia diem') || lower.includes('nổi tiếng') || lower.includes('noi tieng')) {
      return presetScenarios['địa điểm'];
    }

    if (lower.includes('ẩm thực') || lower.includes('mon an') || lower.includes('an gi') || lower.includes('đồ ăn') || lower.includes('sushi') || lower.includes('cơm')) {
      return presetScenarios['ẩm thực'];
    }

    if (lower.includes('chi phí') || lower.includes('giá') || lower.includes('bao nhiêu') || lower.includes('tien') || lower.includes('cost')) {
      return presetScenarios['chi phí'];
    }

    if (lower.includes('văn hóa') || lower.includes('van hoa') || lower.includes('phong tục') || lower.includes('tôn giáo') || lower.includes('trang phục') || lower.includes('lịch sự')) {
      return presetScenarios['văn hóa'];
    }

    // Trả về kịch bản mặc định nếu không khớp
    return presetScenarios['khác'];
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
      const response = await getBotResponseFromGemini(inputValue);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        isPreset: response.isPreset,
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: '❌ Xin lỗi, tôi gặp sự cố kỹ thuật. Vui lòng thử lại sau.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (replyText: string) => {
    setInputValue(replyText);
  };

  // Kiểm tra API status
  const checkApiStatus = async (): Promise<boolean> => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'ping' }] }],
          }),
        }
      );
      return response.ok;
    } catch {
      return false;
    }
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
                <h3 className="font-bold">Brunei Assistant</h3>
                <p className="text-xs text-blue-100">
                  {apiStatus.isAvailable ? '🟢 Powered by Gemini AI' : '🔴 Using Offline Mode'}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    {message.sender === 'bot' && (
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-200">
                        <span className="text-xs text-gray-500">
                          {message.isPreset ? '📚 Từ kho sẵn' : '🤖 Từ AI'}
                        </span>
                      </div>
                    )}
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
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-2 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Gợi ý câu hỏi:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply.text}
                      onClick={() => handleQuickReply(reply.text)}
                      className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center gap-1"
                    >
                      <span>{reply.icon}</span>
                      <span>{reply.text}</span>
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