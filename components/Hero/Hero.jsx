import CustomButton from "../CustomButton";
import { CloudDownload, MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-24 bg-[#1b6a88] text-[#f1f1f1] grid grid-cols-1 md:grid-cols-2 px-16 items-center gap-4">
      <div className="flex flex-col space-y-4">
        <h2 className="flex flex-col text-3xl md:text-5xl font-bold">
          Invoice Generator
          <span className="text-slate-50 text-sm">
            Simplify Your Invoicing Process with InvoiceSwift
          </span>
        </h2>
        <p className="text-base md:text-xl pt-10">
          Create, Manage and Track Recurring Invoices, Download as PDF, Email
          and Print Invoices{" "}
        </p>
        <div className="flex">
          <CustomButton
            title="Create Your First Invoice"
            icon={<CloudDownload className="w-4 h-4" />}
            href="/invoice/new"
            className="flex items-center gap-1 font-bold bg-sky-950 text-white py-2 px-4 rounded-md hover:bg-fuchsia-500 hover:text-white duration-300 transition-all"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          src="/images/image.webp"
          width={500}
          height={700}
          alt="hero logo"
        />
      </div>
    </div>
  );
};

export default Hero;
