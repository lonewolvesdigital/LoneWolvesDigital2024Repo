import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/legal.json";
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
  title: "LEGAL",
  subtitle: "Comprehensive Legal Services & Business Counsel",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,250/mo",
      licenseType: "Standard Legal Retainer – No IP Transfer",
      features: [
        "15 hrs/mo of general legal advice (contracts, compliance)",
        "Review up to 10 contracts/documents per month",
        "Monthly risk & compliance dashboard",
        "Email support (48 hr SLA)",
        "No transfer of legal playbooks or IP"
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
      buyLink: "#buy-beta-legal",
      quoteLink: "#quote-beta-legal"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $5,400/mo",
      licenseType: "Enhanced Legal Partner – No IP Transfer",
      features: [
        "30 hrs/mo of specialized counsel (employment, IP, regulatory)",
        "Draft & file up to 5 trademark/corporate filings per year",
        "Bi-weekly risk audits & strategy sessions",
        "Priority email & chat support (24 hr SLA)",
        "No IP transfer of templates or procedures"
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
      buyLink: "#buy-sigma-legal",
      quoteLink: "#quote-sigma-legal"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $8,967/mo",
      licenseType: "Enterprise Legal Partnership – Full IP Transfer",
      features: [
        "50 hrs/mo of dedicated legal leadership (board support, crisis management)",
        "Custom legal playbooks & governance frameworks",
        "Weekly compliance reviews & incident response drills",
        "24/7 phone, chat & email support",
        "Full IP transfer of all legal playbooks, templates, and SOPs"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $9,800",
            "Annual Cost: $117,600",
            "Live Call Deposit: $11,760",
            "Discount Amount: $9,800 (8.33%)",
            "Monthly After Discount: $8,967",
            "Total After Discount: $107,600"
          ],
          savings: "$9,800"
        },
        {
          label: "Option B – 6-Month Plan",
          details: [
            "Monthly Cost: $10,000",
            "Semiannual Cost: $60,000",
            "Discount Amount: $7,500 (12.5%)",
            "Monthly After Discount: $8,750",
            "Total After Discount: $52,500"
          ],
          savings: "$7,500"
        }
      ],
      buyLink: "#buy-alpha-legal",
      quoteLink: "#quote-alpha-legal"
    }
  ]
};

 const legalSummaryPricingData = {
  title: "Legal Services Pricing Comparison",
  subtitle: "Compare features and pricing for Beta, Sigma, and Alpha packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Standard Retainer – No IP",
        "Enhanced Partner – No IP",
        "Enterprise Partnership – Full IP"
      ],
    },
    {
      item: "Legal Hours/Month",
      values: ["15 hrs", "30 hrs", "50 hrs"],
    },
    {
      item: "Filings Included",
      values: ["None", "5/year", "Unlimited"],
    },
    {
      item: "Review Frequency",
      values: ["Monthly", "Bi-weekly", "Weekly"],
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
      values: ["$2,500", "$6,000", "$9,800"],
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$30,000", "$72,000", "$117,600"],
    },
    {
      item: "Live Call Deposit",
      values: ["$3,000", "$7,200", "$11,760"],
    },
    {
      item: "Discount Amount",
      values: [
        "$3,000 (10 %)",
        "$7,200 (10 %)",
        "$9,800 (8.33 %)"
      ],
    },
    {
      item: "Monthly After Discount",
      values: ["$2,250", "$5,400", "$8,967"],
    },
    {
      item: "Total After Discount",
      values: ["$27,000", "$64,800", "$107,600"],
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
      values: [
        "$4,050 (15 %)",
        "$6,750 (12.5 %)",
        "$7,500 (12.5 %)"
      ],
    },
    {
      item: "Monthly After Discount",
      values: ["$3,750", "$8,125", "$8,750"],
    },
    {
      item: "Total After Discount",
      values: ["$22,500", "$47,250", "$52,500"],
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
        <SummaryPricingTable data={legalSummaryPricingData} />
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
