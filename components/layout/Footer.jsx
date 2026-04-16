import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { quickLinks, insightsLinks, servicesLinks, officeLocations } from "@/data/footer";

function FooterNavColumn({ title, links }) {
  return (
    <nav className="flex flex-col w-[281px] items-start gap-6 relative">
      <h5 className="relative flex items-center self-stretch font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
        {title}
      </h5>
      <ul className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
        {links.map((link) => (
          <li
            key={link}
            className="relative flex items-center self-stretch font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[#d8d8d8] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)] cursor-pointer hover:text-white transition-colors"
          >
            <Link href="#" className="text-inherit no-underline">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function OfficeCard({ office }) {
  return (
    <Card className="flex flex-col flex-1 h-[348px] items-start justify-between p-12 relative bg-[#202020] rounded-2xl overflow-hidden border-0">
      <CardContent className="flex flex-col items-start justify-between h-full w-full p-0">
        <Image
          className="absolute top-3 right-0 w-[310px] h-[310px] opacity-10"
          alt=""
          src={office.bgImage}
          width={310}
          height={310}
        />

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full z-10">
          <h4 className="items-center self-stretch font-h4 font-[number:var(--h4-font-weight)] text-[#ffffff] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] flex relative [font-style:var(--h4-font-style)]">
            {office.name}
          </h4>
          <p className="relative flex items-center self-stretch font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#d8d8d8] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
            {office.address}
          </p>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 relative z-10">
          <Image
            className="w-9 h-6"
            alt=""
            src={office.flag}
            width={36}
            height={24}
          />
          <span className="font-[number:var(--h5-font-weight)] text-[#ffffff] tracking-[var(--h5-letter-spacing)] font-h5 [font-style:var(--h5-font-style)] leading-[var(--h5-line-height)] text-[length:var(--h5-font-size)]">
            {office.phone}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col w-full items-center gap-[60px] px-[150px] py-20 relative bg-neutral-950 overflow-hidden">
      {/* Decorative top-right image */}
      <Image
        className="absolute top-0 right-0 w-[311px] h-[280px] pointer-events-none opacity-20"
        alt=""
        src="/images/placeholder.svg"
        width={311}
        height={280}
      />

      {/* Top section: Logo/description + Navigation columns */}
      <div className="flex items-start justify-between relative self-stretch w-full">
        {/* Left: Logo, description, email */}
        <div className="inline-flex flex-col items-start gap-12 relative self-stretch">
          <div className="inline-flex flex-col items-start gap-6 relative flex-1">
            <div className="inline-flex flex-col items-start justify-between relative flex-1">
              <Image
                className="w-[202.67px] h-[76px]"
                alt="Apex Web Studios"
                src="/images/placeholder-logo.svg"
                width={203}
                height={76}
              />
              <p className="relative flex items-center w-[384.91px] font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#d8d8d8] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                Apex Web Studios sets the standard for excellence in digital
                marketing and web development in the USA.
              </p>
            </div>
            <span className="relative flex items-center w-fit font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#d8d8d8] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-medium-font-style)]">
              info@apexwebstudios.net
            </span>
          </div>
        </div>

        {/* Right: Navigation columns */}
        <div className="inline-flex items-start gap-8 relative">
          <FooterNavColumn title="Quick Links" links={quickLinks} />
          <FooterNavColumn title="Insights" links={insightsLinks} />
          <FooterNavColumn title="Services" links={servicesLinks} />
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
        {/* Office location cards */}
        <div className="flex items-center gap-6 relative w-full">
          {officeLocations.map((office) => (
            <OfficeCard key={office.name} office={office} />
          ))}
        </div>

        {/* Footer bottom bar + watermark */}
        <div className="flex flex-col items-start relative self-stretch w-full">
          <div className="flex flex-col items-center justify-center gap-10 px-[50px] py-6 relative self-stretch w-full rounded-xl border border-solid border-[#383838] bg-[linear-gradient(180deg,rgba(16,16,16,1)_0%,rgba(32,32,32,1)_100%)]">
            <div className="flex items-center justify-between relative self-stretch w-full">
              {/* Company profile PDF */}
              <div className="inline-flex items-center gap-[18px] relative self-stretch">
                <Image
                  className="w-[53px] h-[53px]"
                  alt=""
                  src="/images/placeholder-icon.svg"
                  width={53}
                  height={53}
                />
                <div className="flex flex-col w-[202px] items-start justify-center gap-1 relative self-stretch">
                  <span className="relative flex items-center flex-1 self-stretch font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                    Company Profile
                  </span>
                  <span className="relative flex items-center self-stretch font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[#ffffff] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]">
                    PDF, 2 MB
                  </span>
                </div>
              </div>

              {/* Copyright */}
              <span className="relative flex items-center w-fit font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[#f0f0f0] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-xsmall-font-style)]">
                &copy; 2025 Apex Web Studios |&nbsp;&nbsp;All Rights Reserved
              </span>

              {/* Social media icons */}
              <Image
                className="flex-[0_0_auto]"
                alt="Social media"
                src="/images/placeholder-icon.svg"
                width={120}
                height={24}
              />
            </div>
          </div>

          {/* Large watermark text */}
          <div className="relative self-stretch w-full h-[200px] overflow-hidden">
            <div className="absolute top-[-11px] left-0 w-full h-[242px] flex items-center justify-center bg-[linear-gradient(180deg,rgba(32,32,32,1)_0%,rgba(10,10,10,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-transparent text-[200px] text-center tracking-[-10.71px] leading-[normal] whitespace-nowrap">
              Apex Web Studio
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
