"use client";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";

import { Suspense } from "react";
import Footer from "./Footer";



// Correct dynamic import with named file path
const AstronautCanvas = dynamic(() => import("./Astronaut").then(mod => mod.default), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="relative bg-black min-h-screen w-full overflow-x-hidden">

      <Navbar />

      {/* 🌌 Pre-reserved section for astronaut (height = 100vh) */}
      <section className="relative w-full h-screen overflow-hidden">
        <Suspense fallback={null}>
          <AstronautCanvas />
        </Suspense>
      </section>
   
      {/* 🌌 Below content */}
      <AboutSection />
      <Footer />

    </main>
  );
}
 
