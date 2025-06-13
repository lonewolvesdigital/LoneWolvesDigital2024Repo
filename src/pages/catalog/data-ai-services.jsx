import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/data-ai-services.json";
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
  title: "DATA & AI SERVICES",
  subtitle: "Advanced Analytics & Machine Learning Solutions",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,250/mo",
      licenseType: "Basic Data & Analytics Retainer – No IP Transfer",
      features: [
        "20 hrs/mo of data analysis (cleaning, dashboards)",
        "Monthly KPI & visualization report",
        "Standard ETL scripts (prebuilt)",
        "Email support (48 hr SLA)",
        "No IP transfer of scripts or models"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $2,500",
            "Annual Cost: $30,000",
            "Live Call Deposit: $3,000",
            "Discount Amount: $3,000 (10%)",
            "Monthly After Discount: $2,250",
            "Total After Discount: $27,000"
          ],
          savings: "$3,000"
        },
        {
          label: "Option B – 6-Month Plan",
          details: [
            "Monthly Cost: $4,500",
            "Semiannual Cost: $27,000",
            "Discount Amount: $4,050 (15%)",
            "Monthly After Discount: $3,750",
            "Total After Discount: $22,500"
          ],
          savings: "$4,050"
        }
      ],
      buyLink: "#buy-beta-data",
      quoteLink: "#quote-beta-data"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $4,950/mo",
      licenseType: "Advanced AI & Data Pipeline – No IP Transfer",
      features: [
        "30 hrs/mo of model development (regression, classification)",
        "Automated ETL & model retraining pipelines",
        "Bi-weekly performance & drift reports",
        "Integration with BI tools (Tableau, Power BI)",
        "Priority email & chat support (24 hr SLA)"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $5,500",
            "Annual Cost: $66,000",
            "Live Call Deposit: $6,600",
            "Discount Amount: $6,600 (10%)",
            "Monthly After Discount: $4,950",
            "Total After Discount: $59,400"
          ],
          savings: "$6,600"
        },
        {
          label: "Option B – 6-Month Plan",
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
      buyLink: "#buy-sigma-data",
      quoteLink: "#quote-sigma-data"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $8,333/mo",
      licenseType: "Enterprise AI Development – Full IP Transfer",
      features: [
        "40 hrs/mo of full-stack AI development (NLP, computer vision)",
        "Custom model architecture & deployment (cloud/on-prem)",
        "Weekly retraining & monitoring pipelines",
        "Dedicated data scientist & monthly strategy workshop",
        "24/7 email, chat & phone support",
        "Full IP transfer of code, models & documentation"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $9,500",
            "Annual Cost: $114,000",
            "Live Call Deposit: $11,400",
            "Discount Amount: $9,500 (8.33%)",
            "Monthly After Discount: $8,667",
            "Total After Discount: $104,000"
          ],
          savings: "$9,500"
        },
        {
          label: "Option B – 6-Month Plan",
          details: [
            "Monthly Cost: $10,000",
            "Semiannual Cost: $60,000",
            "Discount Amount: $7,500 (12.5%)",
            "Monthly After Discount: $8,333",
            "Total After Discount: $50,000"
          ],
          savings: "$7,500"
        }
      ],
      buyLink: "#buy-alpha-data",
      quoteLink: "#quote-alpha-data"
    }
  ]
};

 const aiDevSummaryPricingData = {
  title: "AI Development Pricing Comparison",
  subtitle: "Compare features and pricing for Beta, Sigma, and Alpha packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Basic Retainer – No IP",
        "Advanced Pipeline – No IP",
        "Enterprise Dev – Full IP",
      ],
    },
    {
      item: "Analysis Hours/Month",
      values: ["20 hrs", "30 hrs", "40 hrs"],
    },
    {
      item: "Modeling",
      values: [
        "None",
        "Regression & Classification",
        "NLP, Vision, Custom Architectures",
      ],
    },
    {
      item: "Automation Pipelines",
      values: [
        "Standard ETL",
        "Automated ETL & Retraining",
        "Full CI/CD & Monitoring",
      ],
    },
    {
      item: "Reporting Frequency",
      values: [
        "Monthly KPI Dashboard",
        "Bi-weekly Performance & Drift",
        "Weekly Retrain & Health Metrics",
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
      values: ["$2,500", "$5,500", "$9,500"],
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$30,000", "$66,000", "$114,000"],
    },
    {
      item: "Live Call Deposit",
      values: ["$3,000", "$6,600", "$11,400"],
    },
    {
      item: "Discount Amount",
      values: ["$3,000 (10 %)", "$6,600 (10 %)", "$9,500 (8.33 %)"],
    },
    {
      item: "Monthly After Discount",
      values: ["$2,250", "$4,950", "$8,667"],
    },
    {
      item: "Total After Discount",
      values: ["$27,000", "$59,400", "$104,000"],
    },
    {
      item: "Monthly Cost (Opt B)",
      values: ["$4,500", "$9,000", "$10,000"],
    },
    {
      item: "Semiannual Cost (Opt B)",
      values: ["$27,000", "$54,000", "$60,000"],
    },
    {
      item: "Discount Amount (Opt B)",
      values: ["$4,050 (15 %)", "$6,750 (12.5 %)", "$7,500 (12.5 %)"],
    },
    {
      item: "Monthly After Discount",
      values: ["$3,750", "$8,125", "$8,333"],
    },
    {
      item: "Total After Discount",
      values: ["$22,500", "$47,250", "$50,000"],
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
        <SummaryPricingTable data={aiDevSummaryPricingData} />
        <Works/>

        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
