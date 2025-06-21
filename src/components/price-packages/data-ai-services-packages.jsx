import React, { useState } from "react";
import PriceTag from "./PriceTag";

const DataAIServicesPackages = () => {
  // State for dropdowns for each card and each option
  const [dropdowns, setDropdowns] = useState({
    betaSelect: false,
    sigmaSelect: false,
    alphaSelect: false,
  });

  // Helper for select plan dropdown, now accepts a key for each card
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
          <a 
            href="#"
            className="dropdown-link"
            style={{
              display: 'block',
              padding: '10px 15px',
              color: '#fff',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Option A
          </a>
          <a 
            href="#"
            className="dropdown-link"
            style={{
              display: 'block',
              padding: '10px 15px',
              color: '#fff',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Option B
          </a>
          <a 
            href="#"
            className="dropdown-link"
            style={{
              display: 'block',
              padding: '10px 15px',
              color: '#fff',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Custom Plan
          </a>
        </div>
      )}
    </div>
  );

  // Ensure only one dropdown is open at a time
  const toggleDropdown = (key) => {
    setDropdowns((prev) => {
      const newState = Object.keys(prev).reduce((acc, k) => ({ ...acc, [k]: false }), {});
      return { ...newState, [key]: !prev[key] };
    });
  };

  // --- Comparison Table Data ---
  const [tableOpen, setTableOpen] = useState(false);
  const features = [
    { label: "💵 Monthly Cost", values: [<PriceTag usd={3000} key="0" />, <PriceTag usd={3500} key="1" />, <PriceTag usd={5500} key="2" />, <PriceTag usd={6300} key="3" />, <PriceTag usd={8500} key="4" />, <PriceTag usd={9500} key="5" />] },
    { label: "📅 Annual/Semiannual Cost", values: [<PriceTag usd={36000} key="6" />, <PriceTag usd={21000} key="7" />, <PriceTag usd={66000} key="8" />, <PriceTag usd={37800} key="9" />, <PriceTag usd={102000} key="10" />, <PriceTag usd={57000} key="11" />] },
    { label: "💰 Live Call Deposit", values: [<PriceTag usd={1800} key="12" />, <PriceTag usd={1050} key="13" />, <PriceTag usd={6600} key="14" />, <PriceTag usd={3780} key="15" />, <PriceTag usd={15300} key="16" />, <PriceTag usd={8550} key="17" />] },
    { label: "🎁 Discount Amount", values: [<PriceTag usd={1800} key="18" />, <PriceTag usd={1050} key="19" />, <PriceTag usd={6600} key="20" />, <PriceTag usd={3780} key="21" />, <PriceTag usd={15300} key="22" />, <PriceTag usd={8550} key="23" />] },
    { label: "🧾 Monthly After Discount", values: [<PriceTag usd={2850} key="24" />, <PriceTag usd={3325} key="25" />, <PriceTag usd={4950} key="26" />, <PriceTag usd={5670} key="27" />, <PriceTag usd={7225} key="28" />, <PriceTag usd={8075} key="29" />] },
    { label: "💸 Pre Discount Total", values: [<PriceTag usd={36000} key="30" />, <PriceTag usd={21000} key="31" />, <PriceTag usd={66000} key="32" />, <PriceTag usd={37800} key="33" />, <PriceTag usd={102000} key="34" />, <PriceTag usd={57000} key="35" />] },
    { label: "🏦 Post Discount Total", values: [<PriceTag usd={34200} key="36" />, <PriceTag usd={19950} key="37" />, <PriceTag usd={59400} key="38" />, <PriceTag usd={34020} key="39" />, <PriceTag usd={86700} key="40" />, <PriceTag usd={48450} key="41" />] },
    { label: "🎉 Total Savings", values: [<PriceTag usd={1800} key="42" />, <PriceTag usd={1050} key="43" />, <PriceTag usd={6600} key="44" />, <PriceTag usd={3780} key="45" />, <PriceTag usd={15300} key="46" />, <PriceTag usd={8550} key="47" />] },
    { label: "📉 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "✅ Basic Data Reporting", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Trend Analysis", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Data Cleaning & Preparation", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Dashboard Creation", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ KPI Tracking", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "❌ ML Model Development", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Predictive Analytics", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Data Pipeline Automation", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ A/B Testing & Optimization", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Dedicated Data Scientist", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ NLP", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Computer Vision", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Custom AI App Dev", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Cloud AI Integration", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ AI Strategy & Governance", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
  ];
  const headers = [
    "Feature / Metric",
    <span key="beta12">Beta Pack<br/>(12-Mo)</span>,
    <span key="beta6">Beta Pack<br/>(6-Mo)</span>,
    <span key="sigma12">Sigma Pack<br/>(12-Mo)</span>,
    <span key="sigma6">Sigma Pack<br/>(6-Mo)</span>,
    <span key="alpha12">Alpha Pack<br/>(12-Mo)</span>,
    <span key="alpha6">Alpha Pack<br/>(6-Mo)</span>,
  ];

  // Responsive stack for plan cards
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
                <span className="left"></span>Data & AI Services
                <span className="right"></span>
              </h1>
              <p> - Machine learning, analytics, and artificial intelligence solutions </p>
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
                    <span>$</span>3,000
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Foundational data analysis and reporting services to help businesses understand their basic performance and identify key trends.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>📊 Basic Data Reporting</li>
                    <li>📈 Trend Analysis</li>
                    <li>🧹 Data Cleaning & Preparation</li>
                    <li>📉 Dashboard Creation (Standard)</li>
                    <li>🔑 Key Performance Indicator (KPI) Tracking</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,000</li>
                        <li>📅 Annual Cost: $36,000</li>
                        <li>💰 Live Call Deposit: $1,800</li>
                        <li>🎁 Discount Amount: $1,800</li>
                        <li>🧾 Monthly After Discount: $2,850</li>
                        <li>💸 Pre Discount Total : $36,000</li>
                        <li>🏦 Post Discount Total : $34,200</li>
                        <li>🎉 Total Savings: $1,800</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,500</li>
                        <li>📅 Semiannual Cost: $21,000</li>
                        <li>💰 Live Call Deposit: $1,050</li>
                        <li>🎁 Discount Amount: $1,050</li>
                        <li>🧾 Monthly After Discount: $3,325</li>
                        <li>💸 Pre Discount Total : $21,000</li>
                        <li>🏦 Post Discount Total : $19,950</li>
                        <li>🎉 Total Savings: $1,050</li>
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
                    <span>$</span>5,500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Advanced data analytics and introductory AI model development for businesses looking to gain deeper insights and automate decision-making.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🧠 Machine Learning Model Development (Basic)</li>
                    <li>🔮 Predictive Analytics</li>
                    <li>⚙️ Data Pipeline Automation</li>
                    <li>🔬 A/B Testing & Optimization</li>
                    <li>🧑‍💻 Dedicated Data Scientist (Part-time)</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $5,500</li>
                        <li>📅 Annual Cost: $66,000</li>
                        <li>💰 Live Call Deposit: $6,600</li>
                        <li>🎁 Discount Amount: $6,600</li>
                        <li>🧾 Monthly After Discount: $4,950</li>
                        <li>💸 Pre Discount Total : $66,000</li>
                        <li>🏦 Post Discount Total : $59,400</li>
                        <li>🎉 Total Savings: $6,600</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $6,300</li>
                        <li>📅 Semiannual Cost: $37,800</li>
                        <li>💰 Live Call Deposit: $3,780</li>
                        <li>🎁 Discount Amount: $3,780</li>
                        <li>🧾 Monthly After Discount: $5,670</li>
                        <li>💸 Pre Discount Total : $37,800</li>
                        <li>🏦 Post Discount Total : $34,020</li>
                        <li>🎉 Total Savings: $3,780</li>
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
                    <span>$</span>8,500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Cutting-edge AI solutions, including advanced machine learning, natural language processing, and custom AI application development, for enterprises seeking to innovate and lead.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🗣️ Natural Language Processing (NLP)</li>
                    <li>👁️ Computer Vision Solutions</li>
                    <li>🤖 Custom AI Application Development</li>
                    <li>☁️ Cloud AI Integration</li>
                    <li>🎓 AI Strategy & Governance Consulting</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $8,500</li>
                        <li>📅 Annual Cost: $102,000</li>
                        <li>💰 Live Call Deposit: $15,300</li>
                        <li>🎁 Discount Amount: $15,300</li>
                        <li>🧾 Monthly After Discount: $7,225</li>
                        <li>💸 Pre Discount Total : $102,000</li>
                        <li>🏦 Post Discount Total : $86,700</li>
                        <li>🎉 Total Savings: $15,300</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $9,500</li>
                        <li>📅 Semiannual Cost: $57,000</li>
                        <li>💰 Live Call Deposit: $8,550</li>
                        <li>🎁 Discount Amount: $8,550</li>
                        <li>🧾 Monthly After Discount: $8,075</li>
                        <li>💸 Pre Discount Total : $57,000</li>
                        <li>🏦 Post Discount Total : $48,450</li>
                        <li>🎉 Total Savings: $8,550</li>
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
            Data & AI Services Comparison Table {tableOpen ? "▲" : "▼"}
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

export default DataAIServicesPackages;
