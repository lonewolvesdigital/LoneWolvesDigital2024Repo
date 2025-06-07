import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/lifestyle.json";
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

 const lifestyleSummaryPricingData = {
  title: "Lifestyle & Wellness Services Pricing Comparison",
  subtitle: "Compare features and pricing for Beta, Sigma, and Alpha packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Basic Lifestyle – No IP Transfer",
        "Enhanced Program – No IP Transfer",
        "Premium Concierge – Full IP Transfer"
      ],
    },
    {
      item: "Coaching Sessions/Month",
      values: [
        "4 tutoring + 4 life coaching",
        "8 mixed sessions",
        "Unlimited"
      ],
    },
    {
      item: "Workout Plans/Month",
      values: [
        "4 plans",
        "8 plans + progress check-ins",
        "Custom app + unlimited plans"
      ],
    },
    {
      item: "Nutrition Support",
      values: [
        "Monthly meal template",
        "Bi-weekly bespoke plans",
        "Weekly custom plans + 4 hrs consult"
      ],
    },
    {
      item: "Reporting Frequency",
      values: [
        "Monthly",
        "Monthly engagement & progress",
        "Weekly analytics"
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
      values: [
        "$3,000 (10 %)",
        "$6,960 (10 %)",
        "$9,500 (8.33 %)"
      ],
    },
    {
      item: "Monthly After Discount",
      values: ["$2,250", "$5,220", "$8,667"],
    },
    {
      item: "Total After Discount",
      values: ["$27,000", "$62,640", "$104,000"],
    },
    {
      item: "Monthly Cost (Opt B)",
      values: ["$4,200", "$9,000", "$16,000"],
    },
    {
      item: "Semiannual Cost (Opt B)",
      values: ["$25,200", "$54,000", "$96,000"],
    },
    {
      item: "Discount Amount (Opt B)",
      values: [
        "$3,780 (15 %)",
        "$6,750 (12.5 %)",
        "$12,000 (12.5 %)"
      ],
    },
    {
      item: "Total After Discount (Opt B)",
      values: ["$20,160", "$47,250", "$84,000"],
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
        {/* <ProjectVideo projectVideoDate={ProjectDate} />
        <NextProject /> */}
        {/* <ProjectGallery /> */}
        <CatalogPricing {...data}/>
        <SummaryPricingTable data={lifestyleSummaryPricingData} />
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
