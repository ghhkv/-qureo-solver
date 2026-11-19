// Solution data is added here after the Qureo and financial-culture source files are provided.
window.SOLUTIONS_DB = window.SOLUTIONS_DB || { qureo: [], finance: [] };

// Keep the original portfolio page and its effects intact while applying the requested branding.
(function applyPortfolioBranding() {
  const updateFrame = () => {
    const frame = document.querySelector('iframe[title="واجهة نيون إبداعية"]');
    if (!frame) return;

    const apply = () => {
      try {
        const doc = frame.contentDocument;
        if (!doc) return;
        doc.querySelectorAll('span').forEach(span => {
          if (span.textContent.trim() === 'أحمد') span.textContent = 'العالمي';
        });
        doc.querySelectorAll('.text-emerald-400').forEach(value => {
          if (value.textContent.includes('Ahmed Dev')) value.textContent = value.textContent.replace('Ahmed Dev', 'العالمي ديف');
        });
      } catch (error) {
        // The iframe is expected to be same-origin; ignore transient load timing issues.
      }
    };

    frame.addEventListener('load', apply);
    apply();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateFrame, { once: true });
  } else {
    updateFrame();
  }
})();
