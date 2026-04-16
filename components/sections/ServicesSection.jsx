"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { services } from "@/data/services";

function ServiceCard({ service, isActive, onHover }) {
  return (
    <div
      onMouseEnter={onHover}
      className={`flex flex-col h-[416px] items-start justify-between p-8 rounded-xl overflow-hidden border border-solid border-[#383838] bg-neutral-950 cursor-pointer transition-[flex] duration-500 ease-in-out ${
        isActive ? "flex-[1.5 ]" : "flex-1"
      }`}
    >
      {/* Collapsed state: number at top */}
      <div
        className={`font-h2 font-[number:var(--h2-font-weight)] text-[#b8b8b8] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] transition-all duration-300 ${
          isActive ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        {service.number}
      </div>

      {/* Active state: image */}
      <div
        className={`w-full rounded-lg overflow-hidden transition-all duration-500 ${
          isActive ? "opacity-100 max-h-[180px]" : "opacity-0 max-h-0"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={180}
          className="w-full h-[180px] object-cover rounded-lg"
        />
      </div>

      {/* Bottom: icon + title (always visible) + sub-items (active only) */}
      <div className="flex flex-col gap-4 w-full mt-auto">
        <div className="flex flex-col items-start gap-3">
          <Image
            src={service.icon}
            alt=""
            width={40}
            height={40}
          />
          <h6 className="font-h6 font-[number:var(--h6-font-weight)] text-[#ffffff] text-[length:var(--h6-font-size)] tracking-[var(--h6-letter-spacing)] leading-[var(--h6-line-height)] [font-style:var(--h6-font-style)]">
            {service.title}
          </h6>
        </div>

        {/* Sub-items with icons and arrows */}
        <div
          className={`flex flex-col overflow-hidden transition-all duration-500 ${
            isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {service.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-t border-[#383838]"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="opacity-60"
                />
                <span className="text-[#b8b8b8] text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#b8b8b8] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="flex flex-col w-full items-center gap-10 px-6 md:px-12 lg:px-[150px] py-10 lg:py-[60px] bg-[#0c0c0c]"
    >
      {/* Header */}
      <div className="flex flex-col items-start justify-center gap-3 self-stretch w-full">
        <SectionBadge label="Our Services" />

        <div className="flex items-center justify-between self-stretch w-full">
          <h2 className="flex-1 mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-2xl md:text-[36px] lg:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-tight lg:leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Scalable software, AI, and digital solutions designed for growth.
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
              }
              className="w-[50px] h-[50px] rounded-full border border-[#383838] flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % services.length)
              }
              className="w-[50px] h-[50px] rounded-full border border-[#383838] flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-6 self-stretch w-full">
        {/* Desktop: all cards side by side */}
        <div
          className="hidden md:flex items-stretch gap-5 px-0 py-5 self-stretch w-full"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              isActive={index === activeIndex}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Mobile: single active card */}
        <div className="md:hidden w-full py-5">
          <ServiceCard
            service={services[activeIndex]}
            isActive={true}
            onHover={() => {}}
          />
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-[5px]">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rotate-45 transition-colors duration-300 cursor-pointer ${
                index === activeIndex ? "bg-[#d23030]" : "bg-[#383838]"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
