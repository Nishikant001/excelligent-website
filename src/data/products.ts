import type { ProductContent } from "@/types/content";

// Sourced from the Products (SAP Value Added Services) pages on
// https://excelligent.co.in/
export const products: ProductContent[] = [
  {
    slug: "e-fa-tagging",
    navLabel: "E-FA Tagging",
    title: "E-FA Tagging (Fixed Asset Tagging)",
    intro:
      "Companies face many challenges during the fixed-asset lifecycle, which grow larger when assets are distributed across many locations or plants — typically a discrepancy between physical asset counts and book records. Excelligent has developed an Android application with system enhancements in SAP ECC or SAP S/4HANA to overcome this challenge.",
    featureBlocks: [
      { title: "QR Code Structure Design", description: "Designing a QR code structure suited to the client's asset hierarchy." },
      { title: "QR Code Development", description: "Building the QR-code generation and tagging workflow." },
      { title: "QR Code Enabled Procurement", description: "Integrating QR tagging into the asset procurement process." },
      { title: "Handheld Scanning", description: "Scanning assets through a handheld device for fast, accurate identification." },
      { title: "Sub-Asset Identification", description: "Identifying sub-assets on a plant-wise basis." },
      { title: "Gap List Reporting", description: "Generating a gap-list report during physical checking to reconcile book vs. physical counts." },
    ],
    caseStudy: {
      id: "fa-tagging-automotive",
      title: "E-Fixed Asset Tracking for an Automotive Company",
      summary: "We designed and executed an Asset Tagging project on SAP ECC and Android for a well-known Delhi-based automotive company with 7 plants across India.",
      relatedSlug: "e-fa-tagging",
      clientNamed: false,
    },
    seo: {
      title: "E-FA Tagging (Fixed Asset Tagging) | Excelligent",
      description: "Excelligent's E-FA Tagging accelerator uses QR codes and a handheld Android app to reconcile physical fixed assets against SAP ECC or S/4HANA records.",
      canonical: "https://excelligent.co.in/products/e-fa-tagging",
    },
    relatedIndustrySlugs: ["automotive"],
    relatedServiceSlugs: ["sap-value-added-services"],
  },
  {
    slug: "e-dealer-portal",
    navLabel: "E-Dealer Portal",
    title: "E-Dealer Portal",
    intro:
      "A dealer portal is a specialized web-based platform designed to facilitate communication and transactions between a company and its network of dealers or distributors, providing a centralized, secure, and user-friendly interface for dealers to access essential information, resources, and tools.",
    featureBlocks: [
      { title: "Order Management", description: "Product catalog access, order placement/reordering and status tracking, and order history with invoices and shipment details." },
      { title: "Inventory Management", description: "Real-time stock-level visibility and alerts for low or backordered items." },
      { title: "Financial Management", description: "Dealer-specific pricing and discounts, invoice and payment management, and credit-limit/terms tools." },
      { title: "Reporting and Analytics", description: "Sales performance and order-trend reports, plus inventory turnover and demand-forecasting insights." },
    ],
    caseStudy: {
      id: "dealer-portal-dairy",
      title: "E-Dealer Portal for a Dairy Company",
      summary: "We designed and executed a project on SAP ECC and Android for a well-known Punjab-based dairy products manufacturer.",
      relatedSlug: "e-dealer-portal",
      clientNamed: false,
    },
    seo: {
      title: "E-Dealer Portal | Excelligent",
      description: "Excelligent's E-Dealer Portal gives dealers self-service order management, inventory visibility, and reporting, integrated with SAP ECC.",
      canonical: "https://excelligent.co.in/products/e-dealer-portal",
    },
    relatedIndustrySlugs: ["dairy"],
    relatedServiceSlugs: ["sap-value-added-services"],
  },
  {
    slug: "e-vault",
    navLabel: "E-Vault",
    title: "e-Vault (Document Management System)",
    intro:
      "e-Vault is a centralized and secure Document Management System (DMS) designed to help organizations capture, organize, store, manage, retrieve, share, and control business documents throughout their complete lifecycle — with workflow automation, approval processes, OCR, ERP integration, access control, and comprehensive audit tracking.",
    featureBlocks: [
      { title: "Centralized Document Repository", description: "Upload, organize, and store documents by department, category, document type, business unit, project, customer, or vendor, with structured metadata on every file." },
      { title: "Version Control & Document History", description: "Maintain every version of a document while preserving change history, updated-by details, and previous versions." },
      { title: "OCR & Intelligent Search", description: "Extract text from scanned documents and images with OCR, then locate any document instantly by keyword, metadata, document ID, or business reference." },
      { title: "Configurable Approval Workflows", description: "Route documents through multi-level, role-based approval stages — Draft → Submitted → Review → Approved → Archived — with automatic notifications." },
      { title: "Role-Based Access Control", description: "Restrict documents by department, role, or individual permission, with granular document-level access for authorized users only." },
      { title: "Document Lifecycle & Expiry Management", description: "Track document status from creation through archive, with alerts for documents approaching expiry or review dates." },
      { title: "ERP & SAP Integration", description: "Synchronize master data and business documents with SAP and other ERP environments, including scheduled sync jobs and monitoring." },
      { title: "Dashboards, Audit Trail & Reporting", description: "Monitor document volumes, pending approvals, and sync health, backed by a complete audit trail for compliance." },
    ],
    seo: {
      title: "e-Vault (Document Management System) | Excelligent",
      description: "e-Vault is Excelligent's Document Management System — centralized storage, OCR search, configurable approval workflows, access control, and SAP/ERP integration.",
      canonical: "https://excelligent.co.in/products/e-vault",
    },
    relatedServiceSlugs: ["sap-value-added-services"],
  },
  {
    slug: "e-fitn",
    navLabel: "E-Fitn",
    title: "e-Fitn (Issue Tracking System)",
    intro:
      "e-Fitn is a comprehensive Issue Tracking System designed to help organizations efficiently capture, manage, assign, track, resolve, and analyze issues throughout their complete lifecycle — giving teams a centralized workspace to collaborate, streamline workflows, and ensure timely resolution.",
    featureBlocks: [
      { title: "Structured Ticket Management", description: "Log issues with customizable templates, ticket types (Bug, Feature Request, Incident, and more), priority levels, and an automatically assigned unique ticket ID." },
      { title: "Kanban-Based Workflow", description: "Move tickets across configurable workflow stages — Open → In Progress → UAT → Production → Closed — using an interactive drag-and-drop board." },
      { title: "Team Collaboration", description: "Assign tickets to users, teams, or departments; discuss via comments and @mentions; and attach screenshots, logs, or files directly to a ticket." },
      { title: "SLA Management & Escalation", description: "Define response and resolution deadlines, automatically flag overdue tickets, and trigger escalation or reassignment on SLA breaches." },
      { title: "Smart Notifications", description: "Automatically alert the right people on ticket creation, assignment, status changes, mentions, and SLA breaches." },
      { title: "Advanced Search & Filtering", description: "Locate tickets instantly by ID, keyword, status, priority, assignee, team, or project." },
      { title: "Analytics & KPI Dashboards", description: "Track MTTR, SLA compliance, ticket aging, and team workload distribution from real-time dashboards." },
      { title: "Role-Based Access Control", description: "Control ticket visibility and actions by role, team, and department." },
    ],
    seo: {
      title: "e-Fitn (Issue Tracking System) | Excelligent",
      description: "e-Fitn is Excelligent's Issue Tracking System — Kanban workflows, SLA escalation, team collaboration, and analytics for faster issue resolution.",
      canonical: "https://excelligent.co.in/products/e-fitn",
    },
    relatedServiceSlugs: ["sap-value-added-services"],
  },
  {
    slug: "e-squot",
    navLabel: "E-SQuot",
    title: "e-SQuot (Sourcing & Procurement)",
    intro:
      "e-SQuot is an enterprise Procurement Management System that digitizes and streamlines the complete procurement lifecycle — from purchase requests and vendor management to RFQs, quotations, approvals, purchase orders, and ERP integration.",
    featureBlocks: [
      { title: "Purchase Requisition Management", description: "Create, submit, approve, and track purchase requests through configurable approval routes." },
      { title: "Vendor Management & Vendor Portal", description: "Manage vendor profiles, registration, and documents, with a dedicated portal for vendors to respond to RFQs, submit quotations, and track orders." },
      { title: "RFQ & Quotation Management", description: "Create RFQs, invite multiple vendors to quote, then collect, compare, and evaluate quotations side by side." },
      { title: "Purchase Order Management", description: "Generate, issue, and track purchase orders digitally from approved quotations." },
      { title: "Multi-Level Approval Workflows", description: "Configure role-based, multi-level approvals for requisitions and purchase orders across departments." },
      { title: "ERP & SAP Integration", description: "Synchronize procurement transactions and master data with SAP and other ERP systems." },
      { title: "Analytics & Reporting", description: "Monitor procurement spend, vendor performance, and approval turnaround from a centralized dashboard." },
      { title: "Audit Trail & Role-Based Access Control", description: "Maintain a complete transaction history with access secured by role, permission, and department." },
    ],
    seo: {
      title: "e-SQuot (Sourcing & Procurement) | Excelligent",
      description: "e-SQuot is Excelligent's Procurement Management System — vendor portal, RFQ and quotation comparison, purchase orders, approvals, and ERP/SAP integration.",
      canonical: "https://excelligent.co.in/products/e-squot",
    },
    relatedServiceSlugs: ["sap-value-added-services"],
  },
  {
    slug: "gst-compliance-reporting",
    navLabel: "GST Compliance Reporting",
    title: "GST Compliance Reporting",
    intro: "",
    featureBlocks: [],
    contentPending: true,
    seo: {
      title: "GST Compliance Reporting | Excelligent",
      canonical: "https://excelligent.co.in/products/gst-compliance-reporting",
      robots: "noindex, follow",
    },
    relatedServiceSlugs: ["sap-value-added-services"],
  },
];
