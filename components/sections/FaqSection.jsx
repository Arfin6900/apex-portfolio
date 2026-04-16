"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/ui/section-badge";
import { AnimatedButton } from "@/components/ui/animated-button";
import { faqItems } from "@/data/faqs";
import { PrimaryButton } from "../ui/primary-button";

export function FaqSection() {
  return (
    <section className="flex w-full items-start justify-center gap-[230px] px-[150px] py-20 bg-[#0c0c0c]">
      {/* Left column */}
      <div className="flex flex-col w-[626px] items-start justify-center gap-12 relative shrink-0">
        {/* Badge + Heading */}
        <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
          <SectionBadge label="FAQs" />

          <div className="flex items-center relative self-stretch w-full">
            <h2 className="relative flex-1 mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Have questions about your project?
            </h2>
          </div>
        </div>

        {/* CTA Card */}
        <div className="flex flex-col items-start justify-center gap-[58px] pl-[70px] pr-[140px] py-12 relative self-stretch w-full bg-[#0e0e0e] rounded-2xl overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(68deg,rgba(45,45,45,0)_0%,rgba(147,147,147,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          {/* Overlapping avatars */}
          <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
            <div className="inline-flex items-center relative">
              {[1, 2, 3].map((_, index) => (
                <Image
                  key={index}
                  className={`w-[99.89px] h-[99.89px] mt-[-20.31px] mb-[-27.08px] ${index > 0 ? "ml-[-15px]" : "ml-[-18.62px]"}`}
                  alt=""
                  src="/images/placeholder-avatar.svg"
                  width={100}
                  height={100}
                />
              ))}
            </div>

            <p className="relative self-stretch font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
              Find the perfect solution for your business today!
            </p>
          </div>

          <PrimaryButton children="View Our Work" />
        </div>
      </div>

      {/* Right column: FAQ accordion */}
      <div className="flex flex-col items-start px-0 py-6 relative flex-1 self-stretch">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={`px-0 py-0 ${index === 0 ? "border-b border-[#282828]" : "border-b border-[#1a1a1a]"} ${index === faqItems.length - 1 ? "border-b-0" : ""}`}
            >
              <AccordionTrigger className="flex items-center gap-4 px-0 py-9 w-full text-left hover:no-underline [&>svg]:hidden">
                <span className="flex-1 font-paragraph-large font-[number:var(--paragraph-large-font-weight)] text-[#ffffff] text-[length:var(--paragraph-large-font-size)] tracking-[var(--paragraph-large-letter-spacing)] leading-[var(--paragraph-large-line-height)] [font-style:var(--paragraph-large-font-style)]">
                  {item.question}
                </span>
                <Image
                  className="w-10 h-10 shrink-0"
                  alt=""
                  src="/images/placeholder-arrow.svg"
                  width={40}
                  height={40}
                />
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-[#999999] font-paragraph-large font-[number:var(--paragraph-large-font-weight)] text-[length:var(--paragraph-large-font-size)] tracking-[var(--paragraph-large-letter-spacing)] leading-[var(--paragraph-large-line-height)]">
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
