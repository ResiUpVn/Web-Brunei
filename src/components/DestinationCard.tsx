import { MapPin, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DestinationCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  rating?: number;
  votes?: number;
  category?: string;
  showDetails?: boolean;
}

export default function DestinationCard({
  title,
  description,
  image,
  rating,
  votes,
  category,
  showDetails = false,
}: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {category && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm">
            {category}
          </div>
        )}
        {rating !== undefined && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-blue-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        {votes !== undefined && (
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Star className="w-4 h-4 mr-1" />
            <span>{votes} lượt bình chọn</span>
          </div>
        )}
        {showDetails && (
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Xem Chi Tiết
          </button>
        )}
      </div>
    </div>
  );
}
