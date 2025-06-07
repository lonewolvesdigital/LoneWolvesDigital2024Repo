import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/admin-customer-support.json";
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


const summaryPricingData = {
  title: "Pricing Comparison",
  subtitle: "A quick overview of all three packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Basic Admin\nRetainer – No IP",
        "Standard Admin\nRetainer – No IP",
        "Enterprise Admin &\nSupport – Full IP"
      ]
    },
    {
      item: "Support Hours/Month",
      values: ["80 hrs", "160 hrs", "300 hrs"]
    },
    {
      item: "Channels Covered",
      values: [
        "Email, Chat,\nBusiness-hr Phone",
        "Email, Chat, Phone",
        "All Channels (24/7)"
      ]
    },
    {
      item: "Reporting Frequency",
      values: ["Monthly", "Weekly", "Daily"]
    },
    {
      item: "Automation",
      values: [
        "None",
        "Basic Templates & Macros",
        "Custom Workflows & Integrations"
      ]
    },
    {
      item: "Support SLA",
      values: ["Email (48 hr)", "Email/Chat (24 hr)", "24/7 Phone, Chat & Email"]
    },
    {
      item: "IP Ownership",
      values: ["No", "No", "Full IP Transfer"]
    },
    {
      item: "Monthly Cost (Opt A)",
      values: ["$2,500", "$5,500", "$9,000"]
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$30,000", "$66,000", "$108,000"]
    },
    {
      item: "Live Call Deposit",
      values: ["$3,000", "$6,600", "$10,800"]
    },
    {
      item: "Discount Amount",
      values: ["$3,000 (10 %)", "$6,600 (10 %)", "$9,000 (8.33 %)"]
    },
    {
      item: "Monthly After Discount",
      values: ["$2,250", "$4,950", "$8,250"]
    },
    {
      item: "Total After Discount",
      values: ["$27,000", "$59,400", "$99,000"]
    },
    {
      item: "Total Savings",
      values: ["$3,000", "$6,600", "$9,000"]
    },
    {
      item: "Savings %",
      values: ["10.00 %", "10.00 %", "8.33 %"]
    },
    {
      item: "Monthly Cost (Opt B)",
      values: ["$4,500", "$9,000", "$16,000"]
    },
    {
      item: "Semiannual Cost (Opt B)",
      values: ["$27,000", "$54,000", "$96,000"]
    },
    {
      item: "Discount Amount (Opt B)",
      values: ["$4,050 (15 %)", "$6,750 (12.5 %)", "$12,000 (12.5 %)"]
    },
    {
      item: "Monthly After Discount (Opt B)",
      values: ["$3,750", "$8,125", "$14,000"]
    },
    {
      item: "Total After Discount (Opt B)",
      values: ["$22,500", "$47,250", "$84,000"]
    },
    {
      item: "Savings % (Opt B)",
      values: ["15.00 %", "12.50 %", "12.50 %"]
    }
  ]
};

  return (
    <DarkTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectHeader projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />
        <CatalogPricing {...data} />
        <SummaryPricingTable data={summaryPricingData}/>
        <Works/>
        {/* <ProjectVideo projectVideoDate={ProjectDate} /> */}
        {/* <NextProject /> */}
        {/* <ProjectGallery /> */}
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
