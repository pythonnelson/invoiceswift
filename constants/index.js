import {
  BarChart4,
  Boxes,
  Columns2,
  Contact2,
  FileBox,
  Gem,
  HomeIcon,
  Lock,
  Mail,
  MessageCircle,
  MessageCircleQuestion,
  Receipt,
  ReceiptSwissFranc,
  ReceiptText,
  UploadCloud,
  User2,
  Users2,
  Zap,
} from "lucide-react";

export const Navigation = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "About",
    icon: User2,
    href: "/about",
  },
  {
    title: "Contact",
    icon: Contact2,
    href: "/contact",
  },
  {
    title: "Features",
    icon: Boxes,
    href: "/features",
  },
];

export const IFeatures = [
  {
    title: "Create Invoices",
    description:
      "Create professional invoices without any hassle of re-entering data the second time.",
    icon: Receipt,
  },
  {
    title: "Customization of Columns",
    description:
      "Customizable invoice template to add more relevant information and columns.",
    icon: Columns2,
  },
  {
    title: "Email & Track Invoices",
    description:
      "Send invoice via email and get to know when the invoice was opened.",
    icon: Mail,
  },
  {
    title: "Recurring Invoices",
    description:
      "Create recurring invoices & never miss your payments. Perfect for billing weekly, monthly or yearly.",
    icon: ReceiptText,
  },
  {
    title: "Invoice Templates",
    description:
      "With a range of invoice designs, send personalized invoices to the clients that proclaim your brand.",
    icon: ReceiptSwissFranc,
  },
  {
    title: "Insightful Reports",
    description:
      "Reports help you follow compliance and give insight into business performance.",
    icon: BarChart4,
  },
  {
    title: "Client Management",
    description:
      "Automatically track client-wise invoices, and payments, and maintain additional details.",
    icon: Users2,
  },
  {
    title: "Bulk Upload Invoices",
    description:
      "Streamline your invoicing process by uploading all of your invoices at once.",
    icon: UploadCloud,
  },
  {
    title: "Inventory Management",
    description:
      "Easily add, manage, and track all the transactions associated with your stocks.",
    icon: FileBox,
  },
  {
    title: "Roles & Permissions",
    description:
      "Assign managerial roles, sales, and other permissions to your team members.",
    icon: Lock,
  },
  {
    title: "Send WhatsApp Reminder",
    description:
      "Simple way to send your invoices via WhatsApp and schedule them for future use.",
    icon: MessageCircle,
  },
  {
    title: "24/7 Live Support",
    description:
      "We are always available to support our customers via email support & live chat support.",
    icon: MessageCircleQuestion,
  },
];

export const prices = [
  {
    title: "Free Plan",
    icon: Zap,
    description:
      "Create up to 50 invoices and other documents in a year - completely free. Invoices, Quotations, Pro Forma, Expenses and more. No hidden charges.",
    linkTitle: "Create Free Invoice",
    href: "/invoices/create",
  },
  {
    title: "Premium Plan",
    icon: Gem,
    description:
      "Manage your accounting at faster pace with additional premium features at minimal cost.",
    linkTitle: "Explore Premium Features",
    href: "/invoices/create",
  },
];

export const faqs = [
  {
    title: "How can I make an invoice for free?",
    description:
      "InvoiceSwift generator allows you to create invoices for free without taking much time. Head over to Refrens invoice generator and start creating invoices using pre-formatted invoice templates. You can add your logo, brand colors, and multiple invoice templates and use many more such features to keep your brand consistent.",
  },
  {
    title: "Which is the best free invoice generator?",
    description:
      "InvoiceSwift is the best free invoice generator as you can create invoices for clients without paying a single amount. You can freely customize your fields and columns, download the invoice as PDF or send it directly via email, or share it via WhatsApp and within one click you can create a delivery challan, payment receipt, debit note and credit note. Not only this, you can create quotations, purchase orders, proforma invoices, payment receipts, delivery challan, and expense management and can also keep the records of your inventory.",
  },
  {
    title: "Is this invoice generator really free?",
    description:
      "FREE! InvoiceSwift invoice generator is free for freelancers, agencies, small businesses, and entrepreneurs. You can generate 20 documents every year. Also, manage invoices and access free templates.",
  },
  {
    title: "Can I generate a PDF invoice using this invoice generator?",
    description:
      "Yes, it is easy to download the PDF invoice using Refrens invoice maker. , clicking on the option of 'Download PDF' will make your invoice in PDF format. Moreover, you can also email the invoice, print the invoice, and send the invoice via WhatsApp or schedule for future dates.",
  },
  {
    title: "Will there be any ads on the invoices?",
    description:
      "Not at all. Your invoices will carry no ads. On the free version, the documents will carry a small non-intrusive Refrens branding. It helps us spread the word and keep the free features going.\n Documents of Premium customers will carry only your business' branding.",
  },
  {
    title: "Can I save my invoices in this online invoice generator?",
    description:
      "Yes. All the invoices created by you are saved online. You can access all the invoices anytime just by logging into your account.",
  },
  {
    title: "What happens to my data when I want to leave?",
    description:
      "When you decide to leave InvoiceSwift, you have the option to download all your customer data, invoices, quotations, and other documents at any time. This ensures that you have access to your important business information even after discontinuing your use of the platform. Refrens prioritizes data security and allows users to retain their data for their records or for transitioning to another platform if needed.",
  },
];

export const footerLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Premium",
    href: "/premium",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "FAQS",
    href: "/faqs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
