"use client";

import React from "react";

export default function GuideSection() {
  return (
    <section
      className="relative w-full bg-[#14191f] text-white px-6 py-16 overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[28px] font-bold leading-tight pb-3">How to Use InfinityAR</h2>
        <p className="text-base font-normal pb-6">
          InfinityAR is currently under development, and some features may be limited. We appreciate your understanding as we continue to improve the app.
        </p>

        <h3 className="text-[22px] font-bold pb-3 pt-5">Step-by-Step Guide</h3>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 text-left">
          {["Download the App", "Download the Image Target", "Launch the App and Tap 'Start'", "Choose a Mode: EXPLORE or ROCKET", "Point the Camera at the Image Target", "Interact with the 3D Models"].map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="w-6 h-6 bg-white rounded-full" />
                <div className="w-[1.5px] bg-[#3d4b5c] h-2 grow" />
              </div>
              <div className="pt-3 pb-5">
                <p className="text-base font-medium leading-normal">{step}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        <h3 className="text-[22px] font-bold pt-10 pb-4">Bonus Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {["Join the Community", "Participate in Quizzes", "Access Announcements"].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#3d4b5c] bg-[#1f252e] p-5 flex gap-3 items-center"
            >
              <div className="w-6 h-6 bg-white rounded-full" />
              <h4 className="text-base font-bold leading-tight">{feature}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
