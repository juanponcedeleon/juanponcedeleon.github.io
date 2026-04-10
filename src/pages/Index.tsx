import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          // Close mobile nav
          const nav = document.getElementById("nav-links");
          if (nav) nav.classList.remove("open");
        }
      }
    };
    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  const toggleNav = () => {
    const nav = document.getElementById("nav-links");
    if (nav) nav.classList.toggle("open");
  };

  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-name">Juan Ponce de Leon</a>
          <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
            &#9776;
          </button>
          <div className="nav-links" id="nav-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container">
        <section id="hero" className="hero">
          <img src="/profile.png" alt="Juan Ponce de Leon" className="hero-img" />
          <h1>Juan Ponce de Leon</h1>
          <p className="tagline">EECS @ UC Berkeley</p>
        </section>

        <hr />

        <section id="about">
          <h2>About</h2>
          <p>
            I'm a computer science and electrical engineering student at UC Berkeley passionate about
            building software that solves real problems. I have experience in full-stack development,
            embedded systems, computer vision, and robotics. I care about writing clean code and
            shipping things that work.
          </p>
        </section>

        <hr />

        <section id="education">
          <h2>Education</h2>
          <div className="entry">
            <div className="entry-header">
              <strong>University of California, Berkeley</strong>
              <span className="date">Expected 2027</span>
            </div>
            <p>B.S. in Electrical Engineering and Computer Science</p>
          </div>
        </section>

        <hr />

        <section id="experience">
          <h2>Experience</h2>

          <div className="entry">
            <div className="entry-header">
              <strong>Undergraduate Research Assistant</strong>
              <span className="date">Aug 2025 -- Present</span>
            </div>
            <p className="subtitle">University of California, Berkeley</p>
            <ul>
              <li>Designing and deploying a React, Express.js, and Docker dashboard for a UC Berkeley CS course, reducing instructors' administrative workload by 50% and supporting 150+ students</li>
              <li>Co-authored a peer-reviewed paper and poster, presenting findings in front of 1,800+ attendees at the 2026 ACM SIGCSE Technical Symposium under Prof. Dan Garcia</li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-header">
              <strong>Research Apprentice</strong>
              <span className="date">Aug 2021 -- May 2022</span>
            </div>
            <p className="subtitle">Saybrook University, Pasadena, CA</p>
            <ul>
              <li>Developed a Flask and MySQL web application to manage audio meditation studies and store psychological metrics for 150+ participants</li>
              <li>Implemented database-backed features for organizing and summarizing participant data, enabling real-time data tracking</li>
            </ul>
          </div>

          <h3>Extracurriculars</h3>

          <div className="entry">
            <div className="entry-header">
              <strong>Avionics Engineer</strong>
              <span className="date">Aug 2025 -- Present</span>
            </div>
            <p className="subtitle">Space Enterprise at Berkeley (UC Berkeley Rocketry Club)</p>
            <ul>
              <li>Developing rocket firmware in C++ to process and transmit sensor data from 100 km altitude, increasing connection uptime by 93%</li>
              <li>Testing an automatic tracking antenna system using hardware in the loop</li>
              <li>Contributed to a Kalman filter implementation on an ESP32, interfacing with CAN bus networks across avionics subsystems</li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-header">
              <strong>Robotics Programming Captain</strong>
              <span className="date">Jul 2021 -- Jun 2024</span>
            </div>
            <p className="subtitle">FTC Robotics Team Gatorbytes</p>
            <ul>
              <li>Won the 2023 World Championships against 256+ teams by programming autonomous movement in Java</li>
              <li>Mentored a team of 10 junior software members, fostering technical growth</li>
            </ul>
          </div>
        </section>

        <hr />

        <section id="projects">
          <h2>Projects</h2>

          <div className="entry">
            <div className="entry-header">
              <strong>Sparky</strong>
              <span className="tech">React, AWS Lambda, MongoDB, Node.js, LLM</span>
            </div>
            <p>
              Productivity tool that improved personal time management efficiency by 2x. Features an LLM chatbot for AI-powered schedule management. Reached 30+ continuous users.
            </p>
            <a href="https://github.com/juanponcedeleon" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          </div>

          <div className="entry">
            <div className="entry-header">
              <strong>McDonald's Receipt Analyzer</strong>
              <span className="tech">React, Firebase, Redis, OCR, PyTorch, LayoutLM</span>
            </div>
            <p>
              Computer vision model that extracts data from McDonald's receipts to auto-fill satisfaction surveys, increasing customer reviews by 298%. Expanded to 3 stores.
            </p>
            <a href="https://github.com/juanponcedeleon" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          </div>
        </section>

        <hr />

        <section id="skills">
          <h2>Skills</h2>

          <div className="skills-group">
            <h3>Languages</h3>
            <p>C, C++, Python, Java, Perl, SQL, JavaScript, Swift, Objective-C, Verilog, RISC-V</p>
          </div>

          <div className="skills-group">
            <h3>Frameworks & Tools</h3>
            <p>ROS, Node.js, Angular.js, Spark, MongoDB, MapReduce, PyTorch, LayoutLM, KiCad</p>
          </div>

          <div className="skills-group">
            <h3>Domains</h3>
            <p>Data Structures, OOP, GPU Programming, Computer Architecture, Hardware Design, PCB Design, Embedded Software, Wireless Communication, Robotics</p>
          </div>
        </section>

        <hr />

        <section id="resume">
          <h2>Resume</h2>
          <a href="/Juan_PoncedeLeon.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            View Resume (PDF)
          </a>
        </section>

        <hr />

        <section id="contact">
          <h2>Contact</h2>
          <ul className="contact-list">
            <li><a href="mailto:juan.poncedeleon@berkeley.edu">juan.poncedeleon@berkeley.edu</a></li>
            <li><a href="https://github.com/juanponcedeleon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/juan-ponce-de-leon" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>(747) 232-0826</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        &copy; 2026 Juan Ponce de Leon
      </footer>
    </div>
  );
};

export default Index;
