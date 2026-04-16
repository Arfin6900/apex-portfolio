import Image from "next/image";
import { SectionBadge } from "@/components/ui/section-badge";
import { platformRatings, textTestimonials, imageTestimonials } from "@/data/testimonials";

function TextTestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col w-[405px] h-[530px] flex-shrink-0 items-start justify-between p-8 bg-[#101010] border-t border-b border-l border-[#1a1a1a]">
      <div className="flex flex-col items-start gap-8 relative flex-1 self-stretch w-full">
        {/* Logo + rating */}
        <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
          <div className="flex items-center justify-between relative self-stretch w-full">
            <Image
              src={testimonial.logotype}
              alt="Company"
              width={100}
              height={28}
              className="h-7"
            />
            <div className="inline-flex items-center gap-1 relative">
              <Image
                src="/images/placeholder-star.svg"
                alt="Star"
                width={11}
                height={11}
              />
              <div className="mt-[-0.50px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-[normal] relative w-fit">
                <span className="text-[#ffffff]">{testimonial.rating}</span>
                <span style={{ color: testimonial.ratingSecondaryColor }}>/</span>
                <span style={{ color: testimonial.ratingSecondaryColor }} className="text-[10px]">5.0</span>
              </div>
            </div>
          </div>
          <div className="self-stretch w-full h-px bg-[#1a1a1a]" />
        </div>

        {/* Quote */}
        <div className="items-start gap-6 flex flex-col relative self-stretch w-full">
          <span className="text-[#555] text-2xl">&ldquo;</span>
          <p className="relative self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
            {testimonial.quote}
          </p>
        </div>
      </div>

      {/* Author */}
      <div className="flex items-center gap-5 relative self-stretch w-full">
        <div className="relative w-[54px] h-[54px] rounded-[120px] overflow-hidden">
          <Image
            className="w-[54px] h-[54px] object-cover"
            alt={testimonial.name}
            src={testimonial.avatar}
            width={54}
            height={54}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 relative flex-1 self-stretch">
          <div className="relative self-stretch [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-base tracking-[0] leading-[normal]">
            {testimonial.name}
          </div>
          <div
            className="relative w-fit font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-xsmall-font-style)]"
            style={{ color: testimonial.titleColor }}
          >
            {testimonial.title}
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageTestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col w-[405px] h-[530px] flex-shrink-0 items-start justify-around gap-[60px] p-1.5 bg-[#101010] border-t border-b border-l border-[#1a1a1a]">
      <div
        className="flex flex-col items-center justify-end gap-8 relative flex-1 self-stretch w-full rounded"
        style={{
          background: `linear-gradient(0deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),linear-gradient(176deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 100%),url(${testimonial.bgImage}) 50% 50% / cover`,
        }}
      >
        <div className="flex-1" />
        <div className="flex items-center gap-5 px-8 py-7 relative self-stretch w-full">
          <div className="relative w-[54px] h-[54px] rounded-[120px] overflow-hidden">
            <Image
              className="w-[54px] h-[54px] object-cover"
              alt={testimonial.name}
              src={testimonial.avatar}
              width={54}
              height={54}
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-1 flex-1 grow relative">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-base tracking-[-0.32px] leading-[normal]">
              {testimonial.name}
            </div>
            <div className="relative w-fit [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#a8a8a8] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              {testimonial.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-12 px-[150px] py-20 relative bg-neutral-950">
      {/* Header */}
      <div className="items-center gap-3 flex flex-col relative self-stretch w-full">
        <SectionBadge label="Testimonial" />

        <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full">
          <h2 className="relative max-w-[842px] mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Built for impact. Trusted by innovators and growing companies
          </h2>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex h-[530px] items-stretch relative self-stretch w-full">
        {/* Left reviews panel */}
        <div className="flex flex-col items-start justify-around gap-[60px] p-8 relative flex-shrink-0 w-[245px] bg-[#101010] border-t border-b border-l border-[#1a1a1a]">
          <div className="flex flex-col items-start gap-8 relative flex-1 self-stretch w-full">
            <div className="flex flex-col items-center gap-3 relative flex-1 self-stretch w-full">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-2xl text-center tracking-[-0.24px] leading-[normal]">
                Reviews
              </div>
              <div className="relative w-[245px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#909090] text-lg text-center tracking-[0] leading-[normal]">
                High rated across multiple platforms
              </div>
            </div>

            <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
              {platformRatings.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-2.5 px-3.5 py-1.5 relative self-stretch w-full rounded-[176px] border border-solid border-[#1a1a1a]"
                >
                  <div className="flex items-center gap-2.5 relative flex-1 grow">
                    <Image
                      className={platform.imgClass}
                      alt={platform.alt}
                      src={platform.img}
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="inline-flex items-center gap-1 relative">
                    <div className="w-fit [font-family:'Inter_Display-Regular',Helvetica] text-[#ffffff] text-lg tracking-[0.54px] leading-6 whitespace-nowrap relative mt-[-1.00px] font-normal">
                      {platform.rating}
                    </div>
                    <Image
                      src="/images/placeholder-star.svg"
                      alt="Star"
                      width={15}
                      height={14}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="relative flex-1 h-[530px] overflow-hidden">
          <div className="flex h-full">
            <TextTestimonialCard testimonial={textTestimonials[0]} />
            <ImageTestimonialCard testimonial={imageTestimonials[0]} />
            <TextTestimonialCard testimonial={textTestimonials[1]} />
            <ImageTestimonialCard testimonial={imageTestimonials[1]} />
            <TextTestimonialCard testimonial={textTestimonials[2]} />
          </div>

          {/* Left fade gradient */}
          <div className="absolute top-0 left-0 w-[155px] h-full bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(10,10,10,1)_100%)] opacity-40 pointer-events-none" />
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between w-full absolute top-[558px] px-[150px]">
        <Image src="/images/placeholder-arrow.svg" alt="Previous" width={36} height={36} className="rotate-180 cursor-pointer" />
        <Image src="/images/placeholder-arrow.svg" alt="Next" width={36} height={36} className="cursor-pointer" />
      </div>

      {/* Bottom decorative frame */}
      <div className="relative self-stretch w-full h-px bg-gradient-to-r from-transparent via-[#383838] to-transparent" />
    </section>
  );
}
