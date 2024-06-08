import React from "react";
import Logo from "./Logo";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-[#f1f1f1] border-t border-slate-200">
      <div className="flex flex-col items-center justify-center text-center">
        <Logo />
        <p className="text-slate-400 mt-4">
          Free Open source Platform for making invoices for entirely free
        </p>
        <div className="flex flex-wrap justify-center gap-4 py-8">
          {footerLinks.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="text-[#1b6a88] font-bold hover:text-[#155d72]"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
