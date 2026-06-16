/* ============================================================
   OS Quiz Master — app.js
   ============================================================ */

// ---- STATE ----
const state = {
  currentModule: null,
  mode: 'mc',           // 'mc' | 'essay' | 'all'
  timerSec: 30,
  timerInterval: null,
  timerLeft: 30,
  mcQueue: [],
  essayQueue: [],
  mcIndex: 0,
  essayIndex: 0,
  answered: false,
  streak: 0,
  mcCorrect: 0,
  mcWrong: 0,
  wrongItems: [],
  essayGrades: [],      // {q, grade}
  scores: []
};

// ---- DOM REFS ----
const $ = id => document.getElementById(id);
const screens = {
  home: $('screen-home'),
  setup: $('screen-setup'),
  mc: $('screen-mc'),
  essay: $('screen-essay'),
  results: $('screen-results')
};

// ---- UTILITIES ----
function show(name) {
  Object.values(screens).forEach(s => { s.style.display = 'none'; s.classList.remove('active'); });
  screens[name].style.display = 'block';
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function saveScore(moduleName, mode, mcCorrect, mcTotal, essayGrades) {
  const scores = JSON.parse(localStorage.getItem('os_quiz_scores') || '[]');
  scores.unshift({
    module: moduleName,
    mode,
    mcCorrect,
    mcTotal,
    essayGrades,
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  });
  localStorage.setItem('os_quiz_scores', JSON.stringify(scores.slice(0, 20)));
}

function renderMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/\n/g, '<br>');
}

// ============================================================
// SPLASH
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  const splash = $('splash');
  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      $('app').classList.remove('hidden');
      renderHome();
      show('home');
    }, 500);
  }, 2000);
});

// ============================================================
// HOME
// ============================================================
function renderHome() {
  const grid = $('module-grid');
  grid.innerHTML = '';
  MODULES.forEach(mod => {
    const card = document.createElement('button');
    card.className = 'module-card';
    card.style.setProperty('--card-color', mod.color);
    card.innerHTML = `
      <div class="mc-icon">${mod.icon}</div>
      <div class="mc-num">${mod.name}</div>
      <div class="mc-title">${mod.title}</div>
      <div class="mc-footer">
        <span class="mc-tag">📝 15 PG</span>
        <span class="mc-tag">✍️ 5 Essay</span>
      </div>
    `;
    card.addEventListener('click', () => openSetup(mod));
    grid.appendChild(card);
  });

  // Scores
  const scores = JSON.parse(localStorage.getItem('os_quiz_scores') || '[]');
  const sb = $('score-board');
  const sbList = $('sb-list');
  if (scores.length > 0) {
    sb.classList.remove('hidden');
    sbList.innerHTML = scores.slice(0, 5).map(s => {
      const pct = s.mcTotal > 0 ? Math.round(s.mcCorrect / s.mcTotal * 100) : '-';
      return `<div class="sb-item"><span>${s.module} · ${s.mode}</span><span>${s.date}</span><span class="sb-score">${pct}${s.mcTotal > 0 ? '%' : ''}</span></div>`;
    }).join('');
  }
}

$('clear-scores').addEventListener('click', () => {
  localStorage.removeItem('os_quiz_scores');
  $('score-board').classList.add('hidden');
});

// ============================================================
// SETUP
// ============================================================
function openSetup(mod) {
  state.currentModule = mod;
  state.mode = 'all';
  state.timerSec = 30;

  $('setup-module-badge').innerHTML = `${mod.icon} ${mod.name}`;
  $('setup-title').textContent = mod.title;

  // Mode buttons
  document.querySelectorAll('.mode-card').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.dataset.mode === 'all') btn.classList.add('selected');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-card').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.mode = btn.dataset.mode;
    });
  });

  // Difficulty
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.classList.remove('active');
    if (parseInt(btn.dataset.sec) === 30) btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.timerSec = parseInt(btn.dataset.sec);
    });
  });

  show('setup');
}

$('back-home').addEventListener('click', () => show('home'));

document.querySelectorAll('.mode-card').forEach(btn => {
  btn.addEventListener('click', () => {
    state.mode = btn.dataset.mode;

    // Determine which screens to show
    if (state.mode === 'mc') {
      startMC();
    } else if (state.mode === 'essay') {
      startEssay();
    } else {
      startMC(); // all: MC first, then essay
    }
  });
});

