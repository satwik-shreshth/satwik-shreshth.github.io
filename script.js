/* =====================================================
   Advanced Portfolio - Interactive JavaScript
   Features: Particles, Typing, Theme, Animations, etc.
   ===================================================== */

// ===== PORTFOLIO DATA (FROM RESUME) =====
const portfolioData = {
  name: "Satwik Shreshth",
  title: "IoT Enthusiast | Software Developer | ML Engineer",
  tagline: "Building intelligent, data-driven systems",
  location: "Gaya, Bihar, India",
  email: "satwikshreshth2002@gmail.com",
  phone: "+91 72600 91323",

  links: {
    linkedin: "https://www.linkedin.com/in/satwik-shreshth-5310372b7",
    github: "https://github.com/satwik-shreshth",
    portfolio: "https://satwik-shreshth.github.io/Satwik-Portolio/",
    resume: "https://drive.google.com/file/d/1n-gmlUej9ytDB10hHobY1y0wY4aEabH4/view?usp=sharing"
  },

  // Typing effect phrases
  typingPhrases: [
    "IoT Enthusiast",
    "Software Developer",
    "ML Engineer",
    "MCA Student @ Sikkim University",
    "Remote Sensing & GIS Learner",
    "Deep Learning Practitioner"
  ],

  // Stats
  stats: [
    { number: "5+", label: "Projects" },
    { number: "10K+", label: "Candidates Served" },
    { number: "3", label: "NPTEL Certifications" },
    { number: "500+", label: "NSS Hours" }
  ],

  // Current Research
  currentResearch: {
    title: "4G LTE Protocol-Based Communication System for Environmental Monitoring",
    org: "CSIR – Central Mechanical Engineering Research Institute (CMERI)",
    period: "Jan 2026 – Present",
    highlights: [
      "Achieving <50ms latency, 95%+ throughput efficiency",
      "Processing 1000+ sensor data points per second",
      "98%+ signal stability across 50+ operational scenarios"
    ]
  },

  // Skills
  skills: [
    {
      category: "Machine Learning & Deep Learning",
      icon: "🧠",
      items: ["CNNs", "U-Net", "Random Forest", "Supervised Learning", "Feature Engineering", "Model Training & Evaluation"]
    },
    {
      category: "Programming & Software Development",
      icon: "💻",
      items: ["Python", "C", "C++", "Java", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "IoT & Embedded Systems",
      icon: "📡",
      items: ["LTE/4G Communication", "IoT Architecture", "Raspberry Pi", "System Performance Analysis"]
    },
    {
      category: "Geospatial Tools",
      icon: "🌍",
      items: ["Google Earth Engine (GEE)", "QGIS"]
    },
    {
      category: "Databases",
      icon: "🗄️",
      items: ["Oracle", "SQL", "PL/SQL"]
    },
    {
      category: "Developer Tools",
      icon: "🛠️",
      items: ["Git", "GitHub", "Anaconda", "Streamlit", "Jupyter Notebook", "Google Colab", "Google Antigravity", "VS Code", "Canva"]
    }
  ],

  // Projects
  projects: [
    {
      title: "4G LTE Protocol-Based Communication System for Environmental Monitoring",
      type: ["iot", "featured"],
      org: "CSIR-CMERI",
      period: "Jan 2026 – Present",
      description: "Architecting and deploying 4G LTE protocol-based on-board communication system for real-time environmental monitoring across vehicular networks.",
      highlights: [
        "Achieving <50ms latency, 95%+ throughput efficiency, <2% packet loss",
        "Processing 1000+ sensor data points per second from IoT-enabled systems",
        "98%+ signal stability across 50+ operational scenarios"
      ],
      tech: ["4G LTE", "Raspberry Pi", "Python", "IoT", "Sensor Networks"],
      featured: true
    },
    {
      title: "Image-to-Sketch Generation using U-Net CNN",
      type: ["ml"],
      description: "Architected and trained U-Net CNN from scratch achieving 85%+ SSIM score using custom MAE-SSIM hybrid loss function for photorealistic sketch generation.",
      highlights: [
        "85%+ SSIM score with custom MAE-SSIM hybrid loss function",
        "Real-time inference processing images in <2 seconds"
      ],
      tech: ["Python", "TensorFlow", "U-Net", "Streamlit"],
      github: "",
      demo: ""
    },
    {
      title: "Satellite-Based Land Use and Land Cover Classification",
      type: ["ml", "remote-sensing"],
      description: "Engineered Random Forest classifier achieving 92% accuracy across 6 land cover classes through advanced feature extraction and spectral index optimization.",
      highlights: [
        "92% accuracy across 6 land cover classes",
        "Processed 500+ km² of multi-spectral satellite imagery"
      ],
      tech: ["Python", "Random Forest", "GEE", "NDVI", "NDWI", "NDBI"],
      github: "",
      demo: ""
    },
    {
      title: "NDWI-Based Water Body Mapping and Monitoring",
      type: ["remote-sensing"],
      description: "Developed automated NDWI-based water body detection system leveraging Google Earth Engine for regional water resource monitoring.",
      highlights: [
        "Automated detection using Google Earth Engine",
        "Multi-temporal analysis of Sentinel-2 satellite data"
      ],
      tech: ["Google Earth Engine", "Sentinel-2", "NDWI", "Python"],
      github: "",
      demo: ""
    },
    {
      title: "Interactive Portfolio Website",
      type: ["web"],
      description: "Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript with modern UI design and animations.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/satwik-shreshth/Satwik-Portolio",
      demo: "https://satwik-shreshth.github.io/Satwik-Portolio/"
    }
  ],

  // Experience
  experiences: [
    {
      category: "Professional Experience",
      icon: "💼",
      items: [
        {
          title: "Technical Representative",
          org: "Bytes Softech Pvt. Ltd. (C-DAC ATC Delhi)",
          location: "Delhi, India",
          period: "Feb 2024 – Aug 2024",
          highlights: [
            "Orchestrated mission-critical examination infrastructure supporting 10,000+ candidates across national-level exams (AFCAT, Agniveer Vayu, Indian Coast Guard)",
            "Maintained 99.9% uptime with zero data loss",
            "Executed technical operations across 15+ examination centers",
            "Resolved 50+ real-time incidents under strict SLA requirements",
            "Ensured 100% compliance with examination board standards"
          ]
        }
      ]
    },
    {
      category: "Internship Experience",
      icon: "🎓",
      items: [
        {
          title: "Remote Sensing Intern",
          org: "India Space Academy",
          location: "Remote",
          period: "July 2025 – Aug 2025",
          highlights: [
            "Applied ML algorithms to satellite-based land cover classification",
            "Automated geospatial workflows using GEE and QGIS, reducing analysis time by 40%",
            "Generated classification reports and georeferenced maps"
          ]
        }
      ]
    },
    {
      category: "Leadership & Activities",
      icon: "🏆",
      items: [
        {
          title: "Vice Chairperson, Cultural Committee",
          org: "SUSA (Sikkim University Students Association)",
          period: "Nov 2025 – Present",
          current: true,
          description: "Leading cultural initiatives and student engagement programs at university level."
        },
        {
          title: "Member, Cultural Committee",
          org: "SUSA (Sikkim University Students Association)",
          period: "Dec 2024 – Dec 2025",
          description: "Spearheaded 5+ large-scale cultural events."
        },
        {
          title: "State Representative, Bihar (NSS)",
          org: "23rd National Youth Festival, Lucknow",
          period: "January 2020",
          description: "Represented Bihar contingent at National Youth Festival."
        },
        {
          title: "State Representative, Bihar (NSS)",
          org: "National Integration Camp, VBU Hazaribagh",
          period: "March 2020",
          description: "Participated in national integration activities and cultural exchange."
        },
        {
          title: "NSS Volunteer",
          org: "National Service Scheme",
          period: "2019 – Present",
          description: "Led 500+ hours of community development and social service initiatives."
        }
      ]
    }
  ],

  // Education
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      inst: "Sikkim University, Sikkim, India",
      period: "Sept 2024 – Present",
      score: "CGPA: 8.25 (1st Year)",
      current: true,
      focus: "Machine Learning, Deep Learning, IoT Systems, Software Development"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      inst: "Magadh University, Bodhgaya, Bihar",
      period: "July 2019 – Apr 2022",
      score: "70.06%"
    },
    {
      degree: "Intermediate of Science",
      inst: "A.M. College, Gaya (BSEB)",
      period: "2017 – 2019",
      score: "66%"
    },
    {
      degree: "Matriculation",
      inst: "S.S.H.S. Pandeypura (JAC)",
      period: "2016 – 2017",
      score: "81%"
    }
  ],

  // Certifications
  certifications: [
    {
      title: "Computer Aided Decision Systems – Industrial Practices using Big Analytics",
      issuer: "NPTEL",
      duration: "12 weeks",
      icon: "📊",
      topics: "Predictive modeling, data mining, decision support systems"
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL",
      duration: "12 weeks",
      icon: "🛡️",
      topics: "Network security, penetration testing, vulnerability assessment"
    },
    {
      title: "Internet of Things (IoT)",
      issuer: "NPTEL",
      duration: "12 weeks",
      icon: "📡",
      topics: "IoT architecture, sensor networks, embedded systems"
    }
  ],

  // Social Links
  socials: [
    { name: "Email", url: "mailto:satwikshreshth2002@gmail.com", icon: "✉️", platform: "email", desc: "Send an email" },
    { name: "WhatsApp", url: "https://wa.me/917260091323?text=Hi%20Satwik!", icon: "💬", platform: "whatsapp", desc: "Chat on WhatsApp" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/satwik-shreshth-5310372b7", icon: "💼", platform: "linkedin", desc: "Professional profile" },
    { name: "GitHub", url: "https://github.com/satwik-shreshth", icon: "🐙", platform: "github", desc: "View repositories" },
    { name: "Resume", url: "https://drive.google.com/file/d/1n-gmlUej9ytDB10hHobY1y0wY4aEabH4/view?usp=sharing", icon: "📄", platform: "resume", desc: "Download CV" }
  ]
};

