import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/video-audio-animation.json";
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
  title: "MULTIMEDIA",
  subtitle: "Audio & Video Production Services for Teams and Enterprises",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,500/mo",
      licenseType: "Basic Multimedia Retainer – No IP Transfer",
      features: [
        "80 hrs/mo of combined audio and video post-production",
        "Up to 5 custom music tracks/mo",
        "Up to 8 short-form video edits (≤2 min each)",
        "Monthly deliverables report",
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
      buyLink: "#buy-beta-multimedia",
      quoteLink: "#quote-beta-multimedia"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $6,000/mo",
      licenseType: "Advanced Multimedia Suite – No IP Transfer",
      features: [
        "160 hrs/mo of professional audio/video production",
        "Up to 5 animated explainers/mo",
        "Up to 12 mid-form videos (2–5 min)",
        "Multi-track mixing, motion graphics, and color grading",
        "Bi-weekly feedback and progress sessions",
        "Priority email & chat support (24 hr SLA)"
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
      buyLink: "#buy-sigma-multimedia",
      quoteLink: "#quote-sigma-multimedia"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $10,000/mo",
      licenseType: "Enterprise Multimedia Studio – Full IP Transfer",
      features: [
        "300 hrs/mo of premium production (studio, surround mix)",
        "Unlimited animation and VFX",
        "Up to 20 long-form cinematic videos (≥5 min)",
        "Dedicated pipeline automation and tools",
        "24/7 phone, chat & email support",
        "Full IP transfer of all assets and source files"
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
      buyLink: "#buy-alpha-multimedia",
      quoteLink: "#quote-alpha-multimedia"
    }
  ]
};



 const creativeSummaryPricingData = {
  title: "Creative Production Services Comparison",
  subtitle: "Compare video, sound, animation, and IP support across Beta, Sigma, and Alpha packs",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Basic Multimedia – No IP",
        "Advanced Suite – No IP",
        "Enterprise Studio – Full IP"
      ],
    },
    {
      item: "Production Hours/Month",
      values: ["80 hrs", "160 hrs", "300 hrs"],
    },
    {
      item: "Music & Sound Tracks",
      values: ["5 tracks/mo", "10 tracks/mo", "Unlimited"],
    },
    {
      item: "Video Deliverables",
      values: [
        "8 short videos (≤2 min)",
        "12 mid-form vids (2–5 min)",
        "20 long-form vids (≥5 min)"
      ],
    },
    {
      item: "Animation & Motion Graphics",
      values: [
        "None",
        "5 explainers/mo",
        "Unlimited"
      ],
    },
    {
      item: "Review Frequency",
      values: [
        "Monthly",
        "Bi-weekly",
        "Daily via dashboard"
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
      item: "Monthly After Discount (Opt B)",
      values: ["$3,360", "$8,125", "$14,000"],
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
        <SummaryPricingTable data={creativeSummaryPricingData} />
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
