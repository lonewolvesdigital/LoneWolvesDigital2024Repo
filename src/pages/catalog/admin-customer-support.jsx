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
  title: "PRICING PACKAGES",
  subtitle: "Admin & Customer Support Services",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,250/mo",
      licenseType: "Basic Admin & Support Retainer",
      features: [
        "80 hrs/mo of virtual admin support (email & chat)",
        "Phone coverage during business hours (9 am–5 pm)",
        "Monthly activity & KPI summary report",
        "Email support (48 hr SLA)",
        "No IP transfer of workflows or scripts"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $2,500",
            "Annual Cost: $30,000",
            "Live Call Deposit: $3,000",
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
            "Monthly After Discount: $3,750",
            "Total After Discount: $22,500"
          ],
          savings: "$4,050"
        }
      ],
      buyLink: "#buy-beta",
      quoteLink: "#quote-beta"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $4,950/mo",
      licenseType: "Standard Admin & Support",
      features: [
        "160 hrs/mo of virtual admin support (email, chat, phone)",
        "Weekly performance & volume reports",
        "Basic workflow automation (templates & macros)",
        "Priority email & chat support (24 hr SLA)",
        "No IP transfer of custom automation scripts"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $5,500",
            "Annual Cost: $66,000", 
            "Live Call Deposit: $6,600",
            "Monthly After Discount: $4,950",
            "Total After Discount: $59,400"
          ],
          savings: "$6,600"
        },
        {
          label: "Option B – 6-Month Plan",
          details: [
            "Monthly Cost: $9,000",
            "Semiannual Cost: $54,000",
            "Monthly After Discount: $8,125", 
            "Total After Discount: $47,250"
          ],
          savings: "$6,750"
        }
      ],
      buyLink: "#buy-sigma",
      quoteLink: "#quote-sigma"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $8,250/mo",
      licenseType: "Enterprise Admin & Support – Full IP Transfer",
      features: [
        "300 hrs/mo of dedicated admin support (all channels, 24/7)",
        "Daily insights & executive summary dashboards",
        "Custom automation workflows & integrations", 
        "24/7 phone, chat & email support",
        "Full IP transfer of all templates, scripts, and documentation"
      ],
      paymentPlans: [
        {
          label: "Option A – 12-Month Plan",
          details: [
            "Monthly Cost: $9,000",
            "Annual Cost: $108,000",
            "Live Call Deposit: $10,800",
            "Monthly After Discount: $8,250",
            "Total After Discount: $99,000"
          ],
          savings: "$9,000"
        },
        {
          label: "Option B – 6-Month Plan",
          details: [
            "Monthly Cost: $16,000",
            "Semiannual Cost: $96,000",
            "Monthly After Discount: $14,000",
            "Total After Discount: $84,000"
          ],
          savings: "$12,000"
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
