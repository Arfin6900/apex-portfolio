import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/ui/section-badge";
import { industryRows } from "@/data/industries";

function IndustryCard({ card }) {
  return (
    <Card className="flex flex-col h-[199px] items-start gap-8 px-6 py-8 flex-1 grow bg-transparent border-0 rounded-none">
      <CardContent className="flex flex-col items-start gap-8 self-stretch w-full p-0">
        <Image
          className="w-6 h-6"
          alt={card.title}
          src={card.icon}
          width={24}
          height={24}
        />
        <div className="items-start gap-3 flex flex-col self-stretch w-full">
          <h6 className="self-stretch mt-[-1.00px] font-h6 font-[number:var(--h6-font-weight)] text-[#ffffff] text-[length:var(--h6-font-size)] tracking-[var(--h6-letter-spacing)] leading-[var(--h6-line-height)] [font-style:var(--h6-font-style)]">
            {card.title}
          </h6>
          <p className="self-stretch font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)] text-[#b8b8b8]">
            {card.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries" className="flex flex-col w-full items-center justify-center gap-[60px] px-40 py-[100px] bg-[#0c0c0c]">
      {/* Header */}
      <div className="items-center gap-3 flex flex-col self-stretch w-full">
        <SectionBadge label="Industries We Serve" />

        <div className="flex items-center justify-center gap-2.5 px-[150px] py-0 self-stretch w-full">
          <h2 className="flex-1 mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Trusted Across Multiple Domains
          </h2>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col items-start gap-4 self-stretch w-full">
        {industryRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col items-start self-stretch w-full">
            <div className="flex items-start gap-4 self-stretch w-full">
              {row.map((card, cardIndex) => (
                <IndustryCard key={`${rowIndex}-${cardIndex}`} card={card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
