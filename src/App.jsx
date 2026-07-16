import React, { useEffect, useState } from 'react';
import './App.css';

// SVG Icons Component library
const Icons = {
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  ArrowUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Success: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
};

// Typewriter hook for smooth subtitles typing
const Typewriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing letters
        setCurrentText((prev) => currentFullText.substring(0, prev.length + 1));
        
        if (currentText === currentFullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting letters
        setCurrentText((prev) => currentFullText.substring(0, prev.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      const delay = isDeleting ? 40 : 80;
      timer = setTimeout(handleTyping, delay);
    };

    timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span>
      {currentText}
      <span className="cursor"></span>
    </span>
  );
};

const Header = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => (
  <header className={`header glass ${scrolled ? 'scrolled' : ''}`}>
    <div className="container header-content">
      <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="heading-gradient">Sumit</span>.dev
      </div>
      <nav className="nav-links desktop-nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button 
        className="hamburger-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
      </button>
    </div>
  </header>
);

const MobileNav = ({ mobileMenuOpen, setMobileMenuOpen }) => (
  <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
    <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
  </div>
);

const Hero = () => {
  const titles = ["Web Developer", "B.Tech CS Student", "Problem Solver", "Full Stack Enthusiast"];

  return (
    <section id="hero" className="hero container fade-in">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="badge-intro">AVAILABLE FOR FREELANCE & INTERNSHIPS</span>
          <h1>Hi, I'm <span className="heading-gradient">Sumit Prajapati</span></h1>
          <h2>
            <Typewriter words={titles} />
          </h2>
          <p className="subtitle">
            Building modern, responsive, and high-performance web applications. final year CS student at BBDU passionate about solving complex system-level problems and designing elegant front-ends.
          </p>
          <div className="cta-group">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="/Sumitresume.pdf" download className="btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="profile-avatar-wrapper">
            <img
            src={`${import.meta.env.BASE_URL}profile1.jpg`}
              alt="Sumit Prajapati Profile"className="profile-avatar"onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none'; // hide broken image and use styled wrapper placeholder
            }} />
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <span>Scroll Down</span>
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const milestones = [
    {
      date: "2023 – 2027 (Expected)",
      title: "Bachelor of Technology in Computer Science",
      subtitle: "Babu Banarasi Das University, Lucknow",
      description: "Focusing on Software Engineering, Data Structures, Web Technology, and Database Systems. Maintaining a strong academic performance with a CGPA of 8.91."
    },
    {
      date: "2021 – 2023",
      title: "Intermediate & Foundation",
      subtitle: "Science & Mathematics Stream",
      description: "Developed core analytical skills and foundations in programming (C++/Java) and algorithmic logic."
    },
    {
      date: "2023 – Present",
      title: "Self-Taught Web Developer Journey",
      subtitle: "Open Source & Personal Projects",
      description: "Built several full-stack applications (React, Node.js, Express) exploring real-time communications, web scraping, and database integrations."
    }
  ];

  return (
    <section id="about" className="section container">
      <h3 className="section-title">About Me</h3>
      <div className="about-grid">
        <div className="timeline-container">
          {milestones.map((item, index) => (
            <div key={index} className="timeline-item fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="timeline-dot"></div>
              <div className="timeline-card glass">
                <div className="timeline-date">{item.date}</div>
                <h4>{item.title}</h4>
                <h5>{item.subtitle}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const skillsData = [
    // Languages
    { name: 'JavaScript', category: 'Languages', icon: '⚡' },
    { name: 'Java', category: 'Languages', icon: '☕' },
    { name: 'Python', category: 'Languages', icon: '🐍' },
    { name: 'C++', category: 'Languages', icon: '💻' },
    
    // Frontend
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'HTML5', category: 'Frontend', icon: '🌐' },
    { name: 'CSS3', category: 'Frontend', icon: '🎨' },
    
    // Backend
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Express.js', category: 'Backend', icon: '🚀' },
    { name: 'MongoDB', category: 'Backend', icon: '🍃' },
    
    // Tools
    { name: 'Docker', category: 'Tools & DevOps', icon: '🐳' },
    { name: 'CI/CD Pipeline', category: 'Tools & DevOps', icon: '⚙️' },
    { name: 'Git & GitHub', category: 'Tools & DevOps', icon: '🐙' }
  ];

  const tabs = ['All', 'Languages', 'Frontend', 'Backend', 'Tools & DevOps'];

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section container">
      <h3 className="section-title">Technical Skills</h3>
      <div className="skills-tabs">
        {tabs.map((tab, idx) => (
          <button 
            key={idx}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-card glass fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const allProjects = [
    {
      title: "Video Call Web App",
      description: "A real-time, peer-to-peer web video conferencing platform enabling low-latency chat and multi-party room synchronization.",
      category: "Fullstack",
      tech: ["React", "WebRTC", "Socket.io", "Node.js"],
      status: "Active",
      live: "#", 
      github: "https://github.com/sumit7444"
    },
    {
      title: "Zerodha Web Dashboard",
      description: "A comprehensive high-fidelity cloned financial interface providing real-time market data visualization.",
      category: "Frontend",
      tech: ["React", "Chart.js", "Express.js", "MongoDB"],
      status: "In Development",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "Threat Detection System",
      description: "An AI-powered textual threat validation dashboard parsing inputs in real-time to intercept malicious toxic content.",
      category: "AI & ML",
      tech: ["Python", "NLP", "FastAPI", "Scikit-Learn"],
      status: "Active",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "Smart Attendance System",
      description: "Automated identity-based attendance pipeline tracking student logs via facial recognition algorithms.",
      category: "AI & ML",
      tech: ["Python", "OpenCV", "TensorFlow", "Tkinter"],
      status: "In Development",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "Disaster Alert System",
      description: "A geographic weather mapping dashboard polling active disaster warnings around specified API coordinates.",
      category: "Utilities",
      tech: ["JavaScript", "Leaflet.js", "OpenWeather API"],
      status: "Ongoing",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "Smart Restaurant System",
      description: "A responsive QR ordering platform for quick diners offering integrated menus and instant service workflows.",
      category: "Fullstack",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      status: "Active",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "AIRBNB",
      description: "I successfully replicated the complete user interface of Airbnb using React.js. This project features a dynamic landing page, detailed property listing cards, responsive layout, and glassmorphism effects. It demonstrates proficiency in modern frontend technologies, component-based architecture, and creating pixel-perfect UIs.",
      category: "Fullstack",
      tech: ["React","CSS","MongoDB"],
      status: "Active",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "Weather Dashboard",
      description: "The Weather Dashboard is a modern web application that provides users with accurate, real-time weather information and forecasts for any location worldwide. Features include a clean, responsive UI, current weather conditions, hourly and daily forecasts, and intelligent location search.",
      category: "Fullstack",
      tech: ["React", "Redux", "Node.js", "Weather API"],
      status: "Done",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "AllBUS",
      description: "AllBus is a complete SaaS Bus Booking and Fleet Management System that enables operators to manage buses, routes, trips, bookings, staff, and payments, while providing customers with a fast, secure, and easy online ticket booking experience.",
      category: "Fullstack",
      tech: ["React", "Redux", "Node.js", "Neon","Rozgarpay","Cloudinary","Talwind CSS"],
      status: "In Progress",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "AI Chatbot(0Sunya)",
      description: "Built an AI-powered chatbot with secure user authentication, real-time conversations, and intelligent response generation using modern web technologies.",
      category: "Fullstack",
      tech: ["React",  "Node.js", "Postgre SQL","Grok API","Talwind CSS"],
      status: "Done",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "WEB Scraper Pro",
      description: "Built a production-ready web scraping platform using Node.js, Express.js, Puppeteer, and MongoDB to extract structured data from dynamic websites.",
      category: "Fullstack",
      tech: ["React",  "Node.js", "Postgre SQL","Puppeteer","Talwind CSS"],
      status: "Done",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "Object Detection System",
      description: "Built a real-time object detection system using React, FastAPI, Python, and YOLOv8 to detect objects from live webcam feeds and uploaded images.",
      category: "Fullstack",
      tech: ["React",  "Node.js", "Postgre SQL","YOLOv8","Talwind CSS"],
      status: "Done",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "Healthcare Management System",
      description: "Built a Django-based healthcare management system with secure authentication, patient records, appointment scheduling, doctor management, and prescription tracking",
      category: "Active",
      tech: ["Django",  "Python", "SQL"],
      status: "Done",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "WebShop E Commerce",
      description: "Built a full-stack e-commerce platform with secure user authentication, product catalog, shopping cart, wishlist, and order management.",
      category: "Active",
      tech: ["React",  "Django", "SQL"],
      status: "Done",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    {
      title: "Expense Tracker",
      description: "Built a full-stack expense tracking application with secure user authentication, income and expense management, budget tracking, and financial reports.",
      category: "Active",
      tech: ["React",  "PostgreSQl", "Talwind CSS","Node.js","Chart.js"],
      status: "Done",
      live: "#",
      github: "https://github.com/sumit7444"
    },
    
    
    
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Frontend', 'Fullstack', 'AI & ML', 'Utilities'];

  return (
    <section id="projects" className="section container">
      <h3 className="section-title">Featured Projects</h3>
      
      <div className="projects-header">
        <div className="projects-search-filter">
          <div className="search-input-wrapper">
            <Icons.Search />
            <input 
              type="text" 
              placeholder="Search projects by name or technology..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
            aria-label="Filter projects by category"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat} Projects</option>
            ))}
          </select>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj, idx) => (
            <div key={idx} className="project-card glass fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="project-badge-container">
                <span className="project-category">{proj.category}</span>
                <span className={`project-status ${proj.status.toLowerCase().replace(/ /g, '-')}`}>
                  {proj.status}
                </span>
              </div>
              <h4>{proj.title}</h4>
              <p className="project-desc">{proj.description}</p>
              
              <div className="project-tech-list">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-links">
                {proj.live && proj.live !== "#" ? (
                  <a href={proj.live} target="_blank" rel="noreferrer" className="btn-primary">
                    Live Demo <Icons.ExternalLink />
                  </a>
                ) : (
                  <span className="btn-secondary" style={{ opacity: 0.5, cursor: 'not-allowed' }}>Coming Soon</span>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn-secondary">
                    GitHub <Icons.Code />
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '3rem 0', color: 'var(--text-muted)' }}>
            No projects found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="success-state glass fade-in">
        <div className="success-icon-wrapper">
          <Icons.Success />
        </div>
        <h5>Message Sent Successfully!</h5>
        <p>Thank you for reaching out, Sumit will get back to you shortly.</p>
        <button className="btn-primary" onClick={() => setSubmitSuccess(false)}>Send Another Message</button>
      </div>
    );
  }

  return (
    <form className="contact-form glass" onSubmit={handleSubmit}>
      <h4 className="form-title">Send a Message</h4>
      
      <div className="form-group">
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="form-input" 
          placeholder=" "
        />
        <label htmlFor="name" className="form-label">Full Name</label>
        {formErrors.name && <span className="error-text">{formErrors.name}</span>}
      </div>

      <div className="form-group">
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="form-input" 
          placeholder=" "
        />
        <label htmlFor="email" className="form-label">Email Address</label>
        {formErrors.email && <span className="error-text">{formErrors.email}</span>}
      </div>

      <div className="form-group">
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          value={formData.message} 
          onChange={handleChange} 
          className="form-input" 
          placeholder=" "
          style={{ resize: 'vertical' }}
        ></textarea>
        <label htmlFor="message" className="form-label">Your Message</label>
        {formErrors.message && <span className="error-text">{formErrors.message}</span>}
      </div>

      <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </>
        )}
      </button>
    </form>
  );
};

