import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/writing-translation.json";
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
  title: "WRITING & TRANSLATION",
  subtitle: "Content Creation, Translation, and Localization Services",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,500/mo",
      licenseType: "Standard Content & Translation Retainer – No IP Transfer",
      features: [
        "20 pages/mo of written content (blogs, articles, web copy)",
        "5,000 words/mo of translation (any language pair)",
        "Proofreading & light editing of client-supplied drafts",
        "Monthly performance & quality report",
        "Email support (48-hr SLA)"
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
      buyLink: "#buy-beta-writing",
      quoteLink: "#quote-beta-writing"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $6,000/mo",
      licenseType: "Enhanced Content & Multilingual Suite – No IP Transfer",
      features: [
        "40 pages/mo of SEO-optimized content with keyword research",
        "15,000 words/mo of translation + localization",
        "Bi-weekly style and accuracy audits",
        "CMS & CAT tools integration (e.g., WordPress, SDL Trados)",
        "Priority email & chat support (24-hr SLA)"
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
      buyLink: "#buy-sigma-writing",
      quoteLink: "#quote-sigma-writing"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $10,000/mo",
      licenseType: "Enterprise Content & IP Transfer",
      features: [
        "80 pages/mo of bespoke content (white papers, eBooks, scripts)",
        "Unlimited translation & localization",
        "Custom style guides, glossaries, and translation memory setup",
        "Weekly editorial and localization performance reports",
        "Dedicated Account Manager & 24/7 support",
        "Full IP transfer of all created materials"
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
      buyLink: "#buy-alpha-writing",
      quoteLink: "#quote-alpha-writing"
    }
  ]
};


 const localizationSummaryPricingData = {
  title: "Localization & Content Services Comparison",
  subtitle: "Compare translation, content delivery, IP rights, and pricing across Beta, Sigma, and Alpha packs",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Standard Retainer – No IP",
        "Enhanced Suite – No IP",
        "Enterprise – Full IP Transfer"
      ],
    },
    {
      item: "Content Pages/Month",
      values: ["20 pages", "40 pages", "80 pages"],
    },
    {
      item: "Translation Words/Month",
      values: ["5,000 words", "15,000 words", "Unlimited"],
    },
    {
      item: "Quality Audits",
      values: [
        "Monthly report",
        "Bi-weekly audits",
        "Weekly editorial & localization reports"
      ],
    },
    {
      item: "Tool Integrations",
      values: [
        "None",
        "CMS & CAT tools",
        "Custom style guides & TM setup"
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

    // Option A – 12-Month Plan
    {
      item: "Monthly Cost (Opt A)",
      values: ["$2,500", "$6,000", "$10,000"],
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$30,000", "$72,000", "$120,000"],
    },
    {
      item: "Live Call Deposit (Opt A)",
      values: ["$3,000", "$7,200", "$12,000"],
    },
    {
      item: "Discount Amount (Opt A)",
      values: [
        "$3,000 (10 %)",
        "$7,200 (10 %)",
        "$10,000 (8.33 %)"
      ],
    },
    {
      item: "Monthly After Discount (Opt A)",
      values: ["$2,250", "$5,400", "$9,167"],
    },
    {
      item: "Total After Discount (Opt A)",
      values: ["$27,000", "$64,800", "$110,000"],
    },

    // Option B – 6-Month Plan
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
        {/* <ProjectVideo projectVideoDate={ProjectDate} /> */}
        {/* <NextProject /> */}
        {/* <ProjectGallery /> */}

        <CatalogPricing {...data}/>
        <SummaryPricingTable data={localizationSummaryPricingData} />
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
