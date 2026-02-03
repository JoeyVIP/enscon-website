import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 公司資訊 */}
          <div>
            <h3 className="text-xl font-bold mb-4">來電司康股份有限公司</h3>
            <p className="text-gray-400 mb-2">統一編號：89115053</p>
            <p className="text-gray-400 mb-2">地址：110410 臺北市信義區忠孝東路5段1號2樓</p>
            <p className="text-gray-400">Email: a@enscon.co</p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  首頁
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  服務項目
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* 服務理念 */}
          <div>
            <h3 className="text-xl font-bold mb-4">服務理念</h3>
            <p className="text-gray-400">
              專注於實體品牌的營收成長顧問服務。不賣流量、不賣夢想、不賣模板。
              我們只做一件事：把現有生意結構拆開、重組，讓原本卡住的營收重新流動。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 來電司康股份有限公司. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
