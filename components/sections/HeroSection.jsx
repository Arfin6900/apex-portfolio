import { Button } from "@/components/ui/button";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SectionBadge } from "@/components/ui/section-badge";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[935px] bg-black overflow-hidden pt-[100px]">
      {/* Red shade background */}
      <div className="absolute top-[calc(50%_-_346px)] right-[-200px] w-[1415px] h-[796px] flex pointer-events-none">
        <div className="flex-1 bg-gradient-to-l from-red-900/20 to-transparent" />
      </div>

      {/* Bottom left glow */}
      <div className="absolute top-[809px] left-0 w-[855px] h-[383px] bg-[#470511b2] blur-[200px] pointer-events-none" />

      {/* Mask overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* Hero row */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-[150px] pt-10 lg:pt-[120px] gap-10 lg:gap-0">
        {/* Hero content */}
        <div className="flex flex-col z-10 items-start gap-8 lg:gap-[60px] flex-1 shrink-0">
          <div className="flex flex-col items-start gap-4 w-full">
            <SectionBadge label="Top Leading Agency" />

            <div className="flex flex-col items-start gap-6 lg:gap-8 w-full">
              <h1 className="bg-[linear-gradient(227deg,rgba(255,0,0,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h1 font-[number:var(--h1-font-weight)] text-transparent text-[32px] md:text-[48px] lg:text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-tight lg:leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
                Building Scalable Software, Intelligent AI &amp; High-Impact
                Digital Products
              </h1>

              <p className="font-paragraph-large font-[number:var(--paragraph-large-font-weight)] text-[#c6c6c6] text-base md:text-lg lg:text-[length:var(--paragraph-large-font-size)] tracking-[var(--paragraph-large-letter-spacing)] leading-relaxed lg:leading-[var(--paragraph-large-line-height)] [font-style:var(--paragraph-large-font-style)]">
                We help startups, enterprises, and growing brands design, build,
                and scale mobile apps, SaaS platforms, AI agents, and custom
                software that drive real business results.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <PrimaryButton>Request a Quote</PrimaryButton>

            <Button variant="link" size="xl" className="gap-4 pl-10 pr-3">
              <span className="text-white text-xl">See Our Work</span>
            </Button>
          </div>
        </div>

        {/* Animated logo */}
        <div className="flex-1 p-2 scale-100 lg:scale-150 flex items-center justify-center pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[400px] lg:max-w-full object-contain"
          >
            <source src="/animation/apex-logo-animated.webm" type="video/webm" />
            <source src="/animation/apex-logo-animated.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
