import { IFeatures } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-[#f1f1f1]">
      <h1 className="text-center text-2xl md:text-4xl font-semibold mb-6">
        Features of InvoiceSwift
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {IFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="py-3 mr-4 shadow mb-6 px-2 hover:bg-fuchsia-500 hover:px-2 hover:rounded-md duration-300 transition-all"
            >
              <div className="text-[#1b6a88] rounded-md py-3 px-4">
                <Icon className="w-8 h-8" />
              </div>
              <h2 className="mb-3 font-bold">{feature.title}</h2>
              <p className="text-slate-500 hover:text-[#f1f1f1] duration-300 transition-all">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
