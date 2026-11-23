// Mower Magic — theme, mobile menu, scroll effects, enquiry form
(function () {
  var root = document.documentElement;
  var body = document.body;
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme (initial value is set inline in <head> before paint) ---------- */
  var themeBtn = document.querySelector('.theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function storedTheme() {
    try { return localStorage.getItem('mm-theme'); } catch (e) { return null; }
  }
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    if (themeMeta) themeMeta.setAttribute('content', t === 'dark' ? '#0f4f2c' : '#198048');
    if (themeBtn) {
      themeBtn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
      themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      if (!reduceMotion) {
        root.classList.add('theme-fade');
        setTimeout(function () { root.classList.remove('theme-fade'); }, 350);
      }
      applyTheme(next);
      try { localStorage.setItem('mm-theme', next); } catch (e) {}
    });
  }
  // Follow the system setting live unless the visitor picked a theme
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) { if (!storedTheme()) applyTheme(e.matches ? 'dark' : 'light'); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(!body.classList.contains('menu-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('menu-open')) { setMenu(false); toggle.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1100) setMenu(false);
    });
  }

  /* ---------- Sticky header shadow + back-to-top ---------- */
  var header = document.querySelector('.site-header');
  var toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.type = 'button';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    var skip = document.querySelector('.brand');
    if (skip) skip.focus({ preventScroll: true });
  });
  body.appendChild(toTop);

  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-scrolled', y > 8);
    toTop.classList.toggle('is-visible', y > 700);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---------- Scroll reveal (staggered) ---------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var selectors = [
      '.section .container > *:not(.grid):not(.prod-grid):not(.pill-list):not(.cat-list):not(.info-boxes)',
      '.prod-section .container > *:not(.prod-grid):not(.info-boxes):not(.pill-list)',
      '.grid > *', '.prod-grid > *', '.info-boxes > *', '.cat-list', '.pill-list',
      '.cta-band .container > *', '.stats .stat'
    ];
    var els = document.querySelectorAll(selectors.join(','));
    var vh = window.innerHeight;

    var finish = function (el) {
      // Drop reveal classes once done so hover transforms work normally afterwards
      el.classList.remove('reveal', 'is-in');
      el.style.removeProperty('--delay');
    };

    var io = new IntersectionObserver(function (entries) {
      var batch = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);
        el.style.setProperty('--delay', Math.min(batch++, 6) * 60 + 'ms');
        el.classList.add('is-in');
        var done = function (ev) {
          if (ev && ev.target !== el) return;
          el.removeEventListener('transitionend', done);
          finish(el);
        };
        el.addEventListener('transitionend', done);
        setTimeout(done, 1200); // fallback
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(els, function (el) {
      // Don't hide what's already on screen at load (avoids a flash above the fold)
      if (el.getBoundingClientRect().top < vh * 0.9) return;
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* ---------- Enquiry form ---------- */
  // No server on this demo, so open the visitor's email app with the message filled in.
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var to = f.topic.value === 'sales' ? 'sales@mowermagic.com.au' : 'admin@mowermagic.com.au';
      var subject = (f.subject.value || 'Website enquiry') + ' (' + f.store.value + ')';
      var lines = [
        f.message.value,
        '',
        'Name: ' + f.name.value,
        'Email: ' + f.email.value,
        f.phone.value ? 'Phone: ' + f.phone.value : '',
        'Store: ' + f.store.value
      ];
      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
