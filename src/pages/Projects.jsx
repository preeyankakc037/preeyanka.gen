import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  // Semester Work Data
  const semesterWork = [
    {
      semester: "Semester 1",
      subjects: [
        {
          name: "Computer System",
          projects: ["Iot Based Smart Industrial System"],
          reportLink: "/reports/sem1-programming.pdf",
        },
        {
          name: "Python Programming",
          projects: ["Hospital Management System"],
          reportLink: "/reports/sem1-ds.pdf",
        },
        {
          name: "Epic Stars",
          projects: ["Student Talent Showcase Website"],
          reportLink: "/reports/sem1-co.pdf",
        },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        {
          name: "Data Structures & Algorithms",
          projects: ["Course Discovery System"],
          reportLink: "/reports/sem2-web.pdf",
        },
        {
          name: "Innovation Project",
          projects: ["LegalEase Nepal"],
          reportLink: "/reports/sem2-db.pdf",
        },
        {
          name: "Intro to AI",
          projects: ["Mobile User Behavior Analysis"],
          reportLink: "/reports/sem2-oop.pdf",
        },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        {
          name: "Machine Learning",
          projects: ["Crime Status Prediction on LAPD"],
          reportLink: "/reports/sem3-ml.pdf",
        },
        {
          name: "Object Oriented Programming",
          projects: ["Flight Management System"],
          reportLink: "/reports/sem3-se.pdf",
        },
        {
          name: "Database & Web Application Development",
          projects: ["Vehicle Renting System"],
          reportLink: "/reports/sem3-os.pdf",
        },
      ],
    },
  ];

  // Certificates Data
  const certificates = [
    {
      title: "Certificate of Excellence",
      issuer: "Global IME BANK",
      date: "June 2025",
      image: "/certificates/ime_certificate.png",
      verifyLink: "https://aws.amazon.com/verification",
    },
    {
      title: "Intro to Machine Learning",
      issuer: "Kaggle",
      date: "December 2025",
      image: "/certificates/intro_to_ml.png",
      verifyLink: "https://coursera.org/verify",
    },
    {
      title: "Intermediate Machine Learning",
      issuer: "Kaggle",
      date: "December 2025",
      image: "/certificates/intermediate_ml.png",
      verifyLink: "https://ibm.com/verify",
    },
    {
      title: "Summer Class 2025",
      issuer: "Sunway College",
      date: "December 2025",
      image: "/certificates/summer_class.png",
      verifyLink: "https://meta.com/verify",
    },
    {
      title: "Introduction to SQL",
      issuer: "Datacamp",
      date: "December 2025",
      image: "/certificates/sql.png",
      verifyLink: "https://meta.com/verify",
    },
    {
      title: "Data Specialist",
      issuer: "Dataksha Analytics",
      date: "May 2025",
      image: "/certificates/data_specialist.png",
      verifyLink: "https://meta.com/verify",
    },
  ];

  // Research Papers Data
  const papers = [
    {
      title: "AI-Powered Legal Assistant for Nepal's Legal System",
      authors: "Priyanka Khatri, et al.",
      conference: "International Conference on AI and Law",
      year: "2025",
      abstract: "This paper presents an AI-powered legal assistant system designed specifically for Nepal's legal framework, utilizing RAG technology and FAISS vector search...",
      pdfLink: "/papers/legalease-paper.pdf",
      tags: ["AI", "NLP", "Legal Tech"],
    },
    {
      title: "Smart Industrial Power Monitoring Using IoT",
      authors: "Priyanka Khatri",
      conference: "IEEE IoT Conference",
      year: "2024",
      abstract: "An Arduino-based real-time power monitoring solution that tracks energy consumption and detects overloads to optimize industrial efficiency...",
      pdfLink: "/papers/power-monitoring.pdf",
      tags: ["IoT", "Arduino", "Energy"],
    },
    {
      title: "Music Recommendation System Using NLP and Context Analysis",
      authors: "Priyanka Khatri, Team",
      conference: "International Journal of Machine Learning",
      year: "2025",
      abstract: "A novel approach to music recommendation that analyzes user descriptions using NLP to match mood and context for content creators...",
      pdfLink: "/papers/dufy-paper.pdf",
      tags: ["NLP", "ML", "Music Tech"],
    },
  ];

  return (
    <div className="flex-1 p-5 pt-20 pl-28 text-white">
      {/* Certificates Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8">Certificates & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="text-white text-center p-4"><svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg><p class="text-sm">${cert.title}</p></div>`;
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mb-3">{cert.date}</p>
                <a
                  href={cert.verifyLink}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify Certificate
                  <FaArrowRight className="ml-2 text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semester Work Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-6">Semester Works</h2>
        <div className="space-y-8">
          {semesterWork.map((sem, semIndex) => (
            <div key={semIndex} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">{sem.semester}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sem.subjects.map((subject, subIndex) => (
                  <div
                    key={subIndex}
                    className="bg-gray-900 bg-opacity-70 p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {subject.name}
                    </h4>
                    <div className="mb-3">
                      
                      <p className="list-disc list-inside space-y-1">
                        {subject.projects.map((project, projIndex) => (
                          <p key={projIndex} className="text-gray-300 text-sm">
                            {project}
                          </p>
                        ))}
                      </p>
                    </div>
                    <a href=""><p  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm">Check Project on Github</p></a>
                    <br />
                    <a
                      href={subject.reportLink}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Report
                      <FaArrowRight className="ml-2 text-xs" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Papers Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-6">Research Papers & Publications</h2>
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    <span className="text-blue-400">Authors:</span> {paper.authors}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    <span className="text-green-400">Published in:</span> {paper.conference} ({paper.year})
                  </p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {paper.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 text-xs rounded-full border border-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:ml-6 mt-4 md:mt-0">
                  <a
                    href={paper.pdfLink}
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-16 mb-8 text-center">
        <p className="text-gray-400 text-sm">
          This is just the beginning — stay tuned for more!...
        </p>
      </div>
    </div>
  );
}

export default Projects;