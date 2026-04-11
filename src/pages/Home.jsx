import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────
// FACTS — grouped by flower
// ─────────────────────────────────────────────────────────────
const FLOWER_DATA = [
  {
    id: "personality",
    label: "Personality",
    facts: [
      "I recently learned guitar — Happy Birthday with real chords 🎸",
      "I'm a movie lover who seeks films with a different perspective on life",
      "Strict equality freak — equal opportunities for everyone, always",
      "I'm 20 and just getting started. Watch this space. 🚀",
      "I break things, rebuild them, and call the whole thing learning",
    ],
    petalColor: "#fed7aa", petalStroke: "#f97316",
    centerColor: "#f97316", centerDark: "#7c2d12",
    stemColor: "#ea580c", leafColor: "#fdba74",
  },
  {
    id: "ai",
    label: "AI & Dev",
    facts: [
      "I build ideas nobody believes in — then prove them wrong 🚀",
      "LegalEase Nepal: AI that simplifies Nepal's legal system ⚖️",
      "Dufy recommends music based on your mood using ML",
      "Chuk = AI-powered recipe generation & meal planning",
      "Every project is an experiment, not just an assignment",
    ],
    petalColor: "#bae6fd", petalStroke: "#0ea5e9",
    centerColor: "#0ea5e9", centerDark: "#0c4a6e",
    stemColor: "#0284c7", leafColor: "#7dd3fc",
  },
  {
    id: "gardening",
    label: "Gardening",
    facts: [
      "My favorite hobby is planting — veggies, flowers, everything 🌱",
      "I've grown strawberries, beans, radish, onions & garlic from scratch",
      "Cabbages, garlic, herbs — my garden list keeps growing",
      "Watching a plant fruit for the first time = unmatched satisfaction",
      "Planting taught me patience more than anything else ever did",
    ],
    petalColor: "#bbf7d0", petalStroke: "#22c55e",
    centerColor: "#22c55e", centerDark: "#14532d",
    stemColor: "#16a34a", leafColor: "#4ade80",
  },
  {
    id: "hackathons",
    label: "Hackathons",
    facts: [
      "Hackathons excite me most — even when I don't know everything ⚡",
      "First hackathon: Global IME AI/ML Hackathon 2025",
      "First win: TechSprint Hackathon 2026 🏆",
      "48 hours, zero sleep, best memories — that's MBMC_IDEAX for me",
      "Hackathons also taught me GitHub the hard way 😅",
    ],
    petalColor: "#ddd6fe", petalStroke: "#8b5cf6",
    centerColor: "#8b5cf6", centerDark: "#4c1d95",
    stemColor: "#7c3aed", leafColor: "#c4b5fd",
  },
  {
    id: "reading",
    label: "Reading",
    facts: [
      "First book I ever finished: The Monk Who Sold His Ferrari 📖",
      "Atomic Habits changed how I think about habits forever",
      "Saying things out loud helps your brain remember — Atomic Habits taught me that",
      "My rule: always look for growth, every single season of life",
      "Books + journaling = how I process everything around me",
    ],
    petalColor: "#fde68a", petalStroke: "#f59e0b",
    centerColor: "#f59e0b", centerDark: "#92400e",
    stemColor: "#65a30d", leafColor: "#86efac",
  },
  {
    id: "creating",
    label: "Creating",
    facts: [
      "I create content to solidify what I've learned 🎬",
      "Journaling every day — it's free therapy I never skip",
      "I talk to myself a lot. It genuinely helps, I promise.",
      "Sharing what I learn makes me remember it better",
      "Content creation is my way of giving back what I absorb",
    ],
    petalColor: "#ccfbf1", petalStroke: "#14b8a6",
    centerColor: "#14b8a6", centerDark: "#134e4a",
    stemColor: "#0d9488", leafColor: "#5eead4",
  },
  {
    id: "youtube",
    label: "YouTube",
    facts: [
      "Started YouTube to share what I learn — one video at a time 🎥",
      "My channel: tech, AI, and the raw journey of building things",
      "Editing videos taught me storytelling more than any book did",
      "Every video is a tiny time capsule of where I was that week",
      "Subscriber count doesn't matter — consistency does 💪",
    ],
    petalColor: "#fee2e2", petalStroke: "#ef4444",
    centerColor: "#ef4444", centerDark: "#7f1d1d",
    stemColor: "#dc2626", leafColor: "#fca5a5",
  },
];

