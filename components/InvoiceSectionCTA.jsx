import React from "react";
import CustomButton from "./CustomButton";
import { CloudDownloadIcon } from "lucide-react";

const InvoiceSectionCTA = () => {
  return (
    <div className="flex items-center justify-center bg-slate-50">
      <div className="invoice-section-cta flex items-center justify-center">
        <div className="py-12 px-16 bg-white rounded-md border border-[#1b6a88] shadow-2xl">
          <CustomButton
            title="Create Your First Invoice"
            href="/invoice/new"
            className="font-bold bg-[#1b6a88] p-3 rounded-md text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceSectionCTA;
