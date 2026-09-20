import type { ServiceContent } from "@/types/content";

// Sourced from the Services pages on https://excelligent.co.in/
export const services: ServiceContent[] = [
  {
    slug: "sap-implementation",
    navLabel: "SAP Implementation",
    title: "SAP Implementation",
    intro:
      "SAP implementation is a structured process that integrates various business functions into a single system to enhance efficiency, data management, and decision-making capabilities. It involves meticulous planning, configuration, testing, and training to ensure successful deployment and operation of the SAP system. Excelligent excels in this area through an intelligent, phased approach.",
    whyChooseUs: [
      { title: "Focussed Approach", description: "Only focusing on SAP services allows deeper engagement, leading to higher quality work and faster completion." },
      { title: "Transformative Approach", description: "Our approach is agile, modular, and scalable, where the business owns the solution." },
      { title: "Cost Effectiveness", description: "We provide significant value for the price, combining high quality with affordability." },
      { title: "Faster Go-Live", description: "Usage of accelerators, tools, templates, and rapid, repeatable delivery steps results in quicker go-live and ROI." },
    ],
    methodologyPhases: [
      { title: "Discover", description: "Understand the functionality of SAP S/4HANA Cloud and how the solution can bring benefits to the business." },
      { title: "Prepare", description: "Provide initial planning and preparation for the project — finalize plans, assign the project team, and begin work optimally." },
      { title: "Explore", description: "Perform a fit-to-standard analysis to validate solution functionality and confirm business requirements can be satisfied." },
      { title: "Realize", description: "Incrementally build and test an integrated business and system environment, load customer data, and prepare cutover plans." },
      { title: "Deploy", description: "Set up the production system, conduct cutover activities, confirm organizational readiness, and switch operations to the new system." },
      { title: "Run", description: "Further optimize and automate the operability of the solution." },
    ],
    caseStudy: {
      id: "sap-implementation-multi-company",
      title: "SAP Implementation Services for Multiple Companies",
      summary: "Our team participated in SAP S/4HANA On-Premise, Private, and Public Cloud ERP implementations at Distillery, Electronics, Automotive, Chemical, Herbal, Dairy, and Construction companies.",
      relatedSlug: "sap-implementation",
      clientNamed: false,
    },
    seo: {
      title: "SAP Implementation Services | Excelligent",
      description: "Excelligent delivers SAP S/4HANA implementations across On-Premise, Private, and Public Cloud using the SAP Activate methodology, from discovery to go-live.",
      canonical: "https://excelligent.co.in/services/sap-implementation",
    },
    relatedSolutionSlugs: ["rise-with-sap", "grow-with-sap", "sap-btp"],
    relatedIndustrySlugs: ["electronics", "automotive", "chemical", "dairy", "engineering-construction"],
  },
  {
    slug: "sap-ams",
    navLabel: "SAP AMS",
    title: "SAP AMS",
    intro:
      "Application Management Support (AMS) in SAP is crucial for maintaining system performance, ensuring security and compliance, optimizing costs, and enabling businesses to focus on strategic initiatives. Effective AMS achieves higher operational efficiency, better user satisfaction, and a stronger competitive edge.",
    whyChooseUs: [
      { title: "Focussed Approach", description: "Only focusing on SAP AMS services allows deeper engagement, leading to higher quality work and faster completion." },
      { title: "Team Experience", description: "We have experienced business-domain consultants as well as SAP-experienced resources." },
      { title: "Cost Effectiveness", description: "We provide significant value for the price, combining high quality with affordability." },
      { title: "Best Practices", description: "We follow industry best ITIL-based practices that are responsive and provide efficient results." },
    ],
    methodologyPhases: [
      { title: "Transition Phase", description: "Knowledge transfer, system assessment, stakeholder alignment, and setup and access." },
      { title: "Steady State Support", description: "Incident management, service request management, problem management, and performance monitoring." },
      { title: "Continuous Improvement", description: "System optimization, process improvement, updates and upgrades, and training and knowledge sharing." },
      { title: "Enhancement Phase", description: "Requirement gathering, design and development, user acceptance testing, and deployment and rollout." },
      { title: "Governance and Reporting", description: "Governance meetings, performance reporting, SLA management, and continuous improvement." },
    ],
    caseStudy: {
      id: "sap-ams-distillery",
      title: "SAP AMS Services for a Distillery Company",
      summary: "Our customer is a well-known alcoholic beverage brand in Northern India. Excelligent managed their AMS immediately after go-live on RISE with SAP S/4HANA Private Cloud and helped stabilize all operations on SAP.",
      relatedSlug: "sap-ams",
      clientNamed: false,
    },
    seo: {
      title: "SAP AMS Services | Excelligent",
      description: "Excelligent's SAP Application Management Services cover transition, steady-state support, continuous improvement, and governance for live SAP systems.",
      canonical: "https://excelligent.co.in/services/sap-ams",
    },
    relatedSolutionSlugs: ["rise-with-sap"],
  },
  {
    slug: "sap-btp-development",
    navLabel: "SAP BTP Development",
    title: "SAP BTP Development",
    intro:
      "This service page currently shares its content with the SAP BTP solution page on the live site (same URL, reused across two different nav sections). See docs/CONTENT_REVIEW_REQUIRED.md item 9/12 for the client decision needed on whether to keep one shared page or split solution vs. service content.",
    whyChooseUs: [],
    methodologyPhases: [],
    seo: {
      title: "SAP BTP Development | Excelligent",
      canonical: "https://excelligent.co.in/services/sap-btp-development",
      robots: "noindex, follow",
    },
    relatedSolutionSlugs: ["sap-btp"],
    relatedIndustrySlugs: ["chemical"],
    knownContentBug: "Duplicate of the SAP BTP solution page; the live site reuses one URL for two nav entries.",
  },
  {
    slug: "sap-system-conversion-upgrades",
    navLabel: "SAP System Conversion and Upgrades",
    title: "SAP System Conversion and Upgrades",
    intro:
      "SAP system conversion refers to upgrading an existing SAP system to a newer version or transforming it into a different SAP environment, often associated with migrating to SAP S/4HANA. A technical upgrade updates an SAP system to a newer version without significant changes to existing business processes, customizations, or configurations, leveraging new technical features and improved performance while maintaining the existing functional landscape.",
    whyChooseUs: [
      { title: "Team Experience", description: "We have experienced migration functional and technical consultants with 10+ projects of experience." },
      { title: "Cost Effectiveness", description: "We provide significant value for the price, combining high quality with affordability." },
      { title: "Best Practices", description: "We follow industry best practices that are responsive and provide efficient results." },
    ],
    methodologyPhases: [
      { title: "Pre-Migration Planning", description: "Current system assessment, migration strategy, stakeholder involvement, risk assessment, and backup/recovery planning." },
      { title: "System Preparation", description: "Data cleansing, data mapping and transformation, custom code analysis, and configuration documentation." },
      { title: "Technical Migration", description: "Migration tools, sandbox environment, system copy and upgrade, and testing and validation." },
      { title: "Go-Live Preparation", description: "Cutover planning, dry runs, stakeholder communication, and user training." },
      { title: "Post-Migration Support", description: "Post go-live monitoring, issue resolution, performance optimization, documentation, and change management." },
    ],
    caseStudy: {
      id: "system-conversion-telecom",
      title: "System Conversion of a Telecom Company",
      summary: "A telecom company experienced zero disruption while moving from ECC to the SAP S/4HANA system.",
      relatedSlug: "sap-system-conversion-upgrades",
      clientNamed: false,
    },
    seo: {
      title: "SAP System Conversion & Upgrades | Excelligent",
      description: "Excelligent plans and executes SAP system conversions and technical upgrades, including brownfield and bluefield moves to S/4HANA.",
      canonical: "https://excelligent.co.in/services/sap-system-conversion-upgrades",
    },
    relatedSolutionSlugs: ["rise-with-sap", "grow-with-sap"],
    knownContentBug:
      "The live site's 'Technical Projects We Undertake' cards (Brownfield / Bluefield / Technical Upgrades / Infrastructure Migrations) contain copy-pasted AMS descriptions rather than real conversion/upgrade descriptions. Not carried forward — see docs/CONTENT_REVIEW_REQUIRED.md item 11.",
  },
  {
    slug: "sap-cloud-analytics",
    navLabel: "SAP Cloud Analytics",
    title: "SAP Cloud Analytics",
    intro:
      "SAP Analytics Cloud (SAC) is a cloud-based analytics solution provided by SAP that integrates business intelligence, planning, predictive analytics, and augmented analytics in a single solution — designed for self-service analytics so business users can perform complex data analysis without deep technical expertise.",
    whyChooseUs: [],
    methodologyPhases: [
      { title: "Business Intelligence", description: "Data connectivity across SAP and non-SAP systems, interactive dashboards and visualizations, and real-time reporting." },
      { title: "Planning", description: "Financial planning and analysis, integrated cross-department planning, and scenario modeling." },
      { title: "Predictive Analytics", description: "Machine-learning-driven pattern discovery, predictive modeling, and automated smart insights." },
      { title: "Augmented Analytics", description: "Natural-language querying, smart discovery of key influencers and relationships, and smart data-transformation recommendations." },
      { title: "Collaboration", description: "In-context commenting, sharing of dashboards and insights, and version control for planning data and models." },
    ],
    caseStudy: {
      id: "cloud-analytics-automotive",
      title: "SAP Analytics for an Automotive Company",
      summary: "We were engaged with a well-known automotive company to correct and enhance an existing SAP Analytics deployment alongside their SAP ECC system.",
      relatedSlug: "sap-cloud-analytics",
      clientNamed: false,
    },
    seo: {
      title: "SAP Cloud Analytics | Excelligent",
      description: "Excelligent implements and optimizes SAP Analytics Cloud, combining business intelligence, planning, and predictive analytics for better decisions.",
      canonical: "https://excelligent.co.in/services/sap-cloud-analytics",
    },
    knownContentBug: "Live URL is a WordPress slug collision with the GROW page (ends in '-2'); the new route removes this inconsistency.",
    relatedSolutionSlugs: ["sap-btp"],
    relatedIndustrySlugs: ["automotive"],
  },
  {
    // "SAP Value Added Services" is a nav umbrella on the live site (a
    // nested Services sub-menu) grouping Excelligent's 3 product
    // accelerators, rather than its own written content page — see
    // docs/EXISTING_FUNCTIONALITY.md. Represented here as a product hub
    // so no content is invented for it.
    slug: "sap-value-added-services",
    navLabel: "SAP Value Added Services",
    title: "SAP Value Added Services",
    intro:
      "Beyond core implementation and support, Excelligent has built a set of value-added product accelerators on top of SAP ECC and S/4HANA — purpose-built tools that solve specific operational challenges.",
    whyChooseUs: [],
    methodologyPhases: [],
    isProductHub: true,
    productSlugs: ["e-fa-tagging", "e-dealer-portal", "gst-compliance-reporting"],
    seo: {
      title: "SAP Value Added Services | Excelligent",
      description: "Excelligent's SAP value-added products include Fixed Asset Tagging, E-Dealer Portal, and GST Compliance Reporting, built on top of SAP ECC and S/4HANA.",
      canonical: "https://excelligent.co.in/services/sap-value-added-services",
    },
  },
];
