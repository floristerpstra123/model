// ---- dark / light toggle ----
  const root = document.body;
  const toggle = document.getElementById('themeToggle');
  const stateLabel = document.getElementById('themeState');

  toggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    toggle.setAttribute('aria-pressed', String(next === 'light'));
    stateLabel.textContent = next.toUpperCase();
  });

  // ---- active knob state on the nav buttons ----
  const knobButtons = document.querySelectorAll('.knob-btn');
  knobButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      knobButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });