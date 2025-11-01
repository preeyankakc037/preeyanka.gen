import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// PixelBoard Component: Main component to render and manage the interactive pixel grid
const PixelBoard = () => {
  // Configuration: Defines grid dimensions and available color options
  const rows = 10;
  const cols = 33;
  const colors = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#800080",
    "#000000",
    "#ffffff",
  ];

  // State Management: Load grid from localStorage if available; otherwise, initialize transparent grid
  const [grid, setGrid] = useState(() => {
    const savedGrid = localStorage.getItem("pixelBoardGrid");
    return savedGrid
      ? JSON.parse(savedGrid)
      : Array(rows).fill().map(() => Array(cols).fill("transparent"));
  });

  const [selectedCell, setSelectedCell] = useState(null);

  // useEffect: Save the grid state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pixelBoardGrid", JSON.stringify(grid));
  }, [grid]);

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
          ? c !== "transparent"
            ? "transparent"
            : color
          : c
      )
    );
    setGrid(newGrid);
    setSelectedCell(null);
  };

  // Event Handler: Resets the entire board to transparent and clears any selection
  const resetBoard = () => {
    const emptyGrid = Array(rows).fill().map(() => Array(cols).fill("transparent"));
    setGrid(emptyGrid);
    setSelectedCell(null);
    localStorage.removeItem("pixelBoardGrid"); // also remove saved state
  };

  // Achievement Data
  const achievements = [
    { title: "Global IME BANK AI/ML Hackathon 2025", image: "/gbi.jpg" },
    { title: "Sachet Nari @1st Cohort Winner", image: "/sachet.jpg" },
    { title: "Kalpabriksha | Member ", image: "/kpl.jpeg" },
    { title: "Company Visits Intuji", image: "/intuji.jpeg" },
    { title: "Sunway Innovation Fest 2025", image: "LegalEase.jpeg" },
    { title: "Upcoming", image: "/DevFest _Google.png" },
  ];

  // Project data with logos and GitHub links
  const projects = [
    {
      icon: "/legalease_logo.png",
      title: "LegalEase Nepal",
      description:
        "LegalEase Nepal is an AI-powered legal assistant that simplifies access to Nepal’s legal system by providing instant guidance, document analysis, and intelligent case-based search.",
      githubLink: "https://github.com/preeyankakc037/LegalEase_Nepal_Chatbot",
    },
    {
      icon: "/hms.png",
      title: "Hospital M System",
      description:
        "A complete hospital system to manage patients, doctors, and appointments interface for managing patient records, scheduling appointments, and generating reports without requiring a database",
      githubLink: "https://github.com/preeyankakc037/Hospital-Mangement-System-",
    },
    {
      icon: "/smart.png",
      title: "Smart Power Monitoring",
      description:
        "The Smart Industrial Power Monitoring System is an Arduino-based real-time power monitoring solution that helps track energy consumption, detect overloads, and optimize efficiency to reduce power waste & improve reliability.",
      githubLink: "https://github.com/preeyankakc037/Smart-Industrial-Power-Monitoring-System-",
    },
    {
      icon: "/dufy.png",
      title: "Dufy",
      description:
        "Dufy is an AI-powered app that recommends music based on user descriptions. Using NLP and ML, it matches mood and context to deliver the perfect background track for creators..",
      githubLink: "https://github.com/preeyankakc037/Dufy",
    },
    {
      icon: "/weatherapp.png",
      title: "Weather App",
      description:
        "A simple and elegant weather application that shows real-time weather data for any city worldwide. Deployed on Render for smooth, fast, and reliable performance.",
      githubLink: "https://github.com/preeyankakc037/weather_app_django",
    },
    {
      icon: "epic_logo.png",
      title: "Epic Stars",
      description:
        " Epic Stars is a dynamic platform where students around the world can showcase their academic excellence, innovative projects, leadership skills, and extracurricular accomplishments. (Frontend)",
      githubLink: "https://github.com/preeyankakc037/Epic-Stars-Sem-1-Project",
    },
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
              className="w-7 h-7 border border-gray-600 cursor-pointer relative"
              style={{ backgroundColor: cell }}
            />
          ))
        )}
      </div>

      {/* Reset Text */}
      <div className="mb-8 font-serif font-semibold">
        <span
          onClick={resetBoard}
          className="cursor-pointer bg-gradient-to-r from-green-400 via-blue-500 to-orange-400 bg-clip-text text-transparent hover:underline"
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
          <h2 className="text-xl font-semibold">
            <span className="text-blue-400">Hi, I'm </span>
            <span className="">Priyanka Khatri🤟</span>
          </h2>

          <h1 className="text-5xl font-bold mt-4">
            <span className="text-white">I love </span>
            <span className="text-blue-400">AI </span>
            <span className="text-white">and </span>
            <span className="text-green-400">Dev⚡ </span>
          </h1>

          <p className="text-gray-300 mt-3.5">
            20 yr old exploring AI and shaping ideas into projects that push limits.
            <br /> Always learning by doing, breaking, and rebuilding until things click.
            <br /> For me, every project is an experiment, not just an assignment.
          </p>

          <p className="text-gray-300 mt-4 ">
            Oh, and hackathons? Totally my thing. I see hackathons as the crucible
            <br /> where creativity and determination meet, shaping ideas into something
            <br /> extraordinary under pressure.
          </p>

          {/* Latest Projects Section */}
          <div className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">Latest projects</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-6 justify-start">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between w-[360px] h-60"
                >
                  <div className="flex items-center mb-2">
                    <img
                      src={project.icon}
                      alt={`${project.title} logo`}
                      className="w-10 h-10 rounded-full mr-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm flex-grow mb-3">
                    {project.description}
                  </p>
                  <div className="flex justify-end">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaArrowRight className="text-blue-400 hover:text-white transition-colors duration-200 cursor-pointer text-xl" />
                    </a>
                  </div>
                  <br />
                </div>
              ))}
              <p>
                See a list of all my projects{" "}
                <Link to="/projects" className="text-blue-500 hover:underline">
                  On My Projects Page
                </Link>
              </p>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-10">Achievements & Social Work </h2>
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
              <a href="https://github.com/preeyankakc037" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/github.png" alt="GitHub" />
              </a>
              <a href="https://x.com/preeyanka07" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/twitter.png" alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com/in/priyanka-khatri07/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://discord.com/users/ray_37" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/36/1e3a8a/discord.png" alt="Discord" />
              </a>
            </div>
            <h3 className="text-l text-white mb-2 mt-6">... i like creating content too!</h3>
            <div className="flex items-center space-x-6">
              {/* Instagram */}
              <div className="flex items-center space-x-2">
                <a href="https://www.instagram.com/ray_framed/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/20/1e3a8a/instagram-new.png"
                    alt="Instagram"
                  />
                </a>
                <span className="text-white text-sm">Ha! Ha!..followers</span>
              </div>

              {/* YouTube */}
              <div className="flex items-center space-x-2">
                <a href="https://www.youtube.com/@ray37-y1s" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/20/1e3a8a/youtube-play.png"
                    alt="YouTube"
                  />
                </a>
                <span className="text-white text-sm">Oh! No.. subs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Last Section */}
        <div className="ml-6 p-4 bg-gray-800 bg-opacity-70 rounded-lg text-white">
          <p className="text-yellow-400 text-sm">👋 Thanks for visiting my site</p>
          <p className="font-semibold">Glad to have you here.</p>

          {/* Guestbook */}
          <a href="/guestbook" className="block text-blue-400 mt-2 ">
            Leave a message on my guestbook →
          </a>

          {/* Email */}
          <a href="mailto:your-preeyankakc.07@gmail.com" className="block text-blue-400 mt-1 ">
            Send an email →
          </a>

          {/* GitHub Sponsor */}
          <a href="https://github.com/preeyankakc037" target="_blank" rel="noopener noreferrer" className="block text-blue-400 mt-1 ">
            See what I’m building →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PixelBoard;
