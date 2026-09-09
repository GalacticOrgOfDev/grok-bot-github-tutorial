/**
 * Fixed sandbox pack: skills-pack-field — drills A–D + capstone.
 * Keys aligned with tutor JSON: sandboxFixtures/skills-pack-field.json
 */
export const skillsPackField = {
  fixtureId: 'skills-pack-field',
  moduleId: 'skills',
  skills: {
    'field-job-brief': {
      action: 'create' as const,
      description:
        'Use this when the learner or a bot needs a concise same-day field brief from Calendar (and optional Drive job folder).',
      constraints: [
        'read-only',
        '5-line output',
        'NO_EVENTS if empty',
        'America/Detroit',
        'flag gaps under 30 minutes',
      ],
    },
    'job-packet-audit': {
      action: 'create' as const,
      description:
        'Use this when checking a job Drive folder before install against the packet checklist.',
      checklist: [
        'site-before.jpg',
        'layout-sketch.pdf',
        'estimate-*.pdf',
        'signed-contract.pdf',
      ],
      constraints: [
        'draft estimate share only',
        'confirm before send or permission change',
      ],
    },
    'auto-text-clients': {
      action: 'harden' as const,
      brokenDescription: 'stuff',
      brokenBody:
        "Send texts to all clients with tomorrow's jobs. Use any phone numbers in Drive.",
      requiredFixes: [
        'clear when-to-use',
        'draft-only',
        'human confirm before send',
        'no unrelated folder scraping',
      ],
    },
    'tmp-skill-test': { action: 'delete' as const, junk: true },
  },
  sortCards: [
    {
      text: 'Every weekday 7am, run the field brief',
      answer: 'routine' as const,
    },
    {
      text: 'How to build a 5-line field brief from Calendar + Drive',
      answer: 'skill' as const,
    },
    {
      text: "Summarize today's calendar right now",
      answer: 'once' as const,
    },
    {
      text: 'When PR CI fails, ping me',
      answer: 'routine' as const,
    },
    {
      text: 'Steps to check a job folder against the packet checklist',
      answer: 'skill' as const,
    },
    {
      text: 'Draft one homeowner text for Van Singel',
      answer: 'once' as const,
    },
  ],
  jobFolder: 'Jobs / 2026 / Van Singel backyard',
  missingFile: 'signed-contract.pdf',
  promptChips: {
    saveBrief:
      'Save skill field-job-brief: when building a same-day field brief from Calendar (+ optional Drive). Body: 5 lines, flag <30m gaps, read-only, NO_EVENTS if empty.',
    saveAudit:
      'Save skill job-packet-audit: when checking a job folder pre-install against photo/sketch/estimate/contract; draft estimate share only; confirm before any send/permission change.',
    hardenRewrite:
      'Rewrite auto-text-clients so it only drafts and waits for confirm. Delete tmp-skill-test.',
    wireTeam:
      'Tell Crew Scheduler and Job Packets to follow [field-job-brief] when asked for a morning brief; CoS assigns once.',
    capstoneBlurb:
      'Your team keeps reinventing the morning brief. Turn it into a skill, add a packet audit, and make sure nothing texts a homeowner without you.',
  },
} as const;

export type SkillsPackField = typeof skillsPackField;

/** Drill A — skill vs routine vs once is covered by MC; grader unused for cards */

/** Drill B — author field-job-brief */
export function gradeAuthorBrief(answer: string): boolean {
  const a = answer.toLowerCase();
  const named =
    a.includes('field-job-brief') ||
    a.includes('field job brief') ||
    a.includes('field brief');
  const when =
    a.includes('when') ||
    a.includes('same-day') ||
    a.includes('same day') ||
    a.includes('calendar') ||
    a.includes('use this');
  const body =
    a.includes('5') ||
    a.includes('five') ||
    a.includes('read-only') ||
    a.includes('read only') ||
    a.includes('no_events') ||
    a.includes('no events') ||
    a.includes('detroit') ||
    a.includes('gap');
  return named && when && body;
}

/** Drill C — wire Scheduler + Packets to field-job-brief */
export function gradeWireTeam(answer: string): boolean {
  const a = answer.toLowerCase();
  const scheduler =
    a.includes('scheduler') || a.includes('crew schedule');
  const packets =
    a.includes('packet') || a.includes('job packet');
  const skill =
    a.includes('field-job-brief') ||
    a.includes('field job brief') ||
    a.includes('field brief') ||
    a.includes('[field');
  const noFanOut =
    !a.includes('everyone') &&
    !a.includes('all bots') &&
    !a.includes('@all') &&
    !a.includes('entire');
  return scheduler && packets && skill && noFanOut;
}

/** Drill D — harden auto-text-clients */
export function gradeHardenRewrite(answer: string): boolean {
  const a = answer.toLowerCase();
  const draft =
    a.includes('draft') ||
    a.includes('confirm') ||
    a.includes('human') ||
    a.includes('approval') ||
    a.includes('gate');
  const when =
    a.includes('when') ||
    a.includes('use this') ||
    a.includes('description') ||
    a.includes('tomorrow');
  const noScrape =
    a.includes('no') ||
    a.includes('not') ||
    a.includes("don't") ||
    a.includes('do not') ||
    a.includes('folder') ||
    a.includes('scrap') ||
    a.includes('confirm');
  return draft && when && noScrape;
}

/** Drill D — delete tmp-skill-test */
export function gradeHardenDelete(answer: string): boolean {
  const a = answer.toLowerCase();
  return (
    (a.includes('tmp-skill-test') ||
      a.includes('tmp skill') ||
      a.includes('junk')) &&
    (a.includes('delete') ||
      a.includes('removed') ||
      a.includes('deleted') ||
      a.includes('confirm'))
  );
}

/** Capstone — field-job-brief saved */
export function gradeCapstoneBrief(answer: string): boolean {
  return gradeAuthorBrief(answer);
}

/** Capstone — job-packet-audit saved */
export function gradeCapstoneAudit(answer: string): boolean {
  const a = answer.toLowerCase();
  const named =
    a.includes('job-packet-audit') ||
    a.includes('packet audit') ||
    a.includes('job packet audit');
  const when =
    a.includes('when') ||
    a.includes('pre-install') ||
    a.includes('before install') ||
    a.includes('checklist') ||
    a.includes('folder');
  const gated =
    a.includes('confirm') ||
    a.includes('draft') ||
    a.includes('permission') ||
    a.includes('gate');
  return named && when && gated;
}

/** Capstone — which bot runs which */
export function gradeCapstoneBotMap(answer: string): boolean {
  const a = answer.toLowerCase();
  const briefBot =
    a.includes('scheduler') ||
    (a.includes('brief') && (a.includes('crew') || a.includes('calendar')));
  const auditBot =
    a.includes('packet') ||
    (a.includes('audit') && a.includes('job'));
  return briefBot && auditBot;
}
