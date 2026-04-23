/**
 * Language Switcher — ES / EN
 * Reads data-es and data-en attributes on all [data-i18n] elements,
 * and data-tooltip-es / data-tooltip-en for tooltips.
 */

(function () {
  const STORAGE_KEY = 'emc-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'es';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text !== null) el.textContent = text;
    });

    // Tooltips
    document.querySelectorAll('[data-tooltip-es]').forEach(el => {
      const tip = el.getAttribute(`data-tooltip-${lang}`);
      if (tip !== null) el.setAttribute('data-tooltip', tip);
    });

    // HTML content nodes (allow <br> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const html = el.getAttribute(`data-html-${lang}`);
      if (html !== null) el.innerHTML = html;
    });

    // Update toggle button label
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'es' ? 'EN' : 'ES';
      btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  function toggle() {
    applyLang(currentLang === 'es' ? 'en' : 'es');
  }

  // Expose for inline use
  window.toggleLang = toggle;

  // Wait for DOM
  document.addEventListener('DOMContentLoaded', () => {
    applyLang(currentLang);

    const btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggle);
  });
})();
