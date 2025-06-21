import React, { useState } from "react";
import PriceTag from "./PriceTag";

const LegalPackages = () => {
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
    { label: "💵 Monthly Cost", values: [<PriceTag usd={3500} key="0" />, <PriceTag usd={4000} key="1" />, <PriceTag usd={6500} key="2" />, <PriceTag usd={7400} key="3" />, <PriceTag usd={9500} key="4" />, <PriceTag usd={10000} key="5" />] },
    { label: "📅 Annual/Semiannual Cost", values: [<PriceTag usd={42000} key="6" />, <PriceTag usd={24000} key="7" />, <PriceTag usd={78000} key="8" />, <PriceTag usd={44400} key="9" />, <PriceTag usd={114000} key="10" />, <PriceTag usd={60000} key="11" />] },
    { label: "💰 Live Call Deposit", values: [<PriceTag usd={2100} key="12" />, <PriceTag usd={1200} key="13" />, <PriceTag usd={7800} key="14" />, <PriceTag usd={4440} key="15" />, <PriceTag usd={17100} key="16" />, <PriceTag usd={9000} key="17" />] },
    { label: "🎁 Discount Amount", values: [<PriceTag usd={2100} key="18" />, <PriceTag usd={1200} key="19" />, <PriceTag usd={7800} key="20" />, <PriceTag usd={4440} key="21" />, <PriceTag usd={17100} key="22" />, <PriceTag usd={9000} key="23" />] },
    { label: "🧾 Monthly After Discount", values: [<PriceTag usd={3325} key="24" />, <PriceTag usd={3800} key="25" />, <PriceTag usd={5850} key="26" />, <PriceTag usd={6660} key="27" />, <PriceTag usd={8075} key="28" />, <PriceTag usd={8500} key="29" />] },
    { label: "💸 Pre Discount Total", values: [<PriceTag usd={42000} key="30" />, <PriceTag usd={24000} key="31" />, <PriceTag usd={78000} key="32" />, <PriceTag usd={44400} key="33" />, <PriceTag usd={114000} key="34" />, <PriceTag usd={60000} key="35" />] },
    { label: "🏦 Post Discount Total", values: [<PriceTag usd={39900} key="36" />, <PriceTag usd={22800} key="37" />, <PriceTag usd={70200} key="38" />, <PriceTag usd={40000} key="39" />, <PriceTag usd={96900} key="40" />, <PriceTag usd={51000} key="41" />] },
    { label: "🎉 Total Savings", values: [<PriceTag usd={2100} key="42" />, <PriceTag usd={1200} key="43" />, <PriceTag usd={7800} key="44" />, <PriceTag usd={4440} key="45" />, <PriceTag usd={17100} key="46" />, <PriceTag usd={9000} key="47" />] },
    { label: "📉 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "✅ Contract Review", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "⚖️ Business Registration", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "🛡️ IP Overview", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "📋 Compliance Checklist", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "📧 Basic Legal Consultations", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✍️ Custom Contract Drafting", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "🔒 Data Privacy & GDPR", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "💼 Employment Law Advisory", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "📈 M&A Support", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "👨‍⚖️ Regulatory Filings", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "⚖️ Litigation Support", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "🌍 International Law", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "📊 Corporate Governance", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "🚨 Crisis Management Legal", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "🧩 Specialized Industry", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
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
                <span className="left"></span>Legal
                <span className="right"></span>
              </h1>
              <p> - Compliance and legal advisory services </p>
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
                    <span>$</span>3,500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Foundational legal support for startups and small businesses, including basic contract review and compliance checks.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>📜 Contract Review (Basic)</li>
                    <li>⚖️ Business Registration & Licensing</li>
                    <li>🛡️ Intellectual Property (IP) Overview</li>
                    <li>📋 Compliance Checklist Development</li>
                    <li>📧 Basic Legal Consultations (Email/Chat)</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,500</li>
                        <li>📅 Annual Cost: $42,000</li>
                        <li>💰 Live Call Deposit: $2,100</li>
                        <li>🎁 Discount Amount: $2,100</li>
                        <li>🧾 Monthly After Discount: $3,325</li>
                        <li>💸 Pre Discount Total : $42,000</li>
                        <li>🏦 Post Discount Total : $39,900</li>
                        <li>🎉 Total Savings: $2,100</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $4,000</li>
                        <li>📅 Semiannual Cost: $24,000</li>
                        <li>💰 Live Call Deposit: $1,200</li>
                        <li>🎁 Discount Amount: $1,200</li>
                        <li>🧾 Monthly After Discount: $3,800</li>
                        <li>💸 Pre Discount Total : $24,000</li>
                        <li>🏦 Post Discount Total : $22,800</li>
                        <li>🎉 Total Savings: $1,200</li>
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
                    <span>$</span>6,500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Comprehensive legal advisory for growing businesses, including detailed contract drafting, data privacy, and employment law support.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>✍️ Custom Contract Drafting</li>
                    <li>🔒 Data Privacy & GDPR Compliance</li>
                    <li>💼 Employment Law Advisory</li>
                    <li>📈 Mergers & Acquisitions (M&A) Support (Basic)</li>
                    <li>👨‍⚖️ Regulatory Filings & Permits</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $6,500</li>
                        <li>📅 Annual Cost: $78,000</li>
                        <li>💰 Live Call Deposit: $7,800</li>
                        <li>🎁 Discount Amount: $7,800</li>
                        <li>🧾 Monthly After Discount: $5,850</li>
                        <li>💸 Pre Discount Total : $78,000</li>
                        <li>🏦 Post Discount Total : $70,200</li>
                        <li>🎉 Total Savings: $7,800</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $7,400</li>
                        <li>📅 Semiannual Cost: $44,400</li>
                        <li>💰 Live Call Deposit: $4,440</li>
                        <li>🎁 Discount Amount: $4,440</li>
                        <li>🧾 Monthly After Discount: $6,660</li>
                        <li>💸 Pre Discount Total : $44,400</li>
                        <li>🏦 Post Discount Total : $40,000</li>
                        <li>🎉 Total Savings: $4,440</li>
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
                    <span>$</span>9,500
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Premium legal services for large corporations and complex transactions, including litigation support, international law, and specialized industry compliance.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🏛️ Litigation & Dispute Resolution Support</li>
                    <li>🌍 International Law & Cross-Border Advisory</li>
                    <li>📊 Corporate Governance & Board Advisory</li>
                    <li>🚨 Crisis Management Legal Support</li>
                    <li>🧩 Specialized Industry Compliance</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $9,500</li>
                        <li>📅 Annual Cost: $114,000</li>
                        <li>💰 Live Call Deposit: $17,100</li>
                        <li>🎁 Discount Amount: $17,100</li>
                        <li>🧾 Monthly After Discount: $8,075</li>
                        <li>💸 Pre Discount Total : $114,000</li>
                        <li>🏦 Post Discount Total : $96,900</li>
                        <li>🎉 Total Savings: $17,100</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $10,000</li>
                        <li>📅 Semiannual Cost: $60,000</li>
                        <li>💰 Live Call Deposit: $9,000</li>
                        <li>🎁 Discount Amount: $9,000</li>
                        <li>🧾 Monthly After Discount: $8,500</li>
                        <li>💸 Pre Discount Total : $60,000</li>
                        <li>🏦 Post Discount Total : $51,000</li>
                        <li>🎉 Total Savings: $9,000</li>
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
            Legal Comparison Table {tableOpen ? "▲" : "▼"}
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

export default LegalPackages;
