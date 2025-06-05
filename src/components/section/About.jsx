import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];
  const backendSkills = ["Java", "C#", ".NET", "GO", "Python"];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Add the CSS styles */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-container {
          min-height: 50px;
        }
      `}</style>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-3xl mx-auto px-4">
          {/* Title with reveal animation */}
          <RevealOnScroll delay={0}>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              About Me
            </h2>
          </RevealOnScroll>

          {/* Main about section */}
          <RevealOnScroll delay={200}>
            <div className="reveal-container">
              <div className="rounded-xl p-8 bg-gray-800/30 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <img
                    src="/assets/images/photo.jpeg"
                    alt="..."
                    className="w-[300px] h-[300px] rounded-full object-cover border-2 border-blue-500 shadow-md"
                  />
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  My name is Muhammad Ihsan, a Full-stack Developer specializing
                  in frontend and backend development. I work with technologies
                  like React.js, Laravel (PHP), and Java Spring Boot, as well as
                  Golang, C#, and .NET. I have hands-on experience building
                  scalable web and mobile applications using React Native. I'm
                  also skilled in UI/UX design and have developed
                  finance-related features and reporting systems using Crystal
                  Reports. With a strong focus on performance, security, and
                  user experience, I aim to deliver clean, maintainable code and
                  seamless interfaces across platforms.
                </p>

                {/* Skills section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Frontend Skills */}
                  <div className="rounded-xl p-6 bg-gray-800/20 hover:-translate-y-1 hover:bg-gray-800/40 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div className="rounded-xl p-6 bg-gray-800/20 hover:-translate-y-1 hover:bg-gray-800/40 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm border border-cyan-500/20 hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Education and Experience section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <RevealOnScroll delay={400}>
              <div className="reveal-container">
                <div className="p-6 rounded-xl bg-gray-800/30 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">
                    🎓 Education
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white">
                        S.Kom in Computer Science
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Gunadarma University (2019 - 2023)
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300">
                        <strong>Relevant Coursework:</strong> Data Structures,
                        Web Development, Cloud Computing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Work Experience */}
            <RevealOnScroll delay={600}>
              <div className="reveal-container">
                <div className="p-6 rounded-xl bg-gray-800/30 border-white/10 border hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_4px_12px_rgba(34,211,238,0.1)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">
                    💼 Work Experience
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="border-l-2 border-blue-500 pl-4">
                      <h4 className="font-semibold text-white">
                        Fullstack Engineer at BM1OIL
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        2024 - Present
                      </p>
                      <p className="text-gray-300">
                        Developing full-stack applications with modern
                        technologies, focusing on scalable architecture and user
                        experience.
                      </p>
                    </div>
                    <div className="border-l-2 border-cyan-500 pl-4">
                      <h4 className="font-semibold text-white">
                        Software Development Intern
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        Previous Role
                      </p>
                      <p className="text-gray-300">
                        Gained hands-on experience in application development,
                        working with cross-functional teams on various projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
