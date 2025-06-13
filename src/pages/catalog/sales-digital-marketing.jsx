import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";
import ProjectHeader from "../../components/Page-header/project-details2-header";
import ProjectDate from "../../data/sales-digital-marketing.json";
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
  title: "SALES & DIGITAL MARKETING",
  subtitle: "Strategic Campaigns, Automation & Growth Solutions",
  packages: [
    {
      packageName: "Beta Pack",
      price: "Starting at $2,250/mo",
      licenseType: "Basic Marketing Retainer – No IP Transfer",
      features: [
        "Email Marketing: Up to 10 campaigns/mo, basic templates, list segmentation (Flowium)",
        "SEO Basics: On-page optimization for 5 pages, keyword research (up to 10 keywords) (Backlinko)",
        "Social Media: 12 posts/mo across 2 platforms, content calendar (HawkSEM)",
        "Monthly performance dashboard (traffic, leads, engagement) (Databox)",
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
      buyLink: "#buy-beta-marketing",
      quoteLink: "#quote-beta-marketing"
    },
    {
      packageName: "Sigma Pack",
      price: "Starting at $5,400/mo",
      licenseType: "Enhanced Marketing Suite – No IP Transfer",
      features: [
        "Marketing Automation: Drip campaigns, lead scoring, 2 workflows (Kiwi Creative)",
        "SEO Advanced: Technical audit, on-page for 20 pages, backlink analysis (Backlinko)",
        "Social & Paid Ads: 20 social posts/mo + $2,000 ad spend management (Reddit)",
        "Bi-weekly performance reports & strategy calls (Oneupweb)",
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
      buyLink: "#buy-sigma-marketing",
      quoteLink: "#quote-sigma-marketing"
    },
    {
      packageName: "Alpha Pack",
      price: "Starting at $9,167/mo",
      licenseType: "Enterprise Growth Engine – Full IP Transfer",
      features: [
        "Dedicated Team: 1× strategist, 2× creatives, 1× analyst",
        "Full-Funnel Strategy: Multi-channel campaigns across email, SEO, SEM, social, and partnership outreach (SalesRoads)",
        "Advanced Analytics: Real-time dashboard, attribution modeling, predictive lead scoring (KlientBoost)",
        "AI-Driven Optimization: Continuous A/B testing, personalization engine",
        "24/7 phone, chat & email support",
        "Full IP transfer of all assets, playbooks, and scripts"
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
      buyLink: "#buy-alpha-marketing",
      quoteLink: "#quote-alpha-marketing"
    }
  ]
};


 const marketingSummaryPricingData = {
  title: "Marketing Services Pricing Comparison",
  subtitle: "Compare features and pricing for Beta, Sigma, and Alpha packages",
  headers: ["Item", "Beta Pack", "Sigma Pack", "Alpha Pack"],
  rows: [
    {
      item: "License Type",
      values: [
        "Basic Marketing – No IP",
        "Enhanced Suite – No IP",
        "Enterprise Engine – Full IP"
      ],
    },
    {
      item: "Email Campaigns",
      values: [
        "10/month",
        "Automation Workflows",
        "Dedicated Strategy"
      ],
    },
    {
      item: "SEO Pages",
      values: [
        "5 pages",
        "20 pages + Audit",
        "Full-Site Strategy"
      ],
    },
    {
      item: "Social Posts",
      values: [
        "12/mo on 2 platforms",
        "20/mo + Paid Ads",
        "Multi-Channel"
      ],
    },
    {
      item: "Reporting Frequency",
      values: [
        "Monthly",
        "Bi-weekly",
        "Real-Time"
      ],
    },
    {
      item: "Automation",
      values: [
        "None",
        "2 Workflows",
        "AI-Driven Optimization"
      ],
    },
    {
      item: "Dedicated Team",
      values: [
        "None",
        "None",
        "✓ Strategist, Creatives, Analyst"
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
      values: ["$2,500", "$6,000", "$10,000"],
    },
    {
      item: "Annual Cost (Opt A)",
      values: ["$30,000", "$72,000", "$120,000"],
    },
    {
      item: "Live Call Deposit",
      values: ["$3,000", "$7,200", "$12,000"],
    },
    {
      item: "Discount Amount",
      values: [
        "$3,000 (10 %)",
        "$7,200 (10 %)",
        "$10,000 (8.33 %)"
      ],
    },
    {
      item: "Monthly After Discount",
      values: ["$2,250", "$5,400", "$9,167"],
    },
    {
      item: "Total After Discount",
      values: ["$27,000", "$64,800", "$110,000"],
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
        {/* <ProjectVideo projectVideoDate={ProjectDate} /> */}
        {/* <NextProject /> */}
        {/* <ProjectGallery /> */}
        <CatalogPricing {...data}/>
        <SummaryPricingTable data={marketingSummaryPricingData} />
        <Works/>
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
