# Roadmap

## v1
- 24-question bank: About You, Behavioral, Problem Solving, Coding & Technical
- Framework, strong-answer points, pitfalls, next-time tip, and follow-ups per question
- 2-minute timer, editable answer drafts, 3-part self-scoring rubric
- Mock interview mode (5 random questions), filters, search, random question
- Progress saved in browser localStorage only

## v1.1 (current) — MLE / Data Scientist specialization, infra domain
- Decision answered by owner: interview questions for **MLE** and
  **Data Scientist** roles, with **ML infrastructure** as the domain area
- +36 questions (12 per new category):
  - **MLE** — distributed training, low-latency serving, feature stores,
    data leakage, GPU utilization, experiment tracking/model registry,
    offline+online evaluation, recommender infra, OOM debugging,
    inference cost reduction, continuous training
  - **Data Scientist** — experimentation platform design, metric-drop
    investigation, sample size/power, quasi-experiments for infra changes,
    metrics & logging design, A/B trade-off calls, anomaly detection on
    infra metrics, warehouse trust, peeking/sequential testing,
    valuing infra improvements, ML health dashboards, biased logged data
  - **ML Infrastructure** — ML platform design, GPU cluster scheduling,
    training data pipelines, multi-tenant inference platform, ML
    observability, model+data versioning, streaming features, infra cost,
    testing infra changes, CI/CD for ML, privacy/compliance, pipeline on-call
- Category filter now includes MLE, Data Scientist, ML Infrastructure

## v1.2 (current) — voice input + automatic feedback
- 🎤 Speak answer: speech-to-text per question via the Web Speech API
  (Chrome / Edge best; graceful "not supported" message elsewhere).
  Note: in Chrome, transcription is performed by the browser's speech
  service — the resulting text is stored only in localStorage.
- Automatic feedback on each answer, computed locally and rule-based:
  speaking length, metric/example presence, first-person ownership,
  STAR-style structure coverage, filler count, and key-point coverage
  against that question's guidance (with missing points listed).
  Shown on demand (*Check my answer*) and automatically on save.
- Still to be honest about: this is **not** AI grading. There is no
  backend, so no model reads the answer. An AI-feedback option would
  need a server/API key and would send answer text off-device.

## Next candidates
- [ ] Mock mode by track: an "MLE loop" / "DS loop" preset (system design + coding + behavioral mix)
- [ ] Coding drills for MLE/DS (SQL, Python/pandas, ML coding) with worked solutions
- [ ] Deeper infra system-design set: LLM serving, vector search infra, real-time ranking
- [ ] Record-and-playback practice (audio, on-device only)
- [ ] Export answers as a printable prep sheet
- [ ] Spaced review: resurface low-scored questions first
- [ ] GitHub Pages deployment from `main`
