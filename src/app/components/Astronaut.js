//Don't ever Erase Any Comment in this file You can only add new comments

"use client";
import React, { useRef, useEffect, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Html,
} from "@react-three/drei";





// 🛠️ Utility for delay (e.g., auto greeting pause)
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// 🚀 Astronaut component
function Astronaut({ onClick, messages, greetings }) {
  const group = useRef();
  const hitbox = useRef();
  const { scene, animations } = useGLTF("/models/astronaut.glb");
  const { actions } = useAnimations(animations, group);

  const [visibleMessage, setVisibleMessage] = useState("");
  const [fadeIn, setFadeIn] = useState(false);
  const greetingShown = useRef(false);

  // 🌌 Floating drift
  const drift = useRef({
    velocity: {
      x: Math.random() * 0.01 + 0.002,
      y: Math.random() * 0.01 + 0.002,
      z: Math.random() * 0.01 + 0.002,
    },
    direction: {
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1,
      z: Math.random() > 0.5 ? 1 : -1,
    },
  });




  // 🎞️ Play animation
  useEffect(() => {
    const first = animations[0]?.name;
    if (first && actions[first]) {
      actions[first].reset().fadeIn(0.5).play();
    }
    return () => {
      if (first && actions[first]) actions[first].fadeOut(0.3);
    };
  }, [animations, actions]);

  // 🎯 Random start position
  useEffect(() => {
    if (group.current) {
      group.current.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        0
      );
    }
  }, []);

  // 🎮 Floating drift
  useFrame(() => {
    const obj = group.current;
    if (!obj) return;

    obj.position.x += drift.current.velocity.x * drift.current.direction.x;
    obj.position.y += drift.current.velocity.y * drift.current.direction.y;
    obj.position.z += drift.current.velocity.z * drift.current.direction.z;

    if (Math.random() < 0.005) drift.current.direction.x *= -1;
    if (Math.random() < 0.005) drift.current.direction.y *= -1;
    if (Math.random() < 0.005) drift.current.direction.z *= -1;

    obj.rotation.x += 0.003;
    obj.rotation.y += 0.004;
    obj.rotation.z += 0.005;
  });

  // 🙋 Auto-play greeting on mount (once)
  useEffect(() => {
    if (!greetingShown.current && greetings.length > 0) {
      greetingShown.current = true;
      const greet = greetings[Math.floor(Math.random() * greetings.length)];
      setVisibleMessage(greet);
      setFadeIn(true);
      setTimeout(() => {
        setFadeIn(false);
        setTimeout(() => setVisibleMessage(""), 500);
      }, 7000);
    }
  }, [greetings]);

  // 🖱️ Click astronaut to show random message
  const handleClick = () => {
    if (!messages || messages.length === 0) return;
    const msg = messages[Math.floor(Math.random() * messages.length)];
    setVisibleMessage(msg);
    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
      setTimeout(() => setVisibleMessage(""), 400);
    }, 4000);
    onClick?.();
  };

  return (
    <group ref={group}>
      {/* Invisible full-body hitbox for full click area */}
      <mesh
        ref={hitbox}
        scale={[2, 4, 13]} // adjust to fit astronaut's body
        position={[0, 1, 0]} // center it around the astronaut
        onClick={handleClick}
        visible={false}
      >
        <boxGeometry />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Astronaut model */}
      <primitive object={scene} scale={1} />

      {/* Message bubble */}
      {visibleMessage && (
        <Html position={[0, 3, 0]} center distanceFactor={1} zIndexRange={[100, 0]}>
          <div
            style={{
              position: "relative",
              background: "white",
              color: "black",
              fontWeight: "bold",
              padding: "80px 100px",
              borderRadius: "80px",
              border: "6px solid black",
              boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
              fontSize: "120px",
              width: "1600px",
              textAlign: "center",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              lineHeight: "1.3",
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "scale(1)" : "scale(0.9)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {visibleMessage}

            {/* Speech bubble triangle */}
            <div
              style={{
                position: "absolute",
                bottom: -60,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "40px solid transparent",
                borderRight: "40px solid transparent",
                borderTop: "60px solid white",
                filter: "drop-shadow(0 0 2px black)",
              }}
            />
          </div>
        </Html>
      )}
    </group>
  );
}

// 🎬 Main Canvas Component
export default function AstronautCanvas() {
  // 💬 Messages shown on click
const messages = [
  "Are you here for InfinityAR?",
  "I lost my spaceship…",
  "Wanna see the universe in AR?",
  "Go, download the app and explore!",
  "I'm not here to help you, I need your help.",
  "Stop poking me, Earthling!",
  "Whoa! Personal space, please.",
  "This suit wasn’t made for taps.",
  "What year is it on Earth now?",
  "I saw a black hole… and I waved at it.",
  "My mission log is full of selfies.",
  "Don’t just stare, join the mission!",
  "If you find my ship, swipe right.",
  "Ever floated through Saturn’s rings? Magical.",
  "I’m drifting, but not aimlessly… I hope.",
  "You brought snacks, right?",
  "Gravity is overrated.",
  "Tap again and I’ll spin… maybe.",
  "I’m 300,000 km from my to-do list.",
  "Still waiting for Space Uber.",
  "Everything is cooler in AR.",
  "Bet you've never high-fived an astronaut.",
  "I’m not lost, I’m exploring.",
  "Hold tight — Infinity AR is just getting started!",
  "Can you hear me now? (Space joke.)",
  "I’m lonely out here… good thing you showed up.",
  "Reality's great. Augmented reality? Even better.",
  "One small click for you, one big float for me.",
];


  // 👋 Greetings shown once on page load
  const greetings = [
    "Welcome, space traveler!",
    "Hey there! 👋",
    "I've been waiting for you!",
    "You made it! 🚀",
    "Infinity AR is calling...",
    "Glad to see you out here in the void.",
  ];

  return (
<div className="relative w-full min-h-screen z-10 overflow-x-hidden touch-auto">


  {/* 💬 Floating title & CTA */}
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center sm:justify-start pointer-events-none z-30">
    <div className="text-center sm:text-left max-w-[700px] pointer-events-auto px-6 sm:ml-[4%]">
      {/* Title */}
      <h1 className="text-[48px] sm:text-[64px] md:text-[100px] lg:text-[120px] leading-tight font-extrabold font-grotesk text-white tracking-wide">
        InfinityAR
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-grotesk text-gray-300 tracking-widest">
        Lost in Space
      </p>

      {/* Button */}
      <button className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold font-grotesk rounded-3xl 
        bg-gradient-to-br from-blue-400 to-blue-600 text-white
        shadow-lg shadow-blue-500/50 hover:from-blue-500 hover:to-blue-700
        hover:scale-105 active:scale-95 transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-blue-300 
        cursor-[url('/cursor2.png'),_pointer]">
        Explore Now
      </button>
    </div>
    
  </div>

  {/* 🌌 Canvas */}

<div className="absolute inset-0 w-full h-full z-10 pointer-events-none md:pointer-events-auto">
  <Canvas camera={{ position: [0, 0, 8] }} dpr={[1, 1.5]}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[2, 2, 5]} intensity={1.5} />
    <Suspense fallback={null}>
      <Astronaut messages={messages} greetings={greetings} />
    </Suspense>
    <OrbitControls enableZoom={false} enablePan={false} />
  </Canvas>
</div>





 

</div>



  );
}
