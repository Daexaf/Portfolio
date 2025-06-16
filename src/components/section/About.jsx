import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
    "React Native",
  ];
  const backendSkills = [
    "Java",
    "C#",
    ".NET",
    "PHP",
    "Laravel",
    "Go",
    "Spring Boot",
  ];
  const certification = [
    "Junior Web Programming - BNSP",
    "Responsive Web - FreeCodeCamp",
    "Programming - Digital Talent Scholarship",
    "Bank Jago: UI/UX Challenge",
    "QUALITY ASSURANCE INTRODUCTION - MySkill",
  ];
  const database = ["MySQL", "SQL Server", "PostgreSQL"];
  const others = [
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "Figma",
    "Trello",
    "Crystal Report",
  ];

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

                  <div className="rounded-xl p-6 bg-gray-800/20 hover:-translate-y-1 hover:bg-gray-800/40 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">
                      Database
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {database.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl p-6 bg-gray-800/20 hover:-translate-y-1 hover:bg-gray-800/40 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">
                      Others
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {others.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-xl p-6 mt-4 bg-gray-800/20 hover:-translate-y-1 hover:bg-gray-800/40 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">
                    Certification
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certification.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Education and Experience section */}
          <div className="space-y-8 mt-8">
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
                        Bachelor in Computer Science
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        Gunadarma University (Jun 2019 - Sep 2023)
                      </p>
                      <p className="text-gray-300">GPA: 3.87 / 4.OO</p>
                      {visibleDetail === "gunadarma" && (
                        <ul className="list-disc text-sm mt-2 pl-5 text-gray-400 space-y-1">
                          <li>
                            Completed and certified in BNPS Web Junior,
                            proficiency in junior web.
                          </li>
                          <li>
                            Participated and graduated from the MBKM GIGIH 2.0
                            program by YABB in the frontend track.
                          </li>
                          <li>
                            Participated and graduated from the MBKM UI/UX
                            Design Mastery program by Skilvul.
                          </li>
                          <li>
                            Developed a reservation website project as part of a
                            scientific writing assignment.
                          </li>
                          <li>
                            Created an ordering and payment website for Sop
                            Duren 97 restaurant as a thesis project.
                          </li>
                          <li>
                            Attended various training programs, seminars, and
                            certifications.
                          </li>
                        </ul>
                      )}
                      <button
                        onClick={() => toggle("gunadarma")}
                        className="text-cyan-400 text-sm mt-2 cursor-pointer"
                      >
                        {visibleDetail === "gunadarma"
                          ? "Show less"
                          : "Show more"}
                      </button>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        UI/UX Design Mastery By Skilvul
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        Certificate in UI/UX Student (Aug 2022 - Dec 2022)
                      </p>
                      <p className="text-gray-300">Apprenticeship</p>
                      {visibleDetail === "skilvul" && (
                        <ul className="list-disc text-sm mt-2 pl-5 text-gray-400 space-y-1">
                          <li>
                            Conducted a UX case study for Bank Jago App,
                            analyzing user experience and proposing new feature
                            enhancements.
                          </li>
                          <li>
                            Designed and developed an interactive prototype for
                            the Bank Jago App, improving usability and
                            functionality.
                          </li>
                          <li>
                            Studied and applied UI/UX principles, including user
                            research, wireframing, prototyping, usability
                            testing, and design thinking, to enhance digital
                            product experiences.
                          </li>
                          <li>
                            Designed and created a high-fidelity mobile
                            application called Kursus.In, focusing on a seamless
                            user interface and experience.
                          </li>
                        </ul>
                      )}
                      <button
                        onClick={() => toggle("skilvul")}
                        className="text-cyan-400 text-sm mt-2 cursor-pointer"
                      >
                        {visibleDetail === "skilvul"
                          ? "Show less"
                          : "Show more"}
                      </button>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        GIGIH 2.0 By Yayasan Anak Bangsa Bisa
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Certificate in Frontend Track Student (Feb 2022 - Aug
                        2022)
                      </p>
                      <p className="text-gray-300">Apprenticeship</p>
                      {visibleDetail === "gigih" && (
                        <ul className="list-disc text-sm mt-2 pl-5 text-gray-400 space-y-1">
                          <li>
                            Led the team in the development of a final project,
                            delivering a fully functional website that was
                            successfully uploaded and launched for public use.
                          </li>
                          <li>
                            Spearheaded the creation of Usahakuy.id, a web
                            platform built using React, emphasizing responsive
                            design, performance optimization, and seamless user
                            experience.
                          </li>
                          <li>
                            Studied and applied Frontend Web Development
                            principles, including UI/UX design, state
                            management, component-based architecture, and web
                            performance optimization.
                          </li>
                          <li>
                            Explored and implemented modern web technologies,
                            such as React Hooks, API integrations, and CSS
                            frameworks, to enhance functionality and
                            maintainability.
                          </li>
                          <li>
                            Completed an English language learning course and
                            earned a certificate, demonstrating improved
                            proficiency in both written and spoken
                            communication.
                          </li>
                        </ul>
                      )}
                      <button
                        onClick={() => toggle("gigih")}
                        className="text-cyan-400 text-sm mt-2 cursor-pointer"
                      >
                        {visibleDetail === "gigih" ? "Show less" : "Show more"}
                      </button>
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
                        Fullstack Developer
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        BM1 OIL (May 2024 - Present)
                      </p>
                      <p className="text-gray-300">
                        Led internal system development for 13 branches, focused
                        on reporting tools and infrastructure optimization.
                      </p>
                      {visibleDetail === "bm1" && (
                        <ul className="list-disc text-sm mt-2 pl-5 text-gray-400 space-y-1">
                          <li>
                            Led the development and maintenance of internal
                            company applications, including bug fixes and new
                            feature implementations, with minimal supervision.
                          </li>
                          <li>
                            Designed, developed, and managed the company's
                            website and web-based applications, ensuring high
                            performance, security, and an optimized user
                            experience.
                          </li>
                          <li>
                            Built and managed comprehensive reporting systems to
                            support data-driven decision-making across multiple
                            departments.
                          </li>
                          <li>
                            Developed and maintained financial reporting
                            features, including Account Receivable (AR), Account
                            Payable (AP), taxation, and Coretax management,
                            ensuring regulatory compliance and operational
                            efficiency.
                          </li>
                          <li>
                            Managed and optimized internal applications across
                            13 company branches nationwide, ensuring high system
                            performance, security, and reliability.
                          </li>
                          <li>
                            Administered and maintained network infrastructure
                            and IT equipment across headquarters and branch
                            offices to ensure system security and optimal
                            performance.
                          </li>
                          <li>
                            Worked closely with management for strategic IT
                            decisions, while independently handling daily IT
                            operations and technical implementations.
                          </li>
                          <li>
                            Implemented best practices in database management,
                            application security, and system performance
                            optimization to ensure scalability, efficiency, and
                            long-term reliability.
                          </li>
                          <li>
                            Created and managed the company’s main website,
                            ensuring consistent branding, functionality, and SEO
                            optimization.
                          </li>
                        </ul>
                      )}
                      <button
                        onClick={() => toggle("bm1")}
                        className="text-cyan-400 text-sm mt-2 cursor-pointer"
                      >
                        {visibleDetail === "bm1" ? "Show less" : "Show more"}
                      </button>
                    </div>
                    <div className="border-l-2 border-cyan-500 pl-4">
                      <h4 className="font-semibold text-white">
                        Fullstack Developer Trainee & Talent
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        Enigma Camp (Nov 2023 - May 2024)
                      </p>
                      <p className="text-gray-300">
                        Completed full-stack training focused on modern
                        development stacks, real-world project delivery, and IT
                        talent development.
                      </p>
                      {visibleDetail === "enigma" && (
                        <ul className="list-disc text-sm mt-2 pl-5 text-gray-400 space-y-1">
                          <li>Developed backend APIs with Java Spring Boot.</li>
                          <li>
                            Built frontend features with React and styled with
                            Tailwind.
                          </li>
                          <li>Created mobile apps using React Native.</li>
                          <li>
                            Worked with PostgreSQL & MySQL for relational
                            database design.
                          </li>
                        </ul>
                      )}
                      <button
                        onClick={() => toggle("enigma")}
                        className="text-cyan-400 text-sm mt-2 cursor-pointer"
                      >
                        {visibleDetail === "enigma" ? "Show less" : "Show more"}
                      </button>
                    </div>

                    <div className="border-l-2 border-purple-300 pl-4">
                      <h4 className="font-semibold text-white">
                        Web Developer
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        Lingvo (Dec 2022 - Mar 2023)
                      </p>
                      <p className="text-gray-300">Developing E-Learning</p>
                      {visibleDetail === "lingvo" && (
                        <ul className="list-disc text-sm mt-2 pl-5 text-gray-400 space-y-1">
                          <li>
                            Developed custom pages for Lingvo students to
                            facilitate learning using JavaScript and Velo by Wix
                          </li>
                          <li>
                            Built and integrated web features, including a quiz
                            system, to enhance the learning experience for
                            users.
                          </li>
                          <li>
                            Created and populated content for the Lingvo
                            website, ensuring up-to-date and relevant materials
                            for students.
                          </li>
                          <li>
                            Managed class bookings and payments through the
                            website, streamlining the process for both students
                            and instructors.
                          </li>
                        </ul>
                      )}
                      <button
                        onClick={() => toggle("lingvo")}
                        className="text-cyan-400 text-sm mt-2 cursor-pointer"
                      >
                        {visibleDetail === "lingvo" ? "Show less" : "Show more"}
                      </button>
                    </div>

                    <div className="border-l-2 border-green-300 pl-4">
                      <h4 className="font-semibold text-white">
                        Teaching Assistant
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        Lembaga Pengembangan Komputerisasi Universitas Gunadarma
                        (Oct 2021 - Oct 2021)
                      </p>
                      <p className="text-gray-300">
                        Assisted tutors in delivering technical training
                      </p>
                      {visibleDetail === "lepkom" && (
                        <ul className="list-disc text-sm mt-2 pl-5 text-gray-400 space-y-1">
                          <li>
                            Developed and prepared teaching materials to support
                            tutors.
                          </li>
                          <li>Analyzed scores to measure learning outcomes.</li>
                          <li>
                            Assisted during Q&A sessions for better student
                            engagement.
                          </li>
                          <li>
                            Studied and applied networking with Cisco & MikroTik
                            technologies.
                          </li>
                          <li>
                            Built a scalable data collection site using Go
                            language.
                          </li>
                        </ul>
                      )}
                      <button
                        onClick={() => toggle("lepkom")}
                        className="text-cyan-400 text-sm mt-2 cursor-pointer"
                      >
                        {visibleDetail === "lepkom" ? "Show less" : "Show more"}
                      </button>
                    </div>

                    <div className="border-l-2 border-yellow-300 pl-4">
                      <h4 className="font-semibold text-white">
                        Frontend Web Developer
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        Internship (Sep 2017 - Dec 2017)
                      </p>
                      <p className="text-gray-300">
                        Redesign frontend website{" "}
                      </p>
                      {visibleDetail === "noid" && (
                        <ul className="list-disc text-sm mt-2 pl-5 text-gray-400 space-y-1">
                          <li>
                            Designed and developed web interfaces using Adobe
                            Photoshop, focusing on user-friendly layouts and
                            responsive design principles.
                          </li>
                          <li>
                            Edited and refined digital assets with Adobe
                            Illustrator, ensuring high-quality visuals and
                            consistent branding across platforms.
                          </li>
                          <li>
                            Assisted in maintaining and optimizing client
                            websites built with CodeIgniter, improving
                            performance, security, and scalability.
                          </li>
                          <li>
                            Worked on front-end development tasks, applying
                            HTML, CSS, JavaScript, and Bootstrap to improve
                            website aesthetics and interactivity.
                          </li>
                        </ul>
                      )}
                      <button
                        onClick={() => toggle("noid")}
                        className="text-cyan-400 text-sm mt-2 cursor-pointer"
                      >
                        {visibleDetail === "noid" ? "Show less" : "Show more"}
                      </button>
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
