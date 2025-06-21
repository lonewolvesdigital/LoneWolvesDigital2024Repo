import React, { useState } from "react";
import PriceTag from "./PriceTag";

const SoftwareDevITPackages = () => {
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
    { label: "💵 Monthly Cost", values: [<PriceTag usd={3300} key="0" />, <PriceTag usd={3800} key="1" />, <PriceTag usd={6200} key="2" />, <PriceTag usd={7100} key="3" />, <PriceTag usd={9200} key="4" />, <PriceTag usd={9900} key="5" />] },
    { label: "📅 Annual/Semiannual Cost", values: [<PriceTag usd={39600} key="6" />, <PriceTag usd={22800} key="7" />, <PriceTag usd={74400} key="8" />, <PriceTag usd={42600} key="9" />, <PriceTag usd={110400} key="10" />, <PriceTag usd={59400} key="11" />] },
    { label: "💰 Live Call Deposit", values: [<PriceTag usd={1980} key="12" />, <PriceTag usd={1140} key="13" />, <PriceTag usd={7440} key="14" />, <PriceTag usd={4260} key="15" />, <PriceTag usd={16560} key="16" />, <PriceTag usd={8910} key="17" />] },
    { label: "🎁 Discount Amount", values: [<PriceTag usd={1980} key="18" />, <PriceTag usd={1140} key="19" />, <PriceTag usd={7440} key="20" />, <PriceTag usd={4260} key="21" />, <PriceTag usd={16560} key="22" />, <PriceTag usd={8910} key="23" />] },
    { label: "🧾 Monthly After Discount", values: [<PriceTag usd={3135} key="24" />, <PriceTag usd={3610} key="25" />, <PriceTag usd={5580} key="26" />, <PriceTag usd={6390} key="27" />, <PriceTag usd={7820} key="28" />, <PriceTag usd={8415} key="29" />] },
    { label: "💸 Pre Discount Total", values: [<PriceTag usd={39600} key="30" />, <PriceTag usd={22800} key="31" />, <PriceTag usd={74400} key="32" />, <PriceTag usd={42600} key="33" />, <PriceTag usd={110400} key="34" />, <PriceTag usd={59400} key="35" />] },
    { label: "🏦 Post Discount Total", values: [<PriceTag usd={37620} key="36" />, <PriceTag usd={21660} key="37" />, <PriceTag usd={66960} key="38" />, <PriceTag usd={38340} key="39" />, <PriceTag usd={93840} key="40" />, <PriceTag usd={50490} key="41" />] },
    { label: "🎉 Total Savings", values: [<PriceTag usd={1980} key="42" />, <PriceTag usd={1140} key="43" />, <PriceTag usd={7440} key="44" />, <PriceTag usd={4260} key="45" />, <PriceTag usd={16560} key="46" />, <PriceTag usd={8910} key="47" />] },
    { label: "📉 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "✅ Basic Website Development", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ IT Helpdesk Support", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Cloud Storage Setup", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Basic Cybersecurity", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Software Installation", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "❌ Custom Web App Development", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Network Setup & Management", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Advanced Cybersecurity", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Data Backup & Recovery", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Dedicated IT Specialist", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Mobile App Development", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Enterprise Cloud Arch.", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Threat Intelligence", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ IT Governance", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Emerging Tech Consulting", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
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
                <span className="left"></span>Software Development & IT
                <span className="right"></span>
              </h1>
              <p> - Custom application development and IT solutions </p>
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
                    <span>$</span>3,300
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Essential software development and IT support for startups and small businesses, including basic website development and IT helpdesk services.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🌐 Basic Website Development</li>
                    <li>⚙️ IT Helpdesk Support</li>
                    <li>☁️ Cloud Storage Setup</li>
                    <li>🛡️ Basic Cybersecurity Measures</li>
                    <li>💻 Software Installation & Configuration</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,300</li>
                        <li>📅 Annual Cost: $39,600</li>
                        <li>💰 Live Call Deposit: $1,980</li>
                        <li>🎁 Discount Amount: $1,980</li>
                        <li>🧾 Monthly After Discount: $3,135</li>
                        <li>💸 Pre Discount Total : $39,600</li>
                        <li>🏦 Post Discount Total : $37,620</li>
                        <li>🎉 Total Savings: $1,980</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,800</li>
                        <li>📅 Semiannual Cost: $22,800</li>
                        <li>💰 Live Call Deposit: $1,140</li>
                        <li>🎁 Discount Amount: $1,140</li>
                        <li>🧾 Monthly After Discount: $3,610</li>
                        <li>💸 Pre Discount Total : $22,800</li>
                        <li>🏦 Post Discount Total : $21,660</li>
                        <li>🎉 Total Savings: $1,140</li>
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
                    <span>$</span>6,200
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Comprehensive software development and IT solutions for growing businesses, offering custom web applications, network management, and enhanced security.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>📱 Custom Web Application Development</li>
                    <li>📡 Network Setup & Management</li>
                    <li>🔐 Advanced Cybersecurity Audits</li>
                    <li>🔄 Data Backup & Disaster Recovery</li>
                    <li>👨‍💻 Dedicated IT Support Specialist</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $6,200</li>
                        <li>📅 Annual Cost: $74,400</li>
                        <li>💰 Live Call Deposit: $7,440</li>
                        <li>🎁 Discount Amount: $7,440</li>
                        <li>🧾 Monthly After Discount: $5,580</li>
                        <li>💸 Pre Discount Total : $74,400</li>
                        <li>🏦 Post Discount Total : $66,960</li>
                        <li>🎉 Total Savings: $7,440</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $7,100</li>
                        <li>📅 Semiannual Cost: $42,600</li>
                        <li>💰 Live Call Deposit: $4,260</li>
                        <li>🎁 Discount Amount: $4,260</li>
                        <li>🧾 Monthly After Discount: $6,390</li>
                        <li>💸 Pre Discount Total : $42,600</li>
                        <li>🏦 Post Discount Total : $38,340</li>
                        <li>🎉 Total Savings: $4,260</li>
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
                    <span>$</span>9,200
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Enterprise-grade software development and IT infrastructure, including mobile app development, cloud architecture, and proactive threat intelligence.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>📲 Mobile App Development (iOS/Android)</li>
                    <li>☁️ Enterprise Cloud Architecture</li>
                    <li>Threat Intelligence & Incident Response</li>
                    <li>📊 IT Governance & Compliance</li>
                    <li>💡 Emerging Tech Consulting (Blockchain, IoT)</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $9,200</li>
                        <li>📅 Annual Cost: $110,400</li>
                        <li>💰 Live Call Deposit: $16,560</li>
                        <li>🎁 Discount Amount: $16,560</li>
                        <li>🧾 Monthly After Discount: $7,820</li>
                        <li>💸 Pre Discount Total : $110,400</li>
                        <li>🏦 Post Discount Total : $93,840</li>
                        <li>🎉 Total Savings: $16,560</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $9,900</li>
                        <li>📅 Semiannual Cost: $59,400</li>
                        <li>💰 Live Call Deposit: $8,910</li>
                        <li>🎁 Discount Amount: $8,910</li>
                        <li>🧾 Monthly After Discount: $8,415</li>
                        <li>💸 Pre Discount Total : $59,400</li>
                        <li>🏦 Post Discount Total : $50,490</li>
                        <li>🎉 Total Savings: $8,910</li>
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
            Software Dev & IT Comparison Table {tableOpen ? "▲" : "▼"}
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

export default SoftwareDevITPackages;
