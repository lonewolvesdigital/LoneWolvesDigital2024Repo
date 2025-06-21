import React, { useState } from "react";
import PriceTag from "./PriceTag";

const EngineeringArchitecturePackages = () => {
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
    { label: "💵 Monthly Cost", values: [<PriceTag usd={3200} key="0" />, <PriceTag usd={3700} key="1" />, <PriceTag usd={6000} key="2" />, <PriceTag usd={6900} key="3" />, <PriceTag usd={9000} key="4" />, <PriceTag usd={10000} key="5" />] },
    { label: "📅 Annual/Semiannual Cost", values: [<PriceTag usd={38400} />, <PriceTag usd={22200} />, <PriceTag usd={72000} />, <PriceTag usd={41400} />, <PriceTag usd={108000} />, <PriceTag usd={60000} />] },
    { label: "💰 Live Call Deposit", values: [<PriceTag usd={1920} />, <PriceTag usd={1110} />, <PriceTag usd={7200} />, <PriceTag usd={4140} />, <PriceTag usd={16200} />, <PriceTag usd={9000} />] },
    { label: "🎁 Discount Amount", values: [<PriceTag usd={1920} />, <PriceTag usd={1110} />, <PriceTag usd={7200} />, <PriceTag usd={4140} />, <PriceTag usd={16200} />, <PriceTag usd={9000} />] },
    { label: "🧾 Monthly After Discount", values: [<PriceTag usd={3040} />, <PriceTag usd={3515} />, <PriceTag usd={5400} />, <PriceTag usd={6210} />, <PriceTag usd={7650} />, <PriceTag usd={8500} />] },
    { label: "💸 Pre Discount Total", values: [<PriceTag usd={38400} />, <PriceTag usd={22200} />, <PriceTag usd={72000} />, <PriceTag usd={41400} />, <PriceTag usd={108000} />, <PriceTag usd={60000} />] },
    { label: "🏦 Post Discount Total", values: [<PriceTag usd={36480} />, <PriceTag usd={21090} />, <PriceTag usd={64800} />, <PriceTag usd={37260} />, <PriceTag usd={91800} />, <PriceTag usd={51000} />] },
    { label: "🎉 Total Savings", values: [<PriceTag usd={1920} />, <PriceTag usd={1110} />, <PriceTag usd={7200} />, <PriceTag usd={4140} />, <PriceTag usd={16200} />, <PriceTag usd={9000} />] },
    { label: "📉 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "✅ Conceptual Design", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Basic CAD Drafting", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Material Specification", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Site Analysis", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Code Compliance Review", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "❌ Advanced 3D Modeling", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Structural Analysis & Design", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ MEP Design", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Construction Documentation", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Project Scheduling", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ BIM", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Sustainable Design", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Advanced Simulation", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Value Engineering", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ On-Site Supervision", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
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
                <span className="left"></span>Engineering & Architecture
                <span className="right"></span>
              </h1>
              <p> - Technical design and infrastructure development </p>
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
                    <span>$</span>3,200
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Foundational engineering and architectural support for small-scale projects, ensuring structural integrity and basic design compliance.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>📐 Conceptual Design</li>
                    <li>🏗️ Basic CAD Drafting</li>
                    <li>📝 Material Specification (Standard)</li>
                    <li>🚧 Site Analysis (Preliminary)</li>
                    <li>📋 Code Compliance Review (Basic)</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,200</li>
                        <li>📅 Annual Cost: $38,400</li>
                        <li>💰 Live Call Deposit: $1,920</li>
                        <li>🎁 Discount Amount: $1,920</li>
                        <li>🧾 Monthly After Discount: $3,040</li>
                        <li>💸 Pre Discount Total : $38,400</li>
                        <li>🏦 Post Discount Total : $36,480</li>
                        <li>🎉 Total Savings: $1,920</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,700</li>
                        <li>📅 Semiannual Cost: $22,200</li>
                        <li>💰 Live Call Deposit: $1,110</li>
                        <li>🎁 Discount Amount: $1,110</li>
                        <li>🧾 Monthly After Discount: $3,515</li>
                        <li>💸 Pre Discount Total : $22,200</li>
                        <li>🏦 Post Discount Total : $21,090</li>
                        <li>🎉 Total Savings: $1,110</li>
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
                    <span>$</span>6,000
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Comprehensive engineering and architectural services for medium-sized projects, including detailed design, structural analysis, and project management.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🌐 Advanced 3D Modeling</li>
                    <li>🔩 Structural Analysis & Design</li>
                    <li>💡 MEP (Mechanical, Electrical, Plumbing) Design</li>
                    <li>🛠️ Construction Documentation</li>
                    <li>🗓️ Project Scheduling & Coordination</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $6,000</li>
                        <li>📅 Annual Cost: $72,000</li>
                        <li>💰 Live Call Deposit: $7,200</li>
                        <li>🎁 Discount Amount: $7,200</li>
                        <li>🧾 Monthly After Discount: $5,400</li>
                        <li>💸 Pre Discount Total : $72,000</li>
                        <li>🏦 Post Discount Total : $64,800</li>
                        <li>🎉 Total Savings: $7,200</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $6,900</li>
                        <li>📅 Semiannual Cost: $41,400</li>
                        <li>💰 Live Call Deposit: $4,140</li>
                        <li>🎁 Discount Amount: $4,140</li>
                        <li>🧾 Monthly After Discount: $6,210</li>
                        <li>💸 Pre Discount Total : $41,400</li>
                        <li>🏦 Post Discount Total : $37,260</li>
                        <li>🎉 Total Savings: $4,140</li>
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
                    <span>$</span>9,000
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Elite engineering and architectural solutions for large-scale, complex projects, offering BIM integration, sustainable design, and advanced simulation.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🏗️ Building Information Modeling (BIM)</li>
                    <li>🌱 Sustainable Design & LEED Consulting</li>
                    <li>🔄 Advanced Simulation & Optimization</li>
                    <li>🔬 Value Engineering</li>
                    <li>👷 On-Site Supervision & Quality Control</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $9,000</li>
                        <li>📅 Annual Cost: $108,000</li>
                        <li>💰 Live Call Deposit: $16,200</li>
                        <li>🎁 Discount Amount: $16,200</li>
                        <li>🧾 Monthly After Discount: $7,650</li>
                        <li>💸 Pre Discount Total : $108,000</li>
                        <li>🏦 Post Discount Total : $91,800</li>
                        <li>🎉 Total Savings: $16,200</li>
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
            Engineering & Architecture Comparison Table {tableOpen ? "▲" : "▼"}
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

export default EngineeringArchitecturePackages;
