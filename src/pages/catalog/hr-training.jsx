import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/hr-training.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";
import HRTrainingPackages from "../../components/price-packages/hr-training-packages";

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
  title: "HR & TRAINING",
  subtitle: "Comprehensive Human Resources Solutions & Professional Training",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,250/mo",
      licenseType: "Basic HR Support & Training – No IP Transfer",
      features: [
        "20 hrs/mo of HR consulting (policy support, employee relations)",
        "4 standard training sessions/mo (up to 10 attendees each)",
        "Monthly HR metrics dashboard (turnover, engagement)",
        "Email support (48-hr SLA)",
        "No transfer of custom training materials or IP"
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
      buyLink: "#buy-beta-hr",
      quoteLink: "#quote-beta-hr"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $5,400/mo",
      licenseType: "Enhanced HR & Training Suite – No IP Transfer",
      features: [
        "40 hrs/mo of HR leadership (talent acquisition, performance management)",
        "8 custom training sessions/mo (leadership, DEI, compliance)",
        "Bi-weekly analytics & program impact reports",
        "Standard LMS setup & user support",
        "Priority email & chat support (24-hr SLA)",
        "No IP transfer of custom content"
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
      buyLink: "#buy-sigma-hr",
      quoteLink: "#quote-sigma-hr"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $8,708/mo",
      licenseType: "Enterprise HR Transformation – Full IP Transfer",
      features: [
        "80 hrs/mo of dedicated HR leadership (culture, change management)",
        "16 bespoke training sessions/mo (custom curricula)",
        "Weekly executive HR analytics & strategic workshops",
        "Full LMS customization & admin training",
        "24/7 phone, chat & email support",
        "Full IP transfer of training materials & frameworks"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $9,500",
            "Annual Cost: $114,000",
            "Live Call Deposit: $11,400",
            "Discount Amount: $9,500 (8.33%)",
            "Monthly After Discount: $8,708",
            "Total After Discount: $104,500"
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
      buyLink: "#buy-alpha-hr",
      quoteLink: "#quote-alpha-hr"
    }
  ]
};

 const hrTrainingSummaryPricingData = {
  title: "HR & Training Services Pricing Comparison",
  subtitle: "Compare features and pricing for Beta, Sigma, and Alpha packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Basic HR & Training – No IP",
        "Enhanced HR Suite – No IP",
        "Enterprise Transformation – Full IP"
      ],
    },
    {
      item: "Consulting Hours/Month",
      values: ["20 hrs", "40 hrs", "80 hrs"],
    },
    {
      item: "Training Sessions/Month",
      values: ["4 standard", "8 custom", "16 bespoke"],
    },
    {
      item: "Reporting Frequency",
      values: ["Monthly", "Bi-weekly", "Weekly"],
    },
    {
      item: "LMS Support",
      values: [
        "None",
        "Standard LMS Setup",
        "Full LMS Customization & Admin Training"
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
      values: ["$2,500", "$6,000", "$9,500"],
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$30,000", "$72,000", "$114,000"],
    },
    {
      item: "Live Call Deposit",
      values: ["$3,000", "$7,200", "$11,400"],
    },
    {
      item: "Discount Amount",
      values: [
        "$3,000 (10 %)",
        "$7,200 (10 %)",
        "$9,500 (8.33 %)"
      ],
    },
    {
      item: "Monthly After Discount",
      values: ["$2,250", "$5,400", "$8,708.33"],
    },
    {
      item: "Total After Discount",
      values: ["$27,000", "$64,800", "$104,500"],
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
      item: "Monthly After Discount",
      values: ["$3,360", "$8,125", "$14,000"],
    },
    {
      item: "Total After Discount",
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
        <HRTrainingPackages />
        {/* <ProjectVideo projectVideoDate={ProjectDate} /> */}
        {/* <NextProject /> */}
        {/* <ProjectGallery /> */}
        {/* <CatalogPricing {...data}/> */}
        {/* <SummaryPricingTable data={hrTrainingSummaryPricingData} /> */}
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