// ─────────────────────────────────────────────────────────────
// FLOWER SVG
// ─────────────────────────────────────────────────────────────
const FlowerSVG = ({ data, index, bloomed, clicked, onRight }) => {
  const petalCount = [8, 6, 7, 6, 5, 8, 7][index % 7];
  const petalR = [22, 20, 24, 26, 20, 18, 23][index % 7];
  const petalRx = [10, 12, 8, 14, 9, 7, 11][index % 7];
  const petalRy = [6, 7, 10, 6, 11, 5, 8][index % 7];
  const cx = 50, cy = 44;
  const scale = bloomed ? 1 : 0.78;
  const swayDeg = clicked ? [3, -3, 2, -2, 4, -4, 3][index % 7] : 0;
  // Stem curves toward the S-path: right-side flowers lean left, left-side flowers lean right
  const stemCurveX = onRight ? 44 : 56;

  return (
    <svg
      width="100" height="130"
      viewBox="0 0 100 150"
      style={{
        transform: `scale(${scale}) rotate(${swayDeg}deg)`,
        transformOrigin: "bottom center",
        transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
        display: "block",
        filter: bloomed ? `drop-shadow(0 0 8px ${data.petalStroke}80)` : "none",
      }}
    >
      {/* Stem */}
      <path
        d={`M50 150 C50 130 ${stemCurveX} 115 50 100`}
        stroke={data.stemColor} strokeWidth="3.5" fill="none" strokeLinecap="round"
      />
      {/* Leaves */}
      <ellipse cx="38" cy="118" rx="10" ry="4.5" fill={data.leafColor} opacity="0.85" transform="rotate(-38 38 118)" />
      <ellipse cx="62" cy="125" rx="8" ry="4" fill={data.leafColor} opacity="0.7" transform="rotate(33 62 125)" />

      {index === 6 ? (
        /* ── TULIP shape for YouTube flower ── */
        <g>
          {/* Left outer petal */}
          <path d="M50 95 C30 85 22 60 30 42 C35 55 42 62 50 65 Z"
            fill={data.petalColor} stroke={data.petalStroke} strokeWidth="0.8"
            opacity={bloomed ? 0.95 : 0.65} />
          {/* Right outer petal */}
          <path d="M50 95 C70 85 78 60 70 42 C65 55 58 62 50 65 Z"
            fill={data.petalColor} stroke={data.petalStroke} strokeWidth="0.8"
            opacity={bloomed ? 0.95 : 0.65} />
          {/* Center petal */}
          <path d="M50 95 C38 80 36 55 50 38 C64 55 62 80 50 95 Z"
            fill={data.centerColor} stroke={data.petalStroke} strokeWidth="0.8"
            opacity={bloomed ? 1 : 0.7} />
          {/* Inner highlight */}
          <path d="M50 85 C44 72 43 58 50 48 C57 58 56 72 50 85 Z"
            fill={data.centerDark} opacity={bloomed ? 0.35 : 0.2} />
        </g>
      ) : index === 5 ? (
        /* ── TURBINE / PROPELLER shape for Creating flower ── */
        <g>
          {/* Spinning blades group */}
          <g style={{
            transformOrigin: "50px 44px",
            animation: "turbineSpin 4s linear infinite",
            animationPlayState: bloomed ? "running" : "paused",
          }}>
            {[0, 120, 240].map((deg, i) => (
              <path
                key={i}
                d="M50 44 C46 35 34 20 38 7 C40 1 50 0 52 9 C57 23 55 38 50 44 Z"
                fill={data.petalColor}
                stroke={data.petalStroke}
                strokeWidth="0.9"
                opacity={bloomed ? 0.93 : 0.65}
                transform={`rotate(${deg} 50 44)`}
                style={{ transition: "opacity 0.4s" }}
              />
            ))}
          </g>
          {/* Static hub */}
          <circle cx={cx} cy={cy} r="8" fill={data.centerColor} />
          <circle cx={cx} cy={cy} r="5" fill={data.centerDark} opacity="0.55" />
          <circle cx={cx} cy={cy} r="2.5" fill={data.petalColor} opacity="0.85" />
        </g>
      ) : (
        /* ── Regular round flower ── */
        <g>
          {Array.from({ length: petalCount }).map((_, i) => {
            const angle = (360 / petalCount) * i;
            const rad = angle * Math.PI / 180;
            const px = cx + petalR * Math.cos(rad);
            const py = cy + petalR * Math.sin(rad);
            return (
              <ellipse
                key={i}
                cx={px} cy={py}
                rx={petalRx} ry={petalRy}
                fill={data.petalColor}
                stroke={data.petalStroke}
                strokeWidth="0.8"
                opacity={bloomed ? 0.95 : 0.6}
                transform={`rotate(${angle} ${px} ${py})`}
                style={{ transition: "opacity 0.4s" }}
              />
            );
          })}
          {/* Center */}
          <circle cx={cx} cy={cy} r="13" fill={data.centerColor} />
          <circle cx={cx} cy={cy} r="8" fill={data.centerDark} opacity="0.45" />
          {[0, 60, 120, 180, 240, 300].map((a, i) => (
            <circle
              key={i}
              cx={cx + 5 * Math.cos(a * Math.PI / 180)}
              cy={cy + 5 * Math.sin(a * Math.PI / 180)}
              r="1.2"
              fill={data.petalColor}
              opacity="0.8"
            />
          ))}
        </g>
      )}
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────
// SINGLE FLOWER PLANT
// ─────────────────────────────────────────────────────────────
const FlowerPlant = ({ data, index, popupOnLeft, onRight }) => {
  const [hovered, setHovered] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const [popup, setPopup] = useState(null);
  const [clicked, setClicked] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!popup) return;
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setPopup(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [popup]);

  const handleClick = () => {
    const fact = data.facts[factIndex % data.facts.length];
    setPopup({ fact });
    setFactIndex(fi => fi + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  const bloomed = hovered || !!popup;

  return (
    <div
      ref={wrapRef}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        cursor: "pointer", position: "relative", userSelect: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Popup — always anchored to same spot: beside the flower, never shifts */}
      {popup && (
        <div style={{
          position: "absolute",
          top: "0px",
          left: onRight ? "auto" : "calc(100% + 12px)",
          right: onRight ? "calc(100% + 12px)" : "auto",
          transform: "none",
          width: 185,
          background: "rgba(8,12,24,0.96)",
          border: `1.5px solid ${data.petalStroke}60`,
          borderRadius: 12,
          padding: "10px 14px",
          boxShadow: `0 6px 28px rgba(0,0,0,0.55), 0 0 0 1px ${data.petalStroke}20`,
          zIndex: 50,
          pointerEvents: "none",
        }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: data.petalStroke, marginBottom: 5,
          }}>
            {data.label} · {((factIndex - 1) % data.facts.length) + 1}/{data.facts.length}
          </div>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: "#e2e8f0" }}>
            {popup.fact}
          </p>
        </div>
      )}

      {/* Glow */}
      <div style={{
        position: "absolute", bottom: 20, width: 70, height: 70, borderRadius: "50%",
        background: `radial-gradient(circle, ${data.petalStroke}30 0%, transparent 70%)`,
        opacity: bloomed ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none",
      }} />

      <FlowerSVG data={data} index={index} bloomed={bloomed} clicked={clicked} onRight={onRight} />

      {/* Label — sits clearly below flower with a gap */}
      <span style={{
        fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: bloomed ? data.petalStroke : "rgba(255,255,255,0.25)",
        transition: "color 0.3s",
        marginTop: 6,        // increased gap so label doesn't touch flower
        display: "block",
      }}>
        {data.label}
      </span>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: 3, marginTop: 4, height: 5 }}>
        {data.facts.map((_, i) => (
          <div key={i} style={{
            width: 5, height: 5, borderRadius: "50%",
            background: i < factIndex % (data.facts.length + 1) || (factIndex > 0 && factIndex % data.facts.length === 0 && i < data.facts.length)
              ? data.petalStroke
              : "rgba(255,255,255,0.12)",
            transition: "background 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// GROUND DECOR — just 2 clean grass blades under each flower
// ─────────────────────────────────────────────────────────────
const GroundDecorMini = ({ width = 120 }) => (
  <svg width={width} height="16" viewBox={`0 0 ${width} 16`} style={{ display: "block", marginTop: 2 }}>
    {/* Only 2 grass blades, centered, slightly upward */}
    <g transform={`translate(${width * 0.42}, 12)`}>
      <line x1="-2" y1="0" x2="-5" y2="-9" stroke="rgba(74,222,128,0.5)" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="2" y1="0" x2="5" y2="-9" stroke="rgba(74,222,128,0.5)" strokeWidth="1.3" strokeLinecap="round" />
    </g>
  </svg>
);

// ─────────────────────────────────────────────────────────────
// RIGHT SIDE S-CURVE GARDEN
// ─────────────────────────────────────────────────────────────
const RightGarden = () => {
  const [showHint, setShowHint] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  // Garden lives on the LEFT side of the page
  // xLeft = leftmost swing, xRight = rightmost swing within column
  const colWidth = 380;
  const xLeft = 5;    // pushed far left for dramatic S-curve swing
  const xRight = 340;  // pushed to far right edge
  const flowerH = 310;  // slightly longer curve between flowers
  const topPad = 36;

  const xPositions = [xRight, xLeft, xRight, xLeft, xRight, xLeft, xRight];
  // totalH = snug after last flower
  const totalH = topPad + (FLOWER_DATA.length - 1) * flowerH + 160;

  const centers = FLOWER_DATA.map((_, i) => ({
    x: xPositions[i],
    y: topPad + i * flowerH + 70,
  }));

  // Smooth cubic bezier S-curve
  const pathD = centers.reduce((acc, pt, i) => {
    if (i === 0) return `M${pt.x} ${pt.y}`;
    const prev = centers[i - 1];
    const cp1x = prev.x;
    const cp1y = prev.y + flowerH * 0.55;
    const cp2x = pt.x;
    const cp2y = pt.y - flowerH * 0.55;
    return `${acc} C${cp1x} ${cp1y} ${cp2x} ${cp2y} ${pt.x} ${pt.y}`;
  }, "");

  return (
    <>
      <style>{`
        @keyframes popUp {
          from { opacity:0; transform:translateX(-50%) translateY(6px) scale(0.92); }
          to   { opacity:1; transform:translateX(-50%) translateY(0) scale(1); }
        }
        @keyframes turbineSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{ position: "relative", width: colWidth, minHeight: totalH }}>

        {/* Hint */}
        <p style={{
          position: "absolute", top: 8, left: 0, right: 0,
          textAlign: "center", fontSize: 10,
          color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em",
          fontStyle: "italic", opacity: showHint ? 1 : 0,
          transition: "opacity 1.5s ease", userSelect: "none", whiteSpace: "nowrap",
        }}>
          click each flower 🌸
        </p>

        {/* S-curve + grass SVG backdrop */}
        <svg
          width={colWidth} height={totalH}
          viewBox={`0 0 ${colWidth} ${totalH}`}
          style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
        >
          {/* S-curve path */}
          <path
            d={pathD}
            fill="none"
            stroke="rgba(74,222,128,0.22)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* 2–3 grass tufts along each curve segment (between flowers) */}
          {centers.slice(0, -1).map((c, i) => {
            const next = centers[i + 1];
            // Only use the midpoint (t=0.5) for grass — avoids overlapping labels near flowers
            const pts = [0.5].map(t => ({
              x: c.x + (next.x - c.x) * t + (i % 2 === 0 ? 18 : -18),
              y: c.y + (next.y - c.y) * t,
            }));
            return pts.map((pt, j) => (
              <g key={`grass-${i}-${j}`} opacity="0.38">
                <line x1={pt.x - 3} y1={pt.y} x2={pt.x - 5} y2={pt.y - 8} stroke="#4ade80" strokeWidth="1.1" strokeLinecap="round" />
                <line x1={pt.x} y1={pt.y} x2={pt.x} y2={pt.y - 10} stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" />
                <line x1={pt.x + 3} y1={pt.y} x2={pt.x + 5} y2={pt.y - 8} stroke="#4ade80" strokeWidth="1.1" strokeLinecap="round" />
              </g>
            ));
          })}

          {/* Pebbles between flowers */}
          {centers.slice(0, -1).map((c, i) => {
            const next = centers[i + 1];
            const px = (c.x + next.x) / 2 + (i % 2 === 0 ? -18 : 18);
            const py = (c.y + next.y) / 2 + 20;
            return <ellipse key={i} cx={px} cy={py} rx="4" ry="2.5" fill="rgba(148,163,184,0.15)" />;
          })}
        </svg>

        {/* Flower plants */}
        {FLOWER_DATA.map((flower, i) => {
          const cx = centers[i].x;
          const cy = centers[i].y;
          const flowerW = 110;
          // popup direction: if flower is on the right side of column, show popup to left
          const isOnRight = xPositions[i] === xRight;

          return (
            <div
              key={flower.id}
              style={{
                position: "absolute",
                left: cx - flowerW / 2,
                top: cy - 70,
                width: flowerW,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FlowerPlant
                data={flower}
                index={i}
                popupOnLeft={isOnRight}
                onRight={isOnRight}
              />
              <GroundDecorMini width={flowerW} />
            </div>
          );
        })}
      </div>
    </>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
const PixelBoard = () => {
  const achievements = [
    { title: "Techsprint Hackathon 2026 | Grand Winner", image: "Techsprint.jpg" },
    { title: "Sachet Nari @1st Cohort Winner", image: "/sachet.jpg" },
    { title: "MBMC_IDEAX 2025: 48 hours hackathon", image: "/mbmc.jpeg" },
    { title: "Company Visits Intuji", image: "/intuji.jpeg" },
    { title: "Global IME BANK AI/ML Hackathon 2025", image: "/gbi2.jpeg" },
    { title: "ICT Awards Fest 2025 (Project AI BIN)", image: "/ict.png" },
    { title: "Leapfrog Student Partnership Program 2026", image: "/leapfrog.JPG" },
    { title: "Upcoming Achievement", image: null },
    { title: "Upcoming Achievement", image: null },
  ];

  const projects = [
    {
      icon: "/legalease_logo.png", title: "LegalEase Nepal",
      description: "LegalEase Nepal is an AI-powered legal assistant that simplifies access to Nepal's legal system by providing instant guidance, document analysis, and intelligent case-based search.",
      githubLink: "https://github.com/preeyankakc037/LEGALEASE_UPDATED",
    },
    {
      icon: "/dufy.png", title: "Dufy",
      description: "Dufy is an AI-powered app that recommends music based on user descriptions. Using NLP and ML, it matches mood and context to deliver the perfect background track for creators.",
      githubLink: "https://github.com/preeyankakc037/Dufyy",
    },
    {
      icon: "chuk.png", title: "Chuk",
      description: "Intelligent recipe generation, comprehensive meal tracking, and personalized nutrition analysis powered by advanced Retrieval-Augmented Generation technology.",
      githubLink: "https://github.com/preeyankakc037/Chuk",
    },
    {
      icon: "/hms.png", title: "Hospital M System",
      description: "A complete hospital system to manage patients, doctors, and appointments without requiring a database.",
      githubLink: "https://github.com/preeyankakc037/Hospital-Mangement-System-",
    },
    {
      icon: "/smart.png", title: "Smart Power Monitoring",
      description: "Arduino-based real-time power monitoring solution that tracks energy consumption, detects overloads, and optimizes efficiency.",
      githubLink: "https://github.com/preeyankakc037/Smart-Industrial-Power-Monitoring-System-",
    },
    {
      icon: "/weatherapp.png", title: "Weather App",
      description: "A simple and elegant weather application showing real-time weather data for any city. Deployed on Render.",
      githubLink: "https://github.com/preeyankakc037/weather_app_django",
    },
  ];

  return (
    <div className="flex-1 pt-20 pb-5 pl-28 relative text-white">

      {/* ── OUTER ROW: left flower garden + right content ── */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>

        {/* ── LEFT COLUMN: all page content ── */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 800 }}>

          {/* Profile header */}
          <div>
            <h2 className="text-xl font-semibold">
              <span className="text-blue-400">Hi, I'm </span>
              <span>Priyanka Khatri🤟</span>
            </h2>
            <h1 className="text-5xl font-bold mt-4">
              <span className="text-white">I love </span>
              <span className="text-blue-400">AI </span>
              <span className="text-white">and </span>
              <span className="text-green-400">Dev⚡ </span>
            </h1>
            <p className="text-gray-300 mt-3.5">
              20 yr old exploring AI and shaping ideas into projects that push limits.<br />
              Always learning by doing, breaking, and rebuilding until things click.<br />
              For me, every project is an experiment, not just an assignment.
            </p>
            <p className="text-gray-300 mt-4">
              Oh, and hackathons? Totally my thing. I see hackathons as the crucible<br />
              where creativity and determination meet, shaping ideas into something<br />
              extraordinary under pressure.
            </p>

          </div>

          {/* Latest projects — 2 per row, original card size */}
          <div className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">Latest projects</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              {projects.map((project, index) => (
                <div key={index} style={{
                  background: "#1e293b", borderRadius: 10, padding: "24px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  width: 360, height: 240, flexShrink: 0,
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
                      <img src={project.icon} alt={`${project.title} logo`} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", margin: 0 }}>{project.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: "#cbd5e1", margin: 0, lineHeight: 1.6 }}>{project.description}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaArrowRight style={{ color: "#60a5fa", fontSize: 18, cursor: "pointer" }} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 12, fontSize: 13, color: "#94a3b8" }}>See all of my projects{" "}
              <Link to="https://github.com/preeyankakc037" style={{ color: "#3b82f6" }}>On Github</Link>
            </p>
          </div>

          {/* Achievements — strict 3 × 2 grid */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-6">Achievements &amp; Social Work</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 240px)",
              gap: "16px",
            }}>
              {achievements.map((a, i) => (
                a.image ? (
                  /* Normal achievement card */
                  <div key={i} style={{
                    position: "relative", width: 240, height: 240,
                    borderRadius: 10, overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <img src={a.image} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{
                      position: "absolute", bottom: 8, left: 8, right: 8,
                      fontSize: 11, fontWeight: 600,
                      background: "rgba(0,0,0,0.72)", color: "#fff",
                      padding: "4px 8px", borderRadius: 6,
                    }}>{a.title}</div>
                  </div>
                ) : (
                  /* Upcoming placeholder card */
                  <div key={i} style={{
                    width: 240, height: 240, borderRadius: 10,
                    border: "1.5px dashed rgba(148,163,184,0.25)",
                    background: "rgba(30,41,59,0.4)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: 10, transition: "transform 0.3s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <div style={{
                      fontSize: 28, opacity: 0.18,
                    }}>🏆</div>
                    <span style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(148,163,184,0.5)",
                      background: "rgba(148,163,184,0.08)",
                      padding: "3px 10px", borderRadius: 20,
                      border: "1px solid rgba(148,163,184,0.15)",
                    }}>Upcoming</span>
                    <p style={{
                      fontSize: 11, color: "rgba(148,163,184,0.35)",
                      textAlign: "center", margin: 0, padding: "0 16px",
                      lineHeight: 1.5,
                    }}>Something exciting<br />is on the way...</p>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Social links — mt-24 gives spacing from achievements so footer aligns with YouTube flower */}
          <div className="mt-24">
            <div className="flex space-x-4">
              <a href="https://github.com/preeyankakc037" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/36/1e3a8a/github.png" alt="GitHub" /></a>
              <a href="https://x.com/preeyanka07" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/36/1e3a8a/twitter.png" alt="Twitter" /></a>
              <a href="https://www.linkedin.com/in/priyanka-khatri07/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/36/1e3a8a/linkedin.png" alt="LinkedIn" /></a>
              <a href="https://discord.com/users/ray_37" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/36/1e3a8a/discord.png" alt="Discord" /></a>
            </div>
            <h3 className="text-l text-white mb-2 mt-6">... i like creating content too!</h3>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <a href="https://www.instagram.com/ray_framed/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/ios-filled/20/1e3a8a/instagram-new.png" alt="Instagram" />
                </a>
                <span className="text-white text-sm">Ha! Ha!..followers</span>
              </div>
              <div className="flex items-center space-x-2">
                <a href="https://www.youtube.com/@ray37-y1s" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/ios-filled/20/1e3a8a/youtube-play.png" alt="YouTube" />
                </a>
                <span className="text-white text-sm">Oh! No.. subs</span>
              </div>
            </div>
          </div>

        </div>{/* end left column */}

        {/* ── RIGHT COLUMN: pinned to right edge absolutely ── */}
        <div style={{ position: "absolute", right: 14, top: 0 }}>
          <RightGarden />
        </div>

      </div>{/* end outer flex row */}
    </div>
  );
};

export default PixelBoard;