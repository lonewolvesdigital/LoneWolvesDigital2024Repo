import React from "react";

// ✅ Individual Pricing Card
const PricingCard = ({
  packageName,
  price,
  licenseType,
  features,
  paymentPlans,
  buyLink,
  quoteLink,
}) => {
  return (
    <div style={{ width: "100%", maxWidth: "380px", margin: "20px" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          // backgroundColor: "#fff",
        }}
      >
        {/* Package Title */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "700" }}>
            {packageName}
          </h3>
          <p style={{ 
            fontSize: "14px", 
            // color: "#666", 
            margin: "8px 0",
            fontStyle: "italic" 
          }}>
            {licenseType}
          </p>
        </div>

        {/* Price */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h3 style={{ 
            fontSize: "28px", 
            fontWeight: "700", 
            color: "#f97316",
            margin: "0" 
          }}>
            {price}
          </h3>
        </div>

        {/* Features */}
        <div style={{ marginBottom: "24px" }}>
          <h6 style={{ 
            fontSize: "16px", 
            fontWeight: "600", 
            marginBottom: "12px",
            // color: "#333" 
          }}>
            Features:
          </h6>
          <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            {features.map((feat, index) => (
              <li key={index} style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                marginBottom: "8px",
                fontSize: "14px",
                lineHeight: "1.4"
              }}>
                <span style={{ color: "#f97316", marginRight: "8px", fontSize: "12px" }}>
                  ✔️
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Plans */}
        <div style={{ marginBottom: "20px" }}>
          <h6 style={{ 
            fontSize: "16px", 
            fontWeight: "600", 
            marginBottom: "16px",
            // color: "#333" 
          }}>
            Payment Options:
          </h6>
          
          {paymentPlans.map((plan, i) => (
            <div key={i} style={{ 
              marginBottom: "20px",
              padding: "16px",
              // backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef"
            }}>
              <h6 style={{ 
                fontSize: "15px", 
                fontWeight: "600", 
                marginBottom: "12px",
                // color: "#333"
              }}>
                {plan.label}
              </h6>
              
              <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {plan.details.map((detail, j) => (
                  <div key={j} style={{ 
                    marginBottom: "6px",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <span style={{ 
                      color: "#f97316", 
                      marginRight: "8px",
                      fontSize: "12px"
                    }}>
                      🔸
                    </span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Show savings if available */}
              {plan.savings && (
                <div style={{
                  marginTop: "8px",
                  padding: "8px",
                  // backgroundColor: "#d4edda",
                  borderRadius: "4px",
                  border: "1px solid #c3e6cb"
                }}>
                  <span style={{ 
                    color: "#155724", 
                    fontSize: "13px", 
                    fontWeight: "600" 
                  }}>
                    💰 Total Savings: {plan.savings}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ 
          display: "flex", 
          gap: "10px", 
          marginTop: "20px",
          justifyContent: "center"
        }}>
          <a
            href={buyLink}
            style={{
              backgroundColor: "#f97316",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
              textAlign: "center",
              flex: "1",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ea580c";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#f97316";
            }}
          >
            Buy Now
          </a>
          <a
            href={quoteLink}
            style={{
              border: "2px solid #f97316",
              color: "#f97316",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
              textAlign: "center",
              flex: "1",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#f97316";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#f97316";
            }}
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Section Component
const CatalogPricing = ({ title, subtitle, packages = [] }) => {
  return (
    <section style={{ 
      padding: "60px 0",
      // backgroundColor: "#f8f9fa"/
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 20px" 
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <span style={{ 
              width: "50px", 
              height: "2px", 
              backgroundColor: "#f97316",
              marginRight: "15px"
            }}></span>
            <h6 style={{
              fontSize: "16px",
              color: "#f97316",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              margin: "0"
            }}>
              {title}
            </h6>
            <span style={{ 
              width: "50px", 
              height: "2px", 
              backgroundColor: "#f97316",
              marginLeft: "15px"
            }}></span>
          </div>
          <h2 style={{ 
            fontSize: "36px", 
            fontWeight: "700", 
            // color: "#333",
            lineHeight: "1.2",
            margin: "0"
          }}>
            {subtitle}
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            alignItems: "stretch"
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

// ✅ Sample Data Structure (for reference)

export default CatalogPricing;