import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Legalize Nepal",
      description: "AI-powered legal assistant that makes Nepal’s legal processes simple and accessible.",
      gradient: "bg-gradient-to-br from-cyan-400/20 to-blue-600/30",
      mockup: "https://placehold.co/320x200/334155/E2E8F0?text=Legalize+Nepal",
      githubUrl: "https://github.com/priyanka/legalize-nepal",
      liveUrl: "https://google.com",
    },
    {
      title: "Weather App",
      description: "Get real-time weather forecasts with a clean UI and accurate data.",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-600/30",
      mockup: "img3.jpeg",
      githubUrl: "https://github.com/priyanka/weather-app",
      liveUrl: "",
    },
    {
      title: "Hospital Management System",
      description: "A complete hospital system to manage patients, doctors, and appointments.",
      gradient: "bg-gradient-to-br from-blue-400/20 to-cyan-600/30",
      mockup: "https://placehold.co/320x200/334155/E2E8F0?text=Hospital+System",
      githubUrl: "https://github.com/priyanka/hospital-management",
      liveUrl: "",
    },
    {
      title: "Smart Power Monitoring",
      description: "IoT-enabled monitoring to optimize energy consumption and efficiency.",
      gradient: "bg-gradient-to-br from-blue-300/20 to-gray-500/30",
      mockup: "https://placehold.co/320x200/334155/E2E8F0?text=Smart+Power+Monitoring",
      githubUrl: "https://github.com/priyanka/smart-power",
      liveUrl: "",
    },
    {
      title: "Django To-Do App",
      description: "A simple to-do list app built with Django, managing your tasks easily.",
      gradient: "bg-gradient-to-br from-purple-600/20 to-indigo-700/30",
      mockup: "https://placehold.co/320x200/334155/E2E8F0?text=Django+To-Do+App",
      githubUrl: "https://github.com/priyanka/django-todo",
      liveUrl: "",
    },
  ];

  return (
    <div className="relative min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 py-20 ml-28" >
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            Some cool stuff I've built
          </h2>
          
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${project.gradient} backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-cyan-400/30`}
              style={{ aspectRatio: "16/9" }}
            >
              {/* Project Image */}
              <div className="relative h-2/3 overflow-hidden">
                <img
                  src={project.mockup}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="p-3">
                <h3 className="text-md font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs leading-tight">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
