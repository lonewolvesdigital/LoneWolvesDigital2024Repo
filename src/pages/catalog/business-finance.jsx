import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/business-finance.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";
import CatalogPricing from "../../components/pricing/catalog-pricing";
import SummaryPricingTable from "../../components/pricing/summary-pricing-table";
import Works from "../../components/Works/works";

const ProjectDetails2Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  const data = {
  title: "BUSINESS & FINANCE",
  subtitle: "Strategic Financial Planning & CFO Services",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,700/mo",
      licenseType: "Advisory Retainer – No IP Transfer",
      features: [
        "10 hrs/mo of financial planning & analysis (budgeting, forecasting)",
        "Monthly KPI dashboard & summary report",
        "Standard budgeting templates & cash-flow models",
        "Email support (48 hr SLA)",
        "No transfer of custom financial models or IP"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $3,000",
            "Annual Cost: $36,000",
            "Live Call Deposit: $3,600",
            "Discount Amount: $3,600 (10%)",
            "Monthly After Discount: $2,700",
            "Total After Discount: $32,400"
          ],
          savings: "$3,600"
        },
        {
          label: "Option B – Accelerated 6-Month Plan",
          details: [
            "Monthly Cost: $5,400",
            "Semiannual Cost: $32,400",
            "Discount Amount: $4,860 (15%)",
            "Monthly After Discount: $4,540",
            "Total After Discount: $27,240"
          ],
          savings: "$4,860"
        }
      ],
      buyLink: "#buy-beta-finance",
      quoteLink: "#quote-beta-finance"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $5,400/mo",
      licenseType: "Enhanced Advisory Retainer – No IP Transfer",
      features: [
        "20 hrs/mo of CFO-level consultations & scenario planning",
        "Bi-weekly financial performance & variance reports",
        "Basic automation of reporting workflows (Excel/Power BI templates)",
        "Priority email & chat support (24 hr SLA)",
        "No IP transfer of automation scripts"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $6,000",
            "Annual Cost: $72,000",
            "Live Call Deposit: $7,200",
            "Discount Amount: $7,200 (10%)",
            "Monthly After Discount: $5,400",
            "Total After Discount: $64,800"
          ],
          savings: "$7,200"
        },
        {
          label: "Option B – Accelerated 6-Month Plan",
          details: [
            "Monthly Cost: $9,000",
            "Semiannual Cost: $54,000",
            "Discount Amount: $6,750 (12.5%)",
            "Monthly After Discount: $8,125",
            "Total After Discount: $47,250"
          ],
          savings: "$6,750"
        }
      ],
      buyLink: "#buy-sigma-finance",
      quoteLink: "#quote-sigma-finance"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $9,167/mo",
      licenseType: "Enterprise Finance Leadership – Full IP Transfer",
      features: [
        "40 hrs/mo of dedicated CFO strategy, including M&A, fundraising support, and investor reporting",
        "Weekly deep-dive financial health & risk assessments",
        "Custom financial models, dashboards, and automation scripts",
        "24/7 phone, chat & email support",
        "Full IP transfer of all financial models, templates, and documentation"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $10,000",
            "Annual Cost: $120,000",
            "Live Call Deposit: $12,000",
            "Discount Amount: $10,000 (8.33%)",
            "Monthly After Discount: $9,167",
            "Total After Discount: $110,000"
          ],
          savings: "$10,000"
        },
        {
          label: "Option B – Accelerated 6-Month Plan",
          details: [
            "Monthly Cost: $16,000",
            "Semiannual Cost: $96,000",
            "Discount Amount: $12,000 (12.5%)",
            "Monthly After Discount: $14,000",
            "Total After Discount: $84,000"
          ],
          savings: "$12,000"
        }
      ],
      buyLink: "#buy-alpha-finance",
      quoteLink: "#quote-alpha-finance"
    }
  ]
};

 const financeSummaryPricingData = {
  title: "Finance Advisory Pricing Comparison",
  subtitle: "Compare features and pricing for Beta, Sigma, and Alpha packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Advisory\nRetainer – No IP",
        "Enhanced Advisory\n– No IP",
        "Enterprise Finance\nLeadership – Full IP",
      ],
    },
    {
      item: "Consulting Hours/Month",
      values: ["10 hrs", "20 hrs", "40 hrs"],
    },
    {
      item: "Reporting Frequency",
      values: [
        "Monthly KPI\nDashboard",
        "Bi-weekly\nPerformance\nReports",
        "Weekly Deep-Dive\nAssessments",
      ],
    },
    {
      item: "Automation",
      values: [
        "None",
        "Basic Templates &\nMacros",
        "Custom Workflows &\nScripts",
      ],
    },
    {
      item: "Support SLA",
      values: ["Email (48 hr)", "Email/Chat (24 hr)", "24/7 Phone, Chat & Email"],
    },
    {
      item: "IP Ownership",
      values: ["No", "No", "Full IP Transfer"],
    },
    {
      item: "Monthly Cost (Opt A)",
      values: ["$3,000", "$6,000", "$10,000"],
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$36,000", "$72,000", "$120,000"],
    },
    {
      item: "Live Call Deposit",
      values: ["$3,600", "$7,200", "$12,000"],
    },
    {
      item: "Discount Amount",
      values: ["$3,600 (10 %)", "$7,200 (10 %)", "$10,000 (8.33 %)"],
    },
    {
      item: "Monthly After Discount",
      values: ["$2,700", "$5,400", "$9,167"],
    },
    {
      item: "Total After Discount",
      values: ["$32,400", "$64,800", "$110,000"],
    },
    {
      item: "Total Savings",
      values: ["$3,600", "$7,200", "$10,000"],
    },
    {
      item: "Savings % (Opt A)",
      values: ["10.00 %", "10.00 %", "8.33 %"],
    },
    {
      item: "Monthly Cost (Opt B)",
      values: ["$5,400", "$9,000", "$16,000"],
    },
    {
      item: "Semiannual Cost (Opt B)",
      values: ["$32,400", "$54,000", "$96,000"],
    },
    {
      item: "Discount Amount (Opt B)",
      values: ["$4,860 (15 %)", "$6,750 (12.5 %)", "$12,000 (12.5 %)"],
    },
    {
      item: "Monthly After Discount",
      values: ["$4,540", "$8,125", "$14,000"],
    },
    {
      item: "Total After Discount",
      values: ["$27,240", "$47,250", "$84,000"],
    },
    {
      item: "Savings % (Opt B)",
      values: ["15.00 %", "12.50 %", "12.50 %"],
    },
  ],
};

  return (
    <DarkTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectHeader projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />

        {/* <ProjectVideo projectVideoDate={ProjectDate} /> */}
        {/* <NextProject /> */}
        {/* <ProjectGallery /> */}
        <CatalogPricing {...data}/>
        <SummaryPricingTable data={financeSummaryPricingData} />
        <Works/>

        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
