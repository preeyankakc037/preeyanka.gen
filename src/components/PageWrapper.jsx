import React from "react";

const PageWrapper = ({ children }) => {
  const starCount = 50;

  // Generate random stars
  const stars = Array.from({ length: starCount }).map((_, idx) => {
    const left = Math.random() * 100;
    const duration = 3 + Math.random() * 5;
    const delay = Math.random() * 5;
    const size = 1 + Math.random() * 2;
    return (
      <div
        key={idx}
        className="star"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
      {stars} {/* stars behind all content */}
      <div className="relative z-10">{children}</div> {/* page content above stars */}
    </div>
  );
};

export default PageWrapper;
