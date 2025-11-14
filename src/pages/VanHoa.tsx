import { BookOpen, Users, Heart, Home, Sparkles, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function VanHoa() {
  const culturalAspects = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Tôn Giáo Islam',
      description: 'Brunei là quốc gia Hồi giáo với luật Sharia. Người dân rất tôn giáo và thực hiện cầu nguyện 5 lần/ngày.',
      details: [
        'Nhà thờ Hồi giáo (masjid) là trung tâm sinh hoạt',
        'Tháng Ramadan: nhịn ăn từ bình minh đến hoàng hôn',
        'Hari Raya: lễ lớn nhất trong năm',
        'Cấm rượu, thịt lợn và đánh bạc công khai',
      ],
  image: '/images/culture/hari-raya.jpg',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dân Tộc Đa Dạng',
      description: 'Dân số 450,000 người gồm người Mã Lai (66%), Trung Quốc (10%), thổ dân và người nước ngoài.',
      details: [
        'Người Mã Lai là dân tộc chính thống',
        'Cộng đồng Hoa kiều giàu có và có ảnh hưởng',
        'Thổ dân: Dusun, Murut, Kedayan',
        'Ngôn ngữ: Mã Lai (chính thức), Anh, Trung',
      ],
  image: '/images/culture/national-day.jpg',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hoàng Gia & MIB',
      description: 'Sultan là vua tuyệt đối và được kính trọng. Triết lý MIB (Melayu Islam Beraja) là nền tảng quốc gia.',
      details: [
        'Sultan Hassanal Bolkiah trị vì từ 1967',
        'MIB = Văn hóa Mã Lai + Tôn giáo Islam + Chế độ quân chủ',
        'Sinh nhật Sultan (15/7) là ngày lễ quốc gia',
        'Cung điện Istana Nurul Iman mở cửa dịp Hari Raya',
      ],
  image: '/images/culture/royal-birthday.jpg',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Kampong Ayer - Di Sản',
      description: 'Làng nước 1000 năm tuổi là biểu tượng văn hóa độc đáo của Brunei và di sản thế giới đang chờ công nhận.',
      details: [
        'Làng nước lớn nhất thế giới còn tồn tại',
        'Nhà sàn gỗ kết nối bằng cầu dài 38km',
        'Có trường học, bệnh viện, masjid trên nước',
        'Lối sống truyền thống giữa lòng thủ đô',
      ],
  image: '/images/culture/festivals.jpg',
    },
  ];

  const traditions = [
    {
      name: 'Weddings (Perkahwinan)',
      description: 'Đám cưới Brunei là sự kiện lớn kéo dài nhiều ngày với các nghi lễ truyền thống phức tạp, trang phục lộng lẫy và tiệc buffet thịnh soạn. Cô dâu và chú rể mặc trang phục hoàng gia truyền thống.',
    },
    {
      name: 'Hari Raya Aidilfitri',
      description: 'Lễ kết thúc tháng Ramadan, quan trọng nhất năm. Mọi người về quê đoàn tụ, xin lỗi nhau, đi thăm hỏi và ăn uống thỏa thích. Sultan mở cửa cung điện đón dân chúng 3 ngày.',
    },
    {
      name: 'Bersanding',
      description: 'Nghi lễ cưới quan trọng nhất khi cô dâu chú rể ngồi trên "pelamin" (ngai vàng trang trí) như vua chúa một ngày. Khách đến chúc phúc, chụp ảnh và nhận quà.',
    },
    {
      name: 'Silat',
      description: 'Võ thuật truyền thống Mã Lai, kết hợp động tác uyển chuyển và nghệ thuật tự vệ. Được biểu diễn trong các lễ hội và sự kiện văn hóa. Brunei có nhiều trường dạy Silat.',
    },
  ];

  const etiquette = [
    {
      title: 'Chào hỏi',
      dos: [
        'Bắt tay nhẹ nhàng (chỉ đồng giới)',
        'Cúi đầu nhẹ khi gặp người lớn tuổi',
        'Nói "Assalamualaikum" (Chào)',
      ],
      donts: [
        'Không bắt tay với người khác giới trừ khi họ đưa tay trước',
        'Không ôm hôn nơi công cộng',
        'Không to tiếng hay thô lỗ',
      ],
    },
    {
      title: 'Ăn mặc',
      dos: [
        'Mặc quần dài, áo có tay khi vào masjid',
        'Phụ nữ che đầu khi vào masjid',
        'Ăn mặc lịch sự, che vai và đầu gối',
      ],
      donts: [
        'Không mặc quần short quá ngắn',
        'Không mặc áo hở vai trong nhà thờ',
        'Không mặc bikini ở bãi biển công cộng',
      ],
    },
    {
      title: 'Hành vi',
      dos: [
        'Cởi giày khi vào nhà và masjid',
        'Nhận đồ bằng tay phải',
        'Tôn trọng giờ cầu nguyện',
      ],
      donts: [
        'Không chỉ trỏ bằng ngón tay (dùng ngón cái)',
        'Không chạm vào đầu người khác',
        'Không nói xấu hoàng gia',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm">Trang chủ / Văn Hóa</p>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-5xl mb-4 text-yellow-400">Văn Hóa Brunei</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tìm hiểu về văn hóa, truyền thống và phong tục độc đáo của vương quốc Brunei Darussalam
          </p>
        </div>
      </section>

      {/* Cultural Aspects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4 text-blue-900">Những Khía Cạnh Văn Hóa</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Khám phá những nét văn hóa đặc trưng làm nên bản sắc Brunei
          </p>
          <div className="space-y-16">
            {culturalAspects.map((aspect, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={aspect.image}
                      alt={aspect.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-14 h-14 bg-blue-600 text-yellow-400 rounded-full flex items-center justify-center">
                      {aspect.icon}
                    </div>
                    <h3 className="text-3xl text-blue-900">{aspect.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{aspect.description}</p>
                  <ul className="space-y-3">
                    {aspect.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-900 text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4 text-blue-900">Truyền Thống & Lễ Hội</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Những lễ hội và phong tục truyền thống được lưu giữ qua nhiều thế hệ
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {traditions.map((tradition, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900">
                    {index + 1}
                  </div>
                  <h3 className="text-xl text-blue-900">{tradition.name}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{tradition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etiquette */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4 text-blue-900">Phép Tắc Giao Tiếp</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Những điều nên và không nên làm khi du lịch Brunei
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {etiquette.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h3 className="text-2xl text-center">{item.title}</h3>
                </div>
                <div className="p-6">
                  {/* Dos */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-green-600 flex items-center space-x-2">
                      <span>✅</span>
                      <span>Nên làm</span>
                    </h4>
                    <ul className="space-y-2">
                      {item.dos.map((doItem, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2">
                          <span className="text-green-500 mt-0.5">•</span>
                          <span>{doItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Don'ts */}
                  <div>
                    <h4 className="mb-3 text-red-600 flex items-center space-x-2">
                      <span>❌</span>
                      <span>Không nên</span>
                    </h4>
                    <ul className="space-y-2">
                      {item.donts.map((dontItem, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2">
                          <span className="text-red-500 mt-0.5">•</span>
                          <span>{dontItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <AlertCircle className="w-10 h-10 text-yellow-400" />
              <h2 className="text-4xl text-yellow-400">Lưu Ý Quan Trọng</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="mb-4 text-yellow-400">🕌 Về Tôn Giáo</h3>
                <ul className="space-y-3 text-sm text-blue-100">
                  <li>• Brunei thực thi luật Sharia nghiêm ngặt</li>
                  <li>• Tôn trọng giờ cầu nguyện (5 lần/ngày)</li>
                  <li>• Tháng Ramadan: không ăn uống công khai ban ngày</li>
                  <li>• Cấm tuyệt đối rượu, thịt lợn công khai</li>
                  <li>• Không thể hiện tình cảm nơi công cộng</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="mb-4 text-yellow-400">👑 Về Hoàng Gia</h3>
                <ul className="space-y-3 text-sm text-blue-100">
                  <li>• Không được nói xấu hoặc chỉ trích hoàng gia</li>
                  <li>• Sultan được tôn kính tuyệt đối</li>
                  <li>• Ảnh hoàng gia phải được tôn trọng</li>
                  <li>• Các lễ hoàng gia là sự kiện quan trọng</li>
                  <li>• Tuân thủ các quy định trong cung điện</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="mb-4 text-yellow-400">📸 Về Chụp Ảnh</h3>
                <ul className="space-y-3 text-sm text-blue-100">
                  <li>• Xin phép trước khi chụp người dân địa phương</li>
                  <li>• Cẩn thận khi chụp phụ nữ Hồi giáo</li>
                  <li>• Một số bảo tàng cấm chụp ảnh bên trong</li>
                  <li>• Không chụp ảnh trong giờ cầu nguyện ở masjid</li>
                  <li>• Tôn trọng quyền riêng tư của mọi người</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="mb-4 text-yellow-400">💰 Về Tiền Bạc & Mua Sắm</h3>
                <ul className="space-y-3 text-sm text-blue-100">
                  <li>• Tiền tệ: Brunei Dollar (BND) = Singapore Dollar</li>
                  <li>• Nhiều nơi chấp nhận tiền Singapore</li>
                  <li>• Mang tiền mặt vì không phải nơi nào cũng nhận thẻ</li>
                  <li>• Có thể mặc cả ở chợ (lịch sự)</li>
                  <li>• Tip không bắt buộc (không phổ biến)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4 text-blue-900">Hướng Dẫn Ngôn Ngữ Cơ Bản</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Một số từ và cụm từ tiếng Mã Lai hữu ích khi du lịch Brunei
          </p>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-4 text-blue-900">Chào hỏi & Giao tiếp</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Xin chào:</span>
                    <span className="text-blue-900">Assalamualaikum</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Cảm ơn:</span>
                    <span className="text-blue-900">Terima kasih</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Xin lỗi:</span>
                    <span className="text-blue-900">Maaf</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Có/Không:</span>
                    <span className="text-blue-900">Ya / Tidak</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Tạm biệt:</span>
                    <span className="text-blue-900">Selamat tinggal</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-blue-900">Thực phẩm & Mua sắm</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Bao nhiêu tiền?:</span>
                    <span className="text-blue-900">Berapa harga?</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Đắt quá:</span>
                    <span className="text-blue-900">Terlalu mahal</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Ngon:</span>
                    <span className="text-blue-900">Sedap</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Nước:</span>
                    <span className="text-blue-900">Air</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Nhà vệ sinh:</span>
                    <span className="text-blue-900">Tandas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