// ============================================================
// MC QUIZ
// ============================================================
function startMC() {
  const mod = state.currentModule;
  state.mcQueue = shuffle(mod.multipleChoice);
  state.mcIndex = 0;
  state.mcCorrect = 0;
  state.mcWrong = 0;
  state.wrongItems = [];
  state.streak = 0;
  state.answered = false;

  show('mc');
  renderMCQuestion();
}

function renderMCQuestion() {
  const q = state.mcQueue[state.mcIndex];
  const total = state.mcQueue.length;
  const i = state.mcIndex;

  // Progress
  const pct = (i / total) * 100;
  $('mc-prog').style.width = pct + '%';
  $('mc-qnum').textContent = `${i + 1} / ${total}`;
  $('mc-qi').textContent = `Soal ${i + 1}`;
  $('mc-q').textContent = q.q;

  // Streak
  $('mc-streak').textContent = state.streak >= 3 ? `🔥 Streak ${state.streak}!` : '';

  // Options
  const optsDiv = $('mc-opts');
  optsDiv.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.style.animationDelay = `${idx * 0.06}s`;
    btn.innerHTML = `<span class="opt-label">${labels[idx]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => answerMC(idx));
    optsDiv.appendChild(btn);
  });

  // Hide feedback & next
  const fb = $('mc-feedback');
  fb.classList.add('hidden');
  fb.classList.remove('correct', 'wrong');
  $('mc-next').classList.add('hidden');

  state.answered = false;
  startTimer();
}

function answerMC(chosen) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const q = state.mcQueue[state.mcIndex];
  const correct = q.answer;
  const opts = $('mc-opts').querySelectorAll('.opt-btn');

  opts.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correct) btn.classList.add('correct');
    else if (idx === chosen && chosen !== correct) btn.classList.add('selected-wrong');
  });

  const fb = $('mc-feedback');
  const isCorrect = chosen === correct;

  if (isCorrect) {
    state.mcCorrect++;
    state.streak++;
    fb.classList.add('correct');
    $('fb-icon').textContent = '✅';
    $('fb-verdict').textContent = 'Benar! ' + (state.streak >= 3 ? '🔥' : '');
    launchMiniConfetti();
  } else {
    state.mcWrong++;
    state.streak = 0;
    fb.classList.add('wrong');
    $('fb-icon').textContent = '❌';
    $('fb-verdict').textContent = `Salah. Jawaban benar: ${['A','B','C','D'][correct]}`;
    state.wrongItems.push({ q: q.q, correctOpt: q.options[correct] });
  }

  $('fb-exp').textContent = q.explanation;
  fb.classList.remove('hidden');
  $('mc-next').classList.remove('hidden');
}

$('mc-next').addEventListener('click', () => {
  state.mcIndex++;
  if (state.mcIndex < state.mcQueue.length) {
    renderMCQuestion();
  } else {
    clearInterval(state.timerInterval);
    if (state.mode === 'all') {
      startEssay();
    } else {
      showResults();
    }
  }
});

$('quit-mc').addEventListener('click', () => {
  clearInterval(state.timerInterval);
  showResults();
});

// ---- Timer ----
function startTimer() {
  state.timerLeft = state.timerSec;
  updateTimerUI();

  state.timerInterval = setInterval(() => {
    state.timerLeft--;
    updateTimerUI();
    if (state.timerLeft <= 5) {
      $('mc-timer').classList.add('urgent');
    }
    if (state.timerLeft <= 0) {
      clearInterval(state.timerInterval);
      autoAnswerWrong();
    }
  }, 1000);
}

function updateTimerUI() {
  const el = $('mc-timer');
  el.textContent = state.timerLeft;
  const pct = (state.timerLeft / state.timerSec) * 100;
  // Update conic-gradient
  el.style.background = `conic-gradient(${pct > 30 ? '#7C3AED' : pct > 15 ? '#F59E0B' : '#EF4444'} ${pct}%, #1C2035 0)`;
}

function autoAnswerWrong() {
  if (state.answered) return;
  state.answered = true;
  state.mcWrong++;
  state.streak = 0;

  const q = state.mcQueue[state.mcIndex];
  const opts = $('mc-opts').querySelectorAll('.opt-btn');
  opts.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add('correct');
  });

  const fb = $('mc-feedback');
  fb.classList.add('wrong');
  $('fb-icon').textContent = '⏰';
  $('fb-verdict').textContent = `Waktu habis! Jawaban: ${'ABCD'[q.answer]}`;
  $('fb-exp').textContent = q.explanation;
  fb.classList.remove('hidden');
  $('mc-next').classList.remove('hidden');
  $('mc-timer').classList.remove('urgent');
  state.wrongItems.push({ q: q.q, correctOpt: q.options[q.answer] });
}

