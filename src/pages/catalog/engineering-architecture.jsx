import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/engineering-architecture.json";
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
  title: "ENGINEERING & ARCHITECTURE",
  subtitle: "Professional Design & Construction Services",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,250/mo",
      licenseType: "Standard Engineering & Architectural Guidance – No IP Transfer",
      features: [
        "10 hrs/mo of engineering or architectural consulting (2D drafting, code review)",
        "Basic 2D CAD drawings (up to 5 sheets)",
        "Monthly progress & compliance report",
        "Email support (48 hr SLA)",
        "No IP transfer of CAD files or calculation models"
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
      buyLink: "#buy-beta-engineering",
      quoteLink: "#quote-beta-engineering"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $5,220/mo",
      licenseType: "Advanced Engineering & Architecture – No IP Transfer",
      features: [
        "20 hrs/mo of consulting (3D BIM modeling, structural analysis sketches)",
        "3D BIM model & coordination (up to Level 2 detail)",
        "Bi-weekly design review workshops",
        "Priority email & chat support (24 hr SLA)",
        "No IP transfer of model assets"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $5,800",
            "Annual Cost: $69,600",
            "Live Call Deposit: $6,960",
            "Discount Amount: $6,960 (10%)",
            "Monthly After Discount: $5,220",
            "Total After Discount: $62,640"
          ],
          savings: "$6,960"
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
      buyLink: "#buy-sigma-engineering",
      quoteLink: "#quote-sigma-engineering"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $8,550/mo",
      licenseType: "Enterprise Engineering & Architecture – Full IP Transfer",
      features: [
        "40 hrs/mo dedicated consulting (full CD set, MEP coordination)",
        "Complete Construction Documents (up to 50 sheets)",
        "Weekly on-site or virtual site reviews",
        "Custom parametric families & scripts (Revit, AutoCAD)",
        "24/7 phone, chat & email support",
        "Full IP transfer of all CAD/BIM assets and calculation models"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $9,500",
            "Annual Cost: $114,000",
            "Live Call Deposit: $11,400",
            "Discount Amount: $10,000 (8.77%)",
            "Monthly After Discount: $8,550",
            "Total After Discount: $102,600"
          ],
          savings: "$10,000"
        },
        {
          label: "Option B – 6-Month Plan",
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
      buyLink: "#buy-alpha-engineering",
      quoteLink: "#quote-alpha-engineering"
    }
  ]
};


 const aecEngineeringSummaryPricingData = {
  title: "AEC Engineering Pricing Comparison",
  subtitle: "Compare features and pricing for Beta, Sigma, and Alpha packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Standard Guidance – No IP",
        "Advanced Service – No IP",
        "Enterprise Service – Full IP"
      ],
    },
    {
      item: "Consulting Hours/Month",
      values: ["10 hrs", "20 hrs", "40 hrs"],
    },
    {
      item: "Deliverables",
      values: [
        "2D CAD (5 sheets)",
        "3D BIM (Level 2)",
        "Full CD Set (50 sheets), MEP Coord."
      ],
    },
    {
      item: "Review Frequency",
      values: ["Monthly", "Bi-weekly", "Weekly"],
    },
    {
      item: "Custom Scripts & Families",
      values: [
        "None",
        "None",
        "Parametric Families & Automation Scripts"
      ],
    },
    {
      item: "Support SLA",
      values: [
        "Email (48 hr)",
        "Email/Chat (24 hr)",
        "24/7 Phone, Chat & Email"
      ],
    },
    {
      item: "IP Ownership",
      values: ["No", "No", "Full IP Transfer"],
    },
    {
      item: "Monthly Cost (Opt A)",
      values: ["$2,500", "$5,800", "$9,500"],
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$30,000", "$69,600", "$114,000"],
    },
    {
      item: "Live Call Deposit",
      values: ["$3,000", "$6,960", "$11,400"],
    },
    {
      item: "Discount Amount",
      values: ["$3,000 (10 %)", "$6,960 (10 %)", "$10,000 (8.77 %)"],
    },
    {
      item: "Monthly After Discount",
      values: ["$2,250", "$5,220", "$8,550"],
    },
    {
      item: "Total After Discount",
      values: ["$27,000", "$62,640", "$102,600"],
    },
    {
      item: "Monthly Cost (Opt B)",
      values: ["$4,500", "$9,000", "$16,000"],
    },
    {
      item: "Semiannual Cost (Opt B)",
      values: ["$27,000", "$54,000", "$96,000"],
    },
    {
      item: "Discount Amount (Opt B)",
      values: ["$4,050 (15 %)", "$6,750 (12.5 %)", "$12,000 (12.5 %)"],
    },
    {
      item: "Monthly After Discount",
      values: ["$3,750", "$8,125", "$14,000"],
    },
    {
      item: "Total After Discount",
      values: ["$22,500", "$47,250", "$84,000"],
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
        <SummaryPricingTable data={aecEngineeringSummaryPricingData} />
        <Works/>

        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
