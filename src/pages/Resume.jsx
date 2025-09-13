import React from 'react';

const Resume = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" xintegrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmShjC0V/fL6/Q2y+j08V+z6jWf05Nf0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <section id="resume" className="min-h-screen bg-gray-900 text-gray-300 py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-12 border-b-2 border-gray-700 pb-4">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400">Priyanka Khatri</h1>
              <p className="text-xl mt-2 font-light">Computer Science with AI Student</p>
            </div>
            <div className="text-right">
              <a 
                href="/Resume.pdf" 
                download 
                className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                Download My Resume
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar - Contact & Summary */}
            <div className="md:w-1/3 space-y-8">
              {/* Contact Info */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Contact</h3>
                <div className="space-y-2 text-lg">
                  <p>+977 9847185137</p>
                  <p>preeyankakc.07@gmail.com</p>
                  <p>
                    <a href="https://www.linkedin.com/in/priyanka-khatri07" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      <i className="fab fa-linkedin mr-2"></i>
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/preeyankakc037" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      <i className="fab fa-github mr-2"></i>
                      GitHub
                    </a>
                  </p>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Technical Skills</h3>
                <div className="space-y-2 text-lg">
                  <p><span className="font-semibold text-gray-100">Languages:</span> Python, Django, JavaScript, FastAPI</p>
                  <p><span className="font-semibold text-gray-100">Web:</span> React, TailwindCSS</p>
                  <p><span className="font-semibold text-gray-100">Libraries:</span> Matplotlib, NumPy, Pandas</p>
                  <p><span className="font-semibold text-gray-100">Database:</span> MySQL</p>
                  <p><span className="font-semibold text-gray-100">Tools:</span> Git, GitHub, Render, Google Collab, Canva, Figma</p>
                </div>
              </div>

              {/* Hobbies */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Hobbies</h3>
                <ul className="list-none space-y-1 text-lg">
                  <li>Video Editing</li>
                  <li>Planting</li>
                  <li>Travelling</li>
                  <li>Journaling</li>
                  <li>Blog Writing</li>
                </ul>
              </div>
            </div>

            {/* Right Main Content - Summary, Education, Projects */}
            <div className="md:w-2/3 space-y-8">
              {/* Summary */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-blue-400">Summary</h3>
                <p className="text-xl leading-relaxed font-light">
                  A 3rd semester Computer Science with Artificial Intelligence student with a strong passion for solving problems and building impactful projects. Enthusiastic about Machine Learning and curious about how AI works at its core. A consistent builder and quick learner with hands-on project experience in IoT and AI-driven solutions.
                </p>
              </div>

              {/* Education */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-blue-400">Education</h3>
                <div className="space-y-4 text-lg">
                  <div>
                    <h4 className="font-bold text-gray-100">B.Sc. in Computer Science with Artificial Intelligence</h4>
                    <p>Sunway College, Kathmandu</p>
                    <p>2024 - Present</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100">Higher Secondary Education (Science Stream)</h4>
                    <p>Shree Siddhababa Secondary School</p>
                    <p>2022-2024 | GPA: 3.57</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-blue-400">Projects</h3>
                <div className="space-y-6 text-lg">
                  <div>
                    <h4 className="font-bold text-gray-100">LegalEase Nepal</h4>
                    <p className="italic text-gray-400 mb-1">RAG, FAISS, Python, LLMS</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>A RAG-based chatbot designed to simplify Nepal's legal processes.</li>
                      <li>Provides instant legal guidance, document analysis, and case-based search using FAISS and curated Nepali legal documents.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100">Smart Industrial Power Monitoring System</h4>
                    <p className="italic text-gray-400 mb-1">Arduino, C++, Tinkercad</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>An Arduino-based real-time power monitoring solution for industrial environments.</li>
                      <li>It tracks energy consumption, detects overloads, and optimizes efficiency with Tinkercad simulation.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Achievements & Community Services */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-blue-400">Achievements & Community Services</h3>
                <div className="space-y-6 text-lg">
                  <div>
                    <h4 className="font-bold text-gray-100">Achievements & Certifications</h4>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Data Fellow Cohort I - Sunway College</li>
                      <li>Certificate of Excellence - Global IME Bank AI/ML Hackathon</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100">Community Services</h4>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Kalpabriksha (Member):** Organizing resources and providing assistance (2024 - Present).</li>
                      <li>Sachet Nari (Ambassador):** Participated in outreach programs against violence (May 2025 - Aug 2025).</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
