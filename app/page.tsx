import Image from "next/image";
import { ArrowDown, Check, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

const lots = [
  { name: "闷尖狮子头", size: "43.2 mm", shape: "矮桩 · 小尖", match: "配对度 92%", price: "¥ 1,280" },
  { name: "四座楼狮子头", size: "45.8 mm", shape: "正圆 · 肚饱", match: "配对度 95%", price: "¥ 2,680" },
  { name: "白狮子头", size: "41.6 mm", shape: "端肩 · 深纹", match: "配对度 90%", price: "¥ 860" },
];

const standards = [
  ["01", "同树同季", "同源果配对，皮质、密度和成熟度更接近。"],
  ["02", "六面细看", "正面、侧面、底部逐一比对，瑕疵如实标注。"],
  ["03", "自然养成", "不染色、不上油，保留核桃原生皮质和盘玩空间。"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="合桃轩首页">
          <span className="brand-seal">合</span>
          <span><b>合桃轩</b><small>HE TAO XUAN</small></span>
        </a>
        <nav aria-label="主导航">
          <a href="#collection">在售对核</a><a href="#standard">选核标准</a><a href="#care">盘养说明</a>
        </nav>
        <a className="header-cta" href="#collection">开始选核 <ChevronRight size={16} /></a>
      </header>

      <section id="top" className="hero">
        <Image className="hero-image" src="/hetao-hero.png" alt="一对深棕色文玩核桃置于黑漆木座上" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> 本周主推 · 同树精选</p>
          <h1>一双好核桃，<br />值得慢慢盘。</h1>
          <p className="hero-desc">闷尖狮子头 · 43.2 mm · 矮桩饱满<br />皮质紧实，纹路深阔，六面高度配对</p>
          <div className="hero-price"><span>本对价</span><strong>¥ 1,280</strong><em>含核桃袋与鬃毛刷</em></div>
          <div className="hero-actions">
            <a className="primary-btn" href="#collection">查看本对细节 <ChevronRight size={18} /></a>
            <a className="text-btn" href="#standard">如何挑一对好核桃 <ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-specs" aria-label="主推核桃参数">
          <div><span>边宽</span><strong>43.2<small>mm</small></strong></div>
          <div><span>肚高</span><strong>40.8<small>mm</small></strong></div>
          <div><span>单只重</span><strong>约 31<small>g</small></strong></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="服务承诺">
        <p><ShieldCheck size={19} /> 一物一拍</p><p><Check size={19} /> 尺寸实测</p>
        <p><Check size={19} /> 瑕疵明示</p><p><Check size={19} /> 七日品鉴</p>
      </section>

      <section id="collection" className="collection section-shell">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> 本期上新</p><h2>每一对，都有自己的筋骨</h2></div>
          <p>天然核桃没有复制品。以下为独立编号，一对一拍摄与测量，售出即下架。</p>
        </div>
        <div className="product-grid">
          {lots.map((lot, index) => (
            <article className="product-card" key={lot.name}>
              <div className={`product-photo crop-${index + 1}`}>
                <Image src="/hetao-hero.png" alt={`${lot.name}配对展示`} fill sizes="(max-width: 800px) 100vw, 33vw" />
                <span>HTX · 00{index + 7}</span>
              </div>
              <div className="product-info"><div><p>{lot.shape}</p><h3>{lot.name}</h3></div><strong>{lot.price}</strong></div>
              <div className="product-meta"><span>{lot.size}</span><span>{lot.match}</span><a href="#care" aria-label={`查看${lot.name}详情`}><ChevronRight size={17} /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="standard" className="standard-section">
        <div className="standard-title"><p>合桃轩 · 配对三则</p><h2>先看皮质，<br />再论品相。</h2></div>
        <div className="standards">
          {standards.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </div>
      </section>

      <section id="care" className="care section-shell">
        <div className="care-card">
          <div><p className="eyebrow dark"><span /> 到手第一周</p><h2>少盘、多刷、别着急</h2></div>
          <ol>
            <li><b>净手盘玩</b><span>每天 20–30 分钟，让表面均匀接触。</span></li>
            <li><b>鬃刷清理</b><span>顺着纹路干刷，把汗液带入深纹。</span></li>
            <li><b>阴凉静置</b><span>避免暴晒、泡水与温差骤变。</span></li>
          </ol>
          <p className="care-note"><Sparkles size={18} /> 每对随附入门养护卡与专用鬃毛刷</p>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-seal">合</span><span><b>合桃轩</b><small>一对一核 · 慢慢养成</small></span></div>
        <p>图片与价格为页面示例，正式售卖前请替换为真实商品信息。</p><a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
