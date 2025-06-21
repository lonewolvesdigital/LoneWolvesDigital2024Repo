import React, { useState } from "react";
import PriceTag from "./PriceTag";

const VideoAudioAnimationPackages = () => {
  const [dropdowns, setDropdowns] = useState({
    betaSelect: false,
    sigmaSelect: false,
    alphaSelect: false,
  });

  const renderSelectPlan = (dropdownKey) => (
    <div className="custom-dropdown" style={{ position: 'relative', marginTop: '10px' }}>
      <button 
        onClick={() => toggleDropdown(dropdownKey)}
        className="butn-gr rounded buton"
        style={{ width: '100%' }}
        type="button"
      >
        <span>Select Plan</span>
      </button>
      {dropdowns[dropdownKey] && (
        <div 
          className="dropdown-content"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '12px',
            marginTop: '5px',
            zIndex: 1000,
            maxHeight: '400px',
            overflowY: 'auto',
            border: 'double 2px transparent',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to right, rgb(68, 249, 255), #fd7e14, rgba(255, 9, 243, 0.712))',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            padding: '1px'
          }}
        >
          <a href="#" className="dropdown-link" style={{display:'block',padding:'10px 15px',color:'#fff',textDecoration:'none',transition:'background-color 0.3s'}} onMouseEnter={e=>e.target.style.backgroundColor='#000'} onMouseLeave={e=>e.target.style.backgroundColor='transparent'}>Option A</a>
          <a href="#" className="dropdown-link" style={{display:'block',padding:'10px 15px',color:'#fff',textDecoration:'none',transition:'background-color 0.3s'}} onMouseEnter={e=>e.target.style.backgroundColor='#000'} onMouseLeave={e=>e.target.style.backgroundColor='transparent'}>Option B</a>
          <a href="#" className="dropdown-link" style={{display:'block',padding:'10px 15px',color:'#fff',textDecoration:'none',transition:'background-color 0.3s'}} onMouseEnter={e=>e.target.style.backgroundColor='#000'} onMouseLeave={e=>e.target.style.backgroundColor='transparent'}>Custom Plan</a>
        </div>
      )}
    </div>
  );

  const toggleDropdown = (key) => {
    setDropdowns((prev) => {
      const newState = Object.keys(prev).reduce((acc, k) => ({ ...acc, [k]: false }), {});
      return { ...newState, [key]: !prev[key] };
    });
  };

  const [tableOpen, setTableOpen] = useState(false);
  const features = [
    { label: "\uD83D\uDCB5 Monthly Cost", values: [<PriceTag usd={2800} />, <PriceTag usd={3300} />, <PriceTag usd={5000} />, <PriceTag usd={5800} />, <PriceTag usd={8000} />, <PriceTag usd={9000} />] },
    { label: "\uD83D\uDCC5 Annual/Semiannual Cost", values: [<PriceTag usd={33600} />, <PriceTag usd={19800} />, <PriceTag usd={60000} />, <PriceTag usd={34800} />, <PriceTag usd={96000} />, <PriceTag usd={54000} />] },
    { label: "\uD83D\uDCB0 Live Call Deposit", values: [<PriceTag usd={1680} />, <PriceTag usd={990} />, <PriceTag usd={6000} />, <PriceTag usd={3480} />, <PriceTag usd={14400} />, <PriceTag usd={8100} />] },
    { label: "\uD83C\uDF81 Discount Amount", values: [<PriceTag usd={1680} />, <PriceTag usd={990} />, <PriceTag usd={6000} />, <PriceTag usd={3480} />, <PriceTag usd={14400} />, <PriceTag usd={8100} />] },
    { label: "\uD83D\uDCDD Monthly After Discount", values: [<PriceTag usd={2660} />, <PriceTag usd={3135} />, <PriceTag usd={4500} />, <PriceTag usd={5220} />, <PriceTag usd={6800} />, <PriceTag usd={7650} />] },
    { label: "\uD83D\uDCB8 Pre Discount Total", values: [<PriceTag usd={33600} />, <PriceTag usd={19800} />, <PriceTag usd={60000} />, <PriceTag usd={34800} />, <PriceTag usd={96000} />, <PriceTag usd={54000} />] },
    { label: "\uD83C\uDFE6 Post Discount Total", values: [<PriceTag usd={31920} />, <PriceTag usd={18810} />, <PriceTag usd={54000} />, <PriceTag usd={31320} />, <PriceTag usd={81600} />, <PriceTag usd={45900} />] },
    { label: "\uD83C\uDF89 Total Savings", values: [<PriceTag usd={1680} />, <PriceTag usd={990} />, <PriceTag usd={6000} />, <PriceTag usd={3480} />, <PriceTag usd={14400} />, <PriceTag usd={8100} />] },
    { label: "\uD83D\uDCB9 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "\uD83C\uDFAC Basic Video Editing", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83C\uDFA4 Audio Enhancement", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "GIF & Short Animation", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83C\uDFB6 Stock Music & Sound Effects", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83C\uDF9E️ Basic Storyboard", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83C\uDFA5 Professional Video Prod.", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDD0A Sound Design & Mastering", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "✨ Motion Graphics & VFX", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDC64 Voiceover & Narration", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCA1 Concept Development", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83C\uDFAC Cinematic Video Production", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83D\uDC7E 3D Animation & VFX", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDFA7 Immersive Audio Experiences", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDFAE Interactive Media", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDFAF Distribution Strategy", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
  ];
  const headers = [
    "Feature / Metric",
    <><span>Beta Pack</span><br/><span>(12-Mo)</span></>,
    <><span>Beta Pack</span><br/><span>(6-Mo)</span></>,
    <><span>Sigma Pack</span><br/><span>(12-Mo)</span></>,
    <><span>Sigma Pack</span><br/><span>(6-Mo)</span></>,
    <><span>Alpha Pack</span><br/><span>(12-Mo)</span></>,
    <><span>Alpha Pack</span><br/><span>(6-Mo)</span></>,
  ];

  const planStackStyle = {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
  };

  return (
    <section className="app-price section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="s-head text-center mb-80">
              <h1 className="stit mb-30">
                <span className="left"></span>Video, Audio & Animation
                <span className="right"></span>
              </h1>
              <p> - Multimedia content creation </p>
            </div>
          </div>
        </div>
        <div className="pric-tables">
          {/* Beta Package */}
          <div className="row" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="col-lg-12">
              <div className="item sm-padding md-mb50" style={{ maxWidth: 700, margin: '0 auto', overflow: 'visible', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="type text-center mb-15">
                  <h3>Beta<br/>Pack</h3>
                </div>
                <div className="amount text-center mb-40">
                  <h3>
                    <span>$</span>2,800
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Fundamental video, audio, and animation services for basic content needs, including short social media videos and simple audio editing.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🎬 Basic Video Editing (Short-form)</li>
                    <li>🎤 Audio Enhancement & Mixing (Simple)</li>
                    <li>GIF & Short Animation Creation</li>
                    <li>🎶 Stock Music & Sound Effects</li>
                    <li>🎞️ Basic Storyboard & Scripting</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $2,800</li>
                        <li>📅 Annual Cost: $33,600</li>
                        <li>💰 Live Call Deposit: $1,680</li>
                        <li>🎁 Discount Amount: $1,680</li>
                        <li>🧾 Monthly After Discount: $2,660</li>
                        <li>💸 Pre Discount Total : $33,600</li>
                        <li>🏦 Post Discount Total : $31,920</li>
                        <li>🎉 Total Savings: $1,680</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,300</li>
                        <li>📅 Semiannual Cost: $19,800</li>
                        <li>💰 Live Call Deposit: $990</li>
                        <li>🎁 Discount Amount: $990</li>
                        <li>🧾 Monthly After Discount: $3,135</li>
                        <li>💸 Pre Discount Total : $19,800</li>
                        <li>🏦 Post Discount Total : $18,810</li>
                        <li>🎉 Total Savings: $990</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                  </div>
                  <div style={{ marginTop: 24 }}>{renderSelectPlan('betaSelect')}</div>
                </div>
                <div style={{ width: '100%', height: '200px' }}></div>
              </div>
            </div>
            {/* Sigma Package */}
            <div className="col-lg-12">
              <div className="item active sm-padding md-mb50" style={{  maxWidth: 700, margin: '0 auto', overflow: 'visible', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="type text-center mb-15">
                  <h3>Sigma<br/>Pack</h3>
                </div>
                <div className="amount text-center mb-40">
                  <h3>
                    <span>$</span>5,000
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Professional video, audio, and animation production for marketing campaigns and corporate communications, featuring high-quality video production and motion graphics.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🎥 Professional Video Production (Mid-length)</li>
                    <li>🔊 Sound Design & Mastering</li>
                    <li>✨ Motion Graphics & Visual Effects (Basic)</li>
                    <li>🗣️ Voiceover & Narration Talent</li>
                    <li>💡 Concept Development & Scriptwriting (Advanced)</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $5,000</li>
                        <li>📅 Annual Cost: $60,000</li>
                        <li>💰 Live Call Deposit: $6,000</li>
                        <li>🎁 Discount Amount: $6,000</li>
                        <li>🧾 Monthly After Discount: $4,500</li>
                        <li>💸 Pre Discount Total : $60,000</li>
                        <li>🏦 Post Discount Total : $54,000</li>
                        <li>🎉 Total Savings: $6,000</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $5,800</li>
                        <li>📅 Semiannual Cost: $34,800</li>
                        <li>💰 Live Call Deposit: $3,480</li>
                        <li>🎁 Discount Amount: $3,480</li>
                        <li>🧾 Monthly After Discount: $5,220</li>
                        <li>💸 Pre Discount Total : $34,800</li>
                        <li>🏦 Post Discount Total : $31,320</li>
                        <li>🎉 Total Savings: $3,480</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                  </div>
                  <div style={{ marginTop: 24 }}>{renderSelectPlan('sigmaSelect')}</div>
                </div>
                <div style={{ width: '100%', height: '200px' }}></div>
              </div>
            </div>
            {/* Alpha Package */}
            <div className="col-lg-12">
              <div className="item sm-padding" style={{ maxWidth: 700, margin: '0 auto', overflow: 'visible', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="type text-center mb-15">
                  <h3>Alpha<br/>Pack</h3>
                </div>
                <div className="amount text-center mb-40">
                  <h3>
                    <span>$</span>8,000
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: High-end multimedia content creation for broadcast, film, and immersive experiences, including cinematic production, 3D animation, and interactive media.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🎬 Cinematic Video Production</li>
                    <li>👾 3D Animation & VFX</li>
                    <li>🎧 Immersive Audio Experiences (Spatial Audio)</li>
                    <li>🎮 Interactive Media & VR/AR Content</li>
                    <li>🎯 Distribution & Broadcast Strategy</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $8,000</li>
                        <li>📅 Annual Cost: $96,000</li>
                        <li>💰 Live Call Deposit: $14,400</li>
                        <li>🎁 Discount Amount: $14,400</li>
                        <li>🧾 Monthly After Discount: $6,800</li>
                        <li>💸 Pre Discount Total : $96,000</li>
                        <li>🏦 Post Discount Total : $81,600</li>
                        <li>🎉 Total Savings: $14,400</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $9,000</li>
                        <li>📅 Semiannual Cost: $54,000</li>
                        <li>💰 Live Call Deposit: $8,100</li>
                        <li>🎁 Discount Amount: $8,100</li>
                        <li>🧾 Monthly After Discount: $7,650</li>
                        <li>💸 Pre Discount Total : $54,000</li>
                        <li>🏦 Post Discount Total : $45,900</li>
                        <li>🎉 Total Savings: $8,100</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                  </div>
                  <div style={{ marginTop: 24 }}>{renderSelectPlan('alphaSelect')}</div>
                </div>
                <div style={{ width: '100%', height: '200px' }}></div>
              </div>
            </div>
          </div>
        </div>
        {/* Comparison Table Bar */}
        <div style={{ width: "100%", margin: "30px 0" }}>
          <button
            onClick={() => setTableOpen((o) => !o)}
            style={{
              width: "100%",
              background: "#222",
              color: "#fff",
              padding: "18px 0",
              fontSize: "1.3rem",
              fontWeight: 700,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: tableOpen ? 0 : "20px",
              letterSpacing: "1px",
            }}
          >
            Video, Audio & Animation Comparison Table {tableOpen ? "▲" : "▼"}
          </button>
          {tableOpen && (
            <div style={{
              width: "100%",
              overflowX: "auto",
              background: "#181818",
              borderRadius: "0 0 12px 12px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              padding: "0 0 20px 0"
            }}>
              <table style={{
                width: "100%",
                minWidth: 800,
                borderCollapse: "collapse",
                color: "#fff",
                fontSize: "1rem",
                background: "transparent"
              }}>
                <thead>
                  <tr>
                    {headers.map((h, i) => (
                      <th key={i} style={{
                        padding: "12px 8px",
                        background: "#222",
                        borderBottom: "2px solid #333",
                        textAlign: "left",
                        fontWeight: 700,
                        position: "sticky",
                        top: 0,
                        zIndex: 2
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #333" }}>
                      <td style={{ padding: "10px 8px", fontWeight: 600 }}>{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} style={{ padding: "10px 8px", textAlign: "center" }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Add responsive CSS */}
        <style>{`
@media (max-width: 767px) {
  .plan-stack-responsive {
    flex-direction: column !important;
    gap: 16px !important;
  }
}
`}</style>
      </div>
    </section>
  );
};

export default VideoAudioAnimationPackages;
