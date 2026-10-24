// Automatic answer feedback — pure, local, rule-based analysis.
// No server, no AI call: everything runs in the browser on the answer text.
// Loaded before app.js; also exportable for Node unit tests.
(function (global) {
  "use strict";

  const STOPWORDS = new Set((
    "about above after again against being below between both could doing " +
    "during each other first from having into itself just like more most " +
    "only other over same should some such than that their there these they " +
    "this those through under until very well were what when where which " +
    "while will with would your yours answer answers point points makes make"
  ).split(/\s+/));

  function tokenize(text) {
    return (text.toLowerCase().match(/[a-z0-9%$]+/g) || []);
  }
  function distinctiveWords(text) {
    return tokenize(text).filter(w => w.length > 4 && !STOPWORDS.has(w));
  }

  // Which parts of a STAR-style framework does the answer show evidence of?
  const STRUCTURE_SIGNALS = [
    ["Situation / context", /\b(situation|context|background|when i was|at the time|we had|there was)\b/i],
    ["Task / goal", /\b(task|goal|needed to|had to|responsible for|objective|challenge was)\b/i],
    ["Action (your specific steps)", /\b(i (built|led|decided|designed|implemented|created|analyzed|proposed|fixed|wrote|tested|worked|set up|introduced))\b/i],
    ["Result / outcome", /\b(result|outcome|increased|reduced|improved|saved|delivered|achieved|as a result|ended up|impact)\b/i],
  ];
  const FILLERS = ["just", "basically", "actually", "really", "very", "stuff", "things", "kind of", "sort of", "you know", "like"];

  function analyzeAnswer(question, rawText) {
    const text = (rawText || "").trim();
    const words = tokenize(text);
    const strengths = [];
    const improvements = [];

    if (words.length === 0) {
      return {
        summary: "No answer yet — type or use the 🎤 Speak button to dictate one, then check again.",
        speakingMinutes: 0, wordCount: 0, strengths, improvements,
        missingPoints: [],
      };
    }

    const speakingMinutes = words.length / 130; // average speaking pace
    const summary = `${words.length} words ≈ ${speakingMinutes.toFixed(1)} min spoken (target: ~1.5–2 min)`;

    // 1) Length / speaking time
    if (words.length < 50) improvements.push("Very short — under 50 words almost never covers a situation, your actions, and a result. Aim for 150–250 words.");
    else if (words.length < 110) improvements.push("A bit thin — you probably have the outline but not the detail. Add the hardest moment and the measurable result.");
    else if (words.length <= 300) strengths.push("Length is in the interview sweet spot (about 1–2 minutes spoken).");
    else improvements.push("Long — over ~2.5 minutes spoken, interviewers lose the thread. Cut background first, keep actions and result.");

    // 2) Concrete numbers / metrics
    if (/\d/.test(text)) strengths.push("Includes a concrete number or metric — results with numbers are believable.");
    else improvements.push("No numbers yet — add at least one: team size, %, time saved, traffic, cost, error rate. Unquantified results can't be judged.");

    // 3) Specific example anchoring
    if (/\b(for example|for instance|one time|when i|in my (previous|last|current)|a project where)\b/i.test(text))
      strengths.push("Anchored in a specific example, not general claims.");
    else improvements.push("No specific example detected — anchor the answer in one real situation ('For example, when I…').");

    // 4) First-person ownership
    const iCount = (text.match(/\bI\b/g) || []).length;
    const weCount = (text.match(/\bwe\b/gi) || []).length;
    if (iCount === 0) improvements.push("No 'I' in the answer — interviewers can't tell what *you* did. Use first person for your own actions.");
    else if (weCount > iCount * 2) improvements.push("Mostly 'we', little 'I' — separate your personal contribution from the team's more clearly.");
    else strengths.push("Clear personal ownership — your own contribution is visible, not hidden inside 'we'.");

    // 5) Structure signals (STAR-style)
    const isStar = /STAR/i.test(question.framework || "") ||
      ["Behavioral", "MLE", "Data Scientist", "ML Infrastructure"].includes(question.category);
    if (isStar) {
      const present = STRUCTURE_SIGNALS.filter(([, re]) => re.test(text)).map(([name]) => name);
      const missing = STRUCTURE_SIGNALS.filter(([, re]) => !re.test(text)).map(([name]) => name);
      if (missing.length === 0) strengths.push("Structure is complete: situation, task, your actions, and a result are all detectable.");
      else if (present.length >= 2) improvements.push(`Structure is partial — couldn't detect: ${missing.join("; ")}. Make those parts explicit.`);
      else improvements.push(`Structure is hard to follow — couldn't detect: ${missing.join("; ")}. Try the framework above, in order.`);
    }

    // 6) Filler / vague words
    const lower = " " + text.toLowerCase() + " ";
    const fillerCount = FILLERS.reduce((n, f) => n + (lower.split(f).length - 1), 0);
    if (fillerCount > Math.max(4, words.length / 35))
      improvements.push(`Lots of filler/vague words (${fillerCount}× just/basically/really/stuff/things…). Replace them with specifics — they quietly drain confidence.`);
    else if (words.length >= 80) strengths.push("Low filler — the language stays concrete.");

    // 7) Coverage of the question's strong-answer points
    const answerSet = new Set(distinctiveWords(text));
    const missingPoints = [];
    let covered = 0;
    (question.strongAnswer || []).forEach(point => {
      const keys = distinctiveWords(point);
      const hits = keys.filter(w => answerSet.has(w)).length;
      if (keys.length && hits / keys.length >= 0.25) covered += 1;
      else missingPoints.push(point);
    });
    if (question.strongAnswer && question.strongAnswer.length) {
      if (covered === question.strongAnswer.length) strengths.push(`Your answer touches all ${covered} key points from the guidance for this question.`);
      else improvements.push(`Key-point coverage: about ${covered} of ${question.strongAnswer.length} — see the missing points listed below, straight from this question's guidance.`);
    }

    return {
      summary, speakingMinutes: Number(speakingMinutes.toFixed(2)),
      wordCount: words.length, strengths, improvements,
      missingPoints: missingPoints.slice(0, 3),
    };
  }

  global.analyzeAnswer = analyzeAnswer;
  if (typeof module !== "undefined" && module.exports) module.exports = { analyzeAnswer };
})(typeof window !== "undefined" ? window : globalThis);
