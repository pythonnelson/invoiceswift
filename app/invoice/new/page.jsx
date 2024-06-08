"use client";

import InvoiceForm from "@/components/InvoiceForm";
import PreviewButton from "@/components/PreviewButton";
import PreviewForm from "@/components/PreviewForm";
import { Download, Mail, Printer, Receipt, Save } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [preview, setPreview] = useState(false);
  return (
    <div className="bg-[#f1f1f1]">
      <div className="py-8 md:py-16 px-4 md:px-16">
        {/* ===== HEADER ===== */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3">
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center justify-center gap-1 bg-[#f1f1f1] shadow py-2 px-4 rounded-sm"
            >
              {preview ? (
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
            <button className="flex items-center justify-center gap-1 bg-blue-500 text-white py-2 px-4 rounded-sm shadow">
              <Mail className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>

        {/* ===== FORM ===== */}

        {preview ? <PreviewForm /> : <InvoiceForm />}
      </div>
    </div>
  );
};

export default Page;
