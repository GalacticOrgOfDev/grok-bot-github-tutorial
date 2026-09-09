/**
 * Fixed sandbox pack: slack-crew-ops — drills A–D + capstone.
 * Keys aligned with tutor JSON: sandboxFixtures/slack-crew-ops.json
 */
export const slackCrewOps = {
  fixtureId: 'slack-crew-ops',
  moduleId: 'slack',
  workspace: 'Springdyke Demo',
  channel: '#crew-ops',
  channelId: 'C-CREW-OPS',
  messages: [
    { author: 'alex', text: 'Staging at yard 7am tomorrow' },
    { author: 'jordan', text: 'Van Singel needs 3 crew Thu' },
    {
      author: 'sam',
      text: '@crew-lead need trailer hitch confirmation before 6pm',
      openAsk: true,
    },
    { author: 'alex', text: 'Forecast looking wet Fri' },
    {
      author: 'jordan',
      text: "If weather turns we'll cancel Fri mow route — post cancel in thread",
    },
    { author: 'sam', text: 'Anyone seen the hitch inventory sheet?' },
  ],
  openAsk: 'trailer hitch confirmation',
  draftReplyShape:
    'Confirmed: Van Singel Thursday 8am, crew of 3. Trailer hitch reserved/confirmed.',
  routineTarget: {
    name: 'Crew-ops weather/cancel',
    channel: '#crew-ops',
    keywords: ['weather', 'cancel'],
    promptIntent:
      'Ping with author, text, and one next action. Do not reply in Slack unless asked.',
  },
  safetyNeverAuto: ['@channel', 'pricing', 'client PII', 'passwords'],
  moduleNumber: 3,
  promptChips: {
    workspace: 'Which Slack workspace am I connected to?',
    listChannels: 'List channels I can see',
    summarize:
      'Summarize the last 10 messages in #crew-ops in 5 bullets: decisions, asks, blockers, owners, what’s next.',
    openAsk: 'Is there an open ask for me / the crew lead?',
    draft:
      'Draft a short reply in #crew-ops confirming Van Singel Thursday 8am crew of 3 — do NOT post yet.',
    confirmPost: 'Yes, post that reply.',
    routine:
      'Create a routine: in Slack channel #crew-ops, when a message contains keyword weather OR cancel, ping me with the message text, author, and one recommended next action. Ignore other messages.',
    capstoneBlurb:
      '#crew-ops is busy. Find the hitch ask, draft-and-confirm a reply, and make sure weather/cancel never sneaks past your phone.',
  },
} as const;

export type SlackCrewOps = typeof slackCrewOps;

/** Drill A — workspace / channel evidence */
export function gradeSlackConnect(answer: string): boolean {
  const a = answer.toLowerCase();
  return (
    a.includes('crew-ops') ||
    a.includes('crew ops') ||
    a.includes('c-crew-ops') ||
    a.includes('springdyke')
  );
}

/** Drill B — open ask */
export function gradeSlackOpenAsk(answer: string): boolean {
  const a = answer.toLowerCase();
  return (
    (a.includes('hitch') || a.includes('trailer')) &&
    (a.includes('confirm') || a.includes('ask') || a.includes('crew-lead') || a.includes('crew lead'))
  );
}

/** Drill C — draft shape */
export function gradeSlackDraft(answer: string): boolean {
  const a = answer.toLowerCase();
  const van = a.includes('van singel') || a.includes('vansingel');
  const crew =
    a.includes('crew of 3') ||
    a.includes('crew of three') ||
    a.includes('3 crew') ||
    a.includes('three crew');
  const hitch = a.includes('hitch') || a.includes('trailer');
  return van && (crew || hitch);
}

/** Drill D — weather/cancel routine */
export function gradeSlackRoutine(answer: string): boolean {
  const a = answer.toLowerCase();
  const channel = a.includes('crew-ops') || a.includes('crew ops');
  const weather = a.includes('weather');
  const cancel = a.includes('cancel');
  const digest =
    a.includes('ping') ||
    a.includes('digest') ||
    a.includes('author') ||
    a.includes('next action');
  const noAuto =
    a.includes('no auto') ||
    a.includes('not reply') ||
    a.includes('do not reply') ||
    a.includes("don't reply") ||
    a.includes('unless asked') ||
    a.includes('ignore');
  return channel && weather && cancel && (digest || noAuto);
}

export function gradeSlackCapstoneSummary(answer: string): boolean {
  return gradeSlackOpenAsk(answer);
}

export function gradeSlackCapstoneDraft(answer: string): boolean {
  return gradeSlackDraft(answer);
}

export function gradeSlackCapstoneRoutine(answer: string): boolean {
  return gradeSlackRoutine(answer);
}

export function gradeSlackCapstoneNever(answer: string): boolean {
  const a = answer.toLowerCase();
  return (
    a.includes('@channel') ||
    a.includes('channel') ||
    a.includes('pricing') ||
    a.includes('pii') ||
    a.includes('password') ||
    a.includes('secret') ||
    a.includes('client')
  ) && a.trim().length >= 4;
}