// ============================================================
// ESSAY QUIZ
// ============================================================
function startEssay() {
  const mod = state.currentModule;
  state.essayQueue = shuffle(mod.essay);
  state.essayIndex = 0;
  state.essayGrades = [];

  show('essay');
  renderEssayQuestion();
}

function renderEssayQuestion() {
  const q = state.essayQueue[state.essayIndex];
  const total = state.essayQueue.length;
  const i = state.essayIndex;

  $('essay-prog').style.width = `${(i / total) * 100}%`;
  $('essay-qnum').textContent = `${i + 1} / ${total}`;
  $('essay-qi').textContent = `Essay ${i + 1}`;
  $('essay-q').textContent = q.q;
  $('essay-ans').value = '';

  $('model-ans').classList.add('hidden');
  $('essay-next').classList.add('hidden');
  $('essay-reveal').disabled = false;
  $('essay-reveal').style.opacity = '1';

  // Reset self-grade
  document.querySelectorAll('.sg-btn').forEach(b => b.classList.remove('active'));
}

$('essay-reveal').addEventListener('click', () => {
  const q = state.essayQueue[state.essayIndex];
  $('model-ans-body').innerHTML = renderMarkdown(q.modelAnswer);
  $('model-ans').classList.remove('hidden');
  $('essay-reveal').disabled = true;
  $('essay-reveal').style.opacity = '0.4';
});

