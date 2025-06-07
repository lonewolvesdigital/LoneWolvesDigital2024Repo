import React from "react";

const tableContainerStyle = {
  padding: "24px",
//   backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  overflowX: "auto",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "8px",
};

const subtitleStyle = {
  textAlign: "center",
  color: "#6B7280", // gray-500 equivalent
  marginBottom: "24px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
};

const thStyle = {
  border: "1px solid #D1D5DB", // gray-300
  padding: "16px",
  textAlign: "left",
  fontWeight: "600",
//   backgroundColor: "#F3F4F6", // gray-100
};

const tdStyle = {
  border: "1px solid #D1D5DB",
  padding: "16px",
  whiteSpace: "pre-line",
  textAlign: "center",
};

const itemCellStyle = {
  ...tdStyle,
  fontWeight: "500",
  textAlign: "left",
};

const SummaryPricingTable = ({ data }) => {
  return (
    <section style={tableContainerStyle}>
      <h2 style={headingStyle}>{data.title}</h2>
      <p style={subtitleStyle}>{data.subtitle}</p>

      <table style={tableStyle}>
        <thead>
          <tr>
            {data.headers.map((header, i) => (
              <th key={i} style={thStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i}>
              <td style={itemCellStyle}>{row.item}</td>
              {row.values.map((value, j) => (
                <td key={j} style={tdStyle}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SummaryPricingTable;
