import React from "react";
import PageWrapper from "../components/PageWrapper";

const Resume = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen text-gray-300 py-12 px-4 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b-2 border-gray-700 pb-4">
            <div className="flex-1">
              <h1 className="text-5xl md:text-4xl font-extrabold text-blue-400">
                Priyanka Khatri
              </h1>
              <p className="text-[14px] mt-2 font-light">
                Computer Science with Artificial Intelligence Student
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-medium text-sm rounded-full shadow-sm hover:scale-105 transition-all duration-300"
              >
                📄 Download
              </a>
            </div>
          </div>

          {/* PDF Embed */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative z-0 pointer-events-auto">
            <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-blue-400">
              My Resume
            </h3>
            <iframe
              src="/Resume.pdf"
              title="Resume"
              className="w-full h-[1200px] md:h-[1200px] rounded-lg border border-gray-700"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Resume;