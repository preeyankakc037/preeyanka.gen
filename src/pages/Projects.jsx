import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "LegalEase Nepal",
      description:
      "LegalEase Nepal is an AI-powered legal assistant that simplifies access to Nepal’s legal system by providing instant guidance, document analysis, and intelligent case-based search. Leveraging a curated database of Nepali legal documents and a high-performance FAISS vector search index, it ensures accurate and relevant results. Built with Python, the platform offers a secure and user-friendly web interface, making legal support more accessible to individuals, entrepreneurs, and small businesses while allowing seamless updates to its knowledge base.",
      mockup: "/legal.png",
      githubUrl: "https://github.com/preeyankakc037/LegalEase_Nepal_Chatbot",
      liveUrl: "https://github.com/preeyankakc037/LegalEase_Nepal_Chatbot",
    },
    {
      title: "Weather App",
      description:
        "Get real-time weather forecasts with a clean UI and accurate data.",
      mockup: "/weatherapp.png",
      githubUrl: "https://github.com/preeyankakc037/weather_app_django",
      liveUrl: "https://weatherapp-k027.onrender.com",
    },
    {
      title: "Hospital Management System",
      description:
        "A complete hospital system to manage patients, doctors, and appointments.",
      mockup: "/hms.png",
      githubUrl: "https://github.com/preeyankakc037/Hospital-Mangement-System-",
      liveUrl: "https://github.com/preeyankakc037/Hospital-Mangement-System-",
    },
    {
      title: "Smart Power Monitoring",
      description:
        "IoT-enabled monitoring to optimize energy consumption and efficiency.",
      mockup: "smart.png",
      githubUrl: "https://github.com/preeyankakc037/Smart-Industrial-Power-Monitoring-System-",
      liveUrl: "https://www.tinkercad.com/things/l1RVa9vnTe4-smart-industrial-power-monitoring-system-?sharecode=ItFM3LfnAMlWW-2DYcEFUea6Ta8g57FsB5Uq47uc5ZU",
    },
    {
      title: "Django To-Do App",
      description:
        "A simple to-do list app built with Django, managing your tasks easily.",
      mockup: "/todoapp.png",
      githubUrl: "https://github.com/preeyankakc037/mytodo-django",
      liveUrl: "https://mytodo-django.onrender.com/",
    },
  ];

  return (
    <div className="relative min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 py-20 ml-28">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-4.5xl font-bold text-white mb-4 flex items-center gap-2">
           My Projects🤟
          </h2>
        </div>

        {/* Projects Layout */}
        <div className="space-y-16">
          {/* Top Section: One large card on the left with two smaller cards on the right */}
          <div className="flex items-start">
            {/* Large card on the left */}
            <div className="flex-shrink-0">
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 backdrop-blur-lg border border-transparent bg-clip-padding p-[2px] hover:border-cyan-400/50 transition-all duration-500"
                style={{ maxWidth: "700px", margin: "0" }}
              >
                {/* Inner Content */}
                <div className="rounded-2xl bg-[#0f172a]/90 p-4 flex flex-col h-full">
                 
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={projects[0].mockup}
                      alt={projects[0].title}
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                    />
                  </div>
                  {/* Project Info */}
                  <div className="flex flex-col justify-between flex-1 mt-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 hover:text-cyan-400 transition-colors duration-200">
                        {projects[0].title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {projects[0].description}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-4">
                      <a
                        href={projects[0].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={projects[0].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          projects[0].liveUrl
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 cursor-not-allowed"
                        } transition-colors`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two smaller cards on the right */}
            <div className="flex-1 pl-14">
              <div className="flex flex-col gap-8">
                <div
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 backdrop-blur-lg border border-transparent bg-clip-padding p-[2px] hover:border-cyan-400/50 transition-all duration-500"
                  style={{ maxWidth: "500px", margin: "0" }}
                >
                  {/* Inner Content */}
                  <div className="rounded-2xl bg-[#0f172a]/90 p-4 flex flex-col h-full">
                    
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={projects[1].mockup}
                        alt={projects[1].title}
                        className="w-full h-32 object-cover transition-opacity duration-500 group-hover:opacity-90"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col justify-between flex-1 mt-4">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 hover:text-cyan-400 transition-colors duration-200">
                          {projects[1].title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {projects[1].description}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 mt-4">
                        <a
                          href={projects[1].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FaGithub size={18} />
                        </a>
                        <a
                          href={projects[1].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            projects[1].liveUrl
                              ? "text-gray-400 hover:text-white"
                              : "text-gray-600 cursor-not-allowed"
                          } transition-colors`}
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 backdrop-blur-lg border border-transparent bg-clip-padding p-[2px] hover:border-cyan-400/50 transition-all duration-500"
                  style={{ maxWidth: "500px", margin: "0" }}
                >
                  {/* Inner Content */}
                  <div className="rounded-2xl bg-[#0f172a]/90 p-4 flex flex-col h-full">
               {     /* Project Image */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={projects[4].mockup}
                        alt={projects[4].title}
                        className="w-full h-32 object-cover transition-opacity duration-500 group-hover:opacity-90"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col justify-between flex-1 mt-4">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 hover:text-cyan-400 transition-colors duration-200">
                          {projects[4].title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {projects[4].description}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 mt-4">
                        <a
                          href={projects[4].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FaGithub size={18} />
                        </a>
                        <a
                          href={projects[4].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            projects[4].liveUrl
                              ? "text-gray-400 hover:text-white"
                              : "text-gray-600 cursor-not-allowed"
                          } transition-colors`}
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section: Two cards side by side */}
          <div className="flex gap-8 items-start">
            <div className="w-1/2">
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 backdrop-blur-lg border border-transparent bg-clip-padding p-[2px] hover:border-cyan-400/50 transition-all duration-500"
                style={{ maxWidth: "620px", margin: "auto" }}
              >
                {/* Inner Content */}
                <div className="rounded-2xl bg-[#0f172a]/90 p-4 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={projects[2].mockup}
                      alt={projects[2].title}
                      className="w-full h-80 object-cover transition-opacity duration-500 group-hover:opacity-90"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-between flex-1 mt-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 hover:text-cyan-400 transition-colors duration-200">
                        {projects[2].title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {projects[2].description}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-4">
                      <a
                        href={projects[2].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={projects[2].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          projects[2].liveUrl
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 cursor-not-allowed"
                        } transition-colors`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 backdrop-blur-lg border border-transparent bg-clip-padding p-[2px] hover:border-cyan-400/50 transition-all duration-500"
                style={{ maxWidth: "620px", margin: "auto" }}
              >
                {/* Inner Content */}
                <div className="rounded-2xl bg-[#0f172a]/90 p-4 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={projects[3].mockup}
                      alt={projects[3].title}
                      className="w-full h-80 object-cover transition-opacity duration-500 group-hover:opacity-90"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-between flex-1 mt-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 hover:text-cyan-400 transition-colors duration-200">
                        {projects[3].title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {projects[3].description}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-4">
                      <a
                        href={projects[3].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={projects[3].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          projects[3].liveUrl
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 cursor-not-allowed"
                        } transition-colors`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
          </div>
                  <p
  style={{
    color: "hsl(0, 0%, 80%)", // light gray for contrast
    fontSize: "15px",          // readable size
   
    marginTop: "1rem",
    paddingLeft:'24px'         // spacing from projects
      
  }}
>
  Just the beginning — stay tuned!...
</p>

        </div>
      </div>
      
    </div>
    
  );
}

export default Projects;