const Contact = () => (
  <section id="contact" className="section container">
    <h3 className="section-title">Let's Connect</h3>
    <div className="contact-container">
      <div className="contact-info-panel">
        <h4>Get in Touch</h4>
        <p>Whether you're looking to hire for an internship, discuss a project, or just say hello, I'd love to connect with you. You can drop a message or reach out via my socials!</p>
        
        <div className="social-links">
          <a href="mailto:sumitprajapatiup45@gmail.com" className="social-item">
            <div className="social-icon-wrapper">
              <Icons.Mail />
            </div>
            <div>
              <span className="social-label">Email Me</span>
              <span className="social-value">sumitprajapatiup45@gmail.com</span>
            </div>
          </a>

          <a href="https://github.com/sumit7444" target="_blank" rel="noreferrer" className="social-item">
            <div className="social-icon-wrapper">
              <Icons.Github />
            </div>
            <div>
              <span className="social-label">GitHub Profiles</span>
              <span className="social-value">github.com/sumit7444</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/sumit7444/" target="_blank" rel="noreferrer" className="social-item">
            <div className="social-icon-wrapper">
              <Icons.Linkedin />
            </div>
            <div>
              <span className="social-label">LinkedIn Connect</span>
              <span className="social-value">linkedin.com/in/sumit7444</span>
            </div>
          </a>

          <a href="https://leetcode.com/u/sumit7444/" target="_blank" rel="noreferrer" className="social-item">
            <div className="social-icon-wrapper">
              <Icons.Code />
            </div>
            <div>
              <span className="social-label">LeetCode Profile</span>
              <span className="social-value">leetcode.com/u/sumit7444</span>
            </div>
          </a>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-logo">
        <span className="heading-gradient">Sumit</span>.dev
      </div>
      <div className="footer-nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Developed with ❤️ by Sumit Prajapati.</p>
    </div>
  </footer>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setBackToTopVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Header 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <MobileNav 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <button 
        className={`back-to-top ${backToTopVisible ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <Icons.ArrowUp />
      </button>
    </div>
  );
}

export default App;
