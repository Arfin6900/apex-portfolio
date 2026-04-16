import Image from "next/image";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-3 md:bottom-5 left-0 right-0 flex justify-center pointer-events-none z-50 px-4">
      <div className="pointer-events-auto inline-flex items-center bg-[#3838384c] rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
        {/* Left icon group */}
        <div className="inline-flex flex-col items-start justify-around gap-[50px] p-2 md:p-3.5 self-stretch">
          <div className="inline-flex items-center gap-2 md:gap-3.5">
            {/* Hamburger menu icon */}
            <div className="inline-flex flex-col items-start gap-[50px]">
              <div className="flex w-12 h-12 md:w-20 md:h-20 items-center justify-center gap-2.5 bg-neutral-950 rounded-lg md:rounded-[10px]">
                <div className="relative w-6 h-6 md:w-10 md:h-10 rotate-180">
                  <div className="relative w-[66.77%] h-[50.24%] top-[24.88%] left-[16.62%]">
                    <div className="absolute w-[62.56%] h-[16.82%] top-0 left-[37.43%] bg-white rounded-[1.69px] rotate-180" />
                    <div className="absolute w-[62.56%] h-[16.82%] top-[83.18%] left-0 bg-white rounded-[1.69px] rotate-180" />
                    <div className="absolute w-full h-[16.82%] top-[41.59%] left-0 bg-white rounded-[1.69px] rotate-180" />
                  </div>
                </div>
              </div>
            </div>

            {/* Component icon */}
            <div className="inline-flex cursor-pointer flex-col items-start gap-[50px]">
              <Image
                className="w-12 h-12 md:w-18 md:h-18"
                alt=""
                src="/icons/light-theme.svg"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="inline-flex flex-col items-center gap-6 p-2 md:p-3.5">
          <div className="inline-flex flex-col items-start gap-2.5">
            <div className="flex h-12 md:h-20 items-center justify-center gap-4 md:gap-[34px] px-4 md:px-[38px] py-3 md:py-[23px] bg-white rounded-lg md:rounded-[10px]">
              <div className="inline-flex items-center gap-2 md:gap-3.5">
                <span className="[font-family:'Inter_Display-Regular',Helvetica] font-normal text-black text-base md:text-[26px] tracking-[0] leading-7 whitespace-nowrap">
                  Build Your Product
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
