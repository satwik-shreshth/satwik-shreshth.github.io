document.addEventListener('DOMContentLoaded', function () {

  var footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  var header = document.getElementById('header');
  var scrollTopBtn = document.getElementById('scrollTop');
  var mobileMenuBtn = document.getElementById('mobileMenuBtn');
  var mobileNav = document.getElementById('mobileNav');

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (scrollTopBtn) {
      if (y > 250) scrollTopBtn.classList.add('visible');
      else scrollTopBtn.classList.remove('visible');
    }
    if (header) {
      if (y > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      mobileMenuBtn.textContent = open ? '\u00D7' : '\u2630';
    });
    document.addEventListener('click', function (e) {
      if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileNav.classList.remove('open');
        mobileMenuBtn.textContent = '\u2630';
      }
    });
  }

  // Scroll-triggered animations
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.08) + 's';
    observer.observe(el);
  });

  // ==========================================
  // COUNTING ANIMATION - Stats
  // ==========================================
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length > 0) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(function (el) {
      statsObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var display = el.getAttribute('data-display'); // e.g., "10K+"
    var duration = 1200;
    var startTime = null;

    // For large numbers, use easing steps
    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function formatNumber(n) {
      if (display && n >= target) return display;
      if (target >= 10000) {
        // Show as K format during counting
        if (n >= 1000) {
          var k = (n / 1000);
          if (k === Math.floor(k)) return Math.floor(k) + 'K' + suffix;
          return k.toFixed(1) + 'K' + suffix;
        }
        return n.toString() + suffix;
      }
      return n.toString() + suffix;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = easeOutQuart(progress);
      var current = Math.floor(eased * target);
      el.textContent = formatNumber(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final value is exact
        el.textContent = display || (target + suffix);
      }
    }

    requestAnimationFrame(step);
  }

  // ==========================================
  // PROJECT FILTERS
  // ==========================================
  var projectFilters = document.getElementById('projectFilters');
  if (projectFilters) {
    projectFilters.addEventListener('click', function (e) {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        e.target.classList.add('active');
        var filter = e.target.dataset.filter;
        document.querySelectorAll('.project-card').forEach(function (card) {
          var types = card.dataset.types || '';
          var match = filter === 'all' || types.split(',').some(function (t) { return t.trim() === filter; });
          card.style.display = match ? 'flex' : 'none';
        });
      }
    });
  }

  // ==========================================
  // PROJECT CARD HOVER SCALING
  // ==========================================
  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      card.style.transform = 'translateY(-6px) scale(1.01)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // ==========================================
  // CONTACT FORM
  // ==========================================
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var subject = document.getElementById('subject').value.trim();
      var message = document.getElementById('message').value.trim();
      if (!name || !email || !subject || !message) {
        if (formStatus) { formStatus.textContent = 'Please fill in all fields.'; formStatus.style.color = '#ef4444'; }
        return;
      }
      alert("Message ready. Connect backend later.");
      contactForm.reset();
    });
  }

  // ==========================================
  // NAVBAR ACTIVE SECTION TRACKING
  // ==========================================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") && link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

});