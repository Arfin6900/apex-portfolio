"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/data/navigation";
import { PrimaryButton } from "../ui/primary-button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setMinimized(true);
      } else {
        setMinimized(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-[10px] backdrop-brightness-100 transition-all duration-300 ease-in-out ${minimized ? "shadow-lg" : ""}`}>
      <div className={`flex w-full items-center justify-between px-6 md:px-12 lg:px-40 transition-all duration-300 ease-in-out ${minimized ? "py-2 lg:py-2" : "py-4 lg:py-5"}`}>
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            className={`transition-all duration-300 ease-in-out ${minimized ? "w-[100px] h-[29px] lg:w-[130px] lg:h-[38px]" : "w-[130px] h-[38px] lg:w-[169px] lg:h-[50px]"}`}
            alt="Apex Web Studios"
            src="/images/app-logo.svg"
            width={169}
            height={50}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center gap-[27px]">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  href={link.href}
                  className="flex items-center [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.40px] leading-[26px] whitespace-nowrap cursor-pointer bg-transparent hover:bg-transparent focus:bg-transparent"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop right side */}
        <div className="hidden lg:flex w-[420px] items-center justify-between">
          <div className="inline-flex items-start gap-1">
            <span className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.40px] leading-[26px] whitespace-nowrap cursor-pointer">
              Case Studies
            </span>
            <span className="opacity-50 [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.40px] leading-[26px] whitespace-nowrap">
              (11)
            </span>
          </div>

          <div className={`relative bg-[#00000033] rounded-[63.78px] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out ${minimized ? "h-[54px]" : "h-[74px]"}`}>
            <PrimaryButton className="absolute inset-0 w-full h-full rounded-[63.78px] flex items-center justify-center">
              View Our Work
            </PrimaryButton>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 cursor-pointer"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-[#383838]">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-white text-lg tracking-[-0.40px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-white text-lg tracking-[-0.40px]"
            >
              Case Studies
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
