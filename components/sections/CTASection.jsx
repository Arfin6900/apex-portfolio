import Image from "next/image";

const features = [
  { label: "Free Consultation" },
  { label: "No Commitment" },
  { label: "Expert Advice" },
];

export function CTASection() {
  return (
    <section className="flex w-full items-start justify-center bg-neutral-950 py-20 px-[340px]">
      <div
        className="relative flex flex-col w-full max-w-[1352px] items-center px-[150px] py-[100px] bg-neutral-950 rounded-[34px] overflow-hidden"
        style={{
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: "inset 0 0 0 1px transparent",
          background:
            "linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(180deg, rgba(56,56,56,1) 0%, rgba(10,10,10,1) 100%) border-box",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "transparent",
        }}
      >
        {/* Background decorations */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1532px] h-[659px] bg-gradient-to-t from-red-950/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1352px] h-[642px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />

        {/* Content */}
        <div className="flex flex-col w-full max-w-[894px] items-center gap-[60px] relative z-10">
          {/* Text block */}
          <div className="flex flex-col items-center justify-center gap-3.5 w-full">
            {/* Badge */}
            <div
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[6000px] overflow-hidden relative"
              style={{
                background: "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(255,0,0,0.2) 100%)",
                border: "1px solid transparent",
                backgroundClip: "padding-box",
              }}
            >
              <span
                className="absolute inset-0 rounded-[6000px] pointer-events-none"
                style={{
                  padding: "1px",
                  background: "linear-gradient(6deg, rgba(255,140,140,0) 0%, rgba(153,84,84,0.2) 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <Image
                className="relative w-3 h-3"
                alt=""
                src="/images/placeholder-icon.svg"
                width={12}
                height={12}
              />
              <span className="relative w-fit font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-white text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
                Let&apos;s Get Started
              </span>
            </div>

            <h2 className="relative flex items-center justify-center w-full font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Transforming Your Vision into Reality with Precision and Creativity
            </h2>

            <p className="relative flex items-center justify-center w-full max-w-[830px] font-paragraph-large font-[number:var(--paragraph-large-font-weight)] text-[#f8f8f8] text-[length:var(--paragraph-large-font-size)] text-center tracking-[var(--paragraph-large-letter-spacing)] leading-[var(--paragraph-large-line-height)] [font-style:var(--paragraph-large-font-style)]">
              We combine strategic thinking, precise execution, and creative
              design to turn your ideas into meaningful, real-world solutions.
            </p>
          </div>

          {/* CTA block */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="relative w-[279px] h-[74px] bg-[#ffffff0d] rounded-[63.78px] overflow-hidden cursor-pointer">
              <div className="absolute top-[25px] left-[230px] w-6 h-6 bg-white rounded-xl" />
              <div className="inline-flex items-center justify-center gap-2.5 absolute top-6 left-8">
                <span className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
                  Let&apos;s make a project
                </span>
              </div>
              <Image
                className="absolute top-3 left-[217px] w-[50px] h-[50px]"
                alt=""
                src="/images/placeholder-arrow.svg"
                width={50}
                height={50}
              />
            </div>

            {/* Feature bullets */}
            <div className="flex items-center justify-center gap-6 w-full">
              {features.map((feature, index) => (
                <div key={index} className="inline-flex items-center gap-3 flex-[0_0_auto]">
                  <div className="w-2.5 h-2.5 bg-white rounded-[5px] flex-shrink-0" />
                  <span className="font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-white text-[length:var(--paragraph-medium-font-size)] text-center tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-medium-font-style)]">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
