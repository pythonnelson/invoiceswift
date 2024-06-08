import { Check, MoveRight } from "lucide-react";
import React from "react";

const Steps = () => {
  return (
    <div className="bg-slate-50 mx-auto py-8 md:py-16 px-4 md:px-16 flex items-center justify-center">
      <div className="">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Create your Invoices in less than 2 minutes
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex items-center justify-center gap-1 mb-4 md:mb-0">
            <p className="border-2 bg-white rounded-full flex items-center justify-center p-2 h-8 w-8">
              <Check className="w-4 h-4" />
            </p>
            <p>Invoice Details</p>
            <MoveRight className="hidden md:block ml-3" />
          </div>

          <div className="flex items-center justify-center gap-1 mb-4 md:mb-0">
            <p className="border-2 bg-white rounded-full flex items-center justify-center p-2 h-8 w-8">
              <Check className="w-4 h-4" />
            </p>
            <p>
              Your Details <br />{" "}
              <span className="text-sm text-gray-400">(Optional)</span>
            </p>
            <MoveRight className="hidden md:block ml-3" />
          </div>

          <div className="flex items-center justify-center gap-1">
            <p className="border-2 bg-white rounded-full flex items-center justify-center p-2 h-8 w-8">
              <Check className="w-4 h-4" />
            </p>
            <p>
              Select Design & Colors <br />{" "}
              <span className="text-sm text-gray-400">
                (Download or Email Invoice)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
