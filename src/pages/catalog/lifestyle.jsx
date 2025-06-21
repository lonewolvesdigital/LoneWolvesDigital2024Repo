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
// import CatalogPricing from "../../components/pricing/catalog-pricing";
import LifestylePackages from "../../components/price-packages/lifestyle-packages";
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
  title: "LIFESTYLE",
  subtitle: "Personal Development & Wellness Services",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,250/mo",
      licenseType: "Basic Lifestyle Support – No IP Transfer",
      features: [
        "4 sessions/mo of online tutoring or career coaching (60 min each)",
        "4 sessions/mo of group life coaching (via video)",
        "4 customized workout plans/mo (digital delivery)",
        "Monthly meal-plan template (basic)",
        "Email support (48 hr SLA)"
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
            "Monthly Cost: $4,200",
            "Semiannual Cost: $25,200",
            "Discount Amount: $3,780 (15%)",
            "Monthly After Discount: $3,360",
            "Total After Discount: $20,160"
          ],
          savings: "$3,780"
        }
      ],
      buyLink: "#buy-beta-lifestyle",
      quoteLink: "#quote-beta-lifestyle"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $5,220/mo",
      licenseType: "Enhanced Lifestyle Program – No IP Transfer",
      features: [
        "8 sessions/mo of mixed tutoring, career & life coaching",
        "8 customized workout plans/mo + monthly progress check-ins",
        "Bi-weekly bespoke meal plans & nutrition tips",
        "Monthly engagement & progress report",
        "Priority email & chat support (24 hr SLA)"
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
      buyLink: "#buy-sigma-lifestyle",
      quoteLink: "#quote-sigma-lifestyle"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $8,667/mo",
      licenseType: "Premium Lifestyle Concierge – Full IP Transfer",
      features: [
        "Unlimited coaching sessions (tutoring, life, career)",
        "Custom workout & habit-tracking app with direct coach access",
        "Weekly bespoke meal plans + one-on-one nutrition consult (4 hrs/mo)",
        "Weekly progress analytics dashboard",
        "24/7 phone, chat & email support",
        "Full IP transfer of all created materials"
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
            "Monthly Cost: $16,000",
            "Semiannual Cost: $96,000",
            "Discount Amount: $12,000 (12.5%)",
            "Monthly After Discount: $14,000",
            "Total After Discount: $84,000"
          ],
          savings: "$12,000"
        }
      ],
      buyLink: "#buy-alpha-lifestyle",
      quoteLink: "#quote-alpha-lifestyle"
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
        <LifestylePackages />
        {/* <ProjectVideo projectVideoDate={ProjectDate} />
        <NextProject /> */}
        {/* <ProjectGallery /> */}
        {/* <CatalogPricing {...data}/> */}
        {/* <SummaryPricingTable data={lifestyleSummaryPricingData} /> */}
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
