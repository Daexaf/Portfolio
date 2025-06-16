import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const [visibleDetail, setVisibleDetail] = useState(null);
  const toggle = (id) => {
    setVisibleDetail((prev) => (prev === id ? null : id));
  };
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
                  <h3 className="text-xl font-bold mb-2">
                    BM1 Official Website
                  </h3>
                  <p className="text-gray-400 mb-4">
                    The website is built with a robust architecture, utilizing
                    Laravel 10 for the backend, ensuring smooth performance and
                    scalability. MySQL is used for efficient database
                    management, handling all the company's data securely.
                    Additionally, I created an admin panel to manage content
                    easily, allowing updates to be made without technical
                    expertise.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["PHP", "Laravel", "MySQL", "Figma"].map((tech, key) => (
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
                      href="https://bm1-oil.com/home"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
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
                  <h3 className="text-xl font-bold mb-2">Kingkos App</h3>
                  <p className="text-gray-400 mb-4">
                    Kingkost App is endeavor involved the integration of React
                    JS for web development, Java Springboot for backend
                    functionalities, and React Native for mobile application
                    development. Through the synergy of these frameworks, the
                    application aims to streamline the process of finding
                    suitable accommodations, providing users with a seamless
                    experience across both web and mobile platforms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "React",
                      "TypeScript",
                      "Java Spring Boot",
                      "PostgreSQL",
                      "Docker",
                      "React Native",
                    ].map((tech, key) => (
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
                      href="https://sites.google.com/view/websitecvihsan/projects"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
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
                  <h3 className="text-xl font-bold mb-2">ShopeyMart</h3>
                  <p className="text-gray-400 mb-4">
                    Shopeymart is a full-stack program for an Online Shopping
                    API, as my final project at Enigma. This project utilizes
                    Java Spring Boot for backend development, including REST
                    API, JSON Web Token (JWT), and Java, while React JS is
                    employed for the frontend. Postgre is utilized as the
                    database.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Java Spring Boot", "React", "JWT", "PostgreSQL"].map(
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
                      href="https://sites.google.com/view/websitecvihsan/projects"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
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
                  <h3 className="text-xl font-bold mb-2">E-Duren Website</h3>
                  <p className="text-gray-400 mb-4">
                    This website to serve dine-in food orders at the Sop Duren
                    97 restaurant, which is equipped with a payment method using
                    payment gateway midtrans. This website was created by myself
                    using the Javascript programming language with the help of
                    the React JS and using PostgreSQL for database settings.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Figma", "PostgreSQL", "Midtrans"].map(
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
                      href="https://sites.google.com/view/websitecvihsan/projects"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Buttons Section - Moved outside the grid */}
          <RevealOnScroll delay={800}>
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a
                href="https://sites.google.com/view/websitecvihsan/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,_130,_246,_0.4)] text-center"
              >
                <span className="mr-2">📄</span>Others Project
              </a>

              <a
                href="https://github.com/Daexaf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,_130,_246,_0.2)] hover:bg-blue-500/10 text-center"
              >
                <span className="mr-2">💼</span>Open Github
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Projects;
