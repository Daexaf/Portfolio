import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 flex items-center justify-center relative px-4 py-8"
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Main heading with better mobile sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Muhammad Ihsan
          </h1>

          {/* Subtitle with responsive text and better spacing */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-blue-400 px-2">
            Full-Stack Developer | Software Engineer | UI/UX Designer
          </h2>

          {/* Description with better mobile readability */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Passionate about building user-centric solutions — from design to
            deployment. Skilled in React.js, Laravel, .NET, Java, and Figma. I
            love crafting clean UI, writing scalable code, and continuously
            learning.
          </p>

          {/* Buttons with responsive layout */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a
              href="https://drive.google.com/file/d/1wspaGC2b89Xb5K9mKDJL9_syoSkCl0wk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,_130,_246,_0.4)] text-center"
            >
              <span className="mr-2">📄</span>Download CV
            </a>

            <a
              href="https://drive.google.com/file/d/13A2itCezMcfZ2RhhUuuI9xS01McTtTRN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,_130,_246,_0.2)] hover:bg-blue-500/10 text-center"
            >
              <span className="mr-2">💼</span>Open Portfolio
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
