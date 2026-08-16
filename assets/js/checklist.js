// ============================================================
// PortRelay AI — Readiness Check page: live scoring, segment
// focus, cost calculator, share link. Runs only on
// readiness-check.html.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rc-form');
  if (!form) return;

  const allBoxes = () => Array.from(form.querySelectorAll('input[type="checkbox"][data-score]'));
  const naToggle = document.getElementById('c4-na');
  const c4Boxes = Array.from(form.querySelectorAll('[data-section="4"]'));

  const progressFill = document.getElementById('rc-progress-fill');
  const progressScore = document.getElementById('rc-progress-score');
  const resultScore = document.getElementById('rc-result-score');
  const resultTotal = document.getElementById('rc-result-total');
  const resultBand = document.getElementById('rc-result-band');
  const resultMsg = document.getElementById('rc-result-msg');
  const resultFocus = document.getElementById('rc-result-focus');

  let segment = null;
  const segPills = document.querySelectorAll('.segment-pill');
  segPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const already = pill.classList.contains('on');
      segPills.forEach(p => p.classList.remove('on'));
      if (!already) {
        pill.classList.add('on');
        segment = pill.getAttribute('data-seg');
      } else {
        segment = null;
      }
      updateResult();
    });
  });

  if (naToggle) {
    naToggle.addEventListener('change', () => {
      c4Boxes.forEach(box => {
        box.disabled = naToggle.checked;
        if (naToggle.checked) box.checked = false;
        box.closest('.check-row').style.opacity = naToggle.checked ? '0.4' : '1';
      });
      updateResult();
    });
  }

  function currentLang() {
    return document.documentElement.getAttribute('lang') || 'en';
  }

  function updateResult() {
    const active = allBoxes().filter(b => !b.disabled);
    const total = active.length;
    const checked = active.filter(b => b.checked).length;
    const ratio = total ? checked / total : 0;

    if (progressFill) progressFill.style.width = (ratio * 100).toFixed(0) + '%';
    if (progressScore) progressScore.innerHTML = `<b>${checked}</b> / ${total}`;
    if (resultScore) resultScore.textContent = checked;
    if (resultTotal) resultTotal.textContent = '/ ' + total;

    const dict = (typeof I18N !== 'undefined' && (I18N[currentLang()] || I18N.en)) || {};

    let bandKey, msgKey, bandColor;
    if (ratio >= 0.81) { bandKey = 'rc.result_band_high'; msgKey = 'rc.result_msg_high'; bandColor = 'var(--good)'; }
    else if (ratio >= 0.48) { bandKey = 'rc.result_band_mid'; msgKey = 'rc.result_msg_mid'; bandColor = 'var(--brass)'; }
    else { bandKey = 'rc.result_band_low'; msgKey = 'rc.result_msg_low'; bandColor = 'var(--danger)'; }

    if (resultBand) { resultBand.textContent = dict[bandKey] || bandKey; resultBand.style.color = bandColor; }
    if (resultMsg) resultMsg.textContent = dict[msgKey] || '';

    const focusMap = { seg1: 'rc.focus_seg1', seg2: 'rc.focus_seg2', seg3: 'rc.focus_seg3', seg4: 'rc.focus_seg4' };
    const focusKey = segment ? focusMap[segment] : 'rc.focus_default';
    if (resultFocus) resultFocus.textContent = dict[focusKey] || '';
  }

  allBoxes().forEach(box => box.addEventListener('change', updateResult));
  document.addEventListener('langchange', updateResult);
  updateResult();

  // ---- Cost estimator ----
  (function () {
    const calc = document.getElementById('rc-calc');
    if (!calc) return;
    const $ = (id) => document.getElementById(id);
    const fmtMoney = (n) => '$' + Math.round(n).toLocaleString('en-US');

    function update() {
      const calls = +$('r-calls').value;
      const missedPct = +$('r-missedpct').value / 100;
      const jobValue = +$('r-jobvalue').value;
      const convPct = +$('r-conv').value / 100;

      $('o-calls').textContent = calls;
      $('o-missedpct').textContent = Math.round(missedPct * 100) + '%';
      $('o-jobvalue').textContent = fmtMoney(jobValue);
      $('o-conv').textContent = Math.round(convPct * 100) + '%';

      const missedMonth = Math.round(calls * 4.33 * missedPct);
      const jobsLostMonth = missedMonth * convPct;
      const monthlyLoss = jobsLostMonth * jobValue;
      const yearlyLoss = monthlyLoss * 12;

      $('v-missed').textContent = missedMonth;
      $('v-jobslost').textContent = jobsLostMonth.toFixed(1);
      $('v-yearly').textContent = fmtMoney(yearlyLoss);
    }

    ['r-calls', 'r-missedpct', 'r-jobvalue', 'r-conv'].forEach(id => {
      const el = $(id);
      if (el) el.addEventListener('input', update);
    });
    update();
  })();

  // ---- Copy share link ----
  const copyBtn = document.getElementById('rc-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const dict = (typeof I18N !== 'undefined' && (I18N[currentLang()] || I18N.en)) || {};
      try {
        await navigator.clipboard.writeText(window.location.href.split('#')[0]);
      } catch (e) {
        const tmp = document.createElement('input');
        tmp.value = window.location.href.split('#')[0];
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
      }
      const original = copyBtn.textContent;
      copyBtn.textContent = dict['rc.copy_done'] || 'Copied';
      setTimeout(() => { copyBtn.textContent = dict['rc.copy_btn'] || original; }, 1800);
    });
  }
});
