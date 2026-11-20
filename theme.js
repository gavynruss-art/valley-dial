'use strict';
(() => {
 const key = 'valley-dial.theme';
 const root = document.documentElement;
 const themeColor = document.querySelector('meta[name="theme-color"]');
 let theme = 'dark';
 try {
  if (localStorage.getItem(key) === 'light') theme = 'light';
 } catch {
  // Keep the default if browser storage is unavailable.
 }

 function applyTheme() {
  const isDark = theme === 'dark';
  root.dataset.theme = theme;
  themeColor.content = isDark ? '#101c17' : '#172e27';
  document.getElementById('theme-toggle')?.setAttribute('aria-pressed', String(isDark));
 }

 applyTheme();
 document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  toggle.addEventListener('click', () => {
   theme = theme === 'dark' ? 'light' : 'dark';
   applyTheme();
   try {
    localStorage.setItem(key, theme);
   } catch {
    // The toggle still applies for the current visit.
   }
  });
 });
})();
