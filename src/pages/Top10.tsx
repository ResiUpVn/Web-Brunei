import { MapPin, Clock, Navigation, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Top10Props {
  votes: Record<number, number>;
}

export default function Top10({ votes }: Top10Props) {
  const destinations = [
    {
      id: 1,
      title: 'Masjid Sultan Omar Ali Saifuddien',
      description: 'Nhà thờ Hồi giáo tuyệt đẹp với kiến trúc độc đáo, được xây dựng năm 1958 và là biểu tượng của Brunei. Với mái vòm mạ vàng 24k và được bao quanh bởi hồ nước nhân tạo tuyệt đẹp, đây là một trong những nhà thờ Hồi giáo đẹp nhất châu Á. Kiến trúc kết hợp phong cách Mughal và Malay truyền thống, với nội thất sang trọng được trang trí bằng đá cẩm thạch Italia, thủy tinh từ Anh và thảm Ba Tư.',
  image: '/images/destinations/masjid-omar-ali.jpg',
      transport: 'Taxi từ trung tâm BSB (5-10 phút), hoặc đi bộ từ khu trung tâm',
      hours: 'Thứ 7 - Thứ 5: 8:30 - 12:00, 13:30 - 15:00, 16:30 - 17:30 (đóng cửa thứ 6 sáng)',
      itinerary: 'Ghé thăm buổi sáng để có ánh sáng đẹp chụp ảnh. Kết hợp với Royal Regalia Museum (15 phút đi bộ).',
      tips: 'Ăn mặc lịch sự, che vai và đầu gối. Du khách nữ cần mang khăn che đầu (có cung cấp miễn phí).',
    },
    {
      id: 2,
      title: 'Kampong Ayer - Làng Nước Truyền Thống',
      description: 'Làng nước lớn nhất thế giới với hơn 30.000 dân sinh sống trên mặt nước sông Brunei. Được gọi là "Venice của Đông Nam Á", Kampong Ayer có lịch sử hơn 1000 năm và là di sản văn hóa độc đáo của Brunei. Hệ thống nhà sàn được kết nối bằng 38km cầu gỗ, với đầy đủ tiện nghi hiện đại như trường học, bệnh viện, nhà thờ Hồi giáo và cửa hàng.',
  image: '/images/destinations/kampong-ayer.jpg',
      transport: 'Thuyền nước (water taxi) từ bến Yayasan Complex hoặc Omar Ali Saifuddien Park (1 BND/lượt)',
      hours: 'Mở cửa cả ngày, nên đến buổi chiều hoặc sớm sáng để tránh nắng',
      itinerary: 'Tour 2-3 tiếng: đi thuyền xung quanh làng, ghé thăm Cultural & Tourism Gallery, thăm nhà dân địa phương.',
      tips: 'Thuê thuyền trọn tour khoảng 20-30 BND/thuyền (1-4 người). Mang theo mũ và kem chống nắng.',
    },
    {
      id: 3,
      title: 'Royal Regalia Museum - Bảo Tàng Hoàng Gia',
      description: 'Bảo tàng hoàng gia trưng bày các hiện vật quý giá của hoàng gia Brunei, đặc biệt là những vật phẩm liên quan đến lễ đăng quang của Sultan Hassanal Bolkiah năm 1968. Bộ sưu tập bao gồm vương miện, vũ khí lễ nghi, xe ngựa hoàng gia, quà tặng từ các quốc gia và triển lãm về lịch sử vương triều Brunei. Tòa nhà hiện đại với kiến trúc ấn tượng, miễn phí tham quan.',
  image: '/images/destinations/royal-regalia.jpg',
      transport: 'Nằm trên Jalan Sultan, gần trung tâm BSB. Đi taxi hoặc xe bus (1 BND)',
      hours: 'Chủ nhật - Thứ 5: 9:00 - 17:00, Thứ 6: 9:00 - 11:30, 14:30 - 17:00, Thứ 7: 9:30 - 17:00',
      itinerary: 'Dành 1-2 tiếng để tham quan. Kết hợp với Omar Ali Saifuddien Mosque gần đó.',
      tips: 'Vào cửa miễn phí. Không được chụp ảnh bên trong. Cần cất giày trước khi vào.',
    },
    {
      id: 4,
      title: 'Ulu Temburong National Park - Vườn Quốc Gia',
      description: 'Vườn quốc gia nguyên sinh đầu tiên của Brunei, chiếm 50.000 hecta rừng nhiệt đới chưa bị tác động bởi con người. Điểm nhấn là cầu treo Canopy Walkway cao 60m giữa tán rừng, nơi bạn có thể ngắm nhìn toàn cảnh rừng rậm và quan sát động vật hoang dã. Trải nghiệm trekking, bơi lội ở thác nước và khám phá hệ sinh thái đa dạng với hơn 400 loài bướm và nhiều loài động vật quý hiếm.',
  image: '/images/destinations/ulu-temburong.jpg',
      transport: 'Tour trọn gói từ Bandar (45 phút xe + 1 tiếng thuyền longboat). Không thể tự đi.',
      hours: 'Tour cả ngày từ 6:30 sáng đến 18:00. Cần đặt trước qua công ty du lịch.',
      itinerary: 'Tour 1 ngày: Thuyền longboat qua sông Temburong, trekking trong rừng, Canopy Walkway, bơi thác, ăn trưa picnic.',
      tips: 'Chi phí 100-150 BND/người. Mang giày trekking, quần dài, áo dài tay, thuốc chống muỗi và túi chống nước.',
    },
    {
      id: 5,
      title: 'Jerudong Park - Công Viên Giải Trí',
      description: 'Công viên giải trí lớn nhất Đông Nam Á, từng miễn phí hoàn toàn vào những năm 90. Hiện nay vẫn là điểm vui chơi phổ biến với nhiều trò chơi cảm giác mạnh như tàu lượn siêu tốc, vòng xoay khổng lồ, nhà ma ám và khu vui chơi trẻ em. Buổi tối có màn trình diễn nhạc nước và ánh sáng rực rỡ. Là nơi lý tưởng cho gia đình và những người yêu thích cảm giác mạnh.',
  image: '/images/destinations/jerudong-park.jpg',
      transport: 'Taxi từ trung tâm BSB (20-25 phút, ~25 BND) hoặc xe bus số 55',
      hours: 'Thứ 5 - Chủ nhật: 17:00 - 24:00 (đóng cửa Thứ 2 - Thứ 4)',
      itinerary: 'Dành 3-4 tiếng vào buổi tối. Đến lúc 18:00 để chơi hết các trò và xem show ánh sáng.',
      tips: 'Vé vào cửa 5 BND, vé trọn gói không giới hạn 25 BND. Mang theo áo khoác vì trời có thể mát vào ban đêm.',
    },
    {
      id: 6,
      title: 'Jame Asr Hassanil Bolkiah Mosque',
      description: 'Nhà thờ Hồi giáo lớn nhất và tráng lệ nhất Brunei, được xây dựng năm 1994 nhân dịp kỷ niệm 25 năm trị vì của Sultan. Với 29 mái vòm mạ vàng 24k, 4 tháp cao 58m và có thể chứa 5000 người cầu nguyện. Khuôn viên rộng 5.5 hecta với vườn cây xanh mát, hồ nước và đài phun nước. Ban đêm, toàn bộ ngôi đền được thắp sáng lung linh, tạo nên cảnh tượng choáng ngợp.',
  image: '/images/destinations/jame-asr-mosque.jpg',
      transport: 'Taxi từ trung tâm (15 phút, ~15 BND) hoặc xe bus',
      hours: 'Thứ 7 - Thứ 5: 8:00 - 12:00, 13:00 - 15:00, 16:00 - 17:30 (đóng cửa Thứ 6)',
      itinerary: 'Ghé thăm 1 tiếng. Nên đến buổi chiều muộn hoặc tối để chụp ảnh với ánh sáng đẹp.',
      tips: 'Miễn phí tham quan. Ăn mặc lịch sự, khăn che đầu cho nữ (có cung cấp). Không được vào trong giờ cầu nguyện.',
    },
    {
      id: 7,
      title: 'Istana Nurul Iman - Cung Điện Hoàng Gia',
      description: 'Cung điện hoàng gia lớn nhất thế giới với 1788 phòng, diện tích 200.000 m². Là nơi ở và làm việc của Sultan Brunei, cung điện có kiến trúc Hồi giáo kết hợp hiện đại, với mái vòm mạ vàng và vườn cảnh quan tuyệt đẹp. Thường đóng cửa nhưng mở cửa 3 ngày trong lễ Hari Raya cho công chúng đến chúc mừng Sultan và thưởng thức buffet hoàng gia miễn phí.',
  image: '/images/destinations/istana-nurul-iman.jpg',
      transport: 'Nằm trên đường đi sân bay, taxi 20 phút từ trung tâm',
      hours: 'Chỉ mở cửa 3 ngày cuối tháng Ramadan (Hari Raya Aidilfitri)',
      itinerary: 'Nếu đến vào dịp Hari Raya: xếp hàng sớm (từ 4-5 giờ sáng), bắt tay Sultan, chụp ảnh và ăn buffet.',
      tips: 'Chỉ có thể chụp ảnh bên ngoài cổng. Ăn mặc lịch sự, trang trọng nếu vào dịp Hari Raya.',
    },
    {
      id: 8,
      title: 'Gadong Night Market - Chợ Đêm Gadong',
      description: 'Chợ đêm ẩm thực nổi tiếng nhất Brunei với hàng trăm quầy bán đồ ăn địa phương, đồ nướng, hải sản, tráng miệng và đồ uống. Đây là nơi tốt nhất để thử các món ăn đặc sản Brunei như Nasi Katok, Ambuyat, Satay, Soto và các loại kueh (bánh ngọt). Không khí sôi động, giá cả phải chăng và là điểm gặp gỡ yêu thích của người dân địa phương.',
  image: '/images/destinations/gadong-market.jpg',
      transport: 'Taxi 10 phút từ trung tâm BSB (~10 BND) hoặc xe bus',
      hours: 'Mỗi tối từ 16:00 - 23:00, sôi động nhất từ 18:00 - 21:00',
      itinerary: 'Dành 1-2 tiếng để dạo quanh và thử nhiều món. Đi với bụng đói!',
      tips: 'Mang theo tiền mặt (nhiều quầy không nhận thẻ). Chi phí 5-15 BND/người cho bữa no nê.',
    },
    {
      id: 9,
      title: 'Tasek Lama Recreational Park',
      description: 'Công viên giải trí và bảo tồn thiên nhiên ngay trong lòng Bandar Seri Begawan. Nơi đây có nhiều đường mòn đi bộ đường rừng, thác nước nhỏ, khu tập thể dục ngoài trời và không gian xanh mát. Là điểm đến yêu thích của người dân địa phương vào buổi sáng sớm và chiều tối để tập thể dục, chạy bộ hoặc dã ngoại. Miễn phí vào cửa.',
  image: '/images/destinations/tasek-lama.jpg',
      transport: 'Taxi 10 phút từ trung tâm BSB hoặc đi bộ 25 phút',
      hours: 'Mở cửa cả ngày, nên đến sáng sớm (6-9 giờ) hoặc chiều (16-18 giờ)',
      itinerary: 'Trekking 1-2 tiếng trên các đường mòn, leo lên thác nước, thư giãn trong công viên.',
      tips: 'Miễn phí. Mang giày thể thao, nước uống và kem chống muỗi. Có khỉ hoang dã, không cho ăn.',
    },
    {
      id: 10,
      title: 'Pantai Muara - Bãi Biển Muara',
      description: 'Bãi biển công cộng đẹp nhất và sạch sẽ nhất Brunei, nằm ở vùng Muara. Bãi cát trắng mịn, nước biển trong xanh, có khu vui chơi trẻ em, sân bóng chuyền bãi biển và khu BBQ. Bình minh và hoàng hôn tại đây rất đẹp. Cuối tuần rất đông người dân địa phương đến dạo chơi, tập thể dục và dã ngoại. Là nơi lý tưởng để thư giãn sau những ngày tham quan.',
  image: '/images/destinations/pantai-muara.jpg',
      transport: 'Taxi 25 phút từ trung tâm BSB (~25 BND) hoặc xe bus số 38',
      hours: 'Mở cửa cả ngày, đẹp nhất vào sáng sớm hoặc chiều tối',
      itinerary: 'Dành nửa ngày để bơi lội, chơi thể thao bãi biển hoặc đơn giản là thư giãn.',
      tips: 'Miễn phí. Mang đồ bơi, khăn, kem chống nắng. Không bán rượu công khai (luật Hồi giáo).',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm">Trang chủ / Top 10 Địa Điểm</p>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4 text-yellow-400">Top 10 Địa Điểm Du Lịch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Khám phá những địa điểm tuyệt vời nhất tại vương quốc Brunei Darussalam
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-96 lg:h-auto">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-yellow-400 text-blue-900 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">#{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <h2 className="text-3xl mb-4 text-blue-900">{destination.title}</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">{destination.description}</p>

                    <div className="space-y-4">
                      {/* Transport */}
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Navigation className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm text-blue-900 mb-1">Cách di chuyển</h4>
                          <p className="text-sm text-gray-600">{destination.transport}</p>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm text-blue-900 mb-1">Giờ mở cửa</h4>
                          <p className="text-sm text-gray-600">{destination.hours}</p>
                        </div>
                      </div>

                      {/* Itinerary */}
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm text-blue-900 mb-1">Gợi ý lịch trình</h4>
                          <p className="text-sm text-gray-600">{destination.itinerary}</p>
                        </div>
                      </div>

                      {/* Tips */}
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm text-blue-900 mb-1">Lưu ý quan trọng</h4>
                          <p className="text-sm text-gray-600">{destination.tips}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
