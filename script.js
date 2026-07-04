/* Satwik Shreshth | Portfolio scripts */
(function () {
  'use strict';

  /* ---------- Page loader ---------- */
  var loader = document.getElementById('pageLoader');
  function hideLoader() {
    if (loader) loader.classList.add('hidden');
  }
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2500); // safety fallback

  document.addEventListener('DOMContentLoaded', function () {

    var footerYear = document.getElementById('footerYear');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    /* ---------- Header, scroll-top ---------- */
    var header = document.getElementById('header');
    var scrollTopBtn = document.getElementById('scrollTop');

    function onScroll() {
      var y = window.scrollY;
      if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', y > 250);
      if (header) header.classList.toggle('scrolled', y > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Scroll progress bar ---------- */
    var progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progressBar);
    function updateProgress() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ---------- Mobile nav ---------- */
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var mobileNav = document.getElementById('mobileNav');
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', function () {
        var open = mobileNav.classList.toggle('open');
        mobileMenuBtn.innerHTML = open ? '<i class="fas fa-xmark" aria-hidden="true"></i>' : '<i class="fas fa-bars" aria-hidden="true"></i>';
        mobileMenuBtn.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', function (e) {
        if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* ---------- Scroll-reveal animations ---------- */
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealEls = document.querySelectorAll('.animate-on-scroll');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' });
      revealEls.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i % 6, 4) * 0.07 + 's';
        revealObserver.observe(el);
      });
    }

    /* ---------- Typewriter role rotation (hero) ---------- */
    var roleText = document.getElementById('roleText');
    if (roleText) {
      var roles = [
        'Machine Learning Engineer',
        'Computer Vision',
        'Remote Sensing',
        'Embedded AI',
        'Robotics'
      ];
      if (reduceMotion) {
        roleText.textContent = roles[0];
      } else {
        var roleIdx = 0, charIdx = 0, deleting = false;
        (function type() {
          var word = roles[roleIdx];
          roleText.textContent = word.slice(0, charIdx);
          if (!deleting && charIdx < word.length) {
            charIdx++;
            setTimeout(type, 65);
          } else if (!deleting) {
            deleting = true;
            setTimeout(type, 1700);
          } else if (charIdx > 0) {
            charIdx--;
            setTimeout(type, 32);
          } else {
            deleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            setTimeout(type, 350);
          }
        })();
      }
    }

    /* ---------- Animated stat counters ---------- */
    var statNumbers = document.querySelectorAll('.stat-number[data-target]');
    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var display = el.getAttribute('data-display');
      var duration = 1300;
      var startTime = null;

      function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }
      function format(n) {
        if (target >= 10000 && n >= 1000) {
          var k = n / 1000;
          return (k === Math.floor(k) ? Math.floor(k) : k.toFixed(1)) + 'K' + suffix;
        }
        return n + suffix;
      }
      function step(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        el.textContent = format(Math.floor(easeOutQuart(progress) * target));
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = display || (target >= 10000 ? format(target) : target + suffix);
      }
      requestAnimationFrame(step);
    }
    if (statNumbers.length) {
      if (reduceMotion || !('IntersectionObserver' in window)) {
        statNumbers.forEach(function (el) {
          el.textContent = el.getAttribute('data-display') || (el.getAttribute('data-target') + (el.getAttribute('data-suffix') || ''));
        });
      } else {
        var statsObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              statsObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });
        statNumbers.forEach(function (el) { statsObserver.observe(el); });
      }
    }

    /* ---------- Project filters ---------- */
    var projectFilters = document.getElementById('projectFilters');
    if (projectFilters) {
      projectFilters.addEventListener('click', function (e) {
        var btn = e.target.closest('.filter-btn');
        if (!btn) return;
        projectFilters.querySelectorAll('.filter-btn').forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        var filter = btn.dataset.filter;
        document.querySelectorAll('.project-card, .research-card').forEach(function (card) {
          var types = card.dataset.types || '';
          var match = filter === 'all' || types.split(',').some(function (t) { return t.trim() === filter; });
          card.style.display = match ? '' : 'none';
        });
      });
    }

    /* ---------- Lightbox for result galleries ---------- */
    var thumbs = Array.prototype.slice.call(document.querySelectorAll('.gallery-thumb'));
    if (thumbs.length) {
      var lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.setAttribute('role', 'dialog');
      lightbox.setAttribute('aria-modal', 'true');
      lightbox.setAttribute('aria-label', 'Image viewer');
      lightbox.innerHTML =
        '<figure class="lightbox-figure">' +
        '<img alt="">' +
        '<figcaption class="lightbox-caption"></figcaption>' +
        '</figure>' +
        '<button type="button" class="lightbox-btn lightbox-close" aria-label="Close"><i class="fas fa-xmark" aria-hidden="true"></i></button>' +
        '<button type="button" class="lightbox-btn lightbox-prev" aria-label="Previous image"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>' +
        '<button type="button" class="lightbox-btn lightbox-next" aria-label="Next image"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>' +
        '<span class="lightbox-counter" aria-hidden="true"></span>';
      document.body.appendChild(lightbox);

      var lbImg = lightbox.querySelector('img');
      var lbCaption = lightbox.querySelector('.lightbox-caption');
      var lbCounter = lightbox.querySelector('.lightbox-counter');
      var currentGroup = [];
      var currentIdx = 0;
      var lastFocus = null;

      function showAt(idx) {
        currentIdx = (idx + currentGroup.length) % currentGroup.length;
        var t = currentGroup[currentIdx];
        var img = t.querySelector('img');
        lbImg.src = t.getAttribute('href') || (img && img.src) || '';
        lbImg.alt = img ? img.alt : '';
        lbCaption.textContent = t.getAttribute('data-caption') || (img ? img.alt : '');
        lbCounter.textContent = currentGroup.length > 1 ? (currentIdx + 1) + ' / ' + currentGroup.length : '';
      }
      function openLightbox(thumb) {
        var group = thumb.getAttribute('data-gallery');
        currentGroup = group
          ? thumbs.filter(function (t) { return t.getAttribute('data-gallery') === group; })
          : [thumb];
        lastFocus = document.activeElement;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
        showAt(currentGroup.indexOf(thumb));
        lightbox.querySelector('.lightbox-close').focus();
      }
      function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        lbImg.src = '';
        if (lastFocus) lastFocus.focus();
      }

      thumbs.forEach(function (t) {
        t.addEventListener('click', function (e) {
          e.preventDefault();
          openLightbox(t);
        });
      });
      lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
      lightbox.querySelector('.lightbox-prev').addEventListener('click', function () { showAt(currentIdx - 1); });
      lightbox.querySelector('.lightbox-next').addEventListener('click', function () { showAt(currentIdx + 1); });
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-figure')) closeLightbox();
      });
      document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') showAt(currentIdx - 1);
        else if (e.key === 'ArrowRight') showAt(currentIdx + 1);
      });
    }

    /* ---------- Contact form (submits via FormSubmit, no backend needed) ---------- */
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
          if (formStatus) {
            formStatus.textContent = 'Please fill in all fields.';
            formStatus.style.color = '#ef4444';
          }
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          if (formStatus) {
            formStatus.textContent = 'Please enter a valid email address.';
            formStatus.style.color = '#ef4444';
          }
          return;
        }

        var submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        if (formStatus) {
          formStatus.textContent = 'Sending your message...';
          formStatus.style.color = '';
        }

        fetch('https://formsubmit.co/ajax/satwikshreshth2002@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: 'Portfolio contact: ' + subject,
            message: message
          })
        }).then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          return res.json();
        }).then(function () {
          contactForm.reset();
          if (formStatus) formStatus.textContent = 'Message sent. I will get back to you within a day.';
        }).catch(function () {
          if (formStatus) {
            formStatus.textContent = 'The message could not be sent right now. Please email me directly at satwikshreshth2002@gmail.com.';
            formStatus.style.color = '#ef4444';
          }
        }).then(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
      });
    }
  });
})();
