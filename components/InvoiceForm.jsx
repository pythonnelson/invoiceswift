import React from "react";
import FileInput from "./FileInput";

const InvoiceForm = () => {
  return (
    <div className="bg-white w-full max-w-4xl border border-slate-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto mb-6">
      {/* ===== Logo and Invoice Label ===== */}
      <form action="">
        <div className="flex justify-between items-center">
          <FileInput />
          <h2 className="text-4xl uppercase">Invoice</h2>
        </div>

        {/* ===== COMPANY DETAILS ===== */}
        <div className="flex flex-col py-6 w-1/2">
          <input
            type="text"
            placeholder="Company Name"
            className="border-b border-slate-300 focus:outline-none focus:border-b mb-3"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="border-b border-slate-300 focus:outline-none focus:border-b mb-3"
          />
          <input
            type="text"
            placeholder="Company Address"
            className="border-b border-slate-300 focus:outline-none focus:border-b mb-3"
          />
          <input
            type="text"
            placeholder="State, City, Zip"
            className="border-b border-slate-300 focus:outline-none focus:border-b mb-3"
          />
          <input
            type="text"
            placeholder="Country"
            className="border-b border-slate-300 focus:outline-none focus:border-b mb-3"
          />
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
