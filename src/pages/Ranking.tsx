import { useState, useEffect } from 'react';
import { Star, TrendingUp, Trophy, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface RankingProps {
  votes: Record<number, number>;
  onVote: (destinationId: number) => void;
}

export default function Ranking({ votes, onVote }: RankingProps) {
  const [justVoted, setJustVoted] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState<Record<number, boolean>>(() => {
    const saved = localStorage.getItem('brunei-user-votes');
    return saved ? JSON.parse(saved) : {};
  });

  const destinations = [
    {
      id: 1,
      title: 'Masjid Sultan Omar Ali Saifuddien',
      image: 'https://images.unsplash.com/photo-1709808971436-522aaab4447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVuZWklMjBtb3NxdWV8ZW58MXx8fHwxNzYyODcwNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Nhà thờ Hồi giáo tuyệt đẹp với mái vòm mạ vàng 24k',
    },
    {
      id: 2,
      title: 'Kampong Ayer',
      image: 'https://images.unsplash.com/photo-1709808972516-cfcd9bc84c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVuZWklMjBrYW1wb25nJTIwYXllcnxlbnwxfHx8fDE3NjI4NzA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Làng nước lớn nhất thế giới với 30.000 dân',
    },
    {
      id: 3,
      title: 'Royal Regalia Museum',
      image: 'https://images.unsplash.com/photo-1596681922518-eb8f777e32a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVuZWklMjBwYWxhY2V8ZW58MXx8fHwxNzYyODcwNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bảo tàng hoàng gia với hiện vật quý giá',
    },
    {
      id: 4,
      title: 'Ulu Temburong National Park',
      image: 'https://images.unsplash.com/photo-1621849400072-f554417f7051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJhaW5mb3Jlc3R8ZW58MXx8fHwxNzYyNzg3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Vườn quốc gia nguyên sinh với cầu treo tán rừng',
    },
    {
      id: 5,
      title: 'Jerudong Park',
      image: 'https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbXVzZW1lbnQlMjBwYXJrfGVufDF8fHx8MTc2Mjg3MDUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Công viên giải trí lớn nhất Đông Nam Á',
    },
    {
      id: 6,
      title: 'Jame Asr Hassanil Bolkiah Mosque',
      image: 'https://images.unsplash.com/photo-1632782532013-bd3f5f9197db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjgwNTI1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Nhà thờ Hồi giáo lớn nhất với 29 mái vòm vàng',
    },
    {
      id: 7,
      title: 'Istana Nurul Iman',
      image: 'https://images.unsplash.com/photo-1621795651141-7559a2b35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVuZWklMjByb3lhbHxlbnwxfHx8fDE3NjI4NzA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cung điện hoàng gia lớn nhất thế giới',
    },
    {
      id: 8,
      title: 'Gadong Night Market',
      image: 'https://images.unsplash.com/photo-1609811159533-72e7ab01f13c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBtYXJrZXR8ZW58MXx8fHwxNzYyODcwNTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Chợ đêm ẩm thực nổi tiếng nhất Brunei',
    },
    {
      id: 9,
      title: 'Tasek Lama Recreational Park',
      image: 'https://images.unsplash.com/photo-1621849400072-f554417f7051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJhaW5mb3Jlc3R8ZW58MXx8fHwxNzYyNzg3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Công viên tự nhiên với đường mòn và thác nước',
    },
    {
      id: 10,
      title: 'Pantai Muara',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjI4NDc3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bãi biển công cộng đẹp nhất Brunei',
    },
  ];

  const rankedDestinations = [...destinations]
    .map((dest) => ({
      ...dest,
      voteCount: votes[dest.id] || 0,
      avgRating: ((votes[dest.id] || 0) / 10 + 4).toFixed(1),
    }))
    .sort((a, b) => b.voteCount - a.voteCount);

  const handleVote = (destinationId: number) => {
    if (hasVoted[destinationId]) {
      return;
    }

    onVote(destinationId);
    setJustVoted(destinationId);
    
    const newHasVoted = { ...hasVoted, [destinationId]: true };
    setHasVoted(newHasVoted);
    localStorage.setItem('brunei-user-votes', JSON.stringify(newHasVoted));

    setTimeout(() => {
      setJustVoted(null);
    }, 2000);
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Trophy className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Trophy className="w-6 h-6 text-orange-600" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm">Trang chủ / Xếp Hạng</p>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <TrendingUp className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-5xl mb-4 text-yellow-400">Bảng Xếp Hạng Địa Điểm</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Bình chọn cho địa điểm yêu thích của bạn và xem thứ hạng được cập nhật theo thời gian thực
          </p>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-center mb-12 text-blue-900">🏆 Top 3 Được Yêu Thích Nhất</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {rankedDestinations.slice(0, 3).map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${index === 0 ? 'md:order-2 md:scale-110' : index === 1 ? 'md:order-1' : 'md:order-3'}`}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <div className="relative h-56">
                      <ImageWithFallback
                        src={dest.image}
                        alt={dest.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-1/2 -translate-x-1/2">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-gray-300' : 'bg-orange-500'
                        } shadow-lg`}>
                          {getRankIcon(index + 1)}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="mb-2 text-blue-900">{dest.title}</h3>
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="text-2xl text-blue-900">{dest.avgRating}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{dest.voteCount} lượt bình chọn</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Rankings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-center mb-8 text-blue-900">Bảng Xếp Hạng Đầy Đủ</h2>
            <div className="space-y-4">
              {rankedDestinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden ${
                    justVoted === dest.id ? 'ring-4 ring-yellow-400' : ''
                  }`}
                >
                  <div className="flex items-center p-6 gap-6">
                    {/* Rank Number */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                        index === 0 ? 'bg-yellow-400 text-white' :
                        index === 1 ? 'bg-gray-300 text-white' :
                        index === 2 ? 'bg-orange-500 text-white' :
                        'bg-blue-100 text-blue-900'
                      }`}>
                        #{index + 1}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={dest.image}
                        alt={dest.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="mb-1 text-blue-900">{dest.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{dest.description}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm">{dest.avgRating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">{dest.voteCount} phiếu</span>
                        </div>
                      </div>
                    </div>

                    {/* Vote Button */}
                    <div className="flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: hasVoted[dest.id] ? 1 : 1.05 }}
                        whileTap={{ scale: hasVoted[dest.id] ? 1 : 0.95 }}
                        onClick={() => handleVote(dest.id)}
                        disabled={hasVoted[dest.id]}
                        className={`px-6 py-3 rounded-lg transition-all ${
                          hasVoted[dest.id]
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg'
                        }`}
                      >
                        {hasVoted[dest.id] ? (
                          <span className="flex items-center space-x-2">
                            <span>✓</span>
                            <span>Đã bỏ phiếu</span>
                          </span>
                        ) : (
                          <span className="flex items-center space-x-2">
                            <ThumbsUp className="w-5 h-5" />
                            <span>Bỏ phiếu</span>
                          </span>
                        )}
                      </motion.button>
                    </div>
                  </div>

                  {/* Vote Animation */}
                  {justVoted === dest.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-yellow-50 border-t border-yellow-200 px-6 py-3 text-center"
                    >
                      <p className="text-sm text-yellow-800">🎉 Cảm ơn bạn đã bình chọn! Điểm đã được cập nhật.</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-blue-900">Cách Thức Xếp Hạng</h3>
            <p className="text-gray-700 mb-6">
              Bảng xếp hạng được cập nhật theo thời gian thực dựa trên số lượt bình chọn từ người dùng. 
              Mỗi người chỉ có thể bỏ phiếu một lần cho mỗi địa điểm. Hãy bình chọn để giúp những du khách khác 
              tìm được những địa điểm tuyệt vời nhất tại Brunei!
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Đánh giá tự động</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-5 h-5 text-blue-600" />
                <span>Bình chọn công khai</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>Cập nhật real-time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
