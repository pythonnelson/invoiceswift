import React from "react";

const PreviewForm = ({ data }) => {
  const {
    companyName,
    invoiceAuthorName,
    companyAddress,
    cityState,
    country,

    clientName,
    clientEmail,
    clientAddress,
    clientPhone,
    invoiceNumber,
    invoiceDate,
    dueDate,
  } = data
  return (
    <div className="bg-white w-full max-w-4xl border border-slate-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto mb-6">
      <h1>Invoice Preview</h1>
      <h3>Company Name: {companyName}</h3>
    </div>
  );
};

export default PreviewForm;
