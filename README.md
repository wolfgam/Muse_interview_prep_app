# Muse_interview_prep_app

Interview prep app — practice behavioral, technical, and general interview
questions with structured frameworks, timed answers, and honest self-scoring.

**Specialization (v1.1): MLE and Data Scientist interviews, with ML
infrastructure as the domain area** — distributed training, model serving,
feature stores, GPU clusters, experimentation platforms, metrics/logging
pipelines, and ML platform design.

## What this is

A no-build, no-login static web app. Open it and practice:

- **Question bank** — 60 questions across 7 categories
  (About You, Behavioral, Problem Solving, Coding & Technical,
  plus 12 each for **MLE**, **Data Scientist**, and **ML Infrastructure**),
  each with a difficulty level and follow-up questions.
- **A framework for every question** — STAR, "Past / Present / Future",
  "Clarify → Plan → Code → Test", and more, so an answer has a shape
  instead of rambling.
- **Guidance on reveal** — what a strong answer includes, the common
  pitfalls that weaken it, and a "next time" tip. Guidance stays hidden
  until you have written your own answer, so you practice first.
- **Timed practice** — 2-minute answer timer per question.
- **Self-scoring rubric** — rate Structure, Specific examples, and
  Clarity from 1–5 after each attempt. Answers stay editable, so you
  can improve and re-score the same question.
- **Mock interview mode** — 5 random questions in a row, timed.
- **Progress that sticks** — practiced questions and scores are saved
  in your browser (`localStorage`). Nothing leaves your device.

## Run it locally

No install, no server required:

```bash
# Option 1: just open the file
open index.html          # macOS
xdg-open index.html      # Linux

# Option 2: serve it (closer to how GitHub Pages will serve it)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | All styling (light, responsive, no external fonts) |
| `js/questions.js` | The question bank — add questions here |
| `js/app.js` | Practice, mock mode, timer, scoring, progress |
| `docs/ROADMAP.md` | Planned next steps |

## Add a question

Append an object to `QUESTIONS` in `js/questions.js`:

```js
{
  id: "behavioral-13",
  category: "Behavioral",
  difficulty: "Medium",           // Easy | Medium | Hard
  prompt: "Tell me about a time…",
  framework: "STAR — Situation, Task, Action, Result",
  strongAnswer: ["Point a strong answer makes", "…"],
  pitfalls: ["A common mistake", "…"],
  nextTime: "One concrete tip for the next attempt.",
  followUps: ["A likely follow-up question"]
}
```

## Roadmap

See `docs/ROADMAP.md`.
