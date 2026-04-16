import Image from "next/image";

export function SectionBadge({ label }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative rounded-[6000px] overflow-hidden border-none bg-[linear-gradient(180deg,rgba(72,72,72,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <Image
        className="w-3 h-3"
        alt=""
        src="/images/placeholder-icon.svg"
        width={12}
        height={12}
      />
      <span className="font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
        {label}
      </span>
    </div>
  );
}
