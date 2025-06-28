"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library, or use SVG

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex items-center justify-between border-b border-[#293542] px-6 py-4 z-50 relative">
      {/* 🌌 Logo + Title */}
      <div className="flex items-center gap-4 text-white">
        <div className="w-5 h-5">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_535)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold tracking-[-0.015em]">
          InfinityAR
        </h2>
      </div>

      {/* 🧭 Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-white text-sm font-medium" href="/features">Features</a>
          <a className="text-white text-sm font-medium" href="#">Pricing</a>
          <a className="text-white text-sm font-medium" href="#">Support</a>
        </div>
        <button className="flex h-10 px-4 items-center justify-center rounded-xl bg-[#d2e2f3] text-[#14191f] text-sm font-bold tracking-wide hover:bg-white/90 transition-all cursor-[url('/cursor2.png'),_pointer]">
        <a
  href="https://github.com/Pratham9911/InfinityAR/releases/download/InfinityAR/infinityAR.apk"
  download
>
  <span className="truncate">Download App</span>
</a>

        </button>
      </div>

      {/* 📱 Mobile Hamburger */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white cursor-pointer z-50"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* 📱 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-[#293542] md:hidden flex flex-col gap-4 px-6 py-6 z-40">
          <a className="text-white text-base font-medium" href="#">Features</a>
          <a className="text-white text-base font-medium" href="#">Pricing</a>
          <a className="text-white text-base font-medium" href="#">Support</a>
          <button className="mt-4 h-10 px-4 rounded-xl bg-[#d2e2f3] text-[#14191f] text-sm font-bold tracking-wide hover:bg-white/90 transition-all cursor-[url('/cursor2.png'),_pointer]">
            Download App
          </button>
        </div>
      )}
    </header>
  );
}
