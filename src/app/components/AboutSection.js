"use client";

import React from "react";
import Version from "./Version";

export default function AboutSection() {
  return (
    <div>
      {/* 🌌 Version + Image Target Download Section */}
      <section
        className="relative w-full text-white px-4 sm:px-10 py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPJPWt_rgG4V7J0Tb3oTgbTnds_UcAVmzf6nZwqJhK8jZIlqdHgb3l-f4aN06a-L1MQDwMslIScTLIlewj0mENBGVKDgc72RUou5p2324Lm1Z-swZ0RAcLXYGXDkpjA_0WJSIaWtQPKqDosjDFKx42PGBLT7el9GGRTZhVgorX6dQDUFQeM7XNwPnHWSXsaAu4RS2KIPVT2VU8Ed3mjvh4FKDEzqJI4Wdbnu9_rGrt-8oepWD_5SqbQpq4zx701IhIZBc6Ppl0EZpo')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center"
        }}
      >
        <Version />
      </section>

      {/* 🌌 About Section */}
      <section
        className="relative w-full bg-[#111922]/90 text-white px-4 sm:px-10 py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPJPWt_rgG4V7J0Tb3oTgbTnds_UcAVmzf6nZwqJhK8jZIlqdHgb3l-f4aN06a-L1MQDwMslIScTLIlewj0mENBGVKDgc72RUou5p2324Lm1Z-swZ0RAcLXYGXDkpjA_0WJSIaWtQPKqDosjDFKx42PGBLT7el9GGRTZhVgorX6dQDUFQeM7XNwPnHWSXsaAu4RS2KIPVT2VU8Ed3mjvh4FKDEzqJI4Wdbnu9_rGrt-8oepWD_5SqbQpq4zx701IhIZBc6Ppl0EZpo')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About InfinityAR
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            InfinityAR is dedicated to transforming education by making complex scientific and space concepts accessible and engaging through interactive 3D augmented
            reality (AR) experiences. Our mission is to bridge the digital divide, particularly for underserved students, by providing immersive learning tools that spark
            curiosity and enhance understanding.
          </p>
          <button
            className="h-12 px-6 bg-[#1374eb] text-white font-bold rounded-full text-base sm:text-lg hover:bg-blue-600 transition-all"
            onClick={() => window.location.href = "/features"}
          >
            Explore Features
          </button>
        </div>

        {/* 🚀 Feature Highlights */}
        <div className="max-w-5xl mx-auto mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AR Visualization",
              desc: "Experience scientific concepts in 3D with augmented reality, bringing abstract ideas to life."
            },
            {
              title: "Subject Exploration",
              desc: "Explore a wide range of subjects, from planets and stars to rockets and space stations, all within an immersive AR environment."
            },
            {
              title: "Curiosity Enhancement",
              desc: "Foster curiosity and a deeper understanding of science and space through engaging, interactive learning experiences."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#324a67] bg-[#192533]/90 p-5 text-left flex flex-col gap-2"
            >
              <h2 className="text-lg font-bold">{feature.title}</h2>
              <p className="text-sm text-[#92abc9]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
