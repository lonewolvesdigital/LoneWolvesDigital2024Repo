import React, { useState } from "react";

const HRTrainingPackages = () => {
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
    { label: "\uD83D\uDCB5 Monthly Cost", values: ["$2,600", "$3,100", "$4,700", "$5,400", "$7,600", "$8,600"] },
    { label: "\uD83D\uDCC5 Annual/Semiannual Cost", values: ["$31,200", "$18,600", "$56,400", "$32,400", "$91,200", "$51,600"] },
    { label: "\uD83D\uDCB0 Live Call Deposit", values: ["$1,560", "$930", "$5,640", "$3,240", "$13,680", "$7,740"] },
    { label: "\uD83C\uDF81 Discount Amount", values: ["$1,560", "$930", "$5,640", "$3,240", "$13,680", "$7,740"] },
    { label: "\uD83D\uDCDD Monthly After Discount", values: ["$2,470", "$2,945", "$4,230", "$4,860", "$6,460", "$7,310"] },
    { label: "\uD83D\uDCB8 Pre Discount Total", values: ["$31,200", "$18,600", "$56,400", "$32,400", "$91,200", "$51,600"] },
    { label: "\uD83C\uDFE6 Post Discount Total", values: ["$29,640", "$17,670", "$50,760", "$29,160", "$77,520", "$43,860"] },
    { label: "\uD83C\uDF89 Total Savings", values: ["$1,560", "$930", "$5,640", "$3,240", "$13,680", "$7,740"] },
    { label: "\uD83D\uDCB9 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "\uD83D\uDCDC HR Policy & Procedure Dev", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "onboarding and Offboarding", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCCA Employee Record Management", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83E\uDD1D Conflict Resolution", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83E\uDD91 Performance Review Support", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDD0D Talent Acquisition", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCDA Customized Training", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCC8 Employee Engagement", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCA1 HRIS Implementation", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\u2696️ Compliance & Risk Mgmt", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDE80 Organizational Development", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDFC6 Leadership Coaching", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDF0D Global HR Strategy", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83D\uDD04 Workforce Planning", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83E\uDD1D Employee Relations", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
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
                <span className="left"></span>HR & Training
                <span className="right"></span>
              </h1>
              <p> - Human resources and professional development </p>
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
                    <span>$</span>2,600
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Essential HR support for small to medium-sized businesses, covering basic compliance, onboarding, and employee record management.
                </div>
                <div className="beta-features mb-20">
                  <strong>Features</strong>
                  <ul>
                    <li>📜 HR Policy & Procedure Development (Basic)</li>
                    <li>onboarding and Offboarding Support</li>
                    <li>📊 Employee Record Management</li>
                    <li>🤝 Conflict Resolution (Basic)</li>
                    <li>🧑‍🤝‍🧑 Performance Review Support</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $2,600</li>
                        <li>📅 Annual Cost: $31,200</li>
                        <li>💰 Live Call Deposit: $1,560</li>
                        <li>🎁 Discount Amount: $1,560</li>
                        <li>🧾 Monthly After Discount: $2,470</li>
                        <li>💸 Pre Discount Total : $31,200</li>
                        <li>🏦 Post Discount Total : $29,640</li>
                        <li>🎉 Total Savings: $1,560</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,100</li>
                        <li>📅 Semiannual Cost: $18,600</li>
                        <li>💰 Live Call Deposit: $930</li>
                        <li>🎁 Discount Amount: $930</li>
                        <li>🧾 Monthly After Discount: $2,945</li>
                        <li>💸 Pre Discount Total : $18,600</li>
                        <li>🏦 Post Discount Total : $17,670</li>
                        <li>🎉 Total Savings: $930</li>
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
                    <span>$</span>4,700
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Comprehensive HR and training solutions for growing companies, including talent acquisition, advanced training modules, and employee engagement strategies.
                </div>
                <div className="beta-features mb-20">
                  <strong>Features</strong>
                  <ul>
                    <li>🔍 Talent Acquisition Support</li>
                    <li>📚 Customized Training & Development Programs</li>
                    <li>📈 Employee Engagement Initiatives</li>
                    <li>💡 HRIS Implementation & Management</li>
                    <li>⚖️ Compliance & Risk Management (Advanced)</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $4,700</li>
                        <li>📅 Annual Cost: $56,400</li>
                        <li>💰 Live Call Deposit: $5,640</li>
                        <li>🎁 Discount Amount: $5,640</li>
                        <li>🧾 Monthly After Discount: $4,230</li>
                        <li>💸 Pre Discount Total : $56,400</li>
                        <li>🏦 Post Discount Total : $50,760</li>
                        <li>🎉 Total Savings: $5,640</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $5,400</li>
                        <li>📅 Semiannual Cost: $32,400</li>
                        <li>💰 Live Call Deposit: $3,240</li>
                        <li>🎁 Discount Amount: $3,240</li>
                        <li>🧾 Monthly After Discount: $4,860</li>
                        <li>💸 Pre Discount Total : $32,400</li>
                        <li>🏦 Post Discount Total : $29,160</li>
                        <li>🎉 Total Savings: $3,240</li>
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
                    <span>$</span>7,600
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Executive-level HR consulting and strategic talent management for large enterprises, focusing on organizational development, leadership training, and global HR strategy.
                </div>
                <div className="beta-features mb-20">
                  <strong>Features</strong>
                  <ul>
                    <li>🚀 Organizational Development</li>
                    <li>🎯 Leadership & Executive Coaching</li>
                    <li>🌍 Global HR Strategy Consulting</li>
                    <li>🔄 Workforce Planning & Analytics</li>
                    <li>🤝 Employee Relations & Mediation (Complex)</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $7,600</li>
                        <li>📅 Annual Cost: $91,200</li>
                        <li>💰 Live Call Deposit: $13,680</li>
                        <li>🎁 Discount Amount: $13,680</li>
                        <li>🧾 Monthly After Discount: $6,460</li>
                        <li>💸 Pre Discount Total : $91,200</li>
                        <li>🏦 Post Discount Total : $77,520</li>
                        <li>🎉 Total Savings: $13,680</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $8,600</li>
                        <li>📅 Semiannual Cost: $51,600</li>
                        <li>💰 Live Call Deposit: $7,740</li>
                        <li>🎁 Discount Amount: $7,740</li>
                        <li>🧾 Monthly After Discount: $7,310</li>
                        <li>💸 Pre Discount Total : $51,600</li>
                        <li>🏦 Post Discount Total : $43,860</li>
                        <li>🎉 Total Savings: $7,740</li>
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
            HR & Training Comparison Table {tableOpen ? "▲" : "▼"}
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

export default HRTrainingPackages;
