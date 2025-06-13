import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/graphics-design-photography.json";
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

 const creativeStudioSummaryPricingData = {
  title: "Creative Studio Pricing Comparison",
  subtitle: "Compare features and pricing for Beta, Sigma, and Alpha packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Basic – No IP",
        "Enhanced – No IP",
        "Premium – IP Transfer"
      ],
    },
    {
      item: "Design Hours/Month",
      values: ["20 hrs", "40 hrs", "80 hrs"],
    },
    {
      item: "Photo Hours/Month",
      values: ["5 hrs", "10 hrs", "20 hrs"],
    },
    {
      item: "Reporting Frequency",
      values: ["Monthly", "Bi-weekly", "Weekly"],
    },
    {
      item: "Workflow Automation",
      values: ["None", "None", "Scripts & Presets"],
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


  const data = {
  title: "GRAPHICS DESIGN & PHOTOGRAPHY",
  subtitle: "Creative Visual Solutions & Professional Photography",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,250/mo",
      licenseType: "Basic Graphic & Photo Support – No IP Transfer",
      features: [
        "20 hrs/mo of graphic design (social assets, simple infographics)",
        "5 hrs/mo of photography assistance (basic editing of client-provided photos)",
        "Monthly deliverable summary report",
        "Email support (48 hr SLA)",
        "No source-file or IP transfer"
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
      buyLink: "#buy-beta-graphics",
      quoteLink: "#quote-beta-graphics"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $5,220/mo",
      licenseType: "Enhanced Graphic & Photo Services – No IP Transfer",
      features: [
        "40 hrs/mo of graphic design (brand templates, multi-format assets)",
        "10 hrs/mo of on-site or studio photography (up to 2 shoots)",
        "Bi-weekly performance & revisions report",
        "Priority email & chat support (24 hr SLA)",
        "No IP transfer of source files"
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
      buyLink: "#buy-sigma-graphics",
      quoteLink: "#quote-sigma-graphics"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $8,667/mo",
      licenseType: "Premium Creative & IP Transfer",
      features: [
        "80 hrs/mo of dedicated graphic design (branding systems, custom illustrations)",
        "20 hrs/mo of premium photography (studio/on-location, advanced retouching)",
        "Weekly creative & performance dashboards",
        "Custom workflow automation (scripts, presets)",
        "24/7 phone, chat & email support",
        "Full IP transfer of all source files"
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
      buyLink: "#buy-alpha-graphics",
      quoteLink: "#quote-alpha-graphics"
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
        <SummaryPricingTable data={creativeStudioSummaryPricingData} />
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
