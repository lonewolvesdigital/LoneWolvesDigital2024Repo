import React, { useState } from "react";

const WritingTranslationPackages = () => {
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
    { label: "\uD83D\uDCB5 Monthly Cost", values: ["$2,500", "$3,000", "$4,500", "$5,200", "$7,500", "$8,500"] },
    { label: "\uD83D\uDCC5 Annual/Semiannual Cost", values: ["$30,000", "$18,000", "$54,000", "$31,200", "$90,000", "$51,000"] },
    { label: "\uD83D\uDCB0 Live Call Deposit", values: ["$1,500", "$900", "$5,400", "$3,120", "$13,500", "$7,650"] },
    { label: "\uD83C\uDF81 Discount Amount", values: ["$1,500", "$900", "$5,400", "$3,120", "$13,500", "$7,650"] },
    { label: "\uD83D\uDCDD Monthly After Discount", values: ["$2,375", "$2,850", "$4,050", "$4,680", "$6,375", "$7,225"] },
    { label: "\uD83D\uDCB8 Pre Discount Total", values: ["$30,000", "$18,000", "$54,000", "$31,200", "$90,000", "$51,000"] },
    { label: "\uD83C\uDFE6 Post Discount Total", values: ["$28,500", "$17,100", "$48,600", "$28,080", "$76,500", "$43,350"] },
    { label: "\uD83C\uDF89 Total Savings", values: ["$1,500", "$900", "$5,400", "$3,120", "$13,500", "$7,650"] },
    { label: "\uD83D\uDCB9 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "\u270D️ Blog Post Writing", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCDD Website Content Creation", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCEC Email Copywriting", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDC64 General Document Translation", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "Proofreading & Editing", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDD0E SEO-Optimized Content", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCDA Technical Writing", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCE2 Marketing & Ad Copywriting", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83C\uDF10 Website Localization", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\u270D️ Press Release Writing", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "⚖️ Legal & Certified Trans.", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDF93 Academic & Research Writing", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDF0E Transcreation & Cultural", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDFA4 Scriptwriting", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83D\uDCDA Book & Ebook Writing", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
  ];
  const headers = [
    "Feature / Metric",
    "Beta Pack (12-Mo)",
    "Beta Pack (6-Mo)",
    "Sigma Pack (12-Mo)",
    "Sigma Pack (6-Mo)",
    "Alpha Pack (12-Mo)",
    "Alpha Pack (6-Mo)",
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
                <span className="left"></span>Writing & Translation
                <span className="right"></span>
              </h1>
              <p> - Content development and localization services </p>
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
                    <span>$</span>2,500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Essential writing and translation services for foundational content needs, including basic blog posts and general document translation.
                </div>
                <div className="beta-features mb-20">
                  <strong>Features</strong>
                  <ul>
                    <li>✍️ Blog Post Writing (Basic)</li>
                    <li>📝 Website Content Creation (Standard)</li>
                    <li>📧 Email Copywriting (Simple)</li>
                    <li>🗣️ General Document Translation</li>
                    <li>Proofreading & Editing (Basic)</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $2,500</li>
                        <li>📅 Annual Cost: $30,000</li>
                        <li>💰 Live Call Deposit: $1,500</li>
                        <li>🎁 Discount Amount: $1,500</li>
                        <li>🧾 Monthly After Discount: $2,375</li>
                        <li>💸 Pre Discount Total : $30,000</li>
                        <li>🏦 Post Discount Total : $28,500</li>
                        <li>🎉 Total Savings: $1,500</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,000</li>
                        <li>📅 Semiannual Cost: $18,000</li>
                        <li>💰 Live Call Deposit: $900</li>
                        <li>🎁 Discount Amount: $900</li>
                        <li>🧾 Monthly After Discount: $2,850</li>
                        <li>💸 Pre Discount Total : $18,000</li>
                        <li>🏦 Post Discount Total : $17,100</li>
                        <li>🎉 Total Savings: $900</li>
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
                    <span>$</span>4,500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Comprehensive writing and translation services for growing businesses, including SEO content, technical writing, and localized marketing materials.
                </div>
                <div className="beta-features mb-20">
                  <strong>Features</strong>
                  <ul>
                    <li>🔍 SEO-Optimized Content Writing</li>
                    <li>📚 Technical Writing & Documentation</li>
                    <li>📢 Marketing & Ad Copywriting</li>
                    <li>🌐 Website Localization</li>
                    <li>✍️ Press Release Writing</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $4,500</li>
                        <li>📅 Annual Cost: $54,000</li>
                        <li>💰 Live Call Deposit: $5,400</li>
                        <li>🎁 Discount Amount: $5,400</li>
                        <li>🧾 Monthly After Discount: $4,050</li>
                        <li>💸 Pre Discount Total : $54,000</li>
                        <li>🏦 Post Discount Total : $48,600</li>
                        <li>🎉 Total Savings: $5,400</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $5,200</li>
                        <li>📅 Semiannual Cost: $31,200</li>
                        <li>💰 Live Call Deposit: $3,120</li>
                        <li>🎁 Discount Amount: $3,120</li>
                        <li>🧾 Monthly After Discount: $4,680</li>
                        <li>💸 Pre Discount Total : $31,200</li>
                        <li>🏦 Post Discount Total : $28,080</li>
                        <li>🎉 Total Savings: $3,120</li>
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
                    <span>$</span>7,500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Elite writing and localization solutions for large enterprises, including legal translation, academic writing, and strategic content planning for global audiences.
                </div>
                <div className="beta-features mb-20">
                  <strong>Features</strong>
                  <ul>
                    <li>⚖️ Legal & Certified Translation</li>
                    <li>🎓 Academic & Research Writing</li>
                    <li>🌎 Transcreation & Cultural Adaptation</li>
                    <li>🎙️ Scriptwriting (Video/Audio)</li>
                    <li>📚 Book & Ebook Writing</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $7,500</li>
                        <li>📅 Annual Cost: $90,000</li>
                        <li>💰 Live Call Deposit: $13,500</li>
                        <li>🎁 Discount Amount: $13,500</li>
                        <li>🧾 Monthly After Discount: $6,375</li>
                        <li>💸 Pre Discount Total : $90,000</li>
                        <li>🏦 Post Discount Total : $76,500</li>
                        <li>🎉 Total Savings: $13,500</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $8,500</li>
                        <li>📅 Semiannual Cost: $51,000</li>
                        <li>💰 Live Call Deposit: $7,650</li>
                        <li>🎁 Discount Amount: $7,650</li>
                        <li>🧾 Monthly After Discount: $7,225</li>
                        <li>💸 Pre Discount Total : $51,000</li>
                        <li>🏦 Post Discount Total : $43,350</li>
                        <li>🎉 Total Savings: $7,650</li>
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
            Writing & Translation Comparison Table {tableOpen ? "▲" : "▼"}
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

export default WritingTranslationPackages;
