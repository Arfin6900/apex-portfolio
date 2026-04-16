import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/ui/section-badge";
import { caseStudies } from "@/data/case-studies";

function CaseStudyCard({ study }) {
  const imageBlock = (
    <div
      className="relative w-full md:w-[400px] lg:w-[754px] h-[250px] md:h-[400px] lg:h-[596px] rounded-2xl overflow-hidden bg-cover bg-center flex-shrink-0"
      style={{ backgroundImage: `url(${study.image})` }}
    />
  );

  return (
    <div className="sticky self-stretch w-full" style={{ top: "80px" }}>
      <Card
        className={`flex flex-col md:flex-row h-auto md:h-[500px] lg:h-[660px] items-center gap-6 lg:gap-12 p-5 lg:p-8 relative self-stretch w-full ${study.bg} rounded-xl border border-solid ${study.borderColor} shadow-[0_-10px_60px_rgba(0,0,0,0.4)]`}
      >
        <CardContent className="flex items-center gap-12 p-0 w-full h-full">
          {study.imagePosition === "left" && imageBlock}

          {/* Text content */}
          <div className="flex flex-col items-end justify-between p-8 relative flex-1 self-stretch grow">
            {/* Tags */}
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              {study.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-lg border border-solid ${tag.borderColor}`}
                >
                  <div className={`relative w-2 h-2 ${tag.dotColor} rounded`} />
                  <span
                    className={`relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal ${tag.textColor} text-[15px] tracking-[-0.15px] leading-[normal] whitespace-nowrap`}
                  >
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Title + stats */}
            <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <h3
                className={`relative self-stretch mt-[-1.00px] ${study.titleColor} ${study.titleFont}`}
              >
                {study.title}
              </h3>

              <div className="w-full h-px bg-gradient-to-r from-[#e0e0e0] to-transparent" />

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                {study.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="contents">
                    <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                      <span
                        className={`self-stretch font-h2 ${stat.valueColor} text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] relative mt-[-1.00px] font-[number:var(--h2-font-weight)] [font-style:var(--h2-font-style)]`}
                      >
                        {stat.value}
                      </span>
                      <span
                        className={`relative self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] ${stat.labelColor} text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]`}
                      >
                        {stat.label}
                      </span>
                    </div>
                    {statIndex < study.stats.length - 1 && (
                      <div className="w-px h-11 bg-[#e0e0e0]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {study.imagePosition === "right" && imageBlock}
        </CardContent>
      </Card>
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="flex flex-col items-center relative w-full">
      {/* Header */}
      <div className="inline-flex flex-col items-center justify-center gap-2.5 pt-10 pb-0 px-0 relative flex-[0_0_auto]">
        <SectionBadge label="Case Studies" />

        <h2 className="relative w-full max-w-[878px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
          See how we turn complex ideas into scalable digital products
        </h2>
      </div>

      {/* Case studies — sticky stacking cards */}
      <div className="flex flex-col w-full max-w-[1620px] mx-auto items-center gap-[30px] px-4 md:px-8 relative pb-[200px]">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}

        {/* View all banner */}
        <div className="sticky w-full" style={{ top: "80px" }}>
          <Card className="w-full gap-7 p-3.5 bg-[#ffffff] flex items-center rounded-xl shadow-[0_-10px_60px_rgba(0,0,0,0.4)] border-0">
            <CardContent className="flex items-center gap-7 p-0 w-full">
              <div
                className="relative self-stretch w-[135px] rounded-lg bg-cover bg-center min-h-[80px]"
                style={{ backgroundImage: "url(/images/case-studies/case-study-3.svg)" }}
              />
              <div className="flex flex-col items-start gap-8 px-0 py-5 relative flex-1 grow">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#131313] text-[38px] tracking-[-0.38px] leading-[normal]">
                    View all Case Studies
                  </h3>
                  <p className="relative self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#939393] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                    Access in-depth reports, strategic analysis, and thought
                    leadership
                  </p>
                </div>
              </div>
              <div className="bg-red-500 rounded-full h-20 w-20 items-center justify-center flex">
                <Image
                  className="flex-shrink-0"
                  alt=""
                  src="/icons/arrow-icon.svg"
                  width={50}
                  height={50}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
