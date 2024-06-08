import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

export function CustomAccordion() {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-[#f1f1f1]">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold mt-3 mb-8">
          Frequently Asked Questions (FAQ)
        </h1>
      </div>
      {faqs.map((faq, index) => {
        return (
          <Accordion
            type="single"
            className="max-w-5xl mx-auto w-full"
            collapsible
            key={index}
          >
            <AccordionItem value={faq.value}>
              <AccordionTrigger className="font-normal hover:no-underline">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="leading-1 text-slate-500">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}
