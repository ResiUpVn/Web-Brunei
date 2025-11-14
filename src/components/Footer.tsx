import { Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="mb-4">Về Chúng Tôi</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-3">
              Explore Brunei Now! là nền tảng du lịch hàng đầu giúp bạn khám phá vẻ đẹp của vương quốc Brunei Darussalam.
            </p>
            <div className="bg-blue-800/50 p-3 rounded-lg">
              <p className="text-xs text-yellow-300 mb-1">📚 Sản phẩm thi giữa kì</p>
              <p className="text-xs text-blue-100">Nhóm: <span className="text-yellow-400">LA CÀ ĐÓ ĐÂY</span></p>
              <p className="text-xs text-blue-100">Lớp: <span className="text-yellow-400">12A8</span></p>
              <p className="text-xs text-blue-100">Trường THPT Lê Minh Xuân</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/top-dia-diem" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Top 10 Địa Điểm
                </Link>
              </li>
              <li>
                <Link to="/am-thuc" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Ẩm Thực
                </Link>
              </li>
              <li>
                <Link to="/van-hoa" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Văn Hóa
                </Link>
              </li>
              <li>
                <Link to="/ranking" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Xếp Hạng
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4">Thông Tin</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-blue-200">
                <Phone className="w-4 h-4" />
                <span>+84 0346330270</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200">
                <Mail className="w-4 h-4" />
                <span>tranhuuloc221128@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200">
                <MapPin className="w-4 h-4" />
                <span>Ho Chi Minh City, VietNam</span>
              </li>
            </ul>
          </div>

          {/* YouTube Channel */}
          <div>
            <h3 className="mb-4">Theo Dõi Kênh YouTube</h3>
            <p className="text-blue-200 text-sm mb-4">
              Đăng ký kênh để xem video du lịch Brunei
            </p>
            <a
              href="https://www.youtube.com/@LaKaLaTa-o6f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Youtube className="w-5 h-5" />
              <span>La Cà Đó Đây</span>
            </a>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm mb-2">
            © 2025 Explore Brunei Now! - Nhóm <span className="text-yellow-400">LA CÀ ĐÓ ĐÂY</span>
          </p>
          <p className="text-blue-200 text-sm">
            Bản quyền: <span className="text-yellow-400">Trần Hữu Lộc - 12A8 - THPT Lê Minh Xuân</span>
          </p>
        </div>
      </div>
    </footer>
  );
}