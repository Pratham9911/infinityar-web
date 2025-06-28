"use client";
import { useEffect, useRef, useState } from "react";

export default function Version() {
  const versionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (versionRef.current) observer.observe(versionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={versionRef} className="relative bg-transparent text-white py-20 px-6 w-full">
      {/* ✅ Version Text */}
      <div
        className={`flex justify-center transition-opacity duration-1000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-xl sm:text-2xl font-semibold tracking-widest">
          Version 2.2.5
        </p>
      </div>

      {/* ✅ Image Target Section */}
      <div className="text-center mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-wide">
          IMAGE TARGET
        </h2>
        <p className="text-base sm:text-lg max-w-xl mx-auto text-gray-300">
          The app uses an image target, which users can download. This target is
          essential for triggering the AR content.
        </p>
        <a
          href="https://github.com/Pratham9911/InfinityAR/releases/download/InfinityAR/ImageTarget.png"
          download
          className="mt-6 inline-block bg-blue-600 text-white font-bold text-base sm:text-lg px-7 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300"
        >
          Download
        </a>
      </div>
    </section>
  );
}
