import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t px-4 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Language links */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
          <Link href="#" className="hover:underline font-semibold">
            Tiếng Việt
          </Link>
          <Link href="#" className="hover:underline">
            English (UK)
          </Link>
          <Link href="#" className="hover:underline">
            中文(简体)
          </Link>
          <Link href="#" className="hover:underline">
            한국어
          </Link>
          <Link href="#" className="hover:underline">
            日本語
          </Link>
          <Link href="#" className="hover:underline">
            Français (France)
          </Link>
          <Link href="#" className="hover:underline">
            ภาษาไทย
          </Link>
          <Link href="#" className="hover:underline">
            Español
          </Link>
          <Link href="#" className="hover:underline">
            Português (Brasil)
          </Link>
          <Link href="#" className="hover:underline">
            Deutsch
          </Link>
          <Link href="#" className="hover:underline">
            Italiano
          </Link>
          <button className="text-gray-400 hover:bg-gray-100 px-2 py-1 rounded">
            +
          </button>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
          <Link href="#" className="hover:underline">
            Đăng ký
          </Link>
          <Link href="#" className="hover:underline">
            Đăng nhập
          </Link>
          <Link href="#" className="hover:underline">
            Messenger
          </Link>
          <Link href="#" className="hover:underline">
            Facebook Lite
          </Link>
          <Link href="#" className="hover:underline">
            Video
          </Link>
          <Link href="#" className="hover:underline">
            Meta Pay
          </Link>
          <Link href="#" className="hover:underline">
            Cửa hàng trên Meta
          </Link>
          <Link href="#" className="hover:underline">
            Meta Quest
          </Link>
          <Link href="#" className="hover:underline">
            Ray-Ban Meta
          </Link>
          <Link href="#" className="hover:underline">
            Meta AI
          </Link>
          <Link href="#" className="hover:underline">
            Instagram
          </Link>
          <Link href="#" className="hover:underline">
            Threads
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
          <Link href="#" className="hover:underline">
            Tùng bảm thông tin bộ phận
          </Link>
          <Link href="#" className="hover:underline">
            Chính sách quyền riêng tư
          </Link>
          <Link href="#" className="hover:underline">
            Trung tâm quyền riêng tư
          </Link>
          <Link href="#" className="hover:underline">
            Giới thiệu
          </Link>
          <Link href="#" className="hover:underline">
            Tạo quảng cáo
          </Link>
          <Link href="#" className="hover:underline">
            Tạo Trang
          </Link>
          <Link href="#" className="hover:underline">
            Nhà phát triển
          </Link>
          <Link href="#" className="hover:underline">
            Tuyển dụng
          </Link>
          <Link href="#" className="hover:underline">
            Cookie
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
          <Link href="#" className="hover:underline">
            Lựa chọn quảng cáo
          </Link>
          <Link href="#" className="hover:underline">
            Điều khoản
          </Link>
          <Link href="#" className="hover:underline">
            Trợ giúp
          </Link>
          <Link href="#" className="hover:underline">
            Tải thông tin liên hệ lên & đối tượng không phải người dùng
          </Link>
        </div>

        <div className="text-xs text-gray-500">Meta © 2025</div>
      </div>
    </footer>
  );
};

export default Footer;
