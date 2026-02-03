import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              實體品牌的營收重構專家
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100">
              不是教你行銷。是陪你把生意做大。
            </p>
            <p className="text-base md:text-lg mb-10 text-gray-200 max-w-2xl mx-auto">
              專注於實體品牌營收成長的顧問公司。我們不賣流量、不賣夢想、不賣模板。
              我們只做一件事：把現有生意結構拆開、重組，讓原本卡住的營收重新流動。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
            >
              預約免費諮詢
            </Link>
          </div>
        </div>
      </section>

      {/* 三大價值主張 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-primary">
            為什麼選擇來電司康？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 價值 1 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-4xl md:text-5xl mb-4">💎</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">專業品質</h3>
              <p className="text-gray-700 leading-relaxed">
                結合人類設計師的審美把關與 AI 的精準產出，成品具備百萬級別的專業質感
              </p>
            </div>

            {/* 價值 2 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-4xl md:text-5xl mb-4">💰</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">1/3 的市場價格</h3>
              <p className="text-gray-700 leading-relaxed">
                透過 AI 流程大幅降低開發人力，將建置成本控制在傳統設計公司的三分之一
              </p>
            </div>

            {/* 價值 3 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-4xl md:text-5xl mb-4">⚡</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">AI 驅動的高效率</h3>
              <p className="text-gray-700 leading-relaxed">
                將傳統需耗時 2-3 個月的建置週期，縮短至 2-3 週
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 我們解決的問題 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-primary">
            生意沒有壞，但卡住了
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                '產品線彼此打架，沒有階梯式轉換',
                '定價沒有策略，只是參考同業',
                '社群經營很勤勞，但轉換路徑不存在',
                '客戶有來，但沒有留下',
                '有數據，但沒有人會解讀',
                '老闆每天很忙，卻不知道哪裡才是成長槓桿'
              ].map((problem, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 md:p-6 rounded-lg shadow">
                  <span className="text-accent text-xl md:text-2xl mt-1">✗</span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 服務流程 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-primary">
            四步驟 SOP
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: '營運拆解',
                  desc: '盤點所有收入來源、產品結構、定價邏輯、客群輪廓'
                },
                {
                  step: '02',
                  title: '成長設計',
                  desc: '重新設計產品階梯、價格帶、曝光策略與轉單流程'
                },
                {
                  step: '03',
                  title: '實作陪跑',
                  desc: '協助團隊落地執行，一起完成第一輪迭代'
                },
                {
                  step: '04',
                  title: '數據回饋與優化',
                  desc: '建立可讀的指標系統，讓團隊自己看得懂營收變化'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 md:space-x-6 bg-white p-6 md:p-8 rounded-lg shadow-lg">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold mb-2 text-primary">{item.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 差異化對比 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-primary">
            傳統流程 vs 來電司康 AI 流程
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base">評估項目</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base">傳統設計流程</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base">來電司康 AI 流程</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 md:px-6 py-4 font-semibold text-sm md:text-base">製作週期</td>
                  <td className="px-4 md:px-6 py-4 text-sm md:text-base">2-3 個月</td>
                  <td className="px-4 md:px-6 py-4 text-accent font-bold text-sm md:text-base">2-3 週</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 md:px-6 py-4 font-semibold text-sm md:text-base">報價範圍</td>
                  <td className="px-4 md:px-6 py-4 text-sm md:text-base">100-300 萬元</td>
                  <td className="px-4 md:px-6 py-4 text-accent font-bold text-sm md:text-base">30-80 萬元</td>
                </tr>
                <tr>
                  <td className="px-4 md:px-6 py-4 font-semibold text-sm md:text-base">溝通模式</td>
                  <td className="px-4 md:px-6 py-4 text-sm md:text-base">多次會議反覆修改</td>
                  <td className="px-4 md:px-6 py-4 text-accent font-bold text-sm md:text-base">一次深度訪談</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            準備好讓營收重新流動了嗎？
          </h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto">
            預約免費諮詢，讓我們一起拆解您的生意結構，找出成長槓桿
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            立即聯絡我們
          </Link>
        </div>
      </section>
    </>
  );
}
