// Toont de Nederlandse of Engelse tekst (volgens ?lang=, anders de taal van de browser).
(function () {
  var q = new URLSearchParams(location.search).get('lang');
  var lang = q === 'nl' || q === 'en' ? q : (/^nl/i.test(navigator.language || '') ? 'nl' : 'en');
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-l]').forEach(function (el) { el.hidden = el.dataset.l !== lang; });
  document.querySelectorAll('.lang a').forEach(function (a) { a.classList.toggle('on', a.dataset.set === lang); });
})();
