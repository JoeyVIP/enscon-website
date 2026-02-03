import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '服務項目 | 來電司康',
  description: '來電司康提供顧問服務、網站建置服務與加值服務。專業、高效、合理價格。',
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">服務項目</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-100">
            從策略顧問到網站建置，一站式解決方案
          </p>
        </div>
      </section>

      {/* 顧問服務 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-primary text-center">顧問服務</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: '🎯', title: '品牌重新定位與產品結構重組', desc: '找出核心價值，重新梳理產品線' },
              { icon: '💰', title: '定價策略設計與毛利模型優化', desc: '建立合理的價格體系與利潤結構' },
              { icon: '📱', title: 'IG / Threads / 官網轉換路徑規劃', desc: '打造完整的線上轉換漏斗' },
              { icon: '🏪', title: '實體門市與線上內容整合', desc: 'O2O 整合，讓線上線下互相導流' },
              { icon: '📊', title: 'GA4 與營收數據結構化', desc: '建立可讀的數據儀表板' },
              { icon: '🤖', title: 'AI 輔助決策系統設計', desc: '導入 AI 工具提升決策效率' },
              { icon: '⚙️', title: '內部營運流程簡化與自動化', desc: '減少重複工作，釋放團隊產能' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 網站建置服務 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-primary text-center">網站建置服務</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 基本方案 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">基本方案</h3>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-6">30-40 萬</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">5-7 頁企業官網</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">SEO 基礎優化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">一年主機維護</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition"
              >
                諮詢方案
              </Link>
            </div>

            {/* 標準方案 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border-2 border-accent relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                推薦
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">標準方案</h3>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-6">40-60 萬</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">8-15 頁</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">含產品目錄頁（50 項內）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">詢價表單功能</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg transition"
              >
                諮詢方案
              </Link>
            </div>

            {/* 進階方案 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">進階方案</h3>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-6">60-80 萬</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">頁數與產品數不限</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">開放 CMS 後台管理權限</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm md:text-base">操作教學文件</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition"
              >
                諮詢方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 加值服務 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-primary text-center">加值服務</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 多語系 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">多語系版本</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">支援英、日、越、歐語系</p>
              <div className="text-2xl md:text-3xl font-bold text-accent">每語系 10-15 萬</div>
            </div>

            {/* Logo 設計 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Logo 設計</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">純人工設計，專業品質</p>
              <div className="text-2xl md:text-3xl font-bold text-accent">15-25 萬</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            想了解更多服務細節？
          </h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto">
            立即聯絡我們，我們將為您量身打造最適合的解決方案
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            預約免費諮詢
          </Link>
        </div>
      </section>
    </>
  );
}
