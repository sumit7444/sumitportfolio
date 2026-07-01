import React, { useEffect, useState } from 'react';
import './App.css';

const Header = () => (
  <header className="header glass">
    <div className="container header-content">
      <div className="logo"><span className="heading-gradient">Sumit</span>7444</div>
      <nav className="nav-links desktop-nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* Mobile nav could be added here */}
    </div>
  </header>
);

const Hero = () => (
  <section id="hero" className="hero fade-in">
    <div className="container hero-content">
      <div className="hero-text">
        <h1>Hi, I'm <span className="heading-gradient">Sumit Prajapati</span></h1>
        <h2>Web Developer & CS Student</h2>
        <p className="subtitle">
          Building modern, responsive, and robust web applications. Passionate about problem-solving, open source, and full-stack development.
        </p>
        <div className="cta-group">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="/Sumitresume.pdf" download className="btn-secondary">Download Resume</a>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section container fade-in" style={{ animationDelay: '0.2s' }}>
    <h3 className="section-title">About Me</h3>
    <div className="about-grid">
      <div className="about-card glass">
        <h4>✍️ My Journey</h4>
        <p>I am a passionate and curious B.Tech Computer Science student (3rd year) at Babu Banarasi Das University, Lucknow. I am actively working toward a career in Web developer and love building tools that solve real-world problems.</p>
      </div>
      <div className="about-card glass">
        <h4>🎓 Education</h4>
        <p><strong>BBDU, Lucknow</strong><br />B.Tech in Computer Science<br />2023–2027 • CGPA: 8.5</p>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js',
    'MongoDB', 'React', 'Docker', 'CI/CD Pipeline', 'Java', 'Python', 'C++'
  ];

  return (
    <section id="skills" className="section container">
      <h3 className="section-title">Technical Skills</h3>
      <div className="skills-container">
        {technologies.map((tech, index) => (
          <div key={index} className="skill-pill glass">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Video Call Web App",
      description: "A real-time video synchronization and communication platform built with modern web tech.",
      live: "Coming Soon", 
      github: "#"
    },
    {
      title: "Zerodha Web Dashboard",
      description: "A comprehensive trading and financial dashboard inspired by Zerodha.",
      live: "Coming Soon",
      github: "#"
    },
    {
      title: "Disaster Alert System",
      description: "App tracking and alerting users about real-time global disasters and warnings.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Responsive weather application featuring dynamic gradients and real-time API integrations.",
      live: "Coming Soon",
      github: "#"
    },
    {
      title: "Airbnb Clone",
      description: "A full-scale property booking application replicating Airbnb's core user experience.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Todo List App",
      description: "This is a Simple TODO LIST APP add Feature Add Task , Delete Task & Done Task.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Healthcare Portal",
      description: "A full-scale property booking application like Healthcare Portal. This project is designed to connect patients with healthcare providers, allowing users to book appointments, access medical records, and receive personalized health recommendations.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Threat detection system",
      description: "AI-Based Threat Detection System that analyzes text and URLs in real-time to identify potential threats, hate speech, and toxic content using NLP and machine learning models.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Buisness Web App",
      description: "Factory work, dismantling, heavy lifting, transportation. Premium pan-India service from Kolkata.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Smart Attendance System",
      description: "An intelligent attendance system using facial recognition and machine learning to automate attendance tracking in educational institutions.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Expense Tracker",
      description: "A web application that allows users to track their expenses, categorize them, and visualize spending patterns over time.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Web Scraper",
      description: "A tool that extracts data from websites and presents it in a structured format for analysis or reporting.",
      live: "Coming",
      github: "#"
    },
    {
      title: "Ai ChatBot",
      description: "An AI-powered chatbot that can answer questions, provide recommendations, and assist users in various tasks using natural language processing.",
      live: "Coming",
      github: "#"
    },
    {
      title: "More to come",
      description: "I'm constantly working on new projects. Check back soon for more updates, or connect with me to discuss collaborations.",
      live: "Coming Soon",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section container">
      <h3 className="section-title">Featured Projects</h3>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card glass">
            <h4>{proj.title}</h4>
            <p className="project-desc">{proj.description}</p>
            <div className="project-links">
              {proj.live !== "#" && <a href={proj.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Live Demo</a>}
              {proj.github !== "#" && <a href={proj.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="footer">
    <div className="container footer-content">
      <h3 className="heading-gradient">Let's Connect</h3>
      <p>Interested in collaborating or have a question? Reach out to me!</p>
      <div className="contact-info">
        <a href="mailto:sumitprajapatiup45@gmail.com" className="contact-link">📧 sumitprajapatiup45@gmail.com</a>
        <a href="https://github.com/sumit7444" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
        <a href="https://www.linkedin.com/in/sumit7444/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
        <a href="https://leetcode.com/u/sumit7444/" target="_blank" rel="noreferrer" className="contact-link">LeetCode</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Developed by ❤️ with Sumit.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
