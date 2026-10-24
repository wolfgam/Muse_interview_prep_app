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
  }
];
