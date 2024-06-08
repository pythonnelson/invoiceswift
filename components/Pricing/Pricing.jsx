import { prices } from "@/constants";
import { ZapIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <div className="flex gap-6 items-center justify-center py-8 md:py-16 px-4 md:px-16 bg-[#1b6a88] text-white">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Pricing of Invoice Generator
          </h2>
          <p>Only Pay When You Need Premium Features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-6">
          {prices.map((price, index) => {
            const Icon = price.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-2xl rounded-md px-4 py-8"
              >
                <Icon className="w-12 h-12 bg-[#0e516b] text-white rounded-full p-3" />
                <h4 className="text-[#1b6a88] py-4 font-bold">{price.title}</h4>
                <p className="text-slate-700 pb-4">{price.description}</p>
                <Link href={price.href} className="text-[#1b6a88] font-bold">
                  {price.linkTitle}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
