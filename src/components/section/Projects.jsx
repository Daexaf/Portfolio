import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
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

        /* Prevent layout shift */
        .reveal-container {
          min-height: 100px; /* Prevents jumping */
        }
      `}</style>

      <section id="projects" className="min-h-screen flex items-center py-20">
        <div className="max-w-5xl mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <RevealOnScroll delay={0}>
              <div className="reveal-container">
                <div className="p-6 rounded-xl bg-gray-800/50 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                  <p className="text-gray-400 mb-4">
                    A comprehensive cloud infrastructure management platform
                    with real-time monitoring, automated scaling, and advanced
                    security features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Node.JS", "AWS", "Docker"].map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Project 2 */}
            <RevealOnScroll delay={200}>
              <div className="reveal-container">
                <div className="p-6 rounded-xl bg-gray-800/50 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  <h3 className="text-xl font-bold mb-2">
                    E-Commerce Dashboard
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Modern e-commerce analytics dashboard with real-time sales
                    tracking, inventory management, and customer insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "TypeScript", "Next.js", "MongoDB"].map(
                      (tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Project 3 */}
            <RevealOnScroll delay={400}>
              <div className="reveal-container">
                <div className="p-6 rounded-xl bg-gray-800/50 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  <h3 className="text-xl font-bold mb-2">AI Chat Assistant</h3>
                  <p className="text-gray-400 mb-4">
                    Intelligent chatbot with natural language processing,
                    context awareness, and integration with multiple APIs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "FastAPI", "OpenAI", "Redis"].map(
                      (tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Project 4 */}
            <RevealOnScroll delay={600}>
              <div className="reveal-container">
                <div className="p-6 rounded-xl bg-gray-800/50 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  <h3 className="text-xl font-bold mb-2">Mobile App</h3>
                  <p className="text-gray-400 mb-4">
                    Cross-platform mobile application with offline capabilities,
                    push notifications, and seamless user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React Native", "Expo", "Firebase", "Redux"].map(
                      (tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project →
                    </a>
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

export default Projects;
