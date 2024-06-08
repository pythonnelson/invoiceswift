import Banner from "@/components/Banner/Banner";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import InvoiceSectionCTA from "@/components/InvoiceSectionCTA";
import Pricing from "@/components/Pricing/Pricing";
import Steps from "@/components/Steps/Steps";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Steps />
      <InvoiceSectionCTA />
      <Steps />
      <CallToAction />
      <Features />
      <Pricing />
    </main>
  );
}