// ===== PORTFOLIO APP CLASS =====
class PortfolioApp {
  constructor() {
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.init();
  }

  async init() {
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.hideLoader();
    this.setupTheme();
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupParticles();
    this.setupTypingEffect();
    this.setupScrollAnimations();
    this.setupScrollToTop();
    this.renderDynamicContent();
    this.setupContactForm();
    this.setupEasterEgg();
    this.setFooterYear();

    console.log(`
✨ Welcome to Satwik's Portfolio!
🎮 Try the Konami code: ↑↑↓↓←→←→BA
    `);
  }

  // ----- LOADER -----
  hideLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 600);
    }, 800);
  }

  // ----- THEME -----
  setupTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      toggle.textContent = '☀️';
    } else {
      toggle.textContent = '🌙';
    }

    toggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
      toggle.textContent = isLight ? '🌙' : '☀️';
      localStorage.setItem('portfolio-theme', isLight ? 'dark' : 'light');
    });
  }

  // ----- NAVIGATION -----
  setupNavigation() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
      });

      // Close menu on link click
      navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          mobileBtn.textContent = '☰';
        });
      });
    }

    // Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ----- SCROLL EFFECTS -----
  setupScrollEffects() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Header shrink
      if (header) {
        header.classList.toggle('scrolled', scrollY > 80);
      }

      // Parallax for hero
      const hero = document.querySelector('.hero');
      if (hero && scrollY < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    });
  }

  // ----- PARTICLE SYSTEM -----
  setupParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Track mouse
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // Create particles
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.particles.forEach(p => {
        // Move towards mouse slightly
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          p.vx += dx * 0.00003;
          p.vy += dy * 0.00003;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 126, 234, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      this.particles.forEach((p1, i) => {
        this.particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
  }

  // ----- TYPING EFFECT -----
  setupTypingEffect() {
    const element = document.getElementById('typingText');
    if (!element) return;

    const phrases = portfolioData.typingPhrases;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = phrases[phraseIndex];

      if (isDeleting) {
        element.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => { isDeleting = true; }, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      const speed = isDeleting ? 40 : 100;
      setTimeout(type, speed);
    };

    setTimeout(type, 500);
  }

  // ----- SCROLL ANIMATIONS -----
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Animate stats
          if (entry.target.classList.contains('stat-number')) {
            this.animateCounter(entry.target);
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll, .stat-number').forEach(el => {
      observer.observe(el);
    });
  }

  animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const hasK = text.includes('K');
    let target = parseInt(text.replace(/[^0-9]/g, ''));

    if (element.dataset.animated) return;
    element.dataset.animated = true;

    let current = 0;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    const stepTime = duration / steps;

    const update = () => {
      current += increment;
      if (current < target) {
        let display = Math.floor(current);
        element.textContent = display + (hasK ? 'K' : '') + (hasPlus ? '+' : '');
        setTimeout(update, stepTime);
      } else {
        element.textContent = text;
      }
    };

    update();
  }

  // ----- SCROLL TO TOP -----
  setupScrollToTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----- DYNAMIC CONTENT RENDERING -----
  renderDynamicContent() {
    this.renderSkills();
    this.renderProjects();
    this.renderExperience();
    this.renderEducation();
    this.renderCertifications();
    this.renderSocials();
  }

  renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    // Skip if grid already has static content
    if (grid.children.length > 0) return;

    grid.innerHTML = portfolioData.skills.map(category => `
      <div class="skill-card glass-card animate-on-scroll">
        <div class="skill-card-header">
          <div class="skill-icon">${category.icon}</div>
          <h3>${category.category}</h3>
        </div>
        <div class="skill-pills">
          ${category.items.map(skill => `
            <span class="skill-pill">${skill}</span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const filters = document.getElementById('projectFilters');
    if (!grid) return;

    // Skip if grid already has static content
    if (grid.children.length > 0) return;

    const renderCards = (filter = 'all') => {
      let filtered = portfolioData.projects;
      if (filter !== 'all') {
        filtered = portfolioData.projects.filter(p => p.type.includes(filter));
      }

      grid.innerHTML = filtered.map(project => `
        <div class="project-card ${project.featured ? 'featured' : ''} animate-on-scroll" data-types="${project.type.join(',')}">
          ${project.featured ? '<span class="project-badge">🔬 Current Research</span>' : ''}
          <h3 class="project-title">${project.title}</h3>
          ${project.org ? `<p class="project-meta">${project.org} | ${project.period}</p>` : ''}
          <p class="project-desc">${project.description}</p>
          ${project.highlights ? `
            <ul class="project-highlights">
              ${project.highlights.map(h => `<li><i>✓</i> ${h}</li>`).join('')}
            </ul>
          ` : ''}
          <div class="project-tech">
            ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
          </div>
          ${(project.github || project.demo) ? `
            <div class="project-links">
              ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">🐙 GitHub</a>` : ''}
              ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">🔗 Live Demo</a>` : ''}
            </div>
          ` : ''}
        </div>
      `).join('');
    };

    renderCards();

    // Setup filters
    if (filters) {
      filters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
          filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          renderCards(e.target.dataset.filter);
        }
      });
    }
  }

  renderExperience() {
    const container = document.getElementById('experienceContainer');
    if (!container) return;

    // Skip if container already has static content
    if (container.children.length > 0) return;

    container.innerHTML = portfolioData.experiences.map(category => `
      <div class="experience-category">
        <h2>${category.icon} ${category.category}</h2>
        <div class="experience-grid">
          ${category.items.map(item => `
            <div class="experience-item animate-on-scroll">
              <div class="experience-dot ${item.current ? 'current' : ''}"></div>
              <div class="experience-card">
                <div class="experience-header">
                  <div>
                    <h4 class="experience-title">${item.title}</h4>
                    <p class="experience-org">${item.org}${item.location ? ` | ${item.location}` : ''}</p>
                  </div>
                  <span class="experience-date">${item.period}</span>
                </div>
                ${item.description ? `<p class="experience-desc">${item.description}</p>` : ''}
                ${item.highlights ? `
                  <ul class="experience-highlights">
                    ${item.highlights.map(h => `<li><i>✓</i> ${h}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  renderEducation() {
    const timeline = document.getElementById('educationTimeline');
    if (!timeline) return;

    // Skip if timeline already has static content
    if (timeline.children.length > 0) return;

    timeline.innerHTML = portfolioData.education.map(edu => `
      <div class="edu-item animate-on-scroll">
        <div class="edu-dot ${edu.current ? 'current' : ''}"></div>
        <div class="edu-card ${edu.current ? 'current' : ''}">
          ${edu.current ? '<span class="current-badge">📚 Current</span>' : ''}
          <div class="edu-degree">${edu.degree}</div>
          <div class="edu-inst">${edu.inst}</div>
          <div class="edu-meta">${edu.period} • ${edu.score}</div>
          ${edu.focus ? `<div class="edu-focus"><strong>Focus:</strong> ${edu.focus}</div>` : ''}
        </div>
      </div>
    `).join('');
  }

  renderCertifications() {
    const grid = document.getElementById('certGrid');
    if (!grid) return;

    grid.innerHTML = portfolioData.certifications.map(cert => `
      <div class="cert-card animate-on-scroll">
        <div class="cert-icon">${cert.icon}</div>
        <div class="cert-content">
          <h4>${cert.title}</h4>
          <p class="cert-issuer">${cert.issuer} | ${cert.duration}</p>
          <p class="cert-topics">${cert.topics}</p>
        </div>
      </div>
    `).join('');
  }

  renderSocials() {
    const grid = document.getElementById('socialGrid');
    if (!grid) return;

    grid.innerHTML = portfolioData.socials.map(social => `
      <a href="${social.url}" target="_blank" class="social-link" data-platform="${social.platform}">
        <div class="social-icon">${social.icon}</div>
        <div class="social-details">
          <h4>${social.name}</h4>
          <p>${social.desc}</p>
        </div>
      </a>
    `).join('');
  }

  // ----- CONTACT FORM -----
  setupContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = data.get('name')?.trim();
      const email = data.get('email')?.trim();
      const subject = data.get('subject')?.trim();
      const message = data.get('message')?.trim();

      if (!name || !email || !subject || !message) {
        status.textContent = 'Please fill all required fields.';
        status.className = 'form-status error';
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Please enter a valid email.';
        status.className = 'form-status error';
        return;
      }

      // Create mailto link
      const mailSubject = encodeURIComponent(`Portfolio Contact from ${name}: ${subject}`);
      const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.open(`https://mail.google.com/mail/?view=cm&to=${portfolioData.email}&su=${mailSubject}&body=${mailBody}`, '_blank');

      status.textContent = 'Opening Gmail in new tab...';
      status.className = 'form-status success';
      form.reset();
    });
  }

  // ----- EASTER EGG -----
  setupEasterEgg() {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let buffer = [];

    document.addEventListener('keydown', (e) => {
      buffer.push(e.code);
      if (buffer.length > sequence.length) buffer.shift();

      if (JSON.stringify(buffer) === JSON.stringify(sequence)) {
        document.body.style.transition = 'transform 1.5s ease';
        document.body.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          document.body.style.transform = '';
          alert('🎉 Konami Code Unlocked! You found the easter egg!');
        }, 1600);
        buffer = [];
      }
    });
  }

  // ----- FOOTER YEAR -----
  setFooterYear() {
    const el = document.getElementById('footerYear');
    if (el) el.textContent = new Date().getFullYear();
  }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});

// ===== SERVICE WORKER (Optional) =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => { });
  });
}
