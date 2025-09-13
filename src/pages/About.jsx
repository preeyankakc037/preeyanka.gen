import PageWrapper from "../components/PageWrapper";
const About = () => {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "hsl(217 19% 9%)" }}
    >
     
      {/* Main content */}
      <div
        className="max-w-4xl mx-auto px-8 py-16"
        style={{ marginLeft: "100px" }} // shift for sidebar
      >
        {/* Hero section */}
        <div className="mb-16">
          {/*  Removed the first small picture here */}
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Hi. I'm Priyanka{" "}
            <span className="text-blue-400">@preeyankakc037</span> Khatri{" "}
            <span className="text-4xl">🤟</span>
          </h1>

          <div className="mb-12">
            <img
              src="./About.jpeg"
              alt="Priyanka Khatri - About"
              className="w-full max-w-3xl rounded-2xl"
            />
          </div>
        </div>

        {/* Short Bio */}
        <div className="mb-16">
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
                className="text-blue-400 hover:underline"
              >
                almost everything I build is open source!
              </a>{" "}
              I also love learning new technologies and building projects that
              solve real-world problems.
            </p>
            <p>
              I mainly write code in Python, JavaScript, and work with
              frameworks like Django and React.
            </p>
          </div>
        </div>

        {/* Academic Journey */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Academic Journey</h2>
          <div
            className="text-lg leading-relaxed space-y-4"
            style={{ color: "hsl(217 10% 64%)" }}
          >
            <p>
              I'm currently pursuing my{" "}
              <a href="#" className="text-blue-400 hover:underline">
                B.Sc. in Computer Science with Artificial Intelligence
              </a>{" "}
              at Sunway College, Kathmandu. Before this, I completed my Higher
              Secondary Education from Shree Siddhababa Secondary School with a
              GPA of 3.51 in the Science stream.
            </p>
            <p>
              I've been recognized for my academic performance and project work,
              earning a spot in the{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Data Fellow Cohort I
              </a>{" "}
              at Sunway College in 2024. I also received a Certificate of
              Excellence at the Global IME Bank AI/ML Hackathon in 2025.
            </p>
            <p>
              I've built several projects including{" "}
              <a href="#" className="text-blue-400 hover:underline">
                LegalEase Nepal
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Smart Industrial Power Monitoring System
              </a>
              .
            </p>
          </div>
        </div>

        {/* Kind words */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Kind words <span className="text-red-500">❤️</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "hsl(217 33% 17%)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold">Mentor, CS Department</h3>
                  <p
                    className="text-sm"
                    style={{ color: "hsl(217 10% 64%)" }}
                  >
                    Sunway College
                  </p>
                </div>
              </div>
              <p style={{ color: "hsl(217 10% 64%)" }}>
                Priyanka is one of the most dedicated students I know. She's
                always eager to learn new technologies and isn't afraid to take
                on challenging projects. Her work on the LegalEase Nepal project
                shows her commitment to solving real-world problems through
                technology.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "hsl(217 33% 17%)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold">Project Partner</h3>
                  <p
                    className="text-sm"
                    style={{ color: "hsl(217 10% 64%)" }}
                  >
                    @teammate
                  </p>
                </div>
              </div>
              <p style={{ color: "hsl(217 10% 64%)" }}>
                Working with Priyanka on our AI projects has been amazing. She
                has a great understanding of machine learning concepts and
                always brings creative solutions to complex problems. Her
                enthusiasm for AI is contagious!
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "hsl(217 33% 17%)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400">💻</span>
                </div>
                <h3 className="font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "JavaScript", "FastAPI"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: "hsl(215 25% 27%)",
                      color: "hsl(217 10% 64%)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "hsl(217 33% 17%)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400">🌐</span>
                </div>
                <h3 className="font-semibold">Web Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "TailwindCSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: "hsl(215 25% 27%)",
                      color: "hsl(217 10% 64%)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "hsl(217 33% 17%)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400">🛠️</span>
                </div>
                <h3 className="font-semibold">Tools & Others</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "MySQL", "Arduino"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: "hsl(215 25% 27%)",
                      color: "hsl(217 10% 64%)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Let's Connect */}
        <div className="mb-16">
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

      {/* Floating music card */}
      <div
        className="fixed top-32 right-8 w-80 p-4 rounded-2xl"
        style={{ backgroundColor: "hsl(217 33% 17%)" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-lg">🎵</span>
          <span
            className="text-sm"
            style={{ color: "hsl(217 10% 64%)" }}
          >
            playlist: songs I code to
          </span>
        </div>
        <p
          className="text-sm mb-3"
          style={{ color: "hsl(217 10% 64%)" }}
        >
          these songs are the ones that I code to. at least once in my life
          obsessed with, obsessed as in, listen to it on repeat kinda obsessed
        </p>
        <div className="w-full h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4"></div>
        <div className="space-y-2">
          <div className="text-sm">👋 Thanks for visiting my site!</div>
          <div className="font-semibold">Glad to have you here.</div>
          <div className="space-y-1">
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm flex items-center gap-2"
            >
              Leave a message on my guestbook
              <span>→</span>
            </a>
            <a
              href="mailto:preeyankakc.07@gmail.com"
              className="text-blue-400 hover:underline text-sm flex items-center gap-2"
            >
              Send an email
              <span>→</span>
            </a>
            <a
              href="https://github.com/preeyankakc037"
              className="text-blue-400 hover:underline text-sm flex items-center gap-2"
            >
              Sponsor me on github
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
