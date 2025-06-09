import Link from 'next/link';
import Footer from '../layout/default.layout/footer';
import LoginForm from './login.form';

export default function FacebookLogin() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Left side - Branding */}
          <div className="flex-1 text-center lg:text-left lg:pt-16">
            <h1 className="text-6xl font-bold text-blue-600 mb-6">facebook</h1>
            <p className="text-2xl text-gray-800 max-w-lg">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </p>
          </div>

          {/* Right side - Login form */}
          <div className="w-full max-w-md">
            <LoginForm />
            <div className="text-center mt-6 text-sm text-gray-600">
              <Link href="#" className="font-semibold text-gray-800">
                Tạo Trang
              </Link>{' '}
              dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
