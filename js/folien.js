/* Navigation & Kopier-Logik für folien.html */

function flipCard(card) {
  card.classList.toggle('flipped');
}

function closeVideoOverlay() { /* no-op – video öffnet direkt bei Vimeo */ }

(function () {
  const slides       = Array.from(document.querySelectorAll('.slide'));
  const dots         = Array.from(document.querySelectorAll('.dot'));
  const counter      = document.getElementById('slideCounter');
  const btnPrev      = document.getElementById('btnPrev');
  const btnNext      = document.getElementById('btnNext');
  const btnHinweise  = document.getElementById('btnHinweise');
  const btnFilme     = document.getElementById('btnFilme');
  const btnAllSlides = document.getElementById('btnAllSlides');
  const total        = slides.length;
  let current        = 0;
  let animating      = false;

  // ── Moderations-Overlay ────────────────────
  const overlay = document.createElement('div');
  overlay.id = 'modOverlay';
  overlay.innerHTML =
    '<div id="modDialog">' +
      '<div id="modHeader">' +
        '<span id="modTitle"></span>' +
        '<button id="modClose" aria-label="Schließen">✕</button>' +
      '</div>' +
      '<ul id="modPoints"></ul>' +
    '</div>';
  document.body.appendChild(overlay);

  const modTitle  = document.getElementById('modTitle');
  const modPoints = document.getElementById('modPoints');
  const modClose  = document.getElementById('modClose');

  // ── Folien-Übersicht (Picker) ──────────────
  const picker = document.createElement('div');
  picker.id = 'slidePicker';
  const pickerGrid = document.createElement('div');
  pickerGrid.id = 'slidePickerGrid';
  picker.appendChild(pickerGrid);
  document.body.appendChild(picker);

  slides.forEach(function(slide, i) {
    const dot   = dots[i];
    const raw   = dot ? (dot.getAttribute('title') || '') : '';
    const label = raw.replace(/^F\d+\s*·\s*/, '') || ('Folie ' + (i + 1));
    const tile  = document.createElement('button');
    tile.className    = 'sp-tile';
    tile.dataset.index = i;
    tile.innerHTML = '<span class="sp-num">' + (i + 1) + '</span>'
                   + '<span class="sp-label">' + label + '</span>';
    tile.addEventListener('click', function () {
      closePicker();
      goTo(i);
    });
    pickerGrid.appendChild(tile);
  });

  // ── Moderations-Logik ──────────────────────
  function getModerationData(index) {
    if (typeof MODERATION !== 'undefined' && MODERATION[index]) return MODERATION[index];
    if (typeof MODERATION_DEFAULT !== 'undefined') return MODERATION_DEFAULT;
    return { title: 'Hinweise', points: ['Folie gemeinsam betrachten.', 'Bei Bedarf kurz erklären.', 'Dann weiter zur nächsten Folie.'] };
  }

  function openMod() {
    const data = getModerationData(current);
    modTitle.textContent = data.title;
    modPoints.innerHTML  = '';
    data.points.forEach(function(p) {
      const li = document.createElement('li');
      li.textContent = p;
      modPoints.appendChild(li);
    });
    overlay.classList.add('open');
  }

  function closeMod()    { overlay.classList.remove('open'); }
  function isModOpen()   { return overlay.classList.contains('open'); }

  // ── Picker-Logik ───────────────────────────
  function openPicker() {
    pickerGrid.querySelectorAll('.sp-tile').forEach(function(t) {
      t.classList.toggle('sp-active', parseInt(t.dataset.index) === current);
    });
    picker.classList.add('open');
  }

  function closePicker()  { picker.classList.remove('open'); }
  function isPickerOpen() { return picker.classList.contains('open'); }

  // ── Navigation ─────────────────────────────
  function goTo(index, dir) {
    if (index === current || animating) return;
    animating = true;
    closeMod();
    closePicker();
    closeVideoOverlay();

    const prev = current;
    current = Math.max(0, Math.min(total - 1, index));
    const direction = dir !== undefined ? dir : (index > prev ? 1 : -1);

    slides[prev].classList.remove('active');
    slides[prev].classList.add('leaving');

    slides[current].style.transition = 'none';
    slides[current].style.transform  = direction >= 0 ? 'translateX(60px) scale(.98)' : 'translateX(-60px) scale(.98)';
    slides[current].style.opacity    = '0';
    slides[current].offsetHeight;
    slides[current].style.transition = '';
    slides[current].style.transform  = '';
    slides[current].style.opacity    = '';
    slides[current].classList.add('active');

    setTimeout(function() { slides[prev].classList.remove('leaving'); animating = false; }, 320);

    dots.forEach(function(d) { d.classList.remove('active'); });
    if (dots[current]) dots[current].classList.add('active');
    counter.textContent = (current + 1) + ' / ' + total;
    btnPrev.disabled    = current === 0;
    btnNext.disabled    = current === total - 1;
    if (btnFilme) btnFilme.hidden = current !== total - 1;
  }

  function next() { goTo(current + 1,  1); }
  function prev() { goTo(current - 1, -1); }

  // ── Event-Listener ─────────────────────────
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);

  if (btnHinweise) {
    btnHinweise.addEventListener('click', function() {
      if (isModOpen()) closeMod(); else openMod();
    });
  }

  if (btnAllSlides) {
    btnAllSlides.addEventListener('click', function() {
      if (isPickerOpen()) closePicker(); else openPicker();
    });
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() { goTo(parseInt(dot.dataset.index)); });
  });

  modClose.addEventListener('click', closeMod);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeMod(); });
  picker.addEventListener('click',  function(e) { if (e.target === picker)  closePicker(); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var vo = document.getElementById('videoOverlay');
      if (vo && vo.classList.contains('open')) { closeVideoOverlay(); e.preventDefault(); return; }
      if (isModOpen())    { closeMod();    e.preventDefault(); return; }
      if (isPickerOpen()) { closePicker(); e.preventDefault(); return; }
    }
    if (isModOpen() || isPickerOpen()) return;

    if (['ArrowRight', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); next(); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key))    { e.preventDefault(); prev(); }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    else if (e.key === 'End')  { e.preventDefault(); goTo(total - 1); }
  });

  document.getElementById('slideStage').addEventListener('click', function(e) {
    if (isModOpen() || isPickerOpen()) return;
    const t = e.target;
    if (t.tagName !== 'A'
      && !t.classList.contains('img-copy-btn')
      && !t.closest('.gl-flip-card')
      && !t.closest('.pvc-card')
      && !t.closest('.cl-flip-card')
      && !t.closest('.worksheet-preview-card')) next();
  });

  // ── Arbeitsblatt-Overlay ───────────────────
  const wsOverlay      = document.getElementById('worksheetOverlay');
  const wsOverlayImg   = document.getElementById('worksheetOverlayImage');
  const wsOverlayClose = document.getElementById('worksheetOverlayClose');

  function openWsOverlay(src) {
    wsOverlayImg.src = src;
    wsOverlay.classList.add('is-open');
    wsOverlay.setAttribute('aria-hidden', 'false');
  }
  function closeWsOverlay() {
    wsOverlay.classList.remove('is-open');
    wsOverlay.setAttribute('aria-hidden', 'true');
    wsOverlayImg.src = '';
  }

  document.querySelectorAll('.worksheet-preview-card').forEach(card => {
    card.addEventListener('click', () => openWsOverlay(card.dataset.img));
  });
  wsOverlayClose.addEventListener('click', closeWsOverlay);
  wsOverlay.addEventListener('click', e => { if (e.target === wsOverlay) closeWsOverlay(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && wsOverlay.classList.contains('is-open')) closeWsOverlay(); });

  // ── Init ───────────────────────────────────
  slides[0].classList.add('active');
  if (dots[0]) dots[0].classList.add('active');
  btnPrev.disabled    = true;
  counter.textContent = '1 / ' + total;
})();
