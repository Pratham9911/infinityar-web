"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center">
      {/* Links */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-row sm:justify-around">
        <a
          className="text-[#92abc9] text-base font-normal leading-normal min-w-40 hover:text-white transition"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="text-[#92abc9] text-base font-normal leading-normal min-w-40 hover:text-white transition"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="text-[#92abc9] text-base font-normal leading-normal min-w-40 hover:text-white transition"
          href="#"
        >
          Contact Us
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" aria-label="Twitter">
          <div className="text-[#92abc9] hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57..." />
            </svg>
          </div>
        </a>
        <a href="#" aria-label="Facebook">
          <div className="text-[#92abc9] hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128..." />
            </svg>
          </div>
        </a>
        <a href="#" aria-label="Instagram">
          <div className="text-[#92abc9] hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48..." />
            </svg>
          </div>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-[#92abc9] text-base font-normal leading-normal">
        © {new Date().getFullYear()} InfinityAR. All rights reserved.
      </p>
    </footer>
  );
}
