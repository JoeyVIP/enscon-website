import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '關於我們 | 來電司康',
  description: '來電司康的使命願景與團隊介紹。AI 提升效率，人類定義品味。',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">關於我們</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-100">
            我們是一群相信「營收工程」的實踐者
          </p>
        </div>
      </section>

      {/* 使命願景 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-primary text-center">我們的使命</h2>
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-primary">來電司康</strong>是一家專注於「實體品牌營收成長」的顧問公司。
                我們不賣流量、不賣夢想、不賣模板。我們只做一件事：<strong>把現有生意結構拆開、重組，讓原本卡住的營收重新流動。</strong>
              </p>
              <p>
                我們的目標客群是已經有客流、產品、團隊，但營收成長開始變慢的實體品牌。
                特別是南部工業區的隱形冠軍、資產規模 500 萬至 5 億元的中型代工廠、以及願意調整結構的傳產二代接班人。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心理念 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-primary text-center">核心理念</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: '📊', title: '行銷不是裝飾', desc: '是營收工程' },
              { icon: '📝', title: '內容不是創作', desc: '是銷售動線的一部分' },
              { icon: '📈', title: '數據不是報表', desc: '是經營語言' },
              { icon: '🤖', title: 'AI 不是噱頭', desc: '是未來營運基礎設施' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 團隊介紹 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-primary text-center">我們的團隊</h2>
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            {/* Joey */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                  J
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">來電司康 (Joey)</h3>
                  <p className="text-accent font-semibold mb-3 text-sm md:text-base">首席架構師</p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    負責整體系統架構、商業策略、AI 提示詞研發。擅長將複雜的營收問題拆解為可執行的結構化流程，
                    並透過 AI 技術提升營運效率。
                  </p>
                </div>
              </div>
            </div>

            {/* Richard */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                  R
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">地球星 AI (Richard)</h3>
                  <p className="text-accent font-semibold mb-3 text-sm md:text-base">技術開發與通路專家</p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    負責系統建置、自動化流程執行。專精於將顧問建議轉化為實際可運作的技術解決方案，
                    確保每個環節都能順暢執行。
                  </p>
                </div>
              </div>
            </div>

            {/* Wan Ting */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                  W
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">暖色系設計 (Wan Ting)</h3>
                  <p className="text-accent font-semibold mb-3 text-sm md:text-base">美學守護者</p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    負責 AI 產出的最終審核優化、Logo 設計。確保所有視覺呈現都達到專業水準，
                    讓 AI 的效率與人類的品味完美結合。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI 與人類的結合 */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-primary">AI 提升效率，人類定義品味</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              我們相信 AI 是強大的工具，但最終的品味、策略判斷、與客戶的深度對話，
              仍然需要人類的智慧與經驗。這就是為什麼我們的流程是：
            </p>
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
              <p className="text-lg md:text-2xl font-bold text-primary mb-4">
                AI 負責執行效率
              </p>
              <p className="text-xl md:text-3xl font-bold text-accent mb-4">+</p>
              <p className="text-lg md:text-2xl font-bold text-primary">
                人類負責品質把關
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
