(function () {
  'use strict';
  // Renders window.PRISMPLUS_RELEASES. Entries that lack a valid SHA-256 or a
  // GitHub release URL are skipped, so unverifiable files are never shown.
  var list = document.getElementById('rel-list');
  var empty = document.getElementById('rel-empty');
  if (!list || !empty) return;

  var data = window.PRISMPLUS_RELEASES || [];
  var T = window.PrismPlusT || function (k, en) { return en; };
  var SHA = /^[0-9a-f]{64}$/i;
  var GH = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\//;
  var DATE = /^\d{4}-\d{2}-\d{2}$/;

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function valid(f) {
    return f && f.platform && f.name && SHA.test(f.sha256 || '') && GH.test(f.url || '');
  }
  function copy(text, btn) {
    try {
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = T('dl.copied', 'Copied');
        setTimeout(function () { btn.textContent = T('dl.copy', 'Copy'); }, 1500);
      }, function () {});
    } catch (e) { /* clipboard unavailable */ }
  }

  function render() {
    list.textContent = '';
    var shown = 0;
    data.forEach(function (r) {
      var files = ((r && r.files) || []).filter(valid);
      if (!r || !r.version || !files.length) return;
      shown++;

      var card = el('div', 'card rel');
      var h = el('h3', null, T('dl.ver', 'Version') + ' ' + r.version);
      if (DATE.test(r.date || '')) {
        var t = el('time', 'mu', r.date);
        t.setAttribute('datetime', r.date);
        h.appendChild(t);
      }
      if (GH.test(r.notes || '')) {
        var n = el('a', null, T('dl.notes', 'Release notes'));
        n.href = r.notes;
        n.rel = 'noopener';
        h.appendChild(n);
      }
      card.appendChild(h);

      var wrap = el('div', 'tblwrap');
      var table = el('table', 'tbl');
      var head = el('tr');
      [['dl.th.plat', 'Platform'], ['dl.th.arch', 'Architecture'], ['dl.th.file', 'File'],
       ['dl.th.size', 'Size'], ['dl.th.sha', 'SHA-256'], ['dl.th.get', 'Download']].forEach(function (c) {
        head.appendChild(el('th', null, T(c[0], c[1])));
      });
      table.appendChild(head);

      files.forEach(function (f) {
        var tr = el('tr');
        tr.appendChild(el('td', null, f.platform));
        tr.appendChild(el('td', null, f.arch || '\u2014'));
        tr.appendChild(el('td', 'mono', f.name));
        tr.appendChild(el('td', null, f.size || '\u2014'));
        var sum = f.sha256.toLowerCase();
        var sc = el('td', 'mono', sum);
        var cb = el('button', 'btn sm', T('dl.copy', 'Copy'));
        cb.type = 'button';
        cb.addEventListener('click', function () { copy(sum, cb); });
        sc.appendChild(document.createElement('br'));
        sc.appendChild(cb);
        tr.appendChild(sc);
        var gc = el('td');
        var ga = el('a', null, T('dl.get', 'Download'));
        ga.href = f.url;
        ga.rel = 'noopener';
        gc.appendChild(ga);
        tr.appendChild(gc);
        table.appendChild(tr);
      });

      wrap.appendChild(table);
      card.appendChild(wrap);
      list.appendChild(card);
    });
    empty.hidden = shown > 0;
    list.hidden = shown === 0;
  }

  render();
  [].slice.call(document.querySelectorAll('[data-lang]')).forEach(function (b) {
    b.addEventListener('click', render);
  });
})();
