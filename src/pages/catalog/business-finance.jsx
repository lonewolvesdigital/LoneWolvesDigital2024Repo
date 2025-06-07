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
 title: `${ProjectDate.title.big}`,
   subtitle:
     `${ProjectDate.title.small}`,
  packages: [
    {
      packageName: "Beta Pack",
      price: "$2,500/mo",
      features: [
        "📄 Admin support included",
        "📞 Priority email/chat support",
        "📊 Monthly reporting dashboard"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: ["💳 $2,500/mo for 12 months", "📈 Total: $30,000"]
        },
        {
          label: "Option B – 6-Month Plan",
          details: ["💳 $2,750/mo for 6 months", "📈 Total: $16,500"]
        }
      ],
      buyLink: "#buy-beta",
      quoteLink: "#quote-beta"
    },
    {
      packageName: "Sigma Pack",
      price: "$4,000/mo",
      features: [
        "🧾 Advanced admin support",
        "🛠️ Workflow automation",
        "💼 Dedicated manager"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: ["💳 $4,000/mo", "📈 Total: $48,000"]
        },
        {
          label: "Option B – 6-Month Plan",
          details: ["💳 $4,400/mo", "📈 Total: $26,400"]
        }
      ],
      buyLink: "#buy-sigma",
      quoteLink: "#quote-sigma"
    },
    {
      packageName: "Alpha Pack",
      price: "$7,000/mo",
      features: [
        "🧠 Strategic consulting",
        "🔧 Custom integrations",
        "👥 Team training sessions"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: ["💳 $7,000/mo", "📈 Total: $84,000"]
        },
        {
          label: "Option B – 6-Month Plan",
          details: ["💳 $7,500/mo", "📈 Total: $45,000"]
        }
      ],
      buyLink: "#buy-alpha",
      quoteLink: "#quote-alpha"
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
