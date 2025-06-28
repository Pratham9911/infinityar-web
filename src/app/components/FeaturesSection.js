"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function FeaturesSection() {
  const router = useRouter();

  const features = [
    {
      title: "Space Exploration",
      desc: "Explore planets, stars, and galaxies in stunning AR.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCtBVEkDeSedTkHTClU4Q43oaHFPjLcNuBVRb0_7NF1w3R4oTPdhZX1pxdWFSk0q7FcEjqnJLamZSwKztV4kzBlWtJj-OksBECBr9TXPKI-_yLy2tP91mUGigijlsyZw-HYsvcTzap7gS9U2D9gEZk3BWC0rEgb-bFVHPvpnFNO3yiXcNa7ibNWl1cvBLtB-jjUNp9kqQ420WjTeAnw3nbakmuD9NcSZQPT0wxgx04v8uSJpCp21E0IgD44MsTqpV55dE4bzC_zjuj2"
    },
    {
      title: "Rockets",
      desc: "launch virtual rockets with realistic physics.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDfXSPAnf65uTkEFb750btvmjU859kyN-AwvhSPBUbVYn5k8nR6z3Xd6r5YXJfnu856NTsiFJ2PicesFaqq_QoQxQ2QGtaTvKot2w0JVpthww3aYUYLfq1TfjzcJdR94rZx9mFGJm-jWt_o1ADZW6DtqZxVrUgZRmtMAeqW8qZfGDUPn_dTv3liaIn2pMe0-n4m6indLHYERMN1-HzJN9bPy6n9en9nSZwrs8lQydM-vg_6Jbj3TtLerXaa1bdel_sg2Xpmz1raEcsY"
    },
    {
      title: "Controllable Rovers",
      desc: "Coming soon!",
      // desc: "Control virtual rovers on Mars and the Moon.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCZhZ-ipX8xFqHVdWDHdCVs7fdNXkMpVbA2ii0KUoT8xONFKXzMerrEcSMvd2j6r3oSVLRMoGPt0zRgX-og-J30sKE-6clxi7Q5jqOpPBVModTu1YELBiRrGh1Tt7ujiIy1ti3GfEi-D4lcXS8YJQ-Y06VWgKADIhvbAi_gJvN8OqAU8oWZZaaMt1kXiGAhwC00vTCCJCJV1qiSe2t3Ev_rpIbXRZA2RoEWHQgb6iaXaWMMxa_YMDE3yDs7lsfFnVNgmuiS14ORJWW"
    },
    {
      title: "Monuments",
      // desc: "Visit historical monuments and landmarks in AR.",
      desc: "Coming soon!",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQM1adXIuomFYE-eOwbEIVlNfqG22AIr8BYjcKkZF8o5_hQyrlQnz8RfQollKAu8UbC0oGJukHkxzbkUS348kI4ZseyoKOh96kq30BoSf8b0uHxB1s_uEvuAXhGsZX9fRCUVVrooeHwYNseog4O0mK0lOxqs9P2MHv0A8T6uMDr0kWIANqzp_W1462ETj8wCs-yMblOU_ckkHD32jiAnhVTHOkpuZwZF-JPJExaXGGez5_jr9XZ8h2lUa7-y5fpkc0NB5HQUaxhP5-"
    },
    {
      title: "Architecture",
      // desc: "Explore architectural wonders from around the world.",
      desc: "Coming soon!",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA3VyuK6vxJGTCAO6qKzWGL_G-2O3gSWAzxFux_BR1RfxzcwUBhP_Nd7cstbT-8k1gJ84z5o15ZAdrf565gE70G1ticwgyEBhzczdHfFFLPt49otYhFZ4BGrSLOnrmfWNBMWGozlZBTp587T5819HUpPDzhwRl5ZbiL5C80E-eMWedUAy1gyZMHZzl8-YQuXiSQ2EgfvW3z-5xl2wFxLZG8epruJljggr1XFKGdIX0fssJQI1Cu5Ym8dOYivzeHGEQOrif76nvMBo5J"
    }
  ];

  return (
    <section className="w-full bg-[#111922] px-4 sm:px-10 py-16 text-white font-grotesk">
      <div className="max-w-[1140px] mx-auto">
        {/* Hero Banner */}
        <div
          className="flex flex-col items-center text-center gap-5 rounded-xl min-h-[600px] sm:min-h-[720px] bg-cover bg-center bg-no-repeat px-4 py-10 sm:py-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYpwx1gBM3bxp9deWZauOpUA0LeNWCA-yYSnfXM06ae69AlUpcSRVAqCY_QeAWasNj4IGFJoKz9jWFKyVecPLly7Ur5IJdsODWnEt3fdgUK_OaMhhEqQTenDnljkfIk976XvGrQX8U2JumtjKYCUmlWfDxAls4Nk2FSR9r4-hrYqxaEGfbrpETov2cSvXx_wI3bd1UrrlsJdh7g-2AmFjxJGgFWMDmmbE8ukSeg8dbLfkIIUb63BQ77qNSFlDZJW_0xID1bCSJeAly')"
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
            Explore the Universe with InfinityAR
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl">
            Dive into the cosmos with augmented reality. Discover planets, rockets, and more, all from your living room.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 h-10 px-6 sm:h-12 sm:px-8 bg-[#1374eb] text-white font-bold rounded-xl text-sm sm:text-base"
          >
            Get Started
          </button>
        </div>

        {/* Features Header */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Features</h2>
          <p className="text-base text-gray-300 mb-6">
            From deep space to ancient monuments — explore it all with AR.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-2 pb-3">
              <div
                className="w-full aspect-video bg-center bg-cover rounded-xl"
                style={{ backgroundImage: `url('${feature.image}')` }}
              ></div>
              <div>
                <p className="text-base font-semibold">{feature.title}</p>
                <p className="text-sm text-[#92abc9]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
