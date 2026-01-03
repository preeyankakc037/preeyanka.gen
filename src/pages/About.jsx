// src/pages/About.jsx
import React, { useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

const PlaylistCard = () => {
  return (
    <div
      className="w-80 p-4 rounded-2xl mb-8 mt-16"
      style={{ backgroundColor: "hsl(217 33% 17%)" }}
    >
      <div>
        <a
          href="https://youtube.com/playlist?list=PLQhtp7kpQprLhSxWmnj6QXVcYkr9oQGls&si=In8yU_MwfvLoQEhQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/animated_ray.png"
            alt="Playlist Thumbnail"
            className="w-full h-36 object-cover rounded-lg mb-3 cursor-pointer hover:scale-105 transition-transform"
          />
        </a>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg">🎵</span>
          <span className="text-sm" style={{ color: "hsl(217 10% 64%)" }}>
            Playlist: songs I code to
          </span>
        </div>
        <p className="text-sm mb-3" style={{ color: "hsl(217 10% 64%)" }}>
          These are the songs I code to, listened on repeat at least once in my life.
        </p>

        <div className="space-y-2">
          <div className="text-sm">👋 Thanks for visiting my site!</div>
          <div className="font-semibold">Glad to have you here.</div>
          <div className="space-y-1 mt-2">
            <Link
              to="/guestbook"
              className="text-blue-400 text-sm flex items-center gap-2 hover:underline"
            >
              Leave a message on my guestbook <span>→</span>
            </Link>

            <a
              href="mailto:preeyankakc.07@gmail.com"
              className="text-blue-400 hover:underline text-sm flex items-center gap-2"
            >
              Send an email <span>→</span>
            </a>

            <a
              href="https://github.com/preeyankakc037"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm flex items-center gap-2"
            >
               See what I'm building <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    const aside = document.querySelector("aside");
    if (!aside) return;

    const prevZ = aside.style.zIndex || "";
    const prevPointer = aside.style.pointerEvents || "";

    aside.style.zIndex = "9999";
    aside.style.pointerEvents = "auto";

    return () => {
      aside.style.zIndex = prevZ;
      aside.style.pointerEvents = prevPointer;
    };
  }, []);

  return (
    <PageWrapper>
      <div className="min-h-screen text-white pt-20">
        {/* Flex layout: main content + playlist sidebar */}
        <div className="flex gap-8 pl-28 pr-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold mb-8 leading-tight">
                Hi, I'm Priyanka{" "}
                <a
                  href="https://www.instagram.com/ray_framed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @ray37
                </a>{" "}
                Khatri
                <br />
                <span className="text-5xl">😉</span>
              </h1>

              <div className="mb-12">
                <img
                  src="./About.jpeg"
                  alt="Priyanka Khatri - About"
                  className="w-full max-w-3xl"
                />
              </div>
            </div>

            {/* Short Bio */}
            <div className="mb-16">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-6">Short Bio</h2>
                <div
                  className="text-lg leading-relaxed space-y-4"
                  style={{ color: "hsl(217 10% 64%)" }}
                >
                  <p>
                    I'm a 3rd semester Computer Science with Artificial Intelligence
                    student with a strong passion for solving problems and building
                    impactful projects. I'm enthusiastic about Machine Learning and
                    curious about how AI works at its core. I'm also a big fan of open
                    source software - which is why{" "}
                    <a
                      href="https://github.com/preeyankakc037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      almost everything I build is open source!
                    </a>{" "}
                    I also love learning new technologies and building projects that
                    solve real-world problems.
                  </p>
                  <p>
                    I mainly write code in Python, JavaScript, and work with
                    frameworks like Django, FastApI and React.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Journey */}
            <div className="mb-16">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-bold mb-6">Academic Journey</h2>
                <div
                  className="text-lg leading-relaxed space-y-4"
                  style={{ color: "hsl(217 10% 64%)" }}
                >
                  <p>
                    I'm currently pursuing my{" "}
                    <span className="text-blue-400">
                      B.Sc. in Computer Science with Artificial Intelligence
                    </span>{" "}
                    at Sunway College, Kathmandu. Before this, I completed my Higher
                    Secondary Education from Shree Siddhababa Secondary School with a
                    GPA of 3.57 in the Science stream.
                  </p>
                  <p>
                    I've been recognized for my academic performance and project work,
                    earning a spot in the{" "}
                    <span className="text-blue-400">Data Fellow Cohort I</span>{" "}
                    at Sunway College in 2024. I also received a Certificate of
                    Excellence at the Global IME Bank AI/ML Hackathon in 2025.
                  </p>
                  <p>
                    I've built several projects including{" "}
                    <Link to="/projects" className="text-blue-400 hover:underline">
                      LegalEase Nepal
                    </Link>{" "}
                    and{" "}
                    <Link to="/projects" className="text-blue-400 hover:underline">
                      Smart Power Monitoring System
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Kind Words */}
            <div className="mb-16">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                  Kind words <span className="text-red-500">❤️</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "hsl(217 33% 17%)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300" />
                      <div>
                        <h3 className="font-semibold">Mala Deep Upadhaya</h3>
                        <p
                          className="text-sm"
                          style={{ color: "hsl(217 10% 64%)" }}
                        >
                          @mentor Sunway College
                        </p>
                      </div>
                    </div>
                    <p style={{ color: "hsl(217 10% 64%)" }}>
                     I had the pleasure of teaching Priyanka in the Research and Skills course, 
                     where she consistently demonstrated strong analytical abilities and a quick 
                     grasp of complex research concepts. Her dedication to learning and practical
                      approach to problem-solving were truly commendable. 
                    </p>
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "hsl(217 33% 17%)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300" />
                      <div>
                        <h3 className="font-semibold">Sanket Shrestha</h3>
                        <p
                          className="text-sm"
                          style={{ color: "hsl(217 10% 64%)" }}
                        >
                          @Senior Sunway College
                        </p>
                      </div>
                    </div>
                    <p style={{ color: "hsl(217 10% 64%)" }}>
                   It was a pleasure mentoring Priyanka Khatri, even though our time 
                   together was brief. From the moment we began working together, I was
                    impressed by her strong dedication and eagerness to learn. Priyanka
                     approaches every challenge with a genuine curiosity and a commitment 
                     to understanding new concepts, which is a rare and valuable quality.

                    </p>
                  </div>
                </div>
              </div>
            </div>
{/* Technical Skills */}
<div className="mb-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">My Toolkit</h2>
    <div className="flex justify-left">
      <img
        src="/toolkit.png"
        alt="Technical Skills"
        className="w-full h-full max-w-2xl transition-all duration-500 hover:brightness-110 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"
        style={{ background: "transparent" }}
      />
    </div>
  </div>
</div>



            {/* Let's Connect */}
            <div className="mb-16">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                <div
                  className="text-lg leading-relaxed space-y-4"
                  style={{ color: "hsl(217 10% 64%)" }}
                >
                  <p>
                    I'm excited to connect with others via{" "}
                    <a
                      href="mailto:preeyankakc.07@gmail.com"
                      className="text-blue-400 hover:underline"
                    >
                      email (preeyankakc.07@gmail.com)
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://linkedin.com/in/priyanka-khatri07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      LinkedIn
                    </a>{" "}
                    to chat about projects and ideas. Currently, I'm focused on my
                    studies, but I am open to hearing about potential opportunities,
                    discussing them with you and then potentially collaborating if
                    it's a good fit. I'm also open to working on interesting projects
                    and hackathons.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Playlist */}
          <div className="flex-shrink-0">
            <PlaylistCard />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;

