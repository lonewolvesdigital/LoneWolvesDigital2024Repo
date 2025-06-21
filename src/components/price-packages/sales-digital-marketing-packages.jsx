import React, { useState } from "react";
import PriceTag from "./PriceTag";

const SalesDigitalMarketingPackages = () => {
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
    { label: "\uD83D\uDCB5 Monthly Cost", values: [<PriceTag usd={2900} />, <PriceTag usd={3400} />, <PriceTag usd={5200} />, <PriceTag usd={6000} />, <PriceTag usd={8200} />, <PriceTag usd={9200} />] },
    { label: "\uD83D\uDCC5 Annual/Semiannual Cost", values: [<PriceTag usd={34800} />, <PriceTag usd={20400} />, <PriceTag usd={62400} />, <PriceTag usd={36000} />, <PriceTag usd={98400} />, <PriceTag usd={55200} />] },
    { label: "\uD83D\uDCB0 Live Call Deposit", values: [<PriceTag usd={1740} />, <PriceTag usd={1020} />, <PriceTag usd={6240} />, <PriceTag usd={3600} />, <PriceTag usd={14760} />, <PriceTag usd={8280} />] },
    { label: "\uD83C\uDF81 Discount Amount", values: [<PriceTag usd={1740} />, <PriceTag usd={1020} />, <PriceTag usd={6240} />, <PriceTag usd={3600} />, <PriceTag usd={14760} />, <PriceTag usd={8280} />] },
    { label: "\uD83D\uDCDD Monthly After Discount", values: [<PriceTag usd={2755} />, <PriceTag usd={3230} />, <PriceTag usd={4680} />, <PriceTag usd={5400} />, <PriceTag usd={6970} />, <PriceTag usd={7820} />] },
    { label: "\uD83D\uDCB8 Pre Discount Total", values: [<PriceTag usd={34800} />, <PriceTag usd={20400} />, <PriceTag usd={62400} />, <PriceTag usd={36000} />, <PriceTag usd={98400} />, <PriceTag usd={55200} />] },
    { label: "\uD83C\uDFE6 Post Discount Total", values: [<PriceTag usd={33060} />, <PriceTag usd={19380} />, <PriceTag usd={56160} />, <PriceTag usd={32400} />, <PriceTag usd={83640} />, <PriceTag usd={46920} />] },
    { label: "\uD83C\uDF89 Total Savings", values: [<PriceTag usd={1740} />, <PriceTag usd={1020} />, <PriceTag usd={6240} />, <PriceTag usd={3600} />, <PriceTag usd={14760} />, <PriceTag usd={8280} />] },
    { label: "\uD83D\uDCB9 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "\uD83D\uDCF1 Social Media Management", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCE7 Email Marketing Setup", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDD0D SEO Audit & Basic Opt", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCC8 Content Creation", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "🎯 Lead Generation", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCE3 Paid Ad Campaign Mgmt", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "Conversion Rate Optimization", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDD17 CRM Integration & Sales", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCCA Advanced Analytics", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "🤝 Influencer Marketing", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCC8 Full-Funnel Strategy", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "🌎 International SEO/SEM", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "🚀 Growth Hacking", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83D\uDD17 Partner & Affiliate", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "🎤 PR & Reputation Management", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
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
                <span className="left"></span>Sales & Digital Marketing
                <span className="right"></span>
              </h1>
              <p> - Growth strategies and online marketing </p>
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
                    <span>$</span>2,900
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Foundational digital marketing and sales support for new businesses aiming to establish an online presence and generate initial leads.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>📱 Social Media Management (Basic)</li>
                    <li>📧 Email Marketing Setup</li>
                    <li>🔍 SEO Audit & Basic Optimization</li>
                    <li>📈 Content Creation (Blog Posts)</li>
                    <li>🎯 Lead Generation (Basic Strategies)</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $2,900</li>
                        <li>📅 Annual Cost: $34,800</li>
                        <li>💰 Live Call Deposit: $1,740</li>
                        <li>🎁 Discount Amount: $1,740</li>
                        <li>🧾 Monthly After Discount: $2,755</li>
                        <li>💸 Pre Discount Total : $34,800</li>
                        <li>🏦 Post Discount Total : $33,060</li>
                        <li>🎉 Total Savings: $1,740</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,400</li>
                        <li>📅 Semiannual Cost: $20,400</li>
                        <li>💰 Live Call Deposit: $1,020</li>
                        <li>🎁 Discount Amount: $1,020</li>
                        <li>🧾 Monthly After Discount: $3,230</li>
                        <li>💸 Pre Discount Total : $20,400</li>
                        <li>🏦 Post Discount Total : $19,380</li>
                        <li>🎉 Total Savings: $1,020</li>
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
                    <span>$</span>5,200
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Advanced digital marketing and sales strategies for growing businesses, including paid advertising, conversion optimization, and CRM integration.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>📣 Paid Ad Campaign Management (Google/Social)</li>
                    <li>Conversion Rate Optimization (CRO)</li>
                    <li>🔗 CRM Integration & Sales Automation</li>
                    <li>📊 Advanced Analytics & Reporting</li>
                    <li>🤝 Influencer Marketing (Basic)</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $5,200</li>
                        <li>📅 Annual Cost: $62,400</li>
                        <li>💰 Live Call Deposit: $6,240</li>
                        <li>🎁 Discount Amount: $6,240</li>
                        <li>🧾 Monthly After Discount: $4,680</li>
                        <li>💸 Pre Discount Total : $62,400</li>
                        <li>🏦 Post Discount Total : $56,160</li>
                        <li>🎉 Total Savings: $6,240</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $6,000</li>
                        <li>📅 Semiannual Cost: $36,000</li>
                        <li>💰 Live Call Deposit: $3,600</li>
                        <li>🎁 Discount Amount: $3,600</li>
                        <li>🧾 Monthly After Discount: $5,400</li>
                        <li>💸 Pre Discount Total : $36,000</li>
                        <li>🏦 Post Discount Total : $32,400</li>
                        <li>🎉 Total Savings: $3,600</li>
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
                    <span>$</span>8,200
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Elite sales and digital marketing solutions for enterprises, offering full-funnel strategy, global market penetration, and bespoke growth hacking.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>📈 Full-Funnel Marketing Strategy</li>
                    <li>🌎 International SEO & SEM</li>
                    <li>🚀 Growth Hacking & Experimentation</li>
                    <li>🔗 Partner & Affiliate Program Management</li>
                    <li>🎤 PR & Reputation Management (Digital)</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $8,200</li>
                        <li>📅 Annual Cost: $98,400</li>
                        <li>💰 Live Call Deposit: $14,760</li>
                        <li>🎁 Discount Amount: $14,760</li>
                        <li>🧾 Monthly After Discount: $6,970</li>
                        <li>💸 Pre Discount Total : $98,400</li>
                        <li>🏦 Post Discount Total : $83,640</li>
                        <li>🎉 Total Savings: $14,760</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $9,200</li>
                        <li>📅 Semiannual Cost: $55,200</li>
                        <li>💰 Live Call Deposit: $8,280</li>
                        <li>🎁 Discount Amount: $8,280</li>
                        <li>🧾 Monthly After Discount: $7,820</li>
                        <li>💸 Pre Discount Total : $55,200</li>
                        <li>🏦 Post Discount Total : $46,920</li>
                        <li>🎉 Total Savings: $8,280</li>
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
            Sales & Digital Marketing Comparison Table {tableOpen ? "▲" : "▼"}
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

export default SalesDigitalMarketingPackages;
