"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function PrimaryButton({ children, className, ...props }) {
  const btnRef = useRef(null);
  const bubbleRef = useRef(null);

  const handleMouseEnter = useCallback((e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const bubble = bubbleRef.current;

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.transition = "none";
    bubble.style.transform = "translate(-50%, -50%) scale(0)";

    requestAnimationFrame(() => {
      bubble.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      bubble.style.transform = "translate(-50%, -50%) scale(1)";
    });
  }, []);

  const handleMouseLeave = useCallback((e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const bubble = bubbleRef.current;

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    bubble.style.transform = "translate(-50%, -50%) scale(0)";
  }, []);

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "btn-gradient-border group relative inline-flex items-center gap-4 bg-transparent text-white font-medium text-xl tracking-[-0.2px] rounded-full h-[74px] pl-10 pr-3 cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Bubble fill — sized to cover button from any entry point */}
      <span
        ref={bubbleRef}
        className="absolute z-[1] w-[300%] aspect-square rounded-full bg-[linear-gradient(180deg,#d23030_0%,#620000_100%)] pointer-events-none"
        style={{ transform: "translate(-50%, -50%) scale(0)" }}
      />

      <span className="relative z-[2] overflow-hidden h-[26px]">
        <span className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
          <span className="h-[26px] leading-[26px]">{children}</span>
          <span className="h-[26px] leading-[26px]">{children}</span>
        </span>
      </span>
      <span className="relative z-[2] flex items-center justify-center w-[50px] h-[50px] rounded-full bg-neutral-900 transition-colors duration-300 group-hover:bg-white">
        <Image
          src="/icons/arrow-icon.svg"
          alt=""
          width={24}
          height={18}
          className="transition-all duration-300 group-hover:invert group-hover:rotate-[-45deg]"
        />
      </span>
    </button>
  );
}
