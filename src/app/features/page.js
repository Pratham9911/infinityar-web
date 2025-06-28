// src/app/features/page.js
"use client";
import React from "react";
import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <FeaturesSection />
    </main>
  );
}
