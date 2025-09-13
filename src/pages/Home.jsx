import React, { useState } from "react";

// PixelBoard Component: Main component to render and manage the interactive pixel grid
const PixelBoard = () => {
  // Configuration: Defines grid dimensions and available color options
  const rows = 10; // Number of rows in the grid
  const cols = 33; // Number of columns in the grid
  const colors = [
    "#ff0000", // Red
    "#ffa500", // Orange
    "#ffff00", // Yellow
    "#00ff00", // Green
    "#0000ff", // Blue
    "#800080", // Purple
    "#000000", // Black
    "#ffffff", // White
  ];

  // State Management: Handles the grid state and selected cell for color selection
  const [grid, setGrid] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill("transparent"))
  );
  const [selectedCell, setSelectedCell] = useState(null);

  // Event Handler: Captures click event on a grid cell to select it for coloring or erasing
  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  // Event Handler: Applies the selected color to the chosen cell or erases it if already colored
  const handleColorSelect = (color) => {
    if (!selectedCell) return;

    const newGrid = grid.map((r, rIdx) =>
      r.map((c, cIdx) =>
        rIdx === selectedCell.row && cIdx === selectedCell.col
          ? (c !== "transparent" ? "transparent" : color)
          : c
      )
    );
    setGrid(newGrid);
    setSelectedCell(null);
  };

  // Event Handler: Resets the entire board to transparent and clears any selection
  const resetBoard = () => {
    setGrid(Array(rows).fill().map(() => Array(cols).fill("transparent")));
    setSelectedCell(null);
  };

  const achievements = [
    { title: "Global IME BANK AI/ML Hackathon", image: "/About.jpeg" },
    { title: "Patent (pending) @Cloudflare", image: "/gbi.jpeg" },
    { title: "Mentor @Calhacks", image: "/img2.jpeg" },
    { title: "Neo Scholar finalist", image: "/img3.jpeg" },
    { title: "Winner #2, Calhacks", image: "/animated_ray.png" },
    { title: "Winner #2, Sunhacks", image: "/img1.jpeg" }, // Reusing img1.jpeg as a fallback
  ];

  return (
    <div className="flex-1 p-5 pt-20 pl-28 relative text-white">
      {/* Pixel Grid Container */}
      <div
        className="grid gap-1 mb-6"
        style={{ gridTemplateColumns: `repeat(${cols}, 30px)` }}
      >
        {grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleCellClick(rowIdx, colIdx)}
              className="w-7 h-7 border border-gray-700 cursor-pointer relative"
              style={{ backgroundColor: cell }}
            />
          ))
        )}
      </div>

      {/* Reset Text */}
      <div className="mb-8">
        <span
          onClick={resetBoard}
          className="text-white-500 cursor-pointer hover:underline"
        >
          RESET
        </span>
      </div>

      {/* Color Selection Popup */}
      {selectedCell && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
            <div className="flex gap-1 mb-1">
              {colors.slice(0, 4).map((color) => (
                <div
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className="w-8 h-8 cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="flex gap-1">
              {colors.slice(4).map((color) => (
                <div
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className="w-8 h-8 cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Profile Section */}
      <div className="flex items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">
            <span className="text-white">Hi, I'm </span>
            <span className="text-blue-400">Priyanka Khatri🤟</span>
          </h2>

          <h1 className="text-4xl font-bold mt-4">
            <span className="text-white">I love </span>
            <span className="text-blue-400">AI </span>
            <span className="text-white">and </span>
            <span className="text-green-400">Core Development</span>
          </h1>

          <p className="text-gray-300 mt-3.5">
            3rd semester Computer Science with Artificial Intelligence student with a strong passion <br /> for solving problems and building
            impactful projects. A consistent builder
            and quick<br /> learner with hands-on project experience in IoT and AI-driven solutions.
          </p>
          <p className="text-gray-300 mt-4 ">
            Oh, and hackathons? Totally my thing. I love to join Hackathons — some glimpses of my
            <span className="text-blue-400 block">
              hackathons and other achievements
            </span>
          </p>

          {/* Achievements Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-10">
              Achievements
            </h2>
            <div className="flex flex-wrap gap-4 mb-2 mt-2">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="relative w-60 h-60 rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black bg-opacity-70 p-1 rounded">
                    {achievement.title}
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Social Icons with Title */}
          <div className="mt-16">
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/github.png" alt="GitHub" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/twitter.png" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/discord.png" alt="Discord" />
              </a>
              <a href="mailto:priyanka@example.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/email.png" alt="Email" />
              </a>
            </div>
            <h3 className="text-l  text-white mb-2 mt-6">... i like creating content too!</h3>
            <div className="flex items-center space-x-6">
              {/* Instagram */}
              <div className="flex items-center space-x-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/20/1e3a8a/instagram-new.png"
                    alt="Instagram"
                  />
                </a>
                <span className="text-white text-sm">20k..followers</span>
              </div>

              {/* YouTube */}
              <div className="flex items-center space-x-2">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/20/1e3a8a/youtube-play.png"
                    alt="YouTube"
                  />
                </a>
                <span className="text-white text-sm">500k.. subs</span>
              </div>
            </div>

          </div>
        </div>

        <div className="ml-6 p-4 bg-gray-800 bg-opacity-70 rounded-lg text-white">
          <p className="text-yellow-400 text-sm">👋 Thanks for visiting my site</p>
          <p className="font-semibold">Glad to have you here.</p>
          <p className="text-blue-400 mt-2">
            Leave a message on my <a href="#" className="underline">guestbook</a> →
          </p>
          <p className="text-blue-400 mt-1">
            Send an <a href="#" className="underline">email</a> →
          </p>
          <p className="text-blue-400 mt-1">
            Sponsor me on <a href="#" className="underline">github</a> →
          </p>
        </div>
      </div>
    </div>
  );
};

export default PixelBoard;