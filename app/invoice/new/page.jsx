"use client";

import FileInput from "@/components/FileInput";
import FormTable from "@/components/FormTable";
// import InvoiceForm from "@/components/InvoiceForm";
import PreviewButton from "@/components/PreviewButton";
import PreviewForm from "@/components/PreviewForm";
import { Download, Mail, Printer, Receipt, Save } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [preview, setPreview] = useState(false);
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
    setPreview(!preview)
  };
  return (
    <div className="bg-[#f1f1f1]">
      <div className="py-8 md:py-16 px-4 md:px-16">
        {/* ===== HEADER ===== */}
        <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
          <div className="flex gap-3">
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center justify-center gap-1 bg-[#f1f1f1] shadow py-2 px-4 rounded-sm"
            >
              {!preview ? (
                <PreviewButton />
              ) : (
                <div className="flex items-center justify-center gap-1">
                  <Receipt className="w-4 h-4" />
                  Edit Form
                </div>
              )}
            </button>
            <button className="flex items-center justify-center gap-1 bg-[#f1f1f1] shadow py-2 px-4 rounded-sm">
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button className="flex items-center justify-center gap-1 bg-[#f1f1f1] shadow py-2 px-4 rounded-sm">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-1 bg-[#1b6a88] text-white py-2 px-4 rounded-sm shadow">
              <Save className="w-4 h-4" />
              Save Online
            </button>
            <button className="flex items-center justify-center gap-1 bg-black text-white py-2 px-4 rounded-sm shadow">
              <Mail className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>

        {/* ===== FORM ===== */}

        {preview ? <PreviewForm data={formData} /> : (
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

            {/* ===== FORM TABLE ==== */}
            <FormTable />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-slate-950 text-white py-2 px-4 rounded-sm hover:bg-[#1b6a88] transition-all duration-500"
              >
                Submit Invoice
              </button>
            </div>
          </form>
        </div>
        )}
      </div>
    </div>
  );
};

export default Page;
