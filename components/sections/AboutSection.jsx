import Image from "next/image";
import { SectionBadge } from "@/components/ui/section-badge";
import { AnimatedButton } from "@/components/ui/animated-button";
import { stats } from "@/data/stats";
import { PrimaryButton } from "../ui/primary-button";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-[600px] lg:min-h-[1000px] bg-neutral-950 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-639px] left-[-438px] w-[1728px] h-[518px] rounded-[864px/259.2px] rotate-[-134.36deg] blur-[75px] bg-[linear-gradient(270deg,rgba(6,6,6,0)_0%,rgba(207,12,32,0.05)_100%)]" />
        <div className="absolute top-[-571px] left-[497px] w-[1728px] h-[518px] rounded-[864px/259.2px] rotate-[-64.62deg] blur-[75px] bg-[linear-gradient(284deg,rgba(6,6,6,0.02)_0%,rgba(207,12,32,0.02)_100%)]" />
        <div className="absolute top-[-123px] left-[1339px] w-[1728px] h-[518px] bg-[#cf0c200d] rounded-[864px/259.2px] rotate-[-45.97deg] blur-[75px]" />
        <div className="absolute top-[850px] left-[-1109px] w-[1728px] h-[518px] bg-[#cf0c200d] rounded-[864px/259.2px] rotate-[110.92deg] blur-[75px]" />
      </div>

      {/* Stars background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(1px_1px_at_20px_30px,#fff,transparent),radial-gradient(1px_1px_at_40px_70px,#fff,transparent),radial-gradient(1px_1px_at_50px_160px,#fff,transparent),radial-gradient(1px_1px_at_90px_40px,#fff,transparent),radial-gradient(1px_1px_at_130px_80px,#fff,transparent),radial-gradient(1px_1px_at_160px_120px,#fff,transparent)] bg-repeat opacity-20 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-start gap-12 lg:gap-[100px] w-full max-w-[1620px] mx-auto px-6 md:px-12 lg:px-8 py-16 lg:py-[115px]">
        {/* Top section: image + text */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[200px] w-full">
          {/* Left: decorative image */}
          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[472px] lg:h-[476px] flex-shrink-0">
            <Image
              src="/images/star-image.svg"
              alt="About us illustration"
              width={608}
              height={476}
              className="w-full h-full object-cover animate-spin"
              style={{ animationDuration: "20s" }}
            />
          </div>

          {/* Right: text content */}
          <div className="flex flex-col items-start justify-center gap-8 lg:gap-[60px] flex-1">
            <div className="flex flex-col items-start gap-3 w-full">
              <SectionBadge label="About us" />

              <p className="w-full [font-family:'Inter_Display-Regular',Helvetica] font-normal text-transparent text-xl md:text-[28px] lg:text-[40px] leading-snug lg:leading-10">
                <span className="text-white tracking-[-0.32px]">
                  Blank Empty ApexWeb Solutions is a global software, AI, and
                  digital innovation company building{" "}
                </span>
                <span className="text-[#a8a8a8] tracking-[-0.32px]">
                  intelligent products
                </span>
                <span className="text-white tracking-[-0.32px]">
                  {" "}
                  — from high-performance apps to AI agents and scalable SaaS
                  platforms — designed to turn{" "}
                </span>
                <span className="text-[#a8a8a8] tracking-[-0.32px]">
                  complex ideas
                </span>
                <span className="text-white tracking-[-0.32px]">
                  {" "}
                  into real-world impact.
                </span>
              </p>
            </div>

             <PrimaryButton children="View Our Work" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#383838] to-transparent" />
      </div>

      {/* Stats marquee — full width infinite scroll */}
      <div className="relative z-10 w-full overflow-hidden py-10 lg:py-[60px]">
        <div className="flex animate-marquee w-max" style={{ "--duration": "25s", "--gap": "40px", gap: "40px" }}>
          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="flex items-center gap-6 lg:gap-[70px] shrink-0">
              <div className="flex flex-col w-[150px] lg:w-[210px] items-start gap-2">
                <div className="font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#909090] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)] whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
              <div className="w-px h-[73px] bg-gradient-to-b from-transparent via-[#383838] to-transparent shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
