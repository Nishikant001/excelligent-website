import type { CompanyInfo, ContactInfo } from "@/types/content";

// Sourced verbatim in meaning from https://excelligent.co.in/overview/
// and the shared footer/contact block. Do not alter facts here without
// re-verifying against the live site or client-supplied updates.
export const company: CompanyInfo = {
  name: "Excelligent Consulting Services",
  legalDescription:
    "Excelligent Consulting Services is a Delhi-based IT company formed to break the myth that adoption of applications such as ERP, CRM, and HCM is a confusing, costly, and painful exercise.",
  founded: "2019",
  tagline: "Excelligent stands for adapting intelligent ways to derive excellent results.",
  aboutParagraphs: [
    "Excelligent Consulting Services is an IT service company formed by industry veterans with a view to make the implementation journey of Enterprise Level Applications like ERP, HRMS, PMS, OKR, and CRM a rewarding experience for customers. Excelligent is also a partner to the class-leading OKR software from Profit.co. Most of Excelligent's customers are SAP ECC and S/4HANA customers who wish to use SAP ERP to its fullest potential.",
    "Excelligent started in 2019 and, in a short duration, managed to serve 50+ customers. This number is constantly growing, and so is the company. Excelligent has expanded from one delivery centre in Gurugram to another in Bhubaneswar to serve customers from the eastern states.",
  ],
  mission:
    "Our mission is to empower businesses through innovative IT solutions and exceptional service. We strive to deliver reliable, scalable, and secure technology services that drive efficiency, enhance productivity, and support our clients' strategic goals.",
  vision:
    "To be the leading provider of transformative IT services, empowering businesses to achieve their full potential through intelligent adoption of enterprise-level applications.",
  guidingPrinciples: [
    "Customer Centricity",
    "Innovation and Continuous Improvement",
    "Quality and Excellence",
    "Agility and Flexibility",
    "Collaboration and Team Work",
    "Integrity and Transparency",
    "Security and Privacy",
    "Employee Empowerment and Development",
    "Result Driven",
  ],
};

// Sourced verbatim from the shared "Get In Touch" footer/contact block.
export const contact: ContactInfo = {
  email: "info@excelligent.co.in",
  phones: ["+91-9958583205", "+91-11-43108915"],
  addresses: [
    {
      label: "Gurugram (HQ)",
      addressLines: [
        "Building Number 359, near Maruti Vocational School",
        "Chakkarpur, Sector 28, Gurugram, Haryana 122001",
      ],
    },
    {
      label: "Bhubaneswar",
      addressLines: [
        "Plot No-2172/3502/3673, Puri Cuttack Road",
        "Near Tata Motors Dion Automotives, Sriram Nagar",
        "Bhubaneswar, Khordha, Odisha, 751002",
      ],
    },
    {
      label: "New Delhi",
      addressLines: ["102, P. No 92, Block X, New Roshan Puri, New Delhi – 110043"],
    },
  ],
  // URLs are null because no resolvable profile links were found on the live
  // site (icons only). See docs/CONTENT_REVIEW_REQUIRED.md item 15.
  socialLinks: [
    { platform: "facebook", url: null },
    { platform: "twitter", url: null },
    { platform: "instagram", url: null },
    { platform: "linkedin", url: null },
  ],
};
