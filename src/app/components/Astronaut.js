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
  "Mission control says you're awesome.",
"You tap, I vibe. Fair trade?",
"Downloading the app is basically rocket science.",
"I moonwalk better than I walk.",
"Can you believe Pluto got demoted?",
"Stars are cool, but have you seen your glow?",
"Low on oxygen… high on curiosity!",
"Did someone say wormhole? Count me in.",
"Zero gravity, 100% attitude.",
"Your planet has Wi-Fi? Jealous.",
"AR? More like Amazing Reality!",
"I’ve seen stars, but you shine brighter.",
"Help! I floated past the download button!",
"Saturn called. Wants its rings back.",
"Is this Earth humor? I like it.",
"Galaxy brain? I’ve got space brain.",
"My helmet fogs up when I’m excited.",
"Lost in space… found your website!",
"Cosmic rays got nothing on your vibe.",
"If this tap opens a portal, I’m in.",
"Want to go on a spacewalk? Just swipe.",
"No aliens were harmed in this interaction.",
"Teleportation failed. You got me instead.",
"I orbit good apps. Yours is in my path.",
"One small tap for you, one giant leap for me.",
"Woke up in the Milky Way again...",
"The stars told me to say hi.",
"I float, therefore I am.",
"Beam me up—after the next update.",
"Yes, I’ve got space swag.",
"I trained with comets. No big deal.",
"Ever danced in zero-G? It's weirdly fun.",
"I mapped the moon just to impress you.",
"AR in space? That's my jam.",
"This tap just fueled my jetpack.",
"I’d wave, but my glove’s too puffy.",
"Made a TikTok on Mars. Went viral.",
"Don’t worry, I only crash into cool UIs."

];


  // 👋 Greetings shown once on page load
  const greetings = [
    "Welcome, space traveler!",
    "Hey there! 👋",
    "I've been waiting for you!",
    "You made it! 🚀",
    "Infinity AR is calling...",
    "Glad to see you out here in the void.",
    "Yo, Earthling!",  
"Mission ready?",  
"Need directions?",  
"Tap to explore!",  
"Lost in space?",  
"Hi from orbit!",  
"Ready to launch?",  
"Touch the stars!",  
"Fuel me with taps!",  
"Nice helmet!",  
"AR mode: ON!",  
"Boosters engaged!",  
"Got oxygen?",  
"Where’s my ship?",  
"Time to float!",  
"Seen any aliens?",  
"Systems nominal.",  
"Download initiated.",  
"Space is weird.",  
"Gravity off!",  
"Comms online!",  
"Drifting again…",  
"Nice swipe!",  
"Rocket fuel = snacks?",  
"Orbiting you now!",  
"Zoom!",  
"Error 404: Spaceship not found.",  
"Beam me some pizza?",  
"Call me AstroBoi.",  
"Launch complete!"

  ];

  return (
<div className="relative w-full min-h-screen overflow-x-hidden touch-auto">
  {/* 🌌 Hero Text & Button */}
  <div className="relative z-30 w-full min-h-screen flex items-center justify-center sm:justify-start pointer-events-none">
    <div className="text-center sm:text-left max-w-[700px] pointer-events-auto px-6 sm:ml-[4%]">
      <h1 className="text-[48px] sm:text-[64px] md:text-[100px] lg:text-[120px] leading-tight font-extrabold font-grotesk text-white tracking-wide">
        InfinityAR
      </h1>
      <p className="mt-2 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-grotesk text-gray-300 tracking-widest">
        Lost in Space
      </p>
      <button className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold font-grotesk rounded-3xl 
        bg-gradient-to-br from-blue-400 to-blue-600 text-white
        shadow-lg shadow-blue-500/50 hover:from-blue-500 hover:to-blue-700
        hover:scale-105 active:scale-95 transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-blue-300 
        cursor-[url('/cursor2.png'),_pointer]">
          <a href="/guide">
           Explore Now
          </a>
       
      </button>
    </div>
  </div>

  {/* 🌌 3D Canvas (Background Layer) */}
  <div className="absolute inset-0 w-full h-full z-0">
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
