import { CloudDownloadIcon } from "lucide-react";
import React from "react";
import CustomButton from "./CustomButton";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-between bg-[#1b6a88] py-6 px-24 text-[#f1f1f1]">
      <h2>Create Your First Invoice with InvoiceSwift</h2>
      <div>
        <CustomButton
          title="Create Your First Invoice"
          icon={<CloudDownloadIcon className="w-4 h-4" />}
          href="/invoice/new"
          className="flex items-center gap-1 font-bold bg-sky-950 text-white py-2 px-4 rounded-md hover:bg-fuchsia-500 hover:text-white duration-300 transition-all"
        />
      </div>
    </div>
  );
};

export default CallToAction;
