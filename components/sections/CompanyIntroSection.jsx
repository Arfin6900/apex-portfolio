import Image from "next/image";

const clientLogos = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: "/images/placeholder-logo.svg",
}));

export function CompanyIntroSection() {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 lg:gap-[60px] px-6 md:px-12 lg:px-[150px] py-10 lg:py-[60px] bg-neutral-950">
      {/* Header */}
      <div className="flex items-center justify-center gap-6 self-stretch w-full">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-[white]" />

        <p className="w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-transparent text-2xl tracking-[0] leading-[normal]">
          <span className="text-[#f0f0f0]">Trusted by </span>
          <span className="text-[#909090]">350+</span>
          <span className="text-[#f0f0f0]"> clients worldwide</span>
        </p>

        <div className="w-20 h-px bg-gradient-to-l from-transparent to-[white]" />
      </div>

      {/* Logo grid */}
      <div className="flex items-center justify-center relative self-stretch w-full">
        <div className="flex flex-col items-center gap-[23px]">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {clientLogos.slice(0, 5).map((logo) => (
              <Image
                key={`r1-${logo.id}`}
                src={logo.src}
                alt="Client logo"
                width={120}
                height={50}
                className="w-[80px] md:w-[100px] lg:w-[120px] opacity-100 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {clientLogos.slice(5, 11).map((logo) => (
              <Image
                key={`r2-${logo.id}`}
                src={logo.src}
                alt="Client logo"
                width={130}
                height={50}
                className="w-[80px] md:w-[100px] lg:w-[130px] opacity-100 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {clientLogos.slice(11, 16).map((logo) => (
              <Image
                key={`r3-${logo.id}`}
                src={logo.src}
                alt="Client logo"
                width={130}
                height={50}
                className="w-[80px] md:w-[100px] lg:w-[130px] opacity-100 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
