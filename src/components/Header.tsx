import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/top-dia-diem', label: 'Top 10 Địa Điểm' },
    { path: '/am-thuc', label: 'Ẩm Thực' },
    { path: '/van-hoa', label: 'Văn Hóa' },
    { path: '/ranking', label: 'Xếp Hạng' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-blue-900 text-xl">🏰</span>
            </div>
            <div>
              <h1 className="font-bold text-xl">Explore Brunei Now!</h1>
              <p className="text-xs text-blue-200">Khám phá Vương quốc Hòa bình</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-yellow-400 text-blue-900'
                    : 'hover:bg-blue-800 text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                const chatbotButton = document.getElementById('chatbot-toggle');
                chatbotButton?.click();
              }}
              className="ml-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatbot</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-yellow-400 text-blue-900'
                    : 'hover:bg-blue-800 text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                const chatbotButton = document.getElementById('chatbot-toggle');
                chatbotButton?.click();
              }}
              className="w-full text-left px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatbot</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}