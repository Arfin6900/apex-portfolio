"use client";

import { useState } from "react";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "../ui/primary-button";

const budgetOptions = ["$1-5k", "$5-10k", "$10-20k", "$20-50K", "$50K+"];

function FormInput({ placeholder, width = "w-[445.43px]" }) {
  return (
    <div className={`flex flex-col ${width} items-center gap-1.5`}>
      <span className="flex items-center self-stretch mt-[-1.00px] opacity-40 font-h3 font-[number:var(--h3-font-weight)] text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
        {placeholder}
      </span>
      <div className="w-full h-px bg-gradient-to-r from-[#383838] to-transparent" />
    </div>
  );
}

export function ContactFormSection() {
  const [selectedBudget, setSelectedBudget] = useState(null);

  return (
    <section className="flex flex-col w-full items-center px-6 md:px-12 lg:px-[150px] py-16 lg:py-[100px] relative bg-neutral-950 overflow-hidden">
      {/* Background image — positioned at the bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[70%] bg-contain bg-bottom bg-no-repeat pointer-events-none opacity-40"
        style={{ backgroundImage: "url(/images/consult-bg.svg)" }}
      />
      {/* Gradient fade on top of the bg image */}
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-b from-neutral-950 via-transparent to-transparent pointer-events-none" />

      <div className="flex flex-col items-start gap-[60px] relative w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <SectionBadge label="Contact Us" />

          <div className="flex flex-col items-start gap-12 w-full">
            {/* Heading */}
            <h2 className="[font-family:'Inter_Display-Regular',Helvetica] font-normal text-white text-[48px] tracking-[-0.96px] leading-[57px]">
              Hey! We are ready to <span className="text-red-500">consult</span> you
            </h2>

            {/* Form rows */}
            <div className="flex flex-col items-start gap-[34px] w-full">
              {/* Row 1 */}
              <div className="flex flex-wrap items-start gap-[22px]">
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  My name is
                </span>
                <FormInput placeholder="first and last name" />
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  and I&apos;m interested in
                </span>
                <FormInput placeholder="service name" />
                <span className="flex items-center self-stretch w-[7px] font-h3 text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap mt-[-1.00px] font-[number:var(--h3-font-weight)] [font-style:var(--h3-font-style)]">
                  .
                </span>
              </div>

              {/* Row 2 */}
              <div className="inline-flex flex-wrap items-start gap-[22px]">
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  My Project budget
                </span>
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedBudget(option === selectedBudget ? null : option)}
                    className={`flex w-[140px] h-[52px] items-center justify-center gap-2.5 rounded-[60px] border border-solid transition-colors ${
                      selectedBudget === option
                        ? "border-[#ff4444] bg-[rgba(255,0,0,0.15)]"
                        : "border-[#383838] bg-transparent"
                    }`}
                  >
                    <span className="flex items-center w-fit font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                      {option}
                    </span>
                  </button>
                ))}
                <span className="flex items-center self-stretch w-[7px] font-h3 text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap mt-[-1.00px] font-[number:var(--h3-font-weight)] [font-style:var(--h3-font-style)]">
                  .
                </span>
              </div>

              {/* Row 3 */}
              <div className="inline-flex flex-wrap items-start gap-[22px]">
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  Please, Contact me at
                </span>
                <FormInput placeholder="name@example.com" />
                <span className="flex items-center self-stretch w-[7px] font-h3 text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap mt-[-1.00px] font-[number:var(--h3-font-weight)] [font-style:var(--h3-font-style)]">
                  .
                </span>
              </div>

              {/* Row 4 */}
              <div className="inline-flex flex-wrap items-start gap-[22px]">
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  Optionally, I&apos;m sharing more:
                </span>
                <FormInput placeholder="your project details" />
                <span className="flex items-center self-stretch w-[7px] font-h3 text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap mt-[-1.00px] font-[number:var(--h3-font-weight)] [font-style:var(--h3-font-style)]">
                  .
                </span>
              </div>
            </div>
          </div>
        </div>

        <PrimaryButton children="View Our Work" />
      </div>
    </section>
  );
}
