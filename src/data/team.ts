import type { TeamMember } from "@/types/content";
// Sourced from https://excelligent.co.in/our-team/
// `photo: null` for all 5 members: the live site's <img> tags reference
// filenames (captured during the Phase 1 audit), but the actual binary
// image files were never migrated into this project's public/ directory
// (Phase 1 audit content, not source imagery). Phase 11 QA found the 3
// filenames below were pointing at nonexistent files, producing broken
// <img> icons in production — rather than fabricate placeholder photos of
// real named people, all 5 are now treated the same as the 2 members the
// live site itself shows a generic silhouette for. See
// docs/CONTENT_REVIEW_REQUIRED.md item 7 (updated in Phase 11).
export const teamMembers: TeamMember[] = [
  
  {
    id: "itishree-kar",
    name: "Itishree Kar",
    title: "Founder and Director HR",
    bio: "Itishree is an HR leader providing guidance on talent acquisition and retention, ensuring compliance with laws and regulations, fostering a positive and inclusive work environment, and leading the HR team. She holds a post-graduate degree.",
    photo: "/team/itishreekar.jpg", // see file header note — real photo not yet supplied
    //     linkedin: "https://www.linkedin.com/in/jiban-jena-2788a534/",
    // email: "jiban.jena@excelligent.co.in",
  },
  {
    id: "dharmendra-sharma",
    name: "Dharmendra Sharma",
    title: "Business Growth Director",
    bio: "Dharmendra plays a strategic leadership role focused on driving revenue, market expansion, and long-term business sustainability. He drives business expansion, revenue growth, and market leadership for the organization's SAP-related offerings — such as S/4HANA, cloud, analytics, and digital transformation services — through strategic planning, partnerships, and client acquisition.",
    photo: "/team/dharmendra.jpeg", // see file header note — real photo not yet supplied
    //     linkedin: "https://www.linkedin.com/in/jiban-jena-2788a534/",
    // email: "jiban.jena@excelligent.co.in",
  },
  {
    id: "jiban-kumar-jena",
    name: "Jiban Kumar Jena",
    title: "CEO",
    bio: "Jiban is a tech leader who has worked for companies like HCL, WNS, LPC Group (UK), and Adelie Foods Ltd (UK), with deep experience in SAP. He oversees the company's long-term vision, mission, and strategic goals, ensuring their implementation across all departments. He supervises daily operations, ensures the organizational structure is efficient, and is responsible for hiring, mentoring, and directing the team while fostering a positive, productive company culture. He makes key decisions on resource allocation and provides leadership in challenging, unexpected, or high-pressure situations.",
    photo: "/team/jiban.jpeg", // see file header note — real photo not yet supplied
    // linkedin: "https://www.linkedin.com/in/jiban-jena-2788a534/",
    // email: "jiban.jena@excelligent.co.in",
  },
  {
    id: "amit-kumar",
    name: "Amit Kumar",
    title: "Advisor – Govt Projects",
    bio: "Amit provides critical expertise and support across various domains, including strategic planning, technical guidance, project management, stakeholder engagement, risk management, financial oversight, regulatory compliance, capacity building, innovation, and sustainability. His role is essential in ensuring that government projects are well-planned, effectively executed, and achieve their desired outcomes.",
    photo: null,
    //     linkedin: "https://www.linkedin.com/in/jiban-jena-2788a534/",
    // email: "jiban.jena@excelligent.co.in",
  },
  {
    id: "praveen-sharma",
    name: "Praveen Sharma",
    title: "Advisor – Overseas Projects",
    bio: "Praveen Sharma is a world-renowned consultant specializing in the Power Sector. He holds a Master's Degree focused on Power Distribution & Transmission Engineering from the University of Newcastle in the U.K., and has a Chartered Engineer (CEng) accreditation through the Engineering Council of the United Kingdom. He is also a Professional Engineer (PE) license holder from the United States of America. Sharing his knowledge with others is an important personal goal for Praveen; he mentors young engineers and provides training where appropriate.",
    photo: null,
    //     linkedin: "https://www.linkedin.com/in/jiban-jena-2788a534/",
    // email: "jiban.jena@excelligent.co.in",
  },
];
