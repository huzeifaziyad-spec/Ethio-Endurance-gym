// Mobile menu toggle
    const toggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    toggle?.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.hidden = expanded;
    });

    // Tiny interactions: schedule row click
    document.getElementById('scheduleBody')?.addEventListener('click', (e) => {
      const row = e.target.closest('tr');
      if(!row) return;
      const name = row.dataset.class;
      row.style.outline = '2px solid rgba(34,211,163,.45)';
      row.style.boxShadow = '0 0 0 6px rgba(34,211,163,.08)';
      setTimeout(() => { row.style.outline = ''; row.style.boxShadow=''; }, 700);
      alert(`Added \"${name}\" to your calendar placeholder!`);
    });

    // Contact form (demo only)
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if(!data.name || !data.email){
        statusEl.textContent = 'Please fill in required fields.';
        statusEl.style.color = '#fecaca';
        return;
      }
      statusEl.textContent = 'Thanks! We\'ll be in touch within 24h.';
      statusEl.style.color = 'var(--accent)';
      form.reset();
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();