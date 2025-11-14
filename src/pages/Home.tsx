import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Map, Utensils, Building2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import DestinationCard from '../components/DestinationCard';

export default function Home() {
  const topDestinations = [
    {
      id: 1,
      title: 'Masjid Sultan Omar Ali Saifuddien',
      description: 'Nhà thờ Hồi giáo tuyệt đẹp với kiến trúc độc đáo, được xây dựng năm 1958. Đây là biểu tượng của Brunei với mái dòm mạ vàng và hồ nước xung quanh tuyệt đẹp.',
      image: '/images/destinations/masjid-omar-ali.jpg',
      category: 'Kiến trúc',
    },
    {
      id: 2,
      title: 'Kampong Ayer',
      description: 'Làng nước lớn nhất thế giới với hơn 30.000 dân sinh sống trên mặt nước. Được gọi là "Venice của Đông Nam Á" với hệ thống nhà sàn độc đáo.',
      image: '/images/destinations/kampong-ayer.jpg',
      category: 'Văn hóa',
    },
    {
      id: 3,
      title: 'Royal Regalia Museum',
      description: 'Bảo tàng hoàng gia trưng bày các hiện vật quý giá của hoàng gia Brunei. Nơi bạn có thể tìm hiểu về lịch sử và văn hóa của vương quốc.',
      image: '/images/destinations/royal-regalia.jpg',
      category: 'Bảo tàng',
    },
    {
      id: 4,
      title: 'Ulu Temburong National Park',
      description: 'Vườn quốc gia nguyên sinh với rừng nhiệt đới tuyệt đẹp. Trải nghiệm cầu treo giữa rừng và khám phá hệ sinh thái đa dạng.',
      image: '/images/destinations/ulu-temburong.jpg',
      category: 'Thiên nhiên',
    },
    {
      id: 5,
      title: 'Jerudong Park',
      description: 'Công viên giải trí lớn nhất Đông Nam Á với nhiều trò chơi hấp dẫn. Điểm đến lý tưởng cho gia đình và những ai yêu thích cảm giác mạnh.',
      image: '/images/destinations/jerudong-park.jpg',
      category: 'Giải trí',
    },
    {
      id: 6,
      title: 'Jame Asr Hassanil Bolkiah Mosque',
      description: 'Nhà thờ Hồi giáo lớn nhất Brunei với 29 mái vòm mạ vàng 24k. Kiến trúc tráng lệ và khuôn viên rộng lớn, tuyệt đẹp vào ban đêm.',
      image: '/images/destinations/jame-asr-mosque.jpg',
      category: 'Kiến trúc',
    },
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Vương quốc hòa bình',
      description: 'Đất nước an toàn nhất Đông Nam Á với tỷ lệ tội phạm thấp',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Giàu có và văn minh',
      description: 'Quốc gia giàu có với kiến trúc hoàng gia tráng lệ',
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: 'Thiên nhiên nguyên sơ',
      description: '70% diện tích là rừng nhiệt đới còn nguyên vẹn',
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Ẩm thực độc đáo',
      description: 'Kết hợp ẩm thực Mã Lai, Trung Quốc và Ấn Độ',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/hero/brunei-hero.jpg"
            alt="Brunei"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6 text-yellow-400">
            Khám phá Brunei
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Vương quốc của Hòa bình và Ánh vàng hoàng gia
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/top-dia-diem"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors flex items-center space-x-2"
            >
              <span>Khám Phá Ngay</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/ranking"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Xem Xếp Hạng
            </Link>
          </div>
        </div>
      </section>

      {/* Why Visit Brunei */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-blue-900">Vì sao nên du lịch Brunei?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Brunei là một điểm đến độc đáo với sự kết hợp hoàn hảo giữa văn hóa truyền thống và hiện đại
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-400">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-blue-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-blue-900">Top Địa Điểm Nổi Tiếng</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá những địa điểm du lịch hấp dẫn nhất tại vương quốc Brunei Darussalam
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {topDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} showDetails />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/top-dia-diem"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Xem Danh Sách Đầy Đủ</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Bắt Đầu Hành Trình Của Bạn</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Chat với Brunei Assistant để được tư vấn chi tiết về chuyến du lịch Brunei của bạn
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/ranking"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Xem Bảng Xếp Hạng
            </Link>
            <button
              onClick={() => {
                const chatbotButton = document.getElementById('chatbot-toggle');
                chatbotButton?.click();
              }}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Chat với Brunei Assistant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}