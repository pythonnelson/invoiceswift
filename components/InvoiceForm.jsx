import React, { useState } from "react";
import FileInput from "./FileInput";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    invoiceAuthorName: "",
    companyAddress: "",
    cityState: "",
    country: "",

    clientName: "",
    clientEmail: "",
    clientAddress: "",
    clientPhone: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-white w-full max-w-4xl border border-slate-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto mb-6">
      {/* ===== Logo and Invoice Label ===== */}
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-between items-center">
          <FileInput />
          <h2 className="text-4xl uppercase">Invoice</h2>
        </div>

        {/* ===== COMPANY DETAILS ===== */}
        <div className="flex flex-col py-6 w-1/2">
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            onChange={handleInputChange}
            value={formData.companyName}
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
          <input
            type="text"
            placeholder="Your Name"
            name="invoiceAuthorName"
            onChange={handleInputChange}
            value={formData.invoiceAuthorName}
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
          <input
            type="text"
            placeholder="Company Address"
            name="companyAddress"
            onChange={handleInputChange}
            value={formData.companyAddress}
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
          <input
            type="text"
            placeholder="State, City, Zip"
            name="cityState"
            onChange={handleInputChange}
            value={formData.cityState}
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            onChange={handleInputChange}
            value={formData.country}
            className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
          />
        </div>

        {/* ===== CLIENT AND INVOICE DETAILS ===== */}
        <div className="flex justify-between gap-6">
          <div className="flex flex-col py-6 w-1/2">
            <h2 className="font-extrabold text-2xl mb-4">Bill To:</h2>
            <input
              type="text"
              placeholder="Client Name"
              name="clientName"
              onChange={handleInputChange}
              value={formData.clientName}
              className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
            />
            <input
              type="text"
              placeholder="Client Email"
              name="clientEmail"
              onChange={handleInputChange}
              value={formData.clientEmail}
              className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
            />
            <input
              type="text"
              placeholder="Client Address"
              name="clientAddress"
              onChange={handleInputChange}
              value={formData.clientAddress}
              className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
            />
            <input
              type="text"
              placeholder="Client Phone"
              name="clientPhone"
              onChange={handleInputChange}
              value={formData.clientPhone}
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
                name="invoiceNumber"
                onChange={handleInputChange}
                value={formData.invoiceNumber}
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
                name="invoiceDate"
                onChange={handleInputChange}
                value={formData.invoiceDate}
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
                name="dueDate"
                onChange={handleInputChange}
                value={formData.dueDate}
                className="border-b border-slate-300 focus:outline-none focus:border-b focus:border-[#1b6a88] mb-3"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-slate-950 text-white py-2 px-4 rounded-sm hover:bg-[#1b6a88] transition-all duration-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
