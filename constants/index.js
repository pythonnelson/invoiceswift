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
