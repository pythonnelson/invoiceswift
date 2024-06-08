import { IFeatures } from "@/constants";
import CustomButton from "../CustomButton";

const Features = () => {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-[#f1f1f1]">
      <div className="text-center">
        <span className="text-xs text-white bg-[#0e516b] p-2 rounded-full">
          Comming Soon !
        </span>
        <h1 className="text-2xl md:text-4xl font-semibold mt-3 mb-8">
          Features of InvoiceSwift{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="py-3 shadow mb-6 px-3 hover:bg-white hover:rounded-md duration-300 transition-all"
            >
              <div className="text-[#1b6a88] rounded-md py-3 px-4">
                <Icon className="w-8 h-8" />
              </div>
              <h2 className="mb-3 font-bold">{feature.title}</h2>
              <p className="text-slate-500 duration-300 transition-all">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <CustomButton
          title="Create Your First Invoice"
          href="/invoice/new"
          className="flex items-center gap-1 font-bold bg-sky-950 text-white py-2 px-4 rounded-md hover:bg-fuchsia-500 hover:text-white duration-300 transition-all"
        />
      </div>
    </div>
  );
};

export default Features;
