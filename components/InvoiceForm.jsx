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
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
          <input
            type="text"
            placeholder="Company Address"
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
          <input
            type="text"
            placeholder="State, City, Zip"
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
          <input
            type="text"
            placeholder="Country"
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
        </div>

        {/* ===== CLIENT DETAILS ===== */}
        <div className="flex justify-between gap-6">
          <div className="flex flex-col py-6 w-1/2">
            <h2 className="font-extrabold text-2xl mb-4">Bill To:</h2>
            <input
              type="text"
              placeholder="Client Name"
              className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
            />
            <input
              type="text"
              placeholder="Client Email"
              className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
            />
            <input
              type="text"
              placeholder="Client Address"
              className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
            />
            <input
              type="text"
              placeholder="Client Phone"
              className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
            />
          </div>

          <div className="flex flex-col py-6 w-1/2 mt-12">
            <div className="flex gap-2">
              <label htmlFor="invoiceNumber" className="font-bold">
                Invoice #
              </label>
              <input
                type="text"
                placeholder="Invoice #"
                className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="invoiceDate" className="font-bold">
                Invoice Date
              </label>
              <input
                type="date"
                placeholder="Invoice Date"
                className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="dueDate" className="font-bold">
                Due Date
              </label>
              <input
                type="date"
                placeholder="Due Date"
                className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
