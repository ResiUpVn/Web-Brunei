import { Utensils, Coffee, IceCream, ChefHat } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function AmThuc() {
  const dishes = [
    {
      id: 1,
      name: 'Ambuyat',
      category: 'Món chính',
      description: 'Món ăn truyền thống nổi tiếng nhất của Brunei, làm từ tinh bột sago. Có kết cấu đặc biệt, được ăn kèm với nước sốt chua cay và các món phụ như cá nướng, rau luộc và sambal. Cách ăn độc đáo bằng đũa tre gọi là "chandas".',
      price: '5 - 10 BND',
  image: '/images/food/ambuyat.jpg',
      where: 'Aminah Arif Restaurant, Kaizen Sushi',
    },
    {
      id: 2,
      name: 'Nasi Katok',
      category: 'Món chính',
      description: 'Món ăn phổ biến nhất và rẻ nhất Brunei. Gồm cơm trắng, gà chiên giòn và sambal cay. Tên gọi xuất phát từ hành động "katok" (gõ) vào cửa để gọi người bán. Giá chỉ từ 1 BND, là lựa chọn yêu thích của người dân địa phương.',
      price: '1 - 3 BND',
  image: '/images/food/nasi-katok.jpg',
      where: 'Nasi Katok Mama, Nasi Katok Lily, Gadong Night Market',
    },
    {
      id: 3,
      name: 'Beef Rendang',
      category: 'Món chính',
      description: 'Thịt bò kho với gia vị đậm đà, nấu trong nước cốt dừa và nhiều loại gia vị như sả, gừng, ớt, tỏi. Nấu chậm trong nhiều giờ cho đến khi thịt mềm tan và nước sốt sệt đặc. Một trong những món cà ri ngon nhất thế giới.',
      price: '8 - 15 BND',
  image: '/images/food/beef-rendang.jpg',
      where: 'Rizqun Coffee House, Anjung Saujana Restaurant',
    },
    {
      id: 4,
      name: 'Satay (Xiên Nướng)',
      category: 'Món khai vị',
      description: 'Xiên thịt nướng trên than hồng, được ướp gia vị đậm đà. Có nhiều loại: satay gà, bò, dê. Ăn kèm với nước sốt đậu phộng thơm béo, dưa leo cắt lát và ketupat (bánh gạo). Món ăn vặt phổ biến tại các chợ đêm.',
      price: '0.50 - 1 BND/xiên',
  image: '/images/food/satay.jpg',
      where: 'Gadong Night Market, Tamu Kianggeh',
    },
    {
      id: 5,
      name: 'Soto',
      category: 'Món súp',
      description: 'Súp truyền thống với nước dùng thơm phức, thịt gà hoặc bò, mì hoặc bún, trứng luộc, rau thơm. Nêm nếm với nước chanh và sambal. Là món ăn sáng phổ biến của người Brunei, ấm bụng và bổ dưỡng.',
      price: '3 - 7 BND',
  image: '/images/food/soto.jpg',
      where: 'Seri Damai Restaurant, Gadong Night Market',
    },
    {
      id: 6,
      name: 'Kueh-Mueh',
      category: 'Tráng miệng',
      description: 'Tập hợp các loại bánh ngọt truyền thống Brunei và Mã Lai. Có nhiều màu sắc và hương vị khác nhau, làm từ bột gạo, nước cốt dừa, đường và pandan. Các loại phổ biến: kueh lapis, kueh kosui, kueh dadar.',
      price: '0.50 - 2 BND/cái',
  image: '/images/food/kueh.jpg',
      where: 'Tamu Kianggeh, Gadong Night Market',
    },
    {
      id: 7,
      name: 'Teh Tarik',
      category: 'Đồ uống',
      description: 'Trà sữa kéo truyền thống, nổi tiếng với cách pha chế độc đáo bằng cách kéo trà giữa hai ly để tạo bọt. Vị ngọt ngào, béo và thơm. Là thức uống phổ biến nhất ở Brunei, có thể uống nóng hoặc đá.',
      price: '1.50 - 3 BND',
  image: '/images/food/teh-tarik.jpg',
      where: 'Mọi quán cà phê, mamak stall',
    },
    {
      id: 8,
      name: 'Kelupis',
      category: 'Tráng miệng',
      description: 'Bánh gạo nếp nấu với nước cốt dừa, gói trong lá kelupis và hấp chín. Có vị ngọt nhẹ từ gula apong (đường cọ). Thường ăn kèm với chuối chín hoặc các loại kueh khác. Món ăn truyền thống trong các lễ hội.',
      price: '1 - 2 BND',
  image: '/images/food/kelupis.jpg',
      where: 'Tamu Kianggeh, Pasar Malam',
    },
  ];

  const restaurants = [
    {
      name: 'Gadong Night Market (Pasar Malam Gadong)',
      type: 'Chợ đêm',
      description: 'Điểm ăn uống phổ biến nhất với hàng trăm quầy đồ ăn địa phương',
      priceRange: '1 - 10 BND',
      specialty: 'Nasi Katok, BBQ, Satay, Kueh',
    },
    {
      name: 'Aminah Arif Restaurant',
      type: 'Nhà hàng truyền thống',
      description: 'Nổi tiếng với món Ambuyat chính thống và các món ăn Brunei',
      priceRange: '10 - 25 BND',
      specialty: 'Ambuyat, Seafood',
    },
    {
      name: 'Tamu Kianggeh',
      type: 'Chợ sáng',
      description: 'Chợ bên sông với đồ ăn sáng và đặc sản địa phương',
      priceRange: '1 - 8 BND',
      specialty: 'Kueh, Fresh Fruits, Local Snacks',
    },
    {
      name: 'Rizqun Coffee House',
      type: 'Nhà hàng buffet',
      description: 'Buffet quốc tế với nhiều món Brunei và châu Á',
      priceRange: '20 - 35 BND',
      specialty: 'International Buffet, Halal Food',
    },
  ];

  const categories = [
    { icon: <Utensils className="w-8 h-8" />, name: 'Món chính', count: 5 },
    { icon: <Coffee className="w-8 h-8" />, name: 'Đồ uống', count: 1 },
    { icon: <IceCream className="w-8 h-8" />, name: 'Tráng miệng', count: 3 },
    { icon: <ChefHat className="w-8 h-8" />, name: 'Món khai vị', count: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm">Trang chủ / Ẩm Thực</p>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Utensils className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-5xl mb-4 text-yellow-400">Ẩm Thực Brunei</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Khám phá hương vị độc đáo của ẩm thực Brunei - sự kết hợp tinh tế giữa Mã Lai, Trung Quốc và Ấn Độ
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  {category.icon}
                </div>
                <h3 className="text-blue-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} món</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4 text-blue-900">Món Ăn Đặc Sản</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Những món ăn không thể bỏ lỡ khi đến với Brunei Darussalam
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm">
                    {dish.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-blue-900">{dish.name}</h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{dish.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Giá:</span>
                      <span className="text-blue-900">{dish.price}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-gray-600 text-xs">
                        <strong>Địa điểm:</strong> {dish.where}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4 text-blue-900">Địa Điểm Ăn Uống Nổi Tiếng</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Những nhà hàng và chợ ẩm thực được yêu thích nhất tại Brunei
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1 text-blue-900">{restaurant.name}</h3>
                    <p className="text-sm text-yellow-600">{restaurant.type}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{restaurant.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Mức giá:</span>
                    <span className="text-blue-900">{restaurant.priceRange}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-600">
                      <strong>Đặc sản:</strong> {restaurant.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center mb-8 text-yellow-400">Lưu Ý Khi Ăn Uống</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="mb-3 text-yellow-400">✅ Nên làm</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Thử món Ambuyat và Nasi Katok - đặc sản địa phương</li>
                  <li>• Ăn tại Gadong Night Market vào buổi tối</li>
                  <li>• Tôn trọng văn hóa ẩm thực Halal</li>
                  <li>• Rửa tay trước và sau bữa ăn</li>
                  <li>• Mặc cả giá ở chợ (lịch sự)</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="mb-3 text-yellow-400">❌ Không nên</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Uống rượu công khai (vi phạm luật)</li>
                  <li>• Ăn thịt lợn (không có bán công khai)</li>
                  <li>• Ăn uống ồn ào, thiếu lịch sự</li>
                  <li>• Bỏ thức ăn lãng phí</li>
                  <li>• Quên mang tiền mặt (nhiều nơi không nhận thẻ)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
