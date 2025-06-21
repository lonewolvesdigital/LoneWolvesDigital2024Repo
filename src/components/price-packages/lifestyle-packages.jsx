import React, { useState } from "react";
import PriceTag from "./PriceTag";

const LifestylePackages = () => {
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
    { label: "💵 Monthly Cost", values: [<PriceTag usd={2500} key="0" />, <PriceTag usd={3000} key="1" />, <PriceTag usd={4500} key="2" />, <PriceTag usd={5200} key="3" />, <PriceTag usd={7500} key="4" />, <PriceTag usd={8500} key="5" />] },
    { label: "📅 Annual/Semiannual Cost", values: [<PriceTag usd={30000} key="6" />, <PriceTag usd={18000} key="7" />, <PriceTag usd={54000} key="8" />, <PriceTag usd={31200} key="9" />, <PriceTag usd={90000} key="10" />, <PriceTag usd={51000} key="11" />] },
    { label: "💰 Live Call Deposit", values: [<PriceTag usd={1500} key="12" />, <PriceTag usd={900} key="13" />, <PriceTag usd={5400} key="14" />, <PriceTag usd={3120} key="15" />, <PriceTag usd={13500} key="16" />, <PriceTag usd={7650} key="17" />] },
    { label: "🎁 Discount Amount", values: [<PriceTag usd={1500} key="18" />, <PriceTag usd={900} key="19" />, <PriceTag usd={5400} key="20" />, <PriceTag usd={3120} key="21" />, <PriceTag usd={13500} key="22" />, <PriceTag usd={7650} key="23" />] },
    { label: "🧾 Monthly After Discount", values: [<PriceTag usd={2375} key="24" />, <PriceTag usd={2850} key="25" />, <PriceTag usd={4050} key="26" />, <PriceTag usd={4680} key="27" />, <PriceTag usd={6375} key="28" />, <PriceTag usd={7225} key="29" />] },
    { label: "💸 Pre Discount Total", values: [<PriceTag usd={30000} key="30" />, <PriceTag usd={18000} key="31" />, <PriceTag usd={54000} key="32" />, <PriceTag usd={31200} key="33" />, <PriceTag usd={90000} key="34" />, <PriceTag usd={51000} key="35" />] },
    { label: "🏦 Post Discount Total", values: [<PriceTag usd={28500} key="36" />, <PriceTag usd={17100} key="37" />, <PriceTag usd={48600} key="38" />, <PriceTag usd={28080} key="39" />, <PriceTag usd={76500} key="40" />, <PriceTag usd={43350} key="41" />] },
    { label: "🎉 Total Savings", values: [<PriceTag usd={1500} key="42" />, <PriceTag usd={900} key="43" />, <PriceTag usd={5400} key="44" />, <PriceTag usd={3120} key="45" />, <PriceTag usd={13500} key="46" />, <PriceTag usd={7650} key="47" />] },
    { label: "📉 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "✅ Basic Time Management", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Wellness Planning", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Personal Shopping", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Travel Itinerary Planning", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "✅ Personal Organization", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "❌ Nutrition & Fitness Coaching", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Event Planning", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Concierge Services", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Home Management", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Mindfulness & Stress", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "❌ Luxury Travel", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Bespoke Experience", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Personal Development", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Art & Collectibles Advisory", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "❌ Digital Legacy Management", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
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
                <span className="left"></span>Lifestyle
                <span className="right"></span>
              </h1>
              <p> - Personal and lifestyle enhancement services </p>
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
                  🏷️ Deal Summary: Introductory lifestyle services for individuals seeking to improve personal well-being and efficiency, focusing on foundational planning and organization.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🗓️ Basic Time Management Coaching</li>
                    <li>🧘 Wellness Planning (Intro)</li>
                    <li>🛒 Personal Shopping (Limited)</li>
                    <li>✈️ Travel Itinerary Planning (Basic)</li>
                    <li>📚 Personal Organization & Decluttering</li>
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
                  🏷️ Deal Summary: Enhanced lifestyle management for busy professionals, offering holistic wellness programs, event planning, and personalized concierge services.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🍎 Nutrition & Fitness Coaching</li>
                    <li>🎉 Event Planning (Small Scale)</li>
                    <li>Concierge Services (Personal Appointments, Reservations)</li>
                    <li>🏡 Home Management & Organization</li>
                    <li>🌱 Mindfulness & Stress Reduction Programs</li>
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
                  🏷️ Deal Summary: Exclusive lifestyle management for high-net-worth individuals, providing luxury travel planning, personalized bespoke experiences, and comprehensive personal assistance.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>✈️ Luxury Travel & Expedition Planning</li>
                    <li>🌟 Bespoke Experience Curation</li>
                    <li>🎓 Personal Development & Coaching (Advanced)</li>
                    <li>🖼️ Art & Collectibles Advisory</li>
                    <li>🔐 Digital Legacy Management</li>
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
            Lifestyle Comparison Table {tableOpen ? "▲" : "▼"}
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

export default LifestylePackages;
