(function () {
  'use strict';

  function init() {
    var menuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    var langToggle = document.getElementById('lang-toggle');
    var langToggleMobile = document.getElementById('lang-toggle-mobile');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
      });

      // Close on link click
      var links = mobileMenu.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      }
    }

    function switchLang() {
      var next = window.i18n.getLang() === 'zh' ? 'en' : 'zh';
      window.i18n.setLang(next);
    }

    if (langToggle) langToggle.addEventListener('click', switchLang);
    if (langToggleMobile) langToggleMobile.addEventListener('click', switchLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
