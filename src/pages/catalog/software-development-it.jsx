import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/software-development-it.json";
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

 const saasSummaryPricingData = {
  title: "SaaS Application Licensing Comparison",
  subtitle: "Compare license and platform offerings across Beta, Sigma, and Alpha packs",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Commercial Use – No Source Code",
        "Commercial Use – No Source Code",
        "Full Ownership – Source Code + IP Transfer"
      ],
    },
    {
      item: "Platform Access",
      values: [
        "Web App Only",
        "Web + iOS + Android",
        "Web + iOS + Android"
      ],
    },
    {
      item: "AI-Powered API",
      values: ["Included", "Included", "Included"],
    },
    {
      item: "Stripe Integration",
      values: ["Included", "Included", "Included"],
    },
    {
      item: "Clerk Authentication",
      values: ["Included", "Included", "Included"],
    },
    {
      item: "Support",
      values: ["12 Months", "12 Months", "12 Months"],
    },
    {
      item: "Source Code / IP",
      values: [
        "Not Included",
        "Not Included",
        "Full Source Code + IP Ownership"
      ],
    },

    // Option A – 12-Month Plan
    {
      item: "Monthly Cost (Opt A)",
      values: ["$2,499", "$2,999", "$4,999"],
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$30,000", "$36,000", "$60,000"],
    },
    {
      item: "Deposit (Opt A)",
      values: ["$4,999", "$5,988", "$5,999"],
    },
    {
      item: "Discount Amount (Opt A)",
      values: ["$5,000", "$5,000", "$6,000"],
    },
    {
      item: "Monthly After Discount (Opt A)",
      values: ["$2,083.33", "$2,583.33", "$4,500.00"],
    },
    {
      item: "After Discount Total (Opt A)",
      values: ["$24,989", "$30,989", "$53,999"],
    },
    {
      item: "Total Cost (Opt A)",
      values: ["$24,989", "$30,989", "$53,999"],
    },
    {
      item: "Total Savings (Opt A)",
      values: ["$5,000", "$5,000", "$6,000"],
    },
    {
      item: "Savings % (Opt A)",
      values: ["16.67%", "13.89%", "10.00%"],
    },

    // Option B – 6-Month Plan
    {
      item: "Monthly Cost (Opt B)",
      values: ["$4,998", "$5,998", "$9,998"],
    },
    {
      item: "Semiannual Cost (Opt B)",
      values: ["$30,000", "$36,000", "$59,988"],
    },
    {
      item: "Discount Amount (Opt B)",
      values: ["$10,000", "$6,000", "$9,988"],
    },
    {
      item: "Monthly After Discount (Opt B)",
      values: ["$3,333.33", "$5,000.00", "$8,333.33"],
    },
    {
      item: "After Discount Total (Opt B)",
      values: ["$20,000", "$29,999", "$50,000"],
    },
    {
      item: "Total Cost (Opt B)",
      values: ["$20,000", "$29,999", "$50,000"],
    },
    {
      item: "Total Savings (Opt B)",
      values: ["$10,000", "$6,000", "$9,988"],
    },
    {
      item: "Savings % (Opt B)",
      values: ["33.33%", "16.67%", "16.65%"],
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
        {/* <ProjectVideo projectVideoDate={ProjectDate} /> */}
        {/* <NextProject /> */}
        {/* <ProjectGallery /> */}
        <CatalogPricing {...data}/>
        <SummaryPricingTable data={saasSummaryPricingData} />
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
