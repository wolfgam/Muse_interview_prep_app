// Interview Prep app — practice flow, mock mode, timer, scoring, progress.
// Progress lives only in this browser's localStorage.
(function () {
  "use strict";

  const STORAGE_KEY = "interview-prep-progress-v1";
  const ANSWER_SECONDS = 120;

  const state = {
    progress: loadProgress(), // { [id]: { answer, scores:{structure,examples,clarity}, practiced } }
    mock: null,               // { queue: [ids], index: number }
    timers: new Map(),        // id -> interval id
  };

  const listEl = document.getElementById("question-list");
  const emptyEl = document.getElementById("empty-state");
  const template = document.getElementById("card-template");

  // ---------- progress ----------
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }
  function practicedCount() {
    return QUESTIONS.filter(q => state.progress[q.id]?.practiced).length;
  }
  function renderProgress() {
    const n = practicedCount();
    document.getElementById("progress-count").textContent =
      `${n} / ${QUESTIONS.length} practiced`;
    document.getElementById("progress-bar").style.width =
      (QUESTIONS.length ? (n / QUESTIONS.length) * 100 : 0) + "%";
  }

  // ---------- rendering ----------
  function currentFilters() {
    return {
      category: document.getElementById("filter-category").value,
      difficulty: document.getElementById("filter-difficulty").value,
      search: document.getElementById("search").value.trim().toLowerCase(),
    };
  }
  function visibleQuestions() {
    if (state.mock) {
      const id = state.mock.queue[state.mock.index];
      return QUESTIONS.filter(q => q.id === id);
    }
    const f = currentFilters();
    return QUESTIONS.filter(q => {
      if (f.category !== "all" && q.category !== f.category) return false;
      if (f.difficulty !== "all" && q.difficulty !== f.difficulty) return false;
      if (f.search) {
        const hay = (q.prompt + " " + q.category + " " + q.framework).toLowerCase();
        if (!hay.includes(f.search)) return false;
      }
      return true;
    });
  }

  function fillList(ul, items) {
    ul.innerHTML = "";
    items.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    });
  }

  function render() {
    // stop any running timers when cards are rebuilt
    state.timers.forEach(id => clearInterval(id));
    state.timers.clear();

    listEl.innerHTML = "";
    const qs = visibleQuestions();
    emptyEl.hidden = qs.length > 0;

    qs.forEach(q => {
      const node = template.content.firstElementChild.cloneNode(true);
      const saved = state.progress[q.id] || {};

      node.querySelector(".category").textContent = q.category;
      node.querySelector(".difficulty").textContent = q.difficulty;
      node.querySelector(".prompt").textContent = q.prompt;
      node.querySelector(".framework").textContent = "Framework: " + q.framework;
      node.querySelector(".done-badge").hidden = !saved.practiced;

      const answerEl = node.querySelector(".answer");
      answerEl.value = saved.answer || "";
      answerEl.addEventListener("input", () => {
        const p = (state.progress[q.id] ||= {});
        p.answer = answerEl.value;
        saveProgress();
      });

      const guidance = node.querySelector(".guidance");
      fillList(node.querySelector(".strong"), q.strongAnswer);
      fillList(node.querySelector(".pitfalls"), q.pitfalls);
      node.querySelector(".next-time span").textContent = q.nextTime;
      fillList(node.querySelector(".followups"), q.followUps);
      node.querySelector(".btn-reveal").addEventListener("click", () => {
        guidance.hidden = !guidance.hidden;
      });

      // rubric
      const savedScores = saved.scores || {};
      [["structure", ".score-structure"], ["examples", ".score-examples"], ["clarity", ".score-clarity"]]
        .forEach(([key, sel]) => {
          const input = node.querySelector(sel);
          const output = input.parentElement.querySelector("output");
          input.value = savedScores[key] ?? 3;
          output.textContent = input.value;
          input.addEventListener("input", () => { output.textContent = input.value; });
        });

      node.querySelector(".btn-save").addEventListener("click", () => {
        const p = (state.progress[q.id] ||= {});
        p.answer = answerEl.value;
        p.scores = {
          structure: Number(node.querySelector(".score-structure").value),
          examples: Number(node.querySelector(".score-examples").value),
          clarity: Number(node.querySelector(".score-clarity").value),
        };
        p.practiced = true;
        saveProgress();
        render();
      });

      // timer
      const timerEl = node.querySelector(".timer");
      let remaining = ANSWER_SECONDS;
      const paint = () => {
        const m = Math.floor(remaining / 60);
        const s = String(remaining % 60).padStart(2, "0");
        timerEl.textContent = `${m}:${s}`;
        timerEl.classList.toggle("done", remaining === 0);
      };
      paint();
      node.querySelector(".btn-timer-start").addEventListener("click", (ev) => {
        if (state.timers.has(q.id)) return;
        timerEl.classList.add("running");
        ev.target.disabled = true;
        const iv = setInterval(() => {
          remaining -= 1;
          if (remaining <= 0) {
            remaining = 0;
            clearInterval(iv);
            state.timers.delete(q.id);
            timerEl.classList.remove("running");
            ev.target.disabled = false;
          }
          paint();
        }, 1000);
        state.timers.set(q.id, iv);
      });
      node.querySelector(".btn-timer-reset").addEventListener("click", () => {
        const iv = state.timers.get(q.id);
        if (iv) clearInterval(iv);
        state.timers.delete(q.id);
        remaining = ANSWER_SECONDS;
        timerEl.classList.remove("running");
        node.querySelector(".btn-timer-start").disabled = false;
        paint();
      });

      listEl.appendChild(node);
    });

    renderProgress();
    renderMockBanner();
  }

  // ---------- mock mode ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function startMock() {
    const ids = shuffle(QUESTIONS.map(q => q.id)).slice(0, 5);
    state.mock = { queue: ids, index: 0 };
    render();
  }
  function endMock() {
    state.mock = null;
    render();
  }
  function renderMockBanner() {
    const banner = document.getElementById("mock-banner");
    if (!state.mock) { banner.hidden = true; return; }
    banner.hidden = false;
    document.getElementById("mock-status").textContent =
      `Mock interview — question ${state.mock.index + 1} of ${state.mock.queue.length}`;
    document.getElementById("btn-mock-next").textContent =
      state.mock.index + 1 >= state.mock.queue.length ? "Finish mock ✓" : "Next question →";
  }

  // ---------- controls ----------
  ["filter-category", "filter-difficulty"].forEach(id =>
    document.getElementById(id).addEventListener("change", render));
  document.getElementById("search").addEventListener("input", render);
  document.getElementById("btn-random").addEventListener("click", () => {
    state.mock = null;
    const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    state.mock = { queue: [q.id], index: 0, single: true };
    render();
  });
  document.getElementById("btn-mock").addEventListener("click", startMock);
  document.getElementById("btn-mock-end").addEventListener("click", endMock);
  document.getElementById("btn-mock-next").addEventListener("click", () => {
    if (!state.mock) return;
    if (state.mock.index + 1 >= state.mock.queue.length) endMock();
    else { state.mock.index += 1; render(); }
  });
  document.getElementById("btn-reset-progress").addEventListener("click", () => {
    if (confirm("Reset all saved answers, scores, and progress?")) {
      state.progress = {};
      saveProgress();
      render();
    }
  });

  render();
})();
