import React from "react";

// ✅ Individual Pricing Card
const PricingCard = ({
  packageName,
  price,
  features,
  paymentPlans,
  buyLink,
  quoteLink,
}) => {
  return (
    <div style={{ width: "100%", maxWidth: "360px", margin: "20px" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Package Title */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600" }}>{packageName}</h3>
        </div>

        {/* Price */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#f97316" }}>{price}</h3>
          <h6 style={{ fontSize: "16px", fontWeight: "600", marginTop: "8px" }}>Features</h6>
        </div>

        {/* Features List */}
        <div style={{ marginBottom: "24px" }}>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {features.map((feat, index) => (
              <li key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "8px" }}>
                <span style={{ color: "#f97316", marginRight: "8px" }}>✔️</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Plans */}
        {paymentPlans.map((plan, i) => (
          <div key={i} style={{ marginBottom: "24px" }}>
            <h6 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>{plan.label}</h6>
            <ul style={{ listStyle: "none", paddingLeft: "12px" }}>
              {plan.details.map((d, j) => (
                <li key={j} style={{ marginBottom: "6px" }}>🔸 {d}</li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <a
                href={buyLink}
                style={{
                  backgroundColor: "#f97316",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Buy now
              </a>
              <a
                href={quoteLink}
                style={{
                  border: "2px solid #f97316",
                  color: "#f97316",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Get a quote
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Main Section Component
const CatalogPricing = ({ title, subtitle, packages = [] }) => {
  return (
    <section style={{ padding: "60px 0"}}>
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        {/* <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h6
            style={{
              fontSize: "16px",
              marginBottom: "20px",
              position: "relative",
              display: "inline-block",
              color: "#999",
            }}
          >
            <span style={{ borderBottom: "2px solid #000", paddingBottom: "4px" }}>{title}</span>
          </h6>
          <h2 style={{ fontSize: "28px", fontWeight: "600", marginTop: "10px" }}>{subtitle}</h2>
        </div> */}
          <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span>{title}
                <span className="right"></span>
              </h6>
              <h2>{subtitle}</h2>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {packages.map((pkg, idx) => (
            <PricingCard key={idx} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogPricing;
