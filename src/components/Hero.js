import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import './Hero.css';

function Hero() {
  // Add a state to track window size for responsive design
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  // Create a ref for the hero section to detect clicks outside popups
  const heroSectionRef = React.useRef(null);

  // Update window size state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Helper function to check if we're on mobile
  const isMobile = windowSize.width <= 768;
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [connections, setConnections] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  
  console.log("Active project:", activeProject); // Debug log
  
  // =====================================================================
  // HOW TO ADD NEW PROJECTS
  // =====================================================================
  // To add a new project, simply add a new object to this array with the following properties:
  // - title: The name of your project that will appear on the tab and in the card header
  // - description: A brief description of what the project does or its purpose
  // - technologies: An array of strings listing the technologies used (will appear as tags)
  // - image: Path to the project image (relative to public folder, e.g., "/images/project.jpg")
  // - link: URL to the live demo of your project
  // - github: URL to the GitHub repository of your project
  //
  // Example of adding a new project:
  // {
  //   title: "New Project",
  //   description: "This is my awesome new project that does amazing things",
  //   technologies: ["React", "Firebase", "Tailwind CSS"],
  //   image: "/images/new-project.jpg",
  //   link: "https://my-new-project.com",
  //   github: "https://github.com/yourusername/new-project"
  // }
  //
  // NOTE: The projects will appear as tabs in the order they are listed here.
  // No other code changes are needed - the tabs and cards will update automatically.
  // =====================================================================
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project1-image.jpg",
      link: "https://project1-link.com",
      github: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/project2-image.jpg",
      link: "https://project2-link.com",
      github: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      technologies: ["Python", "Django", "PostgreSQL"],
      image: "/project3-image.jpg",
      link: "https://project3-link.com",
      github: "https://github.com/yourusername/project3"
    }
    // Add new projects here following the same format
  ];
  
  // =====================================================================
  // HOW TO ADD NEW FLOATING SKILLS
  // =====================================================================
  // To add a new floating skill, add a new object to this array with these properties:
  //
  // - name: The name of the skill that appears in the bubble (keep it short)
  // - level: Proficiency level from 0-100 (appears as percentage in tooltip)
  // - description: Brief description of your experience with this skill
  // - x: Horizontal position (0-100%) - controls where the bubble appears on screen
  //      * Recommended range: 10-90% to avoid edges
  //      * Lower values = left side, higher values = right side
  // - y: Vertical position (0-100%) - controls where the bubble appears on screen
  //      * Recommended range: 15-75% to avoid overlapping with hero content
  //      * Lower values = top side, higher values = bottom side
  // - delay: Animation delay in seconds (when the bubble appears after page load)
  //      * Increment by 0.5s for each new skill for staggered animation
  //
  // POSITIONING TIPS:
  // - Avoid placing skills too close to each other (at least 15% apart)
  // - Distribute skills evenly across the screen for balanced appearance
  // - Consider the laser connections - skills will connect randomly
  //
  // Example of adding a new skill:
  // { name: "TypeScript", level: 85, description: "Static typing for JavaScript", x: 40, y: 40, delay: 4.0 }
  //
  // The floating skills will automatically connect with laser lines and show tooltips on hover.
  // =====================================================================
  const floatingSkills = [
    { name: "React", level: 90, description: "Building dynamic user interfaces", x: 15, y: 20, delay: 0 },
    { name: "JavaScript", level: 85, description: "Modern ES6+ development", x: 80, y: 30, delay: 0.5 },
    { name: "HTML/CSS", level: 95, description: "Responsive web design", x: 25, y: 70, delay: 1 },
    { name: "Node.js", level: 80, description: "Server-side development", x: 75, y: 65, delay: 1.5 },
    { name: "AWS", level: 75, description: "Cloud infrastructure", x: 50, y: 25, delay: 2 },
    { name: "Git", level: 88, description: "Version control systems", x: 35, y: 25, delay: 2.5 },
    { name: "Python", level: 82, description: "Data analysis and automation", x: 70, y: 50, delay: 3 },
    { name: "Docker", level: 78, description: "Containerization platform", x: 20, y: 50, delay: 3.5 }
    // Add new skills here following the same format
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.8, random: false },
            size: { value: 4, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.6,
              width: 2
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'grab' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            },
            modes: {
              grab: { distance: 200, line_linked: { opacity: 1 } },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        });
      }
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  useEffect(() => {
    const generateConnections = () => {
      const newConnections = [];
      const numConnections = Math.floor(Math.random() * 4) + 3;
      
      for (let i = 0; i < numConnections; i++) {
        const skill1 = Math.floor(Math.random() * floatingSkills.length);
        let skill2 = Math.floor(Math.random() * floatingSkills.length);
        while (skill2 === skill1) {
          skill2 = Math.floor(Math.random() * floatingSkills.length);
        }
        
        newConnections.push({
          from: skill1,
          to: skill2,
          id: `${skill1}-${skill2}-${Date.now()}-${i}`
        });
      }
      
      setConnections(newConnections);
    };

    generateConnections();
    const interval = setInterval(generateConnections, 3000);
    return () => clearInterval(interval);
  }, []);

  // State for timeline strands, branches, years, active year, and expanded job
  const [timeStrands, setTimeStrands] = useState([]);
  const [branches, setBranches] = useState([]);
  const [timelineYears, setTimelineYears] = useState([]);
  const [activeYear, setActiveYear] = useState(null);
  const [timelinePaused, setTimelinePaused] = useState(false);
  const [expandedJobs, setExpandedJobs] = useState(new Set());
  const [animatedPath, setAnimatedPath] = useState('');
  
  // Add click handler to close popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If we have an active year and the click is not on a year element
      if (activeYear !== null && heroSectionRef.current && !event.target.closest('.timeline-year')) {
        // Check if the click is on the work experience popup
        const isClickOnPopup = event.target.closest('.work-experience-popup');
        if (!isClickOnPopup) {
          setActiveYear(null);
          setTimelinePaused(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeYear]);
  
  // Work experience data for each year
  const workExperience = {
    2020: [
      {
        title: "Support Engineer I",
        company: "Amazon Web Services",
        description: "Started my journey at AWS providing technical support for cloud services.",
        achievements: ["Resolved 500+ customer tickets", "Achieved 95% satisfaction rating", "Specialized in EC2 and S3 services"]
      }
    ],
    2021: [
      {
        title: "Support Engineer II",
        company: "Amazon Web Services",
        description: "Promoted to level II support with expanded responsibilities.",
        achievements: ["Led technical training for new hires", "Developed internal documentation", "Specialized in advanced networking"]
      }
    ],
    2022: [
      {
        title: "Support Engineer III",
        company: "Amazon Web Services",
        description: "Advanced to senior support role focusing on complex enterprise solutions.",
        achievements: ["Managed critical escalations", "Contributed to service improvements", "Mentored junior engineers"]
      },
      {
        title: "Technical Consultant",
        company: "Tech Solutions Inc.",
        description: "Part-time consulting role helping startups implement cloud infrastructure.",
        achievements: ["Designed scalable architectures", "Reduced infrastructure costs by 30%", "Implemented CI/CD pipelines"]
      }
    ],
    2023: [
      {
        title: "Support Engineer III",
        company: "Amazon Web Services",
        description: "Continued excellence in technical support with focus on enterprise architecture.",
        achievements: ["Led cross-team initiatives", "Recognized for technical excellence", "Specialized in security solutions"]
      }
    ],
    2024: [
      {
        title: "Support Engineer III",
        company: "Amazon Web Services",
        description: "Advanced role focusing on problem solving and technical leadership.",
        achievements: ["Driving automation initiatives", "Developing technical content", "Mentoring team members"]
      },
      {
        title: "Open Source Contributor",
        company: "Cloud Native Foundation",
        description: "Contributing to open source projects in the cloud native ecosystem.",
        achievements: ["Core contributor to Kubernetes plugins", "Developed monitoring tools", "Presented at community events"]
      }
    ],
    2025: [
      {
        title: "Senior Support Engineer",
        company: "Amazon Web Services",
        description: "Current role with expanded responsibilities in technical leadership and innovation.",
        achievements: ["Leading architectural design reviews", "Implementing ML-based support solutions", "Presenting at technical conferences"]
      },
      {
        title: "Technical Author",
        company: "Tech Publishing House",
        description: "Writing technical content on cloud architecture and best practices.",
        achievements: ["Published cloud migration guide", "Regular contributor to tech blogs", "Developing online courses"]
      }
    ]
  };

  // Generate timeline strands, branches, and years on component mount
  useEffect(() => {
    const generateStrands = () => {
      const strands = [];
      const strandCount = 40; // Number of strands
      
      for (let i = 0; i < strandCount; i++) {
        strands.push({
          id: `strand-${i}`,
          color: `hsl(${180 + Math.random() * 60}, ${70 + Math.random() * 30}%, ${70 + Math.random() * 30}%)`,
          offset: Math.random() * 100,
          speed: 0.5 + Math.random() * 1.5,
          amplitude: 5 + Math.random() * 15,
          frequency: 0.1 + Math.random() * 0.3
        });
      }
      
      setTimeStrands(strands);
    };
    
    // Generate random branches
    const generateBranches = () => {
      const newBranches = [];
      const branchCount = 3 + Math.floor(Math.random() * 4); // 3-6 branches
      
      for (let i = 0; i < branchCount; i++) {
        // Random position for branch start
        const startX = 100 + Math.random() * (window.innerWidth - 300);
        const startY = 30 + Math.random() * 60;
        
        // Random length and angle
        const length = 50 + Math.random() * 100;
        const angle = -30 + Math.random() * 60; // -30 to +30 degrees
        
        // Calculate end point
        const endX = startX + length * Math.cos(angle * Math.PI / 180);
        const endY = startY + length * Math.sin(angle * Math.PI / 180);
        
        // Control points for curve
        const ctrlX = startX + (endX - startX) * 0.5;
        const ctrlY = startY + (endY - startY) * 0.5 + (Math.random() > 0.5 ? -1 : 1) * 20;
        
        newBranches.push({
          id: `branch-${Date.now()}-${i}`,
          path: `M ${startX},${startY} Q ${ctrlX},${ctrlY} ${endX},${endY}`,
          color: `hsl(${180 + Math.random() * 60}, ${70 + Math.random() * 30}%, ${70 + Math.random() * 30}%)`,
          duration: 15 + Math.random() * 10
        });
      }
      
      setBranches(newBranches);
      
      // Schedule next branch generation
      setTimeout(generateBranches, 4000 + Math.random() * 6000);
    };
    
    // Generate floating years
    const generateYears = () => {
      const currentYear = 2025; // Set current year to 2025
      const years = [];
      
      // Create years from past to future - specifically 2020 to 2025
      const startYear = 2020;
      const endYear = 2025;
      
      for (let year = startYear; year <= endYear; year++) {
        const i = year - startYear; // Index for positioning
        years.push({
          id: `year-${year}`,
          value: year,
          x: 10 + (i * 12), // Distribute horizontally
          y: Math.random() * 20 + 5, // Higher vertical position above timeline
          delay: i * 0.3,
          duration: 3 + Math.random() * 2,
          color: year === currentYear ? 
            'rgba(255, 255, 255, 0.9)' : // Current year is brighter
            `rgba(255, 255, 255, ${0.4 + Math.random() * 0.3})`, // Other years are dimmer
          hasExperience: workExperience[year] ? true : false // Flag if we have data for this year
        });
      }
      
      // Log the years we're generating
      console.log("Generated timeline years:", years.map(y => y.value));
      
      setTimelineYears(years);
    };
    
    generateStrands();
    generateBranches();
    generateYears();
    
    // Animated lines effect
    const numberOfLines = 20;
    const lineDataArr = [];
    
    const randomRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    // Initialize line data - CodePen logic scaled for full width
    for (let i = 0; i < numberOfLines; i++) {
      lineDataArr.push({
        counter: randomRange(1, 500),
        startX: randomRange(-2.5, -20),
        startY: randomRange(-2.5, -15),
        endX: randomRange(100, 110),
        endY: randomRange(60, 70),
        sin: randomRange(85, 150),
        cos: randomRange(85, 150),
        pointX: randomRange(15, 27.5),
        centerX: randomRange(45, 60),
        centerY: randomRange(30, 35)
      });
    }
    
    const createPathString = () => {
      let completedPath = '';
      const ampl = 25; // Scaled amplitude
      
      for (let i = 0; i < numberOfLines; i++) {
        const path = lineDataArr[i];
        
        const current = {
          x: ampl * Math.sin(path.counter / path.sin),
          y: ampl * Math.cos(path.counter / path.cos)
        };
        
        const newPathSection = `M${path.startX},${path.startY} Q${path.pointX},${(current.y * 1.5).toFixed(3)} ${((current.x) / 10 + path.centerX).toFixed(3)},${((current.y) / 5 + path.centerY).toFixed(3)} T${path.endX},${path.endY}`;
        
        path.counter++;
        completedPath += newPathSection;
      }
      
      return completedPath;
    };
    
    const animLoop = () => {
      if (!timelinePaused) {
        setAnimatedPath(createPathString());
      }
      requestAnimationFrame(animLoop);
    };
    
    animLoop();
    
    return () => {
      setBranches([]);
      setTimelineYears([]);
    };
  }, []);

  return (
    <section className="hero" ref={heroSectionRef}>
      <div className="hero-image">
        <div id="particles-js"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: isMobile ? '0 15px' : '0'
        }}
      >
        <h1 style={{ fontSize: isMobile ? '3rem' : '4.5rem' }}>Bradly A. Knox</h1>
        <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem' }}>Support Engineer III</h2>
        <p style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>Skilled methodologist with engineering experience</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            padding: isMobile ? '15px 30px' : '18px 36px'
          }}
        >
          ⬇️ Resume
        </motion.button>
      </motion.div>
      
      <svg className="skill-connections" width="100%" height="100%">
        <AnimatePresence>
        {connections.map((connection) => {
          const fromSkill = floatingSkills[connection.from];
          const toSkill = floatingSkills[connection.to];
          return (
            <motion.line
              key={connection.id}
              x1={`calc(${fromSkill.x}% + 50px)`}
              y1={`calc(${fromSkill.y}% + 20px)`}
              x2={`calc(${toSkill.x}% + 50px)`}
              y2={`calc(${toSkill.y}% + 20px)`}
              stroke="url(#laserGradient)"
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.9, pathLength: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut", exit: { duration: 0.5 } }}
            />
          );
        })}
        </AnimatePresence>
        <defs>
          <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      <div className="floating-skills">
        {floatingSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="floating-skill"
            style={{ 
              left: `${skill.x}%`, 
              top: `${skill.y}%`,
              padding: isMobile ? '8px 16px' : '12px 20px',
              fontSize: isMobile ? '0.8rem' : '0.9rem'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: skill.delay, duration: 0.6 }}
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setHoveredSkill(skill)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            <span>{skill.name}</span>
            {hoveredSkill?.name === skill.name && (
              <motion.div
                className="skill-tooltip"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                style={{
                  minWidth: isMobile ? '180px' : '200px',
                  padding: isMobile ? '12px' : '16px',
                  left: isMobile && skill.x > 70 ? 'auto' : '50%',
                  right: isMobile && skill.x > 70 ? '0' : 'auto',
                  transform: isMobile && skill.x > 70 ? 'none' : 'translateX(-50%)'
                }}
              >
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
                <div className="tooltip-bar">
                  <div className="tooltip-level" style={{ width: `${skill.level}%` }}></div>
                </div>
                <span className="tooltip-percentage">{skill.level}%</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
      <div style={{
        position: 'fixed',
        left: window.innerWidth <= 768 ? '50%' : 0,
        top: window.innerWidth <= 768 ? 'auto' : '50%',
        bottom: window.innerWidth <= 768 ? '20px' : 'auto',
        transform: window.innerWidth <= 768 ? 'translateX(-50%)' : 'translateY(-50%)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: window.innerWidth <= 768 ? 'row' : 'column',
        gap: '10px',
        flexWrap: window.innerWidth <= 768 ? 'wrap' : 'nowrap',
        justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start',
        width: window.innerWidth <= 768 ? '90%' : 'auto'
      }}>
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-tab"
            style={{
              background: 'rgba(15, 15, 15, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: window.innerWidth <= 768 ? '20px' : '0 20px 20px 0',
              padding: window.innerWidth <= 768 ? '10px 15px' : '15px 20px',
              color: 'white',
              cursor: 'pointer',
              borderLeft: window.innerWidth <= 768 ? 'none' : (activeProject === index ? '4px solid #ffffff' : '4px solid #00ffff'),
              borderTop: window.innerWidth <= 768 ? (activeProject === index ? '4px solid #ffffff' : '4px solid #00ffff') : 'none',
              boxShadow: activeProject === index ? '0 4px 20px rgba(0, 255, 255, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              minWidth: window.innerWidth <= 768 ? 'auto' : '120px',
              textAlign: window.innerWidth <= 768 ? 'center' : 'left',
              transform: window.innerWidth <= 768 ? 'none' : (activeProject === index ? 'translateX(10px)' : 'none'),
              fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem'
            }}
            onMouseEnter={() => {
              setActiveProject(index);
              setTimelinePaused(true);
            }}
            onMouseLeave={() => {
              setActiveProject(null);
              setTimelinePaused(false);
            }}
          >
            {project.title}
          </div>
        ))}
      </div>
      
      {activeProject !== null && (
        <div style={{
          position: 'fixed',
          left: window.innerWidth <= 768 ? '50%' : '180px',
          top: '50%',
          transform: window.innerWidth <= 768 ? 'translate(-50%, -50%)' : 'translateY(-50%)',
          zIndex: 9999,
          maxWidth: '400px',
          width: '90%'
        }}>
          <div style={{
            background: 'rgba(15, 15, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(100, 255, 218, 0.8)',
            borderRadius: '20px',
            padding: '1.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 30px rgba(100, 255, 218, 0.3)'
          }}>
            <div style={{marginBottom: '1.5rem'}}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                display: 'inline-block'
              }}>
                <h3 style={{margin: 0, fontSize: '1.2rem', fontWeight: 600}}>{projects[activeProject].title}</h3>
              </div>
            </div>
            <div style={{marginBottom: '1.5rem', borderRadius: '10px', overflow: 'hidden', border: '3px solid #3498db'}}>
              <img src={projects[activeProject].image} alt={projects[activeProject].title} style={{width: '100%', height: '150px', objectFit: 'cover'}} />
            </div>
            <div style={{
              background: '#2a2a2a',
              padding: '1.5rem',
              borderRadius: '10px',
              borderLeft: '3px solid #64ffda',
              marginBottom: '1.5rem',
              border: '1px solid #333333'
            }}>
              <p style={{margin: 0, color: '#b0b0b0', lineHeight: 1.6, fontSize: '0.9rem'}}>{projects[activeProject].description}</p>
            </div>
            <div style={{marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
              {projects[activeProject].technologies.map((tech, i) => (
                <span key={i} style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  display: 'inline-block',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}>{tech}</span>
              ))}
            </div>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <a href={projects[activeProject].link} target="_blank" rel="noopener noreferrer" style={{
                textDecoration: 'none',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                fontWeight: 600,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}>Live Demo</a>
              <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer" style={{
                textDecoration: 'none',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                fontWeight: 600,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
              }}>GitHub</a>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating timeline years */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '140px' : '120px', // Moved higher above the timeline
        left: 0,
        width: '100%',
        height: '40px',
        zIndex: 11,
        display: isMobile ? 'flex' : 'block',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: isMobile ? '15px' : '0'
      }}>
        {timelineYears.map(year => (
          <motion.div
            key={year.id}
            className="timeline-year"
            style={{
              position: isMobile ? 'relative' : 'absolute',
              left: isMobile ? 'auto' : `${year.x}%`,
              top: isMobile ? 'auto' : `${year.y}px`,
              color: year.color,
              fontFamily: '"Courier New", monospace',
              fontSize: isMobile ? '1rem' : '1.2rem',
              fontWeight: year.value === 2025 ? 700 : 400,
              textShadow: '0 0 8px rgba(100, 255, 218, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: year.hasExperience ? 'pointer' : 'default',
              pointerEvents: year.hasExperience ? 'auto' : 'none',
              padding: isMobile ? '5px 10px' : '0',
              background: isMobile && year.hasExperience ? 'rgba(15, 15, 15, 0.5)' : 'transparent',
              borderRadius: isMobile ? '10px' : '0',
              border: isMobile && year.hasExperience ? '1px solid rgba(100, 255, 218, 0.3)' : 'none'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: [0, -5, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: year.delay },
              y: { 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: year.delay 
              }
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              if (year.hasExperience) {
                if (activeYear === year.value) {
                  // If already active, close it
                  setActiveYear(null);
                  setTimelinePaused(false);
                } else {
                  // If not active, open it
                  setActiveYear(year.value);
                  setTimelinePaused(true);
                  setExpandedJobs(new Set()); // Reset expanded jobs when changing years
                }
              }
            }}
          >
            {year.value}
          </motion.div>
        ))}
      </div>
      
      {/* Work experience popup */}
      <AnimatePresence>
        {activeYear !== null && workExperience[activeYear] && (
          <motion.div 
            className="work-experience-popup"
            style={{
              position: 'fixed',
              left: '10%',
              top: '10%',
              transform: 'none',
              zIndex: 9999,
              maxWidth: '400px',
              width: '90%'
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              background: 'rgba(15, 15, 15, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(100, 255, 218, 0.8)',
              borderRadius: '20px',
              padding: isMobile ? '1rem' : '1.5rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 30px rgba(100, 255, 218, 0.3)'
            }}>
              <div style={{marginBottom: '1.5rem'}}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  display: 'inline-block'
                }}>
                  <h3 style={{margin: 0, fontSize: '1.2rem', fontWeight: 600}}>{activeYear}</h3>
                </div>
              </div>
              
              <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', overflowX: isMobile ? 'visible' : 'auto', paddingBottom: '0.5rem', maxWidth: '100%', scrollSnapType: isMobile ? 'none' : 'x mandatory'}}>
                {workExperience[activeYear].map((job, index) => {
                  const jobKey = `${activeYear}-${index}`;
                  const isExpanded = expandedJobs.has(jobKey);
                  
                  return (
                    <div key={index} style={{
                      flex: '0 0 auto',
                      width: isMobile ? '100%' : '280px',
                      maxHeight: isExpanded ? (isMobile ? '350px' : '400px') : 'auto',
                      overflowY: isExpanded ? 'auto' : 'visible',
                      padding: '1rem',
                      borderRadius: '10px',
                      background: index === 0 ? 'rgba(30, 30, 30, 0.5)' : 'rgba(20, 20, 20, 0.5)',
                      border: `1px solid ${index === 0 ? 'rgba(100, 255, 218, 0.3)' : 'rgba(100, 100, 100, 0.3)'}`,
                      scrollSnapAlign: isMobile ? 'center' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => {
                      const newExpanded = new Set(expandedJobs);
                      if (isExpanded) {
                        newExpanded.delete(jobKey);
                      } else {
                        newExpanded.add(jobKey);
                      }
                      setExpandedJobs(newExpanded);
                    }}>
                      <div style={{marginBottom: isExpanded ? '1rem' : '0.5rem'}}>
                        <h2 style={{margin: 0, color: 'white', fontSize: '1.5rem'}}>{job.title}</h2>
                        <h3 style={{margin: '0.5rem 0 0 0', color: '#64ffda', fontSize: '1.1rem'}}>{job.company}</h3>
                        {!isExpanded && (
                          <div style={{marginTop: '0.5rem', color: '#888', fontSize: '0.8rem'}}>
                            Click to expand
                          </div>
                        )}
                      </div>
                      
                      {isExpanded && (
                        <>
                          <div style={{
                            background: '#2a2a2a',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            borderLeft: '3px solid #64ffda',
                            marginBottom: '1.5rem',
                            border: '1px solid #333333'
                          }}>
                            <p style={{margin: 0, color: '#b0b0b0', lineHeight: 1.6, fontSize: '0.9rem'}}>
                              {job.description}
                            </p>
                          </div>
                          
                          <div style={{marginBottom: '0.5rem'}}>
                            <h4 style={{color: 'white', margin: '0 0 0.5rem 0', fontSize: '1rem'}}>Key Achievements:</h4>
                            <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
                              {job.achievements.map((achievement, i) => (
                                <li key={i} style={{color: '#b0b0b0', marginBottom: '0.5rem', fontSize: '0.9rem'}}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Timeline animation (Loki-style) */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: isMobile ? '80px' : '120px',
        overflow: 'hidden',
        zIndex: 10
      }}>
        <svg width="100%" height={isMobile ? '80' : '120'} viewBox="0 0 100 120" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.7))' }}>
          <path
            d={animatedPath}
            fill="none"
            stroke="rgba(100, 255, 218, 0.8)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Timeline branches */}
          <AnimatePresence>
            {!timelinePaused && branches.map(branch => (
              <motion.path
                key={branch.id}
                d={branch.path}
                stroke={branch.color}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.8, 0.8, 0] }}
                exit={{ opacity: 0 }}
                transition={{
                  pathLength: { duration: branch.duration * 0.6, ease: "easeOut" },
                  opacity: { 
                    duration: branch.duration,
                    times: [0, 0.2, 0.8, 1],
                    ease: "easeInOut" 
                  }
                }}
              />
            ))}
          </AnimatePresence>
        </svg>
      </div>
    </section>
  );
}

export default Hero;