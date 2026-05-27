(function () {
  'use strict';

  var DEFAULT_LANG = 'zh';
  var currentLang = localStorage.getItem('hepius-lang') || DEFAULT_LANG;

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('hepius-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    applyTranslations();
  }

  function decodeEntities(str) {
    var txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.textContent || txt.innerText;
  }

  function applyTranslations() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'i18n/' + currentLang + '.json?v=' + Date.now(), true);
    xhr.onload = function () {
      if (xhr.status !== 200) return;
      var data = JSON.parse(xhr.responseText);
      var els = document.querySelectorAll('[data-i18n]');
      for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute('data-i18n');
        var val = getNested(data, key);
        if (val !== undefined) {
          els[i].textContent = decodeEntities(val);
        }
      }
      var mailtos = document.querySelectorAll('[data-i18n-mailto]');
      for (var j = 0; j < mailtos.length; j++) {
        var mKey = mailtos[j].getAttribute('data-i18n-mailto');
        var mVal = getNested(data, mKey);
        if (mVal !== undefined) {
          mailtos[j].setAttribute('href', 'mailto:' + decodeEntities(mVal));
        }
      }
      document.dispatchEvent(new CustomEvent('i18n-ready', { detail: { lang: currentLang } }));
    };
    xhr.send();
  }

  function getNested(obj, path) {
    return path.split('.').reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : undefined;
    }, obj);
  }

  window.i18n = {
    getLang: function () { return currentLang; },
    setLang: setLang,
    refresh: applyTranslations
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
})();
