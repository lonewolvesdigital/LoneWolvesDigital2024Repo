import React, { useState } from "react";
import PriceTag from "./PriceTag";

const GraphicsDesignPhotographyPackages = () => {
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
    { label: "\uD83D\uDCB5 Monthly Cost", values: [<PriceTag usd={2700} />, <PriceTag usd={3200} />, <PriceTag usd={4800} />, <PriceTag usd={5500} />, <PriceTag usd={7800} />, <PriceTag usd={8800} />] },
    { label: "\uD83D\uDCC5 Annual/Semiannual Cost", values: [<PriceTag usd={32400} />, <PriceTag usd={19200} />, <PriceTag usd={57600} />, <PriceTag usd={33000} />, <PriceTag usd={93600} />, <PriceTag usd={52800} />] },
    { label: "\uD83D\uDCB0 Live Call Deposit", values: [<PriceTag usd={1620} />, <PriceTag usd={960} />, <PriceTag usd={5760} />, <PriceTag usd={3300} />, <PriceTag usd={14040} />, <PriceTag usd={7920} />] },
    { label: "\uD83C\uDF81 Discount Amount", values: [<PriceTag usd={1620} />, <PriceTag usd={960} />, <PriceTag usd={5760} />, <PriceTag usd={3300} />, <PriceTag usd={14040} />, <PriceTag usd={7920} />] },
    { label: "\uD83D\uDCDD Monthly After Discount", values: [<PriceTag usd={2565} />, <PriceTag usd={3040} />, <PriceTag usd={4320} />, <PriceTag usd={4950} />, <PriceTag usd={6630} />, <PriceTag usd={7480} />] },
    { label: "\uD83D\uDCB8 Pre Discount Total", values: [<PriceTag usd={32400} />, <PriceTag usd={19200} />, <PriceTag usd={57600} />, <PriceTag usd={33000} />, <PriceTag usd={93600} />, <PriceTag usd={52800} />] },
    { label: "\uD83C\uDFE6 Post Discount Total", values: [<PriceTag usd={30780} />, <PriceTag usd={18240} />, <PriceTag usd={51840} />, <PriceTag usd={29700} />, <PriceTag usd={79560} />, <PriceTag usd={44880} />] },
    { label: "\uD83C\uDF89 Total Savings", values: [<PriceTag usd={1620} />, <PriceTag usd={960} />, <PriceTag usd={5760} />, <PriceTag usd={3300} />, <PriceTag usd={14040} />, <PriceTag usd={7920} />] },
    { label: "\uD83D\uDCB9 Savings Percentage", values: ["5%", "5%", "10%", "10%", "15%", "15%"] },
    { label: "\uD83C\uDFA8 Logo Design", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCF8 Product Photography", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDDBC️ Social Media Graphics", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\u270D️ Brand Guideline Dev", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDDA8️ Basic Print Collateral", values: ["✅", "✅", "✅", "✅", "✅", "✅"] },
    { label: "\u2728 Full Branding Package", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83C\uDF1F Lifestyle & Editorial Photo", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDCE6 Packaging Design", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDDA5️ Website UI/UX Design", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83C\uDFAC Infographic & Presentation", values: ["❌", "❌", "✅", "✅", "✅", "✅"] },
    { label: "\uD83D\uDDBC️ Creative Direction", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83D\uDE80 Campaign Visuals", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83D\uDC57 Fashion & Editorial Photos", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDFA8 Custom Illustration", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
    { label: "\uD83C\uDF10 Experiential Design", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
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
                <span className="left"></span>Graphics Design & Photography
                <span className="right"></span>
              </h1>
              <p> - Visual content creation and branding </p>
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
                    <span>$</span>2,700
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Fundamental graphic design and photography services for new brands or businesses needing essential visual assets.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🎨 Logo Design (Basic)</li>
                    <li>📸 Product Photography (Standard)</li>
                    <li>🖼️ Social Media Graphics (Basic)</li>
                    <li>✍️ Brand Guideline Development (Simple)</li>
                    <li>🖨️ Basic Print Collateral Design (Business Cards, Flyers)</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $2,700</li>
                        <li>📅 Annual Cost: $32,400</li>
                        <li>💰 Live Call Deposit: $1,620</li>
                        <li>🎁 Discount Amount: $1,620</li>
                        <li>🧾 Monthly After Discount: $2,565</li>
                        <li>💸 Pre Discount Total : $32,400</li>
                        <li>🏦 Post Discount Total : $30,780</li>
                        <li>🎉 Total Savings: $1,620</li>
                        <li>📉 Savings Percentage: 5%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $3,200</li>
                        <li>📅 Semiannual Cost: $19,200</li>
                        <li>💰 Live Call Deposit: $960</li>
                        <li>🎁 Discount Amount: $960</li>
                        <li>🧾 Monthly After Discount: $3,040</li>
                        <li>💸 Pre Discount Total : $19,200</li>
                        <li>🏦 Post Discount Total : $18,240</li>
                        <li>🎉 Total Savings: $960</li>
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
                    <span>$</span>4,800
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Enhanced graphic design and photography services for growing businesses, including full branding, professional photoshoots, and marketing material design.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>✨ Full Branding Package</li>
                    <li>🌟 Lifestyle & Editorial Photography</li>
                    <li>📦 Packaging Design</li>
                    <li>🖥️ Website UI/UX Design (Visuals)</li>
                    <li>🎬 Infographic & Presentation Design</li>
                    <li>Includes all Beta Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $4,800</li>
                        <li>📅 Annual Cost: $57,600</li>
                        <li>💰 Live Call Deposit: $5,760</li>
                        <li>🎁 Discount Amount: $5,760</li>
                        <li>🧾 Monthly After Discount: $4,320</li>
                        <li>💸 Pre Discount Total : $57,600</li>
                        <li>🏦 Post Discount Total : $51,840</li>
                        <li>🎉 Total Savings: $5,760</li>
                        <li>📉 Savings Percentage: 10%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $5,500</li>
                        <li>📅 Semiannual Cost: $33,000</li>
                        <li>💰 Live Call Deposit: $3,300</li>
                        <li>🎁 Discount Amount: $3,300</li>
                        <li>🧾 Monthly After Discount: $4,950</li>
                        <li>💸 Pre Discount Total : $33,000</li>
                        <li>🏦 Post Discount Total : $29,700</li>
                        <li>🎉 Total Savings: $3,300</li>
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
                    <span>$</span>7,800
                  </h3>
                  <h6>
                    <span>starting price </span> per month
                  </h6>
                </div>
                {/* Deal Summary above Features */}
                <div style={{ margin: '16px 0 0 0', fontStyle: 'italic', color: '#fd7e14', background: '#232323', borderRadius: 8, padding: 12 }}>
                  🏷️ Deal Summary: Premium graphic design and photography for established brands and large campaigns, offering art direction, advanced visual storytelling, and comprehensive creative solutions.
                </div>
                <div className="beta-features mb-20">
                  <strong><br/>Features</strong>
                  <ul>
                    <li>🖼️ Creative Direction & Art Direction</li>
                    <li>🚀 Campaign Visuals & Advertising Design</li>
                    <li>👗 Fashion & Editorial Photoshoots</li>
                    <li>🎨 Custom Illustration & Animation (2D)</li>
                    <li>🌐 Experiential Design (Visuals)</li>
                    <li>Includes all Beta and Sigma Pack features</li>
                  </ul>
                  <div style={{ ...planStackStyle, flexDirection: 'row' }} className="plan-stack-responsive">
                    {/* 12-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>12‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $7,800</li>
                        <li>📅 Annual Cost: $93,600</li>
                        <li>💰 Live Call Deposit: $14,040</li>
                        <li>🎁 Discount Amount: $14,040</li>
                        <li>🧾 Monthly After Discount: $6,630</li>
                        <li>💸 Pre Discount Total : $93,600</li>
                        <li>🏦 Post Discount Total : $79,560</li>
                        <li>🎉 Total Savings: $14,040</li>
                        <li>📉 Savings Percentage: 15%</li>
                      </ul>
                    </div>
                    {/* 6-Month Plan */}
                    <div style={{ minWidth: 260, flex: 1, background: '#232323', borderRadius: 10, padding: 16, maxWidth: 340 }}>
                      <strong>6‑Month Plan</strong>
                      <ul style={{ marginTop: 8 }}>
                        <li>💵 Monthly Cost: $8,800</li>
                        <li>📅 Semiannual Cost: $52,800</li>
                        <li>💰 Live Call Deposit: $7,920</li>
                        <li>🎁 Discount Amount: $7,920</li>
                        <li>🧾 Monthly After Discount: $7,480</li>
                        <li>💸 Pre Discount Total : $52,800</li>
                        <li>🏦 Post Discount Total : $44,880</li>
                        <li>🎉 Total Savings: $7,920</li>
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
            Graphics Design & Photography Comparison Table {tableOpen ? "▲" : "▼"}
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

export default GraphicsDesignPhotographyPackages;
