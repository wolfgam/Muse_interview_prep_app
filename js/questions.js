// Question bank for the Interview Prep app.
// Add a question by appending an object — see README.md for the shape.
const QUESTIONS = [
  // ---------- About You ----------
  {
    id: "about-1", category: "About You", difficulty: "Easy",
    prompt: "Tell me about yourself.",
    framework: "Present → Past → Future: what you do now, how you got here, why this role is next.",
    strongAnswer: [
      "Opens with a one-line summary of who you are professionally, not your life story",
      "Connects 2–3 past experiences directly to this role's requirements",
      "Ends looking forward: why this job, why now"
    ],
    pitfalls: [
      "Reciting your whole resume chronologically from the beginning",
      "Personal details that don't connect to the job",
      "Running over 2 minutes — interviewers stop listening"
    ],
    nextTime: "Write your answer in 4 bullet points and time it. If it passes 90 seconds, cut the oldest detail first.",
    followUps: ["Why are you leaving your current role?", "What makes you a good fit here specifically?"]
  },
  {
    id: "about-2", category: "About You", difficulty: "Easy",
    prompt: "What is your greatest strength?",
    framework: "Claim → Evidence → Impact: name it, prove it with a story, quantify the result.",
    strongAnswer: [
      "Picks a strength the role actually needs (check the job posting)",
      "Backs it with one concrete example, not an adjective list",
      "Mentions a measurable or observable impact"
    ],
    pitfalls: [
      "Clichés with no proof: 'I'm a perfectionist / hard worker'",
      "Choosing a strength irrelevant to this job",
      "Sounding arrogant — let the example do the bragging"
    ],
    nextTime: "Prepare the story first, then name the strength it proves. Story-first answers sound credible, claim-first answers sound rehearsed.",
    followUps: ["Can you give another example of that?", "How would your last manager describe that strength?"]
  },
  {
    id: "about-3", category: "About You", difficulty: "Medium",
    prompt: "What is your greatest weakness?",
    framework: "Real weakness → What you do about it → Evidence it's improving.",
    strongAnswer: [
      "Names a genuine, fixable weakness — not a disguised strength",
      "Describes a specific system or habit you use to manage it",
      "Shows recent evidence the system is working"
    ],
    pitfalls: [
      "'I work too hard' — interviewers hear this as evasive",
      "Naming a weakness that is a core requirement of the job",
      "Stopping at the weakness with no improvement story"
    ],
    nextTime: "Pick the weakness you have the best improvement story for, not the one that sounds smallest.",
    followUps: ["How has that affected your work in the past?", "What feedback have you received about it?"]
  },
  {
    id: "about-4", category: "About You", difficulty: "Medium",
    prompt: "Why do you want to work here?",
    framework: "Company specifics → Your values/skills match → What you'll contribute.",
    strongAnswer: [
      "Names something specific: a product, project, team practice, or recent news",
      "Connects that specific thing to your own experience or values",
      "Explains what you bring, not only what you'll get"
    ],
    pitfalls: [
      "An answer that would work for any company ('great culture, good pay')",
      "Only talking about what the company does for your career",
      "Repeating the company's marketing copy back at them"
    ],
    nextTime: "Research one thing only the people who work there would mention — a talk, a blog post, a product detail — and lead with it.",
    followUps: ["What other companies are you considering?", "What would make you choose us over them?"]
  },
  {
    id: "about-5", category: "About You", difficulty: "Medium",
    prompt: "Where do you see yourself in five years?",
    framework: "Growth in this role → Skills you'll deepen → How that helps the team.",
    strongAnswer: [
      "Shows ambition that grows inside this role/company, not away from it",
      "Focuses on skills and responsibilities, not a specific title grab",
      "Sounds like a plan, not a fantasy — steps are plausible from this job"
    ],
    pitfalls: [
      "Naming a completely different career ('starting my own company')",
      "Being so vague it sounds uncommitted",
      "Asking for the interviewer's job, even as a joke"
    ],
    nextTime: "Answer from the job posting: where does someone excellent in this role naturally be in five years? Aim there.",
    followUps: ["How does this role fit that plan?", "What skills do you want to develop most?"]
  },
  {
    id: "about-6", category: "About You", difficulty: "Hard",
    prompt: "Why should we hire you over the other candidates?",
    framework: "Unique combination → Proof → Fit: the mix nobody else has, with evidence.",
    strongAnswer: [
      "Identifies a combination (e.g. domain + technical + language) that is rare",
      "Supports each part of the combination with a short proof point",
      "Ties the combination to a problem this team actually has"
    ],
    pitfalls: [
      "Putting other candidates down",
      "Listing generic virtues everyone claims",
      "Forgetting to connect back to the team's needs"
    ],
    nextTime: "Write your 'unfair advantage' sentence: 'I'm the candidate who combines X and Y, which matters here because Z.' Memorize that, improvise the rest.",
    followUps: ["What would you do in your first 90 days?", "What sets your work apart in practice?"]
  },

  // ---------- Behavioral (STAR) ----------
  {
    id: "behavioral-1", category: "Behavioral", difficulty: "Medium",
    prompt: "Tell me about a time you dealt with a difficult coworker or customer.",
    framework: "STAR — Situation, Task, Action, Result. Spend most time on Action.",
    strongAnswer: [
      "Describes the conflict neutrally, without blaming or mocking the other person",
      "Shows you listened first and understood their real concern",
      "Ends with a result and a working relationship that survived"
    ],
    pitfalls: [
      "Making the other person the villain and yourself the hero",
      "Choosing an example where the conflict never got resolved",
      "Complaining about the person instead of describing your actions"
    ],
    nextTime: "Audit your story: if the other person heard it, would they call it fair? If not, rewrite their side more generously.",
    followUps: ["What would you do differently now?", "How did the relationship change afterward?"]
  },
  {
    id: "behavioral-2", category: "Behavioral", difficulty: "Medium",
    prompt: "Tell me about a time you missed a deadline or made a mistake at work.",
    framework: "STAR + Learning: own it early in the story, then fix, then prevention.",
    strongAnswer: [
      "Takes clear ownership — no excuses in the first sentence",
      "Describes how you caught it, disclosed it, and repaired the damage",
      "Names the process change that prevents a repeat"
    ],
    pitfalls: [
      "Picking a trivial mistake that sounds fake",
      "Blaming tools, teammates, or unclear requirements",
      "No prevention step — the interviewer fears a repeat"
    ],
    nextTime: "Choose a real mistake with a clean recovery. Interviewers score the recovery and the prevention, not the size of the mistake.",
    followUps: ["How did your manager find out?", "What do you do differently since then?"]
  },
  {
    id: "behavioral-3", category: "Behavioral", difficulty: "Hard",
    prompt: "Tell me about a time you disagreed with your manager or team about a decision.",
    framework: "STAR + Respect: your case, their case, how it was decided, how you committed.",
    strongAnswer: [
      "Presents the other side's reasoning fairly before your own",
      "Shows you argued with data or a prototype, not volume or politics",
      "If you lost, shows you committed fully anyway — 'disagree and commit'"
    ],
    pitfalls: [
      "Sounding bitter about the outcome",
      "An example where you went around your manager",
      "Claiming you were right about everything, every time"
    ],
    nextTime: "Include one sentence about what the other side was right about. It signals maturity more than winning does.",
    followUps: ["What was the outcome?", "How do you handle it when you're overruled now?"]
  },
  {
    id: "behavioral-4", category: "Behavioral", difficulty: "Medium",
    prompt: "Tell me about your proudest accomplishment.",
    framework: "STAR with numbers: baseline → your specific contribution → measured result.",
    strongAnswer: [
      "Quantifies before/after (time, money, error rate, people affected)",
      "Separates your contribution from the team's clearly and honestly",
      "Explains why it was hard — obstacles make results meaningful"
    ],
    pitfalls: [
      "A team achievement where your role is invisible",
      "No numbers or scale, so the impact is unjudgeable",
      "Choosing something impressive but unrelated to this role"
    ],
    nextTime: "Add one number to every Result sentence. Even an estimate ('about 200 users') beats 'many people'.",
    followUps: ["What was the hardest part?", "Who else was involved?"]
  },
  {
    id: "behavioral-5", category: "Behavioral", difficulty: "Hard",
    prompt: "Tell me about a time you had to learn something quickly.",
    framework: "STAR + Method: the gap, your learning system, how you verified you got it.",
    strongAnswer: [
      "Describes a concrete learning method (docs, small experiments, shadowing, teaching it back)",
      "Shows a deadline or pressure that made speed necessary",
      "Explains how you checked your understanding before it counted"
    ],
    pitfalls: [
      "'I'm just a fast learner' with no method",
      "An example with no stakes or deadline",
      "Learning that never got applied to a real outcome"
    ],
    nextTime: "Name the resource and the verification step explicitly — those two details make any learning story believable.",
    followUps: ["How do you prefer to learn new tools?", "What are you learning right now?"]
  },
  {
    id: "behavioral-6", category: "Behavioral", difficulty: "Medium",
    prompt: "Tell me about a time you juggled multiple priorities or a heavy workload.",
    framework: "STAR + System: how you triaged, communicated, and renegotiated.",
    strongAnswer: [
      "Explains your prioritization rule (impact, deadline, dependencies)",
      "Shows you communicated early when something had to slip",
      "Mentions renegotiating scope or deadlines instead of silently failing"
    ],
    pitfalls: [
      "'I just worked longer hours' as the whole answer",
      "No system — everything sounded urgent, nothing was triaged",
      "A story where something important dropped without warning anyone"
    ],
    nextTime: "State your triage rule in one sentence at the start. A visible system is what this question is really testing.",
    followUps: ["How do you decide what to do first?", "What do you say when you can't do everything?"]
  },

  // ---------- Problem Solving ----------
  {
    id: "problem-1", category: "Problem Solving", difficulty: "Medium",
    prompt: "How would you approach a problem you've never seen before?",
    framework: "Understand → Break down → Smallest test → Iterate → Verify.",
    strongAnswer: [
      "Starts by clarifying the problem and constraints before solving",
      "Breaks it into smaller pieces and tackles the riskiest piece first",
      "Describes testing assumptions with small, cheap experiments"
    ],
    pitfalls: [
      "Jumping straight to a solution",
      "A purely abstract answer with no example",
      "Never mentioning how you'd know the solution works"
    ],
    nextTime: "Anchor the method to one real past problem in two sentences at the end — method plus proof.",
    followUps: ["Can you walk me through a real example?", "What do you do when you're stuck for hours?"]
  },
  {
    id: "problem-2", category: "Problem Solving", difficulty: "Hard",
    prompt: "You have two urgent projects and time for one. How do you decide?",
    framework: "Impact × Urgency × Cost of delay → Communicate → Commit.",
    strongAnswer: [
      "Defines impact concretely (revenue, users, deadlines, dependencies)",
      "Considers cost of delay, not just deadline order",
      "Communicates the trade-off to both stakeholders before deciding unilaterally"
    ],
    pitfalls: [
      "First-come-first-served as the only rule",
      "Deciding silently and surprising the losing stakeholder",
      "Trying to do both at half quality without saying so"
    ],
    nextTime: "Say the phrase 'cost of delay' and give one example of estimating it. It separates structured thinkers from busy people.",
    followUps: ["What if both stakeholders insist theirs is first?", "How do you handle the project you delayed?"]
  },
  {
    id: "problem-3", category: "Problem Solving", difficulty: "Medium",
    prompt: "Describe how you would explain a complex topic to a non-expert.",
    framework: "Audience → Analogy → Check understanding → Adjust.",
    strongAnswer: [
      "Starts by finding out what the listener already knows",
      "Uses one everyday analogy and sticks to it",
      "Checks understanding with a question instead of asking 'does that make sense?'"
    ],
    pitfalls: [
      "Defining jargon with more jargon",
      "Talking longer instead of simpler when they look lost",
      "No feedback loop — never verifying they understood"
    ],
    nextTime: "Actually demonstrate it: explain a real complex thing from your field in 30 seconds inside the answer.",
    followUps: ["Give me an example right now.", "How do you know when you've lost someone?"]
  },
  {
    id: "problem-4", category: "Problem Solving", difficulty: "Hard",
    prompt: "A project you own is falling behind schedule. Walk me through what you do.",
    framework: "Diagnose → Options (scope/time/resources) → Escalate early → New plan.",
    strongAnswer: [
      "Diagnoses the real cause (scope creep, dependency, estimate error) before reacting",
      "Presents options with trade-offs instead of just bad news",
      "Escalates early, while options still exist — not at the deadline"
    ],
    pitfalls: [
      "'Work harder / overtime' as the only lever",
      "Hiding the delay hoping to catch up",
      "Blaming a dependency without a mitigation plan"
    ],
    nextTime: "Memorize the three levers — scope, time, resources. Naming all three, with a recommendation, is a complete answer.",
    followUps: ["When exactly do you escalate?", "Tell me about a time this actually happened."]
  },
  {
    id: "problem-5", category: "Problem Solving", difficulty: "Medium",
    prompt: "How do you make a decision when you don't have all the information?",
    framework: "Reversible vs irreversible → Gather the cheapest key fact → Decide → Monitor.",
    strongAnswer: [
      "Distinguishes reversible decisions (move fast) from irreversible ones (slow down)",
      "Identifies the one or two facts that would most change the decision",
      "Sets a checkpoint to revisit if new information arrives"
    ],
    pitfalls: [
      "Paralysis: 'I'd wait until I know more' with no limit",
      "Deciding everything by gut with no reasoning",
      "No plan for being wrong"
    ],
    nextTime: "Use the phrase 'reversible decision' — deciding fast on reversible calls and slowly on irreversible ones is a complete philosophy in one line.",
    followUps: ["Tell me about a decision you got wrong.", "How much information is enough?"]
  },
  {
    id: "problem-6", category: "Problem Solving", difficulty: "Easy",
    prompt: "What do you do when you disagree with feedback you receive?",
    framework: "Listen fully → Separate delivery from content → Test it → Respond.",
    strongAnswer: [
      "Listens without interrupting or defending in the moment",
      "Looks for the true part, even if the delivery was poor",
      "Follows up later with what you changed or why you respectfully disagree"
    ],
    pitfalls: [
      "Sounding defensive while claiming to welcome feedback",
      "Agreeing with everything — no judgment of your own",
      "Never circling back, so the giver assumes you ignored it"
    ],
    nextTime: "Include a real example where feedback stung and you used part of it anyway. That story is the proof.",
    followUps: ["What's the hardest feedback you've received?", "How do you give feedback to others?"]
  },

  // ---------- Coding & Technical ----------
  {
    id: "tech-1", category: "Coding & Technical", difficulty: "Medium",
    prompt: "Walk me through how you debug a bug you can't reproduce.",
    framework: "Gather evidence → Narrow the variables → Hypothesize → Instrument → Verify fix.",
    strongAnswer: [
      "Starts with information: logs, environment, timing, who/what is affected",
      "Changes one variable at a time; uses binary-search style narrowing",
      "Adds logging/instrumentation instead of guessing, and confirms the fix against the original evidence"
    ],
    pitfalls: [
      "Randomly changing code until it 'works'",
      "Assuming the bug is where the error message appears",
      "No verification step — declaring victory when the symptom hides"
    ],
    nextTime: "Tell it as a real bug story with the false lead included. Showing a hypothesis you ruled out proves the method.",
    followUps: ["What's the hardest bug you've found?", "How do you prevent it recurring?"]
  },
  {
    id: "tech-2", category: "Coding & Technical", difficulty: "Medium",
    prompt: "How do you decide between building a solution yourself and using an existing library or tool?",
    framework: "Core vs commodity → Cost of ownership → Risk/exit plan.",
    strongAnswer: [
      "Builds only what's core to the product; buys/adopts commodity pieces",
      "Counts total cost: maintenance, security updates, onboarding — not just day one",
      "Checks the library's health (maintenance, license, community) and has an exit if it's abandoned"
    ],
    pitfalls: [
      "'I always build it myself' / 'I always use a library' — no judgment either way",
      "Ignoring license or maintenance status",
      "Forgetting the cost of learning and integrating the tool"
    ],
    nextTime: "Give one example each way: something you adopted and something you built, with the deciding factor for each.",
    followUps: ["Tell me about a library choice you regretted.", "How do you evaluate a new tool?"]
  },
  {
    id: "tech-3", category: "Coding & Technical", difficulty: "Hard",
    prompt: "Explain a technical concept you know well, as if I were a smart non-programmer.",
    framework: "Plain idea first → One analogy → One concrete example → Why it matters.",
    strongAnswer: [
      "Leads with what the concept does for people, not how it works internally",
      "Uses a single consistent analogy (e.g. an API is a waiter between you and the kitchen)",
      "Checks in: 'Want the deeper version?' instead of dumping everything"
    ],
    pitfalls: [
      "Defining terms with more terms",
      "Switching analogies mid-explanation",
      "Talking down to the listener"
    ],
    nextTime: "Practice the 30-second version of your favorite concept out loud once. This question rewards rehearsal more than knowledge.",
    followUps: ["Now explain it to a junior engineer.", "Where does your analogy break down?"]
  },
  {
    id: "tech-4", category: "Coding & Technical", difficulty: "Medium",
    prompt: "Tell me about a technical project you're proud of. What was your role and what was hard?",
    framework: "Goal → Your specific role → Hardest problem → How you solved it → Result.",
    strongAnswer: [
      "Makes your personal contribution unmistakable inside the team effort",
      "Names a genuinely hard technical problem, not just a big workload",
      "Quantifies the outcome (speed, scale, reliability, users)"
    ],
    pitfalls: [
      "All 'we', never 'I' — the interviewer can't evaluate you",
      "Describing the product instead of the engineering problem",
      "No result or measurement at the end"
    ],
    nextTime: "Prepare the one hardest sub-problem in detail — interviewers always drill into it, and depth there carries the whole answer.",
    followUps: ["What would you redesign today?", "What did you learn from it?"]
  },
  {
    id: "tech-5", category: "Coding & Technical", difficulty: "Hard",
    prompt: "How would you design a system that has to handle far more users than it does today?",
    framework: "Clarify scale → Find the bottleneck → Scale that layer → Measure.",
    strongAnswer: [
      "Asks clarifying questions first: how many users, reads vs writes, latency needs",
      "Identifies the likely bottleneck (database, single server, external API) instead of scaling everything",
      "Proposes staged steps: measure, cache, split, then distribute — cheapest first"
    ],
    pitfalls: [
      "Jumping to microservices/Kubernetes with no numbers",
      "Scaling layers that aren't the bottleneck",
      "Never mentioning measurement or cost"
    ],
    nextTime: "Always ask 'how much more, and what breaks first?' before designing. The clarifying questions are half the grade.",
    followUps: ["What's the first thing that breaks?", "How would you test that it scales?"]
  },
  {
    id: "tech-6", category: "Coding & Technical", difficulty: "Easy",
    prompt: "How do you keep your technical skills up to date?",
    framework: "Sources → Practice → Proof: what you read, what you build, what shipped.",
    strongAnswer: [
      "Names specific sources (docs, newsletters, communities) rather than 'the internet'",
      "Includes hands-on practice: side projects, prototypes, contributing",
      "Points to something recent you actually learned and used"
    ],
    pitfalls: [
      "Only passive consumption — reading, never building",
      "Nothing specific or recent",
      "Claiming to learn everything; depth beats breadth here"
    ],
    nextTime: "End with the thing you're learning right now and why. Present tense beats a list of past courses.",
    followUps: ["What have you learned most recently?", "How do you choose what to learn next?"]
  },

  // ---------- MLE (Machine Learning Engineering) — infra domain ----------
  {
    id: "mle-1", category: "MLE", difficulty: "Hard",
    prompt: "Design a distributed training system for a model that no longer fits or trains fast enough on one machine.",
    framework: "Clarify (model size, data size, budget) → Parallelism strategy → Checkpointing & fault tolerance → Measure throughput.",
    strongAnswer: [
      "Asks model size, dataset size, and cluster budget before choosing a strategy",
      "Distinguishes data parallelism, tensor/pipeline parallelism, and ZeRO-style sharding — and when each wins",
      "Includes checkpointing, spot/preemptible instance handling, and how a failed worker recovers without restarting the job"
    ],
    pitfalls: [
      "Naming a framework (PyTorch DDP/FSDP, DeepSpeed) with no reasoning about communication vs compute",
      "Ignoring data loading — GPUs idle waiting on the dataloader is the classic bottleneck",
      "No fault-tolerance story: one node dies, the whole multi-day job dies"
    ],
    nextTime: "Lead with the bottleneck math: model size vs GPU memory, and tokens/examples per second you need. The parallelism choice should fall out of those two numbers.",
    followUps: ["How do you debug training throughput suddenly dropping 30%?", "Data parallel or model parallel here — why?"]
  },
  {
    id: "mle-2", category: "MLE", difficulty: "Hard",
    prompt: "Design a low-latency, high-throughput model serving system for a production model.",
    framework: "Requirements (p99 latency, QPS, model size) → Serving stack → Batching & caching → Rollout & rollback.",
    strongAnswer: [
      "Starts from numbers: p99 latency budget, peak QPS, model size, hardware available",
      "Uses dynamic batching, caching, and where useful quantization/distillation — with the accuracy trade-off stated",
      "Covers deployment safety: shadow mode, canary, automatic rollback on latency or quality regressions"
    ],
    pitfalls: [
      "Designing for average latency instead of p99",
      "Batching everything — batching helps throughput but hurts tail latency for single requests",
      "No plan for a bad model version reaching 100% of traffic"
    ],
    nextTime: "Draw the latency budget line by line (network, feature fetch, inference, post-processing). Interviewers grade the budget, not the boxes.",
    followUps: ["How do you handle a traffic spike of 10x?", "CPU or GPU serving for this model — how do you decide?"]
  },
  {
    id: "mle-3", category: "MLE", difficulty: "Medium",
    prompt: "Your model's online performance dropped but offline metrics look fine. How do you debug it?",
    framework: "Verify data first → Train/serve skew → Distribution shift → Label/feedback loop.",
    strongAnswer: [
      "Checks the serving data pipeline before the model: schema changes, null rates, feature freshness",
      "Hunts training-serving skew: features computed differently offline vs online",
      "Compares live input distribution to training distribution (drift), and checks delayed/corrupted labels"
    ],
    pitfalls: [
      "Retraining immediately without diagnosing — you may bake in the bug",
      "Trusting offline metrics computed on the same broken pipeline",
      "Forgetting feedback loops: the model's own outputs changing future training data"
    ],
    nextTime: "Memorize the order: data → features → distribution → labels → model last. Saying that order out loud is most of this answer.",
    followUps: ["What monitoring would have caught this earlier?", "How do you detect feature skew systematically?"]
  },
  {
    id: "mle-4", category: "MLE", difficulty: "Hard",
    prompt: "Design a feature store for a team training and serving many models.",
    framework: "Requirements → Offline store → Online store → Point-in-time correctness & consistency.",
    strongAnswer: [
      "Separates offline (training, batch, high throughput) from online (serving, low latency) storage",
      "Guarantees point-in-time correctness so training never uses future information (label leakage)",
      "Uses one feature definition/transformation for both training and serving to prevent skew"
    ],
    pitfalls: [
      "Two implementations of the same feature, one per side — guaranteed skew",
      "Ignoring point-in-time joins; leakage inflates offline metrics and collapses online",
      "No feature freshness, lineage, or ownership story"
    ],
    nextTime: "Say 'point-in-time correctness' and 'single transformation, two materializations' early — those two phrases are the core of any feature store answer.",
    followUps: ["How do you backfill a feature for two years of history?", "How do you monitor feature freshness?"]
  },
  {
    id: "mle-5", category: "MLE", difficulty: "Medium",
    prompt: "How do you prevent data leakage in a training pipeline?",
    framework: "Time-based splits → Feature audit → Pipeline enforcement → Leakage tests.",
    strongAnswer: [
      "Uses time-based train/test splits for time-ordered data, not random splits",
      "Audits features for anything computed after the prediction moment or derived from the label",
      "Builds enforcement into the pipeline: point-in-time joins, feature allowlists, automated checks"
    ],
    pitfalls: [
      "Random splits on time-series data",
      "Preprocessing (scalers, imputers, target encoding) fit on the full dataset before splitting",
      "Relying on humans remembering — no automated leakage check"
    ],
    nextTime: "Give one real leakage example (a feature that secretly encodes the label) — one concrete story beats a list of rules.",
    followUps: ["How would leakage show up in your metrics?", "Where in the pipeline do you fit preprocessing, exactly?"]
  },
  {
    id: "mle-6", category: "MLE", difficulty: "Medium",
    prompt: "GPU utilization on your training cluster is 35%. How do you find and fix the waste?",
    framework: "Profile first → Data pipeline → Kernel/compute → Scheduling & packing.",
    strongAnswer: [
      "Profiles before guessing: dataloader throughput, host-to-device transfer, kernel time, communication waits",
      "Fixes input pipeline: prefetching, caching, parallel loading, better data formats (e.g. sharded/columnar)",
      "Improves scheduling: packing jobs, right-sizing requests, preemption policies so GPUs don't sit reserved-but-idle"
    ],
    pitfalls: [
      "Buying more GPUs as the first answer",
      "Confusing GPU allocated with GPU utilized",
      "Optimizing model code when the dataloader was the bottleneck"
    ],
    nextTime: "Quote the diagnostic order: input → transfer → compute → communication → scheduling. A measured 35% with a profile beats a guessed fix.",
    followUps: ["How do you measure true utilization?", "What do you do about many small jobs fragmenting the cluster?"]
  },
  {
    id: "mle-7", category: "MLE", difficulty: "Hard",
    prompt: "Design an experiment-tracking and model-registry system so any production model can be reproduced exactly.",
    framework: "Track everything (code, data, config, env) → Version models → Promote with gates → Audit trail.",
    strongAnswer: [
      "Logs code commit, data version/snapshot, hyperparameters, environment, and random seeds for every run",
      "Model registry with stages (staging/production/archived) and approval/evaluation gates for promotion",
      "Ties each production prediction period back to the exact artifact, data, and code that produced the model"
    ],
    pitfalls: [
      "Tracking hyperparameters but not the data version — the most common reproducibility hole",
      "Manual promotion with no evaluation gate",
      "'Reproducible' meaning rerunning a notebook from memory"
    ],
    nextTime: "List the five things you log without pausing: code, data, config, environment, seed. Completeness of that list is the answer.",
    followUps: ["How do you version datasets at scale?", "A model in production can't be reproduced — where do you look first?"]
  },
  {
    id: "mle-8", category: "MLE", difficulty: "Medium",
    prompt: "How do you evaluate a model change before it reaches all users? Cover offline and online evaluation.",
    framework: "Offline gates → Shadow → Canary/A/B → Guardrails & rollback criteria.",
    strongAnswer: [
      "Offline: held-out and slice-based evaluation, especially on segments that matter or historically fail",
      "Online: shadow deployment, then canary or A/B with pre-registered success and guardrail metrics",
      "Defines rollback criteria before launch, not during an incident"
    ],
    pitfalls: [
      "Offline accuracy up, shipping it — with no online validation",
      "An A/B test with no guardrails (latency, revenue, safety metrics)",
      "Peeking at results and stopping the test when it looks good"
    ],
    nextTime: "Structure the answer as a funnel with a gate at each stage and a named metric per gate. Stage-gates are what infra-minded interviewers want.",
    followUps: ["Offline and online results disagree — which do you trust?", "How long do you run the canary?"]
  },
  {
    id: "mle-9", category: "MLE", difficulty: "Hard",
    prompt: "Design the training and serving infrastructure for a recommendation system that must respond in under 100 ms.",
    framework: "Candidate generation → Ranking → Feature infra → Latency budget → Freshness trade-offs.",
    strongAnswer: [
      "Two-stage design: fast candidate retrieval (e.g. ANN index) then a heavier ranking model on a small set",
      "Precomputes what's stable (embeddings, user features) and computes at request time only what's cheap and fresh",
      "Budgets the 100 ms across retrieval, feature fetch, ranking, and business rules — with fallbacks when a layer times out"
    ],
    pitfalls: [
      "One giant model scoring the whole catalog per request",
      "No fallback: a slow feature store takes the whole recommender down",
      "Ignoring freshness: embeddings updated monthly for a system selling timely content"
    ],
    nextTime: "Start with the latency budget split across stages. If your stages don't add up to under 100 ms, the design isn't done.",
    followUps: ["How do you keep embeddings fresh?", "Cold start for a new user or item — how does the infra handle it?"]
  },
  {
    id: "mle-10", category: "MLE", difficulty: "Medium",
    prompt: "Training keeps running out of GPU memory or crashing mid-run. Walk me through your debugging.",
    framework: "Reproduce & isolate → Memory accounting → Data-dependent causes → Harden the job.",
    strongAnswer: [
      "Accounts for memory: parameters, gradients, optimizer state, activations — and which one actually blew up",
      "Checks data-dependent causes: an unusually long sequence or large batch element in one shard",
      "Hardens the job: activation checkpointing, gradient accumulation, memory profiling in CI, checkpoint-resume on failure"
    ],
    pitfalls: [
      "Just shrinking the batch size without understanding where memory went",
      "Missing optimizer state — with Adam it can be 2x the parameters",
      "A crash 10 hours in with no checkpointing, treated as bad luck rather than a system flaw"
    ],
    nextTime: "Do the memory math out loud for a concrete model size (params × bytes, ×4 for Adam training). Interviewers love hearing the arithmetic.",
    followUps: ["What does activation checkpointing trade away?", "How do you catch this before the big run?"]
  },
  {
    id: "mle-11", category: "MLE", difficulty: "Medium",
    prompt: "How would you reduce inference cost by 50% without a noticeable quality drop?",
    framework: "Measure the cost drivers → Cheaper model (distill/quantize/prune) → Cheaper system (batch/cache/route) → Verify quality per slice.",
    strongAnswer: [
      "Profiles where cost actually is: model size, request volume, low utilization, over-provisioning",
      "Model levers: quantization (FP16/INT8), distillation to a smaller model, pruning — each validated per segment, not just on average",
      "System levers: request caching, dynamic batching, routing easy traffic to a small model and hard traffic to the big one"
    ],
    pitfalls: [
      "Quantizing and checking only the global metric — a minority slice silently tanks",
      "Cutting capacity so p99 latency explodes at peak",
      "No quality budget defined: 'noticeable' was never made measurable"
    ],
    nextTime: "Pair every cost lever with its quality check in the same sentence. Cost answers without quality guards sound reckless; quality answers without cost sound naive.",
    followUps: ["Your quantization hurts one user segment — what now?", "How do you decide the routing threshold?"]
  },
  {
    id: "mle-12", category: "MLE", difficulty: "Hard",
    prompt: "Design a continuous training (CT) pipeline that retrains and redeploys a model safely on a schedule and on drift triggers.",
    framework: "Triggers → Data validation → Training & eval gates → Progressive rollout → Monitoring & auto-rollback.",
    strongAnswer: [
      "Defines triggers: schedule, data volume, and performance/drift signals — with data validation before any training starts",
      "Automated evaluation gates comparing candidate vs current production model on fresh held-out data and key slices",
      "Progressive rollout with automatic rollback, and a human approval option for high-risk models"
    ],
    pitfalls: [
      "Auto-deploying whatever training produces, no gate",
      "Training on poisoned/drifted data because validation was skipped",
      "No way to answer 'which data trained the model live right now?'"
    ],
    nextTime: "Draw it as CI/CD for models: data checks are the unit tests, eval gates are the integration tests, canary is the staged deploy. That analogy organizes the whole answer.",
    followUps: ["Drift triggers fire weekly — is the model or the world changing?", "How do you stop a bad data day from becoming a bad model?"]
  },

  // ---------- Data Scientist — infra domain ----------
  {
    id: "ds-1", category: "Data Scientist", difficulty: "Hard",
    prompt: "Design an experimentation platform for a company running hundreds of A/B tests a month.",
    framework: "Assignment → Logging → Metrics pipeline → Analysis guardrails (SRM, peeking, multiple testing).",
    strongAnswer: [
      "Consistent, sticky randomization (hash of user ID + experiment ID) with layers so experiments don't collide",
      "Exposure logging separate from assignment, so analysis counts only users who actually saw the treatment",
      "Automated guardrails: sample-ratio-mismatch (SRM) checks, pre-computed metrics, corrections for peeking/multiple comparisons"
    ],
    pitfalls: [
      "Randomizing per request instead of per user — users flip between variants",
      "Analyzing assigned users rather than exposed users",
      "No SRM check: a broken assignment quietly invalidates the whole test"
    ],
    nextTime: "Name SRM unprompted and explain what you'd do when it fires (stop, find the bug, restart). It's the highest-signal detail in platform answers.",
    followUps: ["How do you handle overlapping experiments interacting?", "Ramp from 1% to 50% — what do you watch at each step?"]
  },
  {
    id: "ds-2", category: "Data Scientist", difficulty: "Medium",
    prompt: "A core product metric dropped 15% overnight. How do you investigate?",
    framework: "Verify the data → Segment → Timeline & changes → External factors.",
    strongAnswer: [
      "First rules out a logging/pipeline break: did the metric definition, event, or ETL change?",
      "Segments by platform, country, version, new vs existing users to localize the drop",
      "Aligns the drop's start time with deploys, releases, outages, and external events before theorizing about user behavior"
    ],
    pitfalls: [
      "Jumping to a user-behavior story before checking the data pipeline",
      "Looking only at the aggregate — Simpson's paradox hides the real segment",
      "No timestamp alignment with releases and incidents"
    ],
    nextTime: "Say your first check out loud: 'Is this real, or is it the data?' Infra-fluent data scientists always verify the pipeline before the product.",
    followUps: ["The drop is only on one platform — next step?", "How do you decide when it's an incident vs a real trend?"]
  },
  {
    id: "ds-3", category: "Data Scientist", difficulty: "Medium",
    prompt: "How do you calculate the sample size and duration for an A/B test on a conversion metric?",
    framework: "Baseline & MDE → Power/significance → Sample formula → Duration & practical checks.",
    strongAnswer: [
      "Starts from baseline rate, minimum detectable effect (MDE), power (typically 80%), and significance (typically 5%)",
      "Converts required sample per variant into calendar time using real daily traffic — and checks day-of-week cycles",
      "States the trade-off: smaller MDE means quadratically more sample; business must choose what's worth detecting"
    ],
    pitfalls: [
      "Quoting n without tying it to the baseline rate and MDE",
      "Running less than a full weekly cycle for a weekday-skewed product",
      "Ignoring that low-traffic surfaces simply cannot detect small effects — and pretending otherwise"
    ],
    nextTime: "Work one tiny numeric example aloud (baseline 10%, MDE 1pt). Being able to estimate order-of-magnitude n on the spot is the skill being tested.",
    followUps: ["Traffic is half what you planned — extend, accept less power, or stop?", "How do you handle novelty/primacy effects in duration?"]
  },
  {
    id: "ds-4", category: "Data Scientist", difficulty: "Hard",
    prompt: "You can't run an A/B test on an infrastructure change (e.g. a new serving stack). How do you measure its impact?",
    framework: "Quasi-experiments: switchbacks / geo / diff-in-diff / synthetic control → Confounders → Sensitivity.",
    strongAnswer: [
      "Picks a design that fits the constraint: switchback (time-sliced) tests for shared-system changes, geo experiments, or difference-in-differences",
      "Names the identifying assumption for the chosen method and how they'd sanity-check it (parallel trends, placebo periods)",
      "Runs sensitivity/placebo analyses instead of reporting one fragile number"
    ],
    pitfalls: [
      "Before/after comparison presented as causal, ignoring trends and seasonality",
      "Diff-in-diff with no parallel-trends check",
      "Forgetting interference: an infra change often affects control and treatment together, which is why normal A/B fails"
    ],
    nextTime: "Lead with why A/B fails here (interference / can't randomize a shared system), then pick the design. Naming the obstacle earns the method.",
    followUps: ["How do switchbacks handle carryover effects?", "Your geo test and diff-in-diff disagree — which do you believe?"]
  },
  {
    id: "ds-5", category: "Data Scientist", difficulty: "Medium",
    prompt: "Design the metrics and logging for a new ML-powered feature so its impact can actually be measured.",
    framework: "Decision first → Primary + guardrail metrics → Event taxonomy → Joinability to model outputs.",
    strongAnswer: [
      "Starts from the decision the metrics must support (ship / iterate / kill), then picks one primary metric and explicit guardrails",
      "Defines a clean event taxonomy (impression, exposure to model output, action, outcome) with stable IDs",
      "Logs model version, score, and features shown per impression so analysis can join outcomes to exactly what the model did"
    ],
    pitfalls: [
      "Logging clicks but not impressions — no denominator, no rate",
      "No model version in the logs, so a regression can't be attributed to a release",
      "Twenty 'primary' metrics and no guardrails"
    ],
    nextTime: "Stress the join: user, impression, model version, outcome — if those four can't be joined, nothing downstream works. That's the infra insight.",
    followUps: ["Labels arrive 7 days late — how does that change the design?", "Which guardrail would stop a launch even if the primary metric is up?"]
  },
  {
    id: "ds-6", category: "Data Scientist", difficulty: "Hard",
    prompt: "An A/B test shows the primary metric up significantly, but a guardrail metric is down. Walk me through your analysis and recommendation.",
    framework: "Trust checks (SRM, logging) → Segment the trade-off → Quantify net value → Recommend with conditions.",
    strongAnswer: [
      "Validates the test first: SRM, exposure logging, metric pipeline — before interpreting anything",
      "Segments both effects: is the guardrail loss concentrated where the gain isn't (or in a vulnerable group)?",
      "Puts both effects in common units where possible (revenue, retention, long-term value) and recommends ship / iterate / no-ship with reasoning"
    ],
    pitfalls: [
      "'Primary is significant, ship it' — ignoring the guardrail's purpose",
      "Treating statistical significance as business importance",
      "No segmentation: an average trade-off may hide a segment being harmed badly"
    ],
    nextTime: "Frame it as an explicit trade-off with numbers, then a conditional recommendation ('ship if we accept X, because Y'). Decision-shaped answers beat analysis-shaped ones.",
    followUps: ["How do you weigh a short-term gain against a long-term guardrail?", "The CEO wants to ship — how do you present this?"]
  },
  {
    id: "ds-7", category: "Data Scientist", difficulty: "Medium",
    prompt: "How would you detect anomalies in a high-volume infrastructure metric (e.g. latency, error rate, GPU usage)?",
    framework: "Seasonality-aware baseline → Robust thresholds → Alert quality (precision/fatigue) → Root-cause drill-downs.",
    strongAnswer: [
      "Models the expected pattern first: daily/weekly seasonality and trend, not a flat threshold",
      "Uses robust statistics (medians, percentiles, MAD) so anomalies don't corrupt the baseline",
      "Tunes for alert precision and routes alerts with segmentation (region, service, version) attached, fighting alert fatigue"
    ],
    pitfalls: [
      "A static threshold on a strongly seasonal metric — false alarms every weekend",
      "Mean/std on heavy-tailed latency data",
      "Detecting without localizing: an alert that can't say where is noise"
    ],
    nextTime: "Mention p95/p99 and seasonality in the first two sentences. Infra metrics are seasonal and heavy-tailed, and your method must say so.",
    followUps: ["Your detector fires 200 times a day — what do you change?", "Point anomaly vs a slow drift upward — same detector?"]
  },
  {
    id: "ds-8", category: "Data Scientist", difficulty: "Medium",
    prompt: "The data warehouse table your analysis depends on is slow, duplicated, and nobody trusts it. How do you fix it?",
    framework: "Find the consumers → Define the canonical model → Test & document → Deprecate the copies.",
    strongAnswer: [
      "Maps who actually uses the table and for which decisions before redesigning anything",
      "Builds one canonical, tested model (clear grain, dedup logic, documented definitions) instead of another fork",
      "Adds data tests (uniqueness, freshness, referential checks) and an owner, then migrates consumers and deletes the duplicates"
    ],
    pitfalls: [
      "Creating yet another 'clean_v2' table and adding to the sprawl",
      "No data tests — trust decays again within a quarter",
      "Redesigning without talking to consumers, breaking silent dependencies"
    ],
    nextTime: "Talk about grain and tests explicitly ('one row per X, tested daily'). Analytics-engineering fluency is what separates this answer.",
    followUps: ["Two teams define the same metric differently — how do you resolve it?", "How do you know the new table is right?"]
  },
  {
    id: "ds-9", category: "Data Scientist", difficulty: "Hard",
    prompt: "A team peeked at their A/B test daily and stopped it the first day p < 0.05. Explain the problem and what the platform should do about it.",
    framework: "Optional stopping inflates false positives → Quantify it → Platform fixes: sequential methods / pre-registration / fixed horizons.",
    strongAnswer: [
      "Explains that repeated peeking with a fixed-horizon p-value inflates the true false-positive rate far above 5%",
      "Notes the stopped-early effect size is also biased upward (winner's curse)",
      "Platform remedies: pre-registered sample size and end date, sequential testing (e.g. alpha-spending / always-valid p-values), or Bayesian decision rules"
    ],
    pitfalls: [
      "Saying 'peeking is bad' without explaining the false-positive inflation",
      "Suggesting willpower ('just don't peek') instead of a platform/method fix",
      "Claiming Bonferroni on every peek is the standard answer — it wastes power vs sequential methods"
    ],
    nextTime: "Give the intuition with a number: peeking daily for a month can push a nominal 5% false-positive rate toward 20–30%. A concrete inflation figure sticks.",
    followUps: ["Business wants a live dashboard anyway — what do you show?", "When is stopping early legitimate?"]
  },
  {
    id: "ds-10", category: "Data Scientist", difficulty: "Medium",
    prompt: "How do you estimate whether an infrastructure improvement (say, 200 ms faster page loads) is worth its cost?",
    framework: "Measure latency→outcome relationship causally → Convert to business value → Compare to eng cost → Validate after launch.",
    strongAnswer: [
      "Estimates the effect credibly: use natural experiments, injected-delay tests, or geo/switchback variation — not just correlation between fast users and conversion",
      "Converts the effect into business units (conversion, retention, revenue) with uncertainty ranges",
      "Compares against the fully-loaded cost (eng time, infra spend) and plans a post-launch validation"
    ],
    pitfalls: [
      "Correlating fast sessions with high conversion and calling it causal — fast users differ from slow users",
      "A point estimate with no uncertainty",
      "Counting infra cost but not the opportunity cost of the engineers"
    ],
    nextTime: "Flag the confounding trap before they ask: people with fast loads are not random. Naming that trap is the highest-value sentence in this answer.",
    followUps: ["How would an injected-delay experiment work, ethically and technically?", "The effect is real but tiny — how do you present it?"]
  },
  {
    id: "ds-11", category: "Data Scientist", difficulty: "Medium",
    prompt: "Design a self-serve analytics dashboard for engineering teams to monitor ML system health.",
    framework: "Users & decisions → Layered metrics (system, model, business) → Freshness & trust signals → Drill-down paths.",
    strongAnswer: [
      "Organizes by decision layers: system health (latency, errors), model health (score distribution, drift, freshness), business impact",
      "Shows data freshness and pipeline status on the dashboard itself, so users know when not to trust it",
      "Every top-level number drills down by model version, segment, and time — anomalies must be localizable in two clicks"
    ],
    pitfalls: [
      "A wall of charts with no decision attached to any of them",
      "No freshness indicator — teams act on stale data during an outage of the pipeline itself",
      "Model quality metrics with no system metrics, or vice versa"
    ],
    nextTime: "For each dashboard section, name the decision it drives. If you can't, cut the section — say that principle out loud.",
    followUps: ["Which single number goes on the front page?", "How do you stop dashboard sprawl over time?"]
  },
  {
    id: "ds-12", category: "Data Scientist", difficulty: "Hard",
    prompt: "Your training data comes from logs generated by the current production model. What biases does that create and how do you handle them?",
    framework: "Selection/feedback bias → Position & exposure bias → Corrections: exploration, propensity weighting, counterfactual eval.",
    strongAnswer: [
      "Names the core problem: you only observe outcomes for items the old model chose to show (selection bias / feedback loop)",
      "Covers exposure/position bias in logged interactions and delayed, censored labels",
      "Mitigations: a small exploration/randomized traffic slice, propensity logging with inverse-propensity weighting, counterfactual/off-policy evaluation before training on logs naively"
    ],
    pitfalls: [
      "Training on logged data as if it were a random sample",
      "No propensity or model-version logging, making correction impossible later",
      "Evaluating the new model on the same biased logs and declaring victory"
    ],
    nextTime: "Say 'we only see outcomes where the old policy acted' in plain words first, then name the fixes. That sentence is the whole concept; everything else is technique.",
    followUps: ["How much traffic do you sacrifice to exploration, and why that much?", "Offline counterfactual eval and the A/B test disagree — next step?"]
  },

  // ---------- ML Infrastructure (domain area) ----------
  {
    id: "infra-1", category: "ML Infrastructure", difficulty: "Hard",
    prompt: "Design an ML platform that lets 50 data scientists train, evaluate, and ship models without filing infra tickets.",
    framework: "Self-serve layers: compute → training → registry → serving → observability, with paved paths and escape hatches.",
    strongAnswer: [
      "Layers the platform: managed compute/notebooks, a training service (submit a job, get resources), model registry, one-click serving, built-in monitoring",
      "Paved-path philosophy: the easy path is the correct path (versioning, logging, eval gates are defaults, not homework)",
      "Balances standardization with escape hatches for advanced users, plus cost visibility per team/job"
    ],
    pitfalls: [
      "Building a monolith UI nobody asked for instead of APIs/CLI jobs scientists actually use",
      "Self-serve with no guardrails: unversioned models in production within a month",
      "Ignoring adoption — a platform the scientists route around is shelfware"
    ],
    nextTime: "Anchor on one user journey end-to-end ('a scientist ships a model Tuesday without a ticket') and design backwards from it.",
    followUps: ["How do you measure whether the platform is succeeding?", "Build vs buy for the training layer — your call?"]
  },
  {
    id: "infra-2", category: "ML Infrastructure", difficulty: "Hard",
    prompt: "Design a scheduling system for a shared GPU cluster used by training, experimentation, and production inference.",
    framework: "Workload classes & priorities → Resource accounting → Preemption & fairness → Utilization vs latency trade-offs.",
    strongAnswer: [
      "Separates workload classes with different guarantees: production inference (reserved, latency-critical) vs training (preemptible, throughput-oriented)",
      "Uses quotas/fair-sharing per team, with borrowing of idle capacity and preemption that checkpoints rather than kills",
      "Tracks both allocation and real utilization, and charges back/showbacks cost to drive good behavior"
    ],
    pitfalls: [
      "First-come-first-served for everything — production starved by a training job",
      "Preempting training without checkpointing, burning days of compute",
      "Optimizing utilization to 100% and destroying queue latency for everyone"
    ],
    nextTime: "State the central trade-off explicitly: utilization vs responsiveness. Every scheduler design is a position on that line — name yours.",
    followUps: ["A team's deadline job can't get GPUs — what's the escalation path?", "Spot/preemptible capacity — where does it fit?"]
  },
  {
    id: "infra-3", category: "ML Infrastructure", difficulty: "Medium",
    prompt: "How do you design data pipelines that feed training so they are reliable, testable, and backfillable?",
    framework: "Declarative pipelines → Idempotency & partitioning → Data contracts/tests → Backfill by partition.",
    strongAnswer: [
      "Partitioned, idempotent jobs (rerunning a day's partition gives the same result, no duplicates)",
      "Data contracts and tests at each stage: schema, freshness, volume, distribution checks that fail the pipeline loudly",
      "Backfills as a first-class operation: recompute any historical range with the new logic, with lineage tracking what changed"
    ],
    pitfalls: [
      "Pipelines that append duplicates on every retry",
      "Silent partial failures — training runs on half a day of data and nobody knows",
      "Backfill requiring a hero with a laptop and a prayer"
    ],
    nextTime: "Say 'idempotent and partition-based' in your first breath, then give the duplicate-on-retry horror story it prevents.",
    followUps: ["A source table changes schema at 3 a.m. — what happens?", "How do you test a pipeline change before it touches production data?"]
  },
  {
    id: "infra-4", category: "ML Infrastructure", difficulty: "Hard",
    prompt: "Design an online inference platform that many teams deploy models to, with very different latency needs.",
    framework: "Standard serving contract → Placement (CPU/GPU, region) → Autoscaling → Per-model SLOs & isolation.",
    strongAnswer: [
      "One deployment contract (model artifact + config: resources, latency SLO, scaling policy) regardless of framework",
      "Autoscaling on the right signal (queue depth / concurrency, not just CPU), with cold-start management for spiky models",
      "Isolation so one team's runaway model can't starve others: per-model quotas, rate limits, and separate pools for strict-SLO models"
    ],
    pitfalls: [
      "Every team hand-rolling its own serving stack — no shared monitoring or rollback",
      "Autoscaling on CPU for GPU inference",
      "Noisy-neighbor blindness in a multi-tenant design"
    ],
    nextTime: "Make the deployment contract the hero of the answer: what the team provides, what the platform guarantees. Contracts are what platforms are.",
    followUps: ["A model needs 10 ms and another tolerates 2 s — same platform, really?", "How do you roll back one model in seconds?"]
  },
  {
    id: "infra-5", category: "ML Infrastructure", difficulty: "Medium",
    prompt: "What observability do you build for ML systems beyond standard service monitoring?",
    framework: "System metrics → Data metrics → Model metrics → Business metrics, all joinable by model version.",
    strongAnswer: [
      "Adds ML-specific signals: input distribution drift, feature freshness/null rates, prediction distribution, score percentiles",
      "Delayed ground-truth tracking: quality metrics computed as labels arrive, sliced by segment and model version",
      "Everything keyed by model version and feature version, so an incident can be attributed to a deploy, a data change, or the world changing"
    ],
    pitfalls: [
      "Only uptime/latency monitoring — the service is healthy while the model quietly rots",
      "Drift alerts with no baseline or threshold logic — alert fatigue by week two",
      "Quality metrics that can't be sliced by version, so rollbacks are guesswork"
    ],
    nextTime: "Use the line: 'For ML, 200 OK is not healthy.' Then list the three layers (data, model, business) that must be green instead.",
    followUps: ["Which drift metric and threshold do you actually use?", "Ground truth arrives after 30 days — what do you watch meanwhile?"]
  },
  {
    id: "infra-6", category: "ML Infrastructure", difficulty: "Medium",
    prompt: "How do you manage model and data versioning together so a production incident can be rolled back and explained?",
    framework: "Immutable artifacts → Versioned data snapshots → Lineage graph → One-command rollback.",
    strongAnswer: [
      "Models, code, config, and training-data snapshots are immutable and content-addressed — a version means one exact thing forever",
      "A lineage record links each deployed model to its training run, data snapshot, features, and evaluation results",
      "Rollback is redeploying a previous immutable artifact (never retraining under pressure), tested regularly, not improvised during an incident"
    ],
    pitfalls: [
      "Mutable 'latest' pointers everywhere, so yesterday's model can't be reconstructed",
      "Versioning the model file but not the data or feature code",
      "A rollback path that exists on paper and has never been run"
    ],
    nextTime: "Ask yourself the incident question — 'what exactly was live at 2 p.m. Tuesday?' — and make every design choice answer it.",
    followUps: ["Data versioning for a 10 TB dataset — snapshots of what, concretely?", "Who is allowed to roll back, and how fast?"]
  },
  {
    id: "infra-7", category: "ML Infrastructure", difficulty: "Hard",
    prompt: "Design a streaming feature pipeline that keeps online features fresh within seconds, consistent with batch training features.",
    framework: "One transformation definition → Stream + batch execution → Store & serve → Consistency checks.",
    strongAnswer: [
      "Feature logic defined once and executed by both streaming and batch paths (Lambda/Kappa or unified-engine thinking), avoiding two implementations",
      "Streaming stack handles late/out-of-order events with watermarks and corrects aggregates when late data lands",
      "Continuous consistency validation comparing streaming features against batch recomputation, alerting on divergence"
    ],
    pitfalls: [
      "Hand-maintained duplicate logic in SQL for batch and a streaming job for online — skew by design",
      "Ignoring late events: aggregates silently wrong for exactly the users who matter",
      "Freshness with no correctness check — fast and wrong"
    ],
    nextTime: "Name the enemy early: two implementations. Then every design choice is about keeping one definition of truth with two execution speeds.",
    followUps: ["How fresh is fresh enough — how do you decide?", "A late event changes a feature used in a prediction an hour ago — what then?"]
  },
  {
    id: "infra-8", category: "ML Infrastructure", difficulty: "Medium",
    prompt: "ML infrastructure costs are doubling every year. How do you get them under control without slowing teams down?",
    framework: "Visibility (cost per job/team/model) → Waste removal → Efficiency levers → Governance that doesn't block.",
    strongAnswer: [
      "Starts with attribution: cost per training job, per model in production, per team — most waste is invisible until measured",
      "Removes pure waste first: idle reservations, zombie jobs/models, over-provisioned inference, redundant retraining",
      "Efficiency levers with owners: spot capacity, right-sizing, shared serving, caching — plus budgets/quotas set with teams, not against them"
    ],
    pitfalls: [
      "Across-the-board cuts that hit the most valuable workloads equally",
      "Counting infra spend but not the engineer-time cost of slow, cheap systems",
      "A finance exercise with no per-unit economics (cost per prediction, per training run)"
    ],
    nextTime: "Quote unit costs, not totals: 'cost per 1k predictions' and 'cost per experiment'. Unit economics turns a cost argument into an engineering plan.",
    followUps: ["Which model in production costs the most per prediction — how would you know?", "A team resists quotas — how do you handle it?"]
  },
  {
    id: "infra-9", category: "ML Infrastructure", difficulty: "Hard",
    prompt: "How do you safely test infrastructure changes (a new serving runtime, a Kubernetes upgrade) for ML workloads?",
    framework: "Representative benchmarks → Shadow/canary with real traffic → ML-specific validation → Gradual rollout with rollback.",
    strongAnswer: [
      "Benchmarks with production-representative models and traffic shapes, comparing latency percentiles and output equivalence, not just 'it runs'",
      "Shadow traffic to compare old vs new outputs on identical inputs — for ML, numerical differences matter, not only errors",
      "Canary by model/team with automatic rollback on latency, error, or prediction-distribution shifts"
    ],
    pitfalls: [
      "Testing with a toy model and declaring the runtime equivalent",
      "Checking only errors/latency — missing silent numerical output changes from a library upgrade",
      "Big-bang migration of all models at once"
    ],
    nextTime: "Add the ML twist to a standard infra answer: output equivalence. 'Same inputs, same predictions (within tolerance)' is the test generic infra answers miss.",
    followUps: ["Outputs differ by 0.1% after the upgrade — ship or block?", "Which models do you canary first, and why those?"]
  },
  {
    id: "infra-10", category: "ML Infrastructure", difficulty: "Medium",
    prompt: "Design CI/CD for machine learning models — what is tested, and what blocks a release?",
    framework: "Code tests → Data tests → Model tests (quality, slices, fairness/safety) → Deploy tests (latency, load) → Progressive release.",
    strongAnswer: [
      "Tests all three artifacts: code (unit/integration), data (schema, ranges, leakage checks), and the model itself (quality gates vs the current production model)",
      "Slice-based gates: a candidate that wins on average but fails a critical segment is blocked",
      "Release includes serving tests (latency/load on production-like infra) and an automatic canary with rollback criteria"
    ],
    pitfalls: [
      "CI that only runs code tests and ships any model the training script emits",
      "A single global quality threshold with no slice checks",
      "Manual, undocumented release steps — no two releases happen the same way"
    ],
    nextTime: "Say 'CI/CD for ML tests data and models, not just code' as your opening line, then enumerate the gates. That framing is the interviewer's rubric.",
    followUps: ["A candidate beats production overall but loses on a small segment — block or ship?", "How do you test a model whose labels take a month to arrive?"]
  },
  {
    id: "infra-11", category: "ML Infrastructure", difficulty: "Medium",
    prompt: "How do you handle secrets, privacy, and compliance in ML pipelines that train on user data?",
    framework: "Data classification → Access control & minimization → De-identification → Audit & retention.",
    strongAnswer: [
      "Classifies training data by sensitivity and enforces least-privilege access — pipelines run under scoped service accounts, not personal credentials",
      "Minimization and de-identification before training where possible (drop/tokenize identifiers), with stricter handling for regulated data",
      "Audit logs of who/what accessed which data, plus retention and deletion that propagates to training sets, features, and backups"
    ],
    pitfalls: [
      "Engineers training from raw production dumps on laptops",
      "Deleting a user from the product database but not from training data and feature stores",
      "No audit trail — compliance questions are unanswerable"
    ],
    nextTime: "Follow one user record through the whole system in your answer (product DB → pipeline → feature store → model). Deletion and access must work at every hop you name.",
    followUps: ["A model memorized sensitive training data — what's your response?", "How do you give scientists enough access to be productive, safely?"]
  },
  {
    id: "infra-12", category: "ML Infrastructure", difficulty: "Hard",
    prompt: "A critical model's training pipeline starts failing intermittently at 2 a.m. and retraining is stale by morning. Diagnose and fix the system, not just the incident.",
    framework: "Stabilize (fallback model/data) → Find the flaky layer → Eliminate the failure class → SLOs & ownership.",
    strongAnswer: [
      "Stabilizes first: serve the last good model, freeze risky auto-retrains, page the right owner — users before root cause",
      "Localizes the intermittency with evidence: upstream schema/volume changes, resource contention at that hour, flaky dependencies, retry/duplication bugs",
      "Fixes the class, not the instance: data contracts, idempotent retries, freshness SLOs with alerts before staleness hurts, and a runbook/on-call that owns the pipeline like a product service"
    ],
    pitfalls: [
      "Restarting the job every night and calling it resolved",
      "No freshness SLO — 'stale model' is discovered by users, not monitors",
      "Treating pipelines as scripts nobody owns, unlike 'real' services"
    ],
    nextTime: "Split your answer into tonight vs this quarter: stabilize, then reliability work. Interviewers for infra roles are listening for exactly that split.",
    followUps: ["What freshness SLO do you set, and what alert precedes a breach?", "How do you decide which pipelines deserve an on-call?"]
  }
];
