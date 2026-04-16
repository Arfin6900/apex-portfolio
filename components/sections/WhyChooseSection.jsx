import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { reasons } from "@/data/stats";

export function WhyChooseSection() {
  return (
    <section className="w-full bg-[#0c0c0c] flex flex-col items-center px-[120px] py-24">
      {/* Section heading */}
      <div className="w-full flex items-center justify-center mb-20">
        <h2 className="[font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#181818] text-[80px] text-center tracking-[-3px] leading-none select-none">
          Why Choose Apex Web Studios
        </h2>
      </div>

      {/* Cards grid */}
      <div className="w-full grid grid-cols-3 gap-8 max-w-[1400px]">
        {reasons.map((reason, index) => (
          <Card
            key={index}
            className="flex flex-col items-start justify-between px-8 py-12 bg-[#181818] rounded-3xl overflow-hidden border-none backdrop-blur-[9.5px] backdrop-brightness-100 relative
              before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl
              before:[background:linear-gradient(320deg,rgba(26,26,26,1)_0%,rgba(255,0,0,1)_100%)]
              before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
              before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
              before:z-[1] before:pointer-events-none
              min-h-[342px]"
          >
            <CardContent className="flex flex-col items-start justify-between w-full h-full p-0 gap-6">
              <Image
                className="flex-shrink-0"
                alt={reason.title}
                src={reason.icon}
                width={48}
                height={48}
              />

              <div className="flex flex-col items-start gap-3 w-full">
                <h5 className="font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)] w-full">
                  {reason.title}
                </h5>
                <p className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#a8a8a8] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)] w-full">
                  {reason.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
