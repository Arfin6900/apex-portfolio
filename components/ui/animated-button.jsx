import Image from "next/image";

export function AnimatedButton({
  label,
  width = 244,
  height = 74,
  hoverColor = "neutral-900",
  className = "",
}) {
  const borderRadius = Math.round(width * 0.26);
  const arrowSize = Math.round(height * 0.68);
  const arrowLeft = width - arrowSize - 12;

  return (
    <div
      className={`relative bg-[#0000001a] overflow-hidden cursor-pointer ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      <div
        className="inline-flex flex-col items-center gap-2.5 absolute overflow-hidden"
        style={{
          height: "26px",
          top: `${(height - 26) / 2}px`,
          left: "28px",
        }}
      >
        <span className="w-fit [font-family:'Inter_Display-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
          {label}
        </span>
        <span className={`w-fit [font-family:'Inter_Display-Medium',Helvetica] font-medium text-${hoverColor} text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap`}>
          {label}
        </span>
      </div>

      <div
        className="absolute w-0.5 h-0.5 rounded-[0.86px] bg-[linear-gradient(180deg,rgba(210,48,48,1)_0%,rgba(98,0,0,1)_100%)]"
        style={{
          top: `calc(50% - 1px)`,
          left: `calc(50% + 58px)`,
        }}
      />

      <Image
        className="absolute"
        style={{
          top: "12px",
          left: `${arrowLeft}px`,
          width: `${arrowSize}px`,
          height: `${arrowSize}px`,
        }}
        alt=""
        src="/images/placeholder-arrow.svg"
        width={arrowSize}
        height={arrowSize}
      />
    </div>
  );
}