function handleSelfGrade(grade) {
  document.querySelectorAll('.sg-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  const q = state.essayQueue[state.essayIndex];
  // Update or push
  const existing = state.essayGrades.find(g => g.q === q.q);
  if (existing) existing.grade = grade;
  else state.essayGrades.push({ q: q.q.substring(0, 60) + '...', grade });

  $('essay-next').classList.remove('hidden');
}

$('sg-correct').addEventListener('click', function(e) { event = e; handleSelfGrade('paham'); });
$('sg-partial').addEventListener('click', function(e) { event = e; handleSelfGrade('sebagian'); });
$('sg-wrong').addEventListener('click', function(e) { event = e; handleSelfGrade('belum'); });

$('essay-next').addEventListener('click', () => {
  state.essayIndex++;
  if (state.essayIndex < state.essayQueue.length) {
    renderEssayQuestion();
  } else {
    showResults();
  }
});

$('quit-essay').addEventListener('click', () => showResults());

// ============================================================
// RESULTS
// ============================================================
function showResults() {
  const mod = state.currentModule;
  const mcTotal = state.mcQueue.length;
  const mcCorrect = state.mcCorrect;

  saveScore(mod.title, state.mode, mcCorrect, mcTotal, state.essayGrades);

  show('results');
  $('results-emoji').textContent = getEmoji(mcCorrect, mcTotal);
  $('results-module').textContent = `${mod.icon} ${mod.name} · ${mod.title}`;

  // Score circle
  if (mcTotal > 0) {
    const pct = Math.round((mcCorrect / mcTotal) * 100);
    $('score-pct').textContent = pct + '%';
    $('score-sub').textContent = `${mcCorrect} / ${mcTotal} benar`;

    setTimeout(() => {
      const circumference = 2 * Math.PI * 54; // ≈339.3
      const offset = circumference - (pct / 100) * circumference;
      $('score-arc').style.strokeDashoffset = offset;
      $('score-arc').setAttribute('stroke', getColor(pct));
    }, 100);

    if (pct >= 70) launchFullConfetti();
  } else {
    $('score-pct').textContent = '-';
    $('score-sub').textContent = 'Mode Essay';
  }

  // Breakdown
  $('results-breakdown').innerHTML = `
    <div class="bd-card correct"><div class="bd-num">${mcCorrect}</div><div class="bd-label">✅ Benar</div></div>
    <div class="bd-card wrong"><div class="bd-num">${state.mcWrong}</div><div class="bd-label">❌ Salah</div></div>
    <div class="bd-card total"><div class="bd-num">${mcTotal}</div><div class="bd-label">📝 Total PG</div></div>
  `;

  // Wrong review
  const wr = $('wrong-review');
  if (state.wrongItems.length > 0) {
    wr.innerHTML = `<div class="wr-title">Soal yang Perlu Dipelajari Ulang (${state.wrongItems.length})</div>` +
      state.wrongItems.map(item => `
        <div class="wr-item">
          <div class="wr-q">❓ ${item.q}</div>
          <div class="wr-ans">✅ ${item.correctOpt}</div>
        </div>
      `).join('');
  } else {
    wr.innerHTML = '';
  }

  // Essay summary
  const es = $('essay-summary');
  if (state.essayGrades.length > 0) {
    es.innerHTML = `<div class="es-title">Hasil Self-Grading Essay (${state.essayGrades.length})</div>` +
      state.essayGrades.map((g, i) => `
        <div class="es-item">
          <span>Essay ${i + 1}: ${g.q}</span>
          <span class="es-grade ${g.grade}">${g.grade === 'paham' ? '✅ Paham' : g.grade === 'sebagian' ? '🤔 Sebagian' : '❌ Belum Paham'}</span>
        </div>
      `).join('');
  } else {
    es.innerHTML = '';
  }
}

function getEmoji(correct, total) {
  if (total === 0) return '📝';
  const pct = correct / total;
  if (pct >= 0.9) return '🏆';
  if (pct >= 0.7) return '🎉';
  if (pct >= 0.5) return '💪';
  return '📚';
}

function getColor(pct) {
  if (pct >= 70) return '#10B981';
  if (pct >= 50) return '#F59E0B';
  return '#EF4444';
}

$('res-retry').addEventListener('click', () => {
  if (state.mode === 'mc') startMC();
  else if (state.mode === 'essay') startEssay();
  else startMC();
});

$('res-home').addEventListener('click', () => {
  renderHome();
  show('home');
});

// ============================================================
// CONFETTI
// ============================================================
function launchMiniConfetti() {
  const canvas = $('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: -10,
    r: Math.random() * 6 + 3,
    color: ['#7C3AED','#06B6D4','#10B981','#F59E0B','#EC4899'][Math.floor(Math.random()*5)],
    speed: Math.random() * 3 + 2,
    drift: (Math.random() - 0.5) * 2,
    spin: Math.random() * 0.2
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    frame++;
    if (frame < 60) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

function launchFullConfetti() {
  const canvas = $('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const count = 150;
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    w: Math.random() * 10 + 5,
    h: Math.random() * 5 + 3,
    color: ['#7C3AED','#06B6D4','#10B981','#F59E0B','#EC4899','#A78BFA','#34D399'][Math.floor(Math.random()*7)],
    speed: Math.random() * 4 + 2,
    drift: (Math.random() - 0.5) * 3,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.2
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      p.angle += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 180) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', e => {
  const mcActive = screens.mc.classList.contains('active');
  const essayActive = screens.essay.classList.contains('active');

  if (mcActive && state.answered) {
    if (e.key === 'Enter' || e.key === ' ') $('mc-next').click();
  }
  if (mcActive && !state.answered) {
    const map = { '1': 0, 'a': 0, '2': 1, 'b': 1, '3': 2, 'c': 2, '4': 3, 'd': 3 };
    const idx = map[e.key.toLowerCase()];
    if (idx !== undefined) {
      const btns = $('mc-opts').querySelectorAll('.opt-btn');
      if (btns[idx]) btns[idx].click();
    }
  }
  if (essayActive) {
    if (e.key === 'Enter' && e.ctrlKey) {
      if (!$('essay-next').classList.contains('hidden')) $('essay-next').click();
    }
  }
});

// ============================================================
// PROGRESS BAR reset on SVG gradient definition
// ============================================================
(function injectSVGDefs() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.width = '0';
  svg.style.height = '0';
  svg.style.position = 'absolute';
  svg.innerHTML = `
    <defs>
      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7C3AED"/>
        <stop offset="100%" stop-color="#06B6D4"/>
      </linearGradient>
    </defs>`;
  document.body.prepend(svg);
})();
