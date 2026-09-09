/**
 * Fixed sandbox pack: routine-pack-spring-week — drills A–D + capstone.
 * Keys aligned with tutor JSON: sandboxFixtures/routine-pack-spring-week.json
 */
export const routinePackSpringWeek = {
  fixtureId: 'routine-pack-spring-week',
  moduleId: 'routines',
  timezone: 'America/Detroit',
  calendar: 'Crew Schedule',
  existingRoutines: [
    { name: 'Weekday field brief', enabled: true },
    { name: 'test morning', enabled: true, junk: true },
  ],
  targets: {
    weekdayFieldBrief: {
      name: 'Weekday field brief',
      schedule: '0 7 * * 1-5',
      timezone: 'America/Detroit',
      promptIntent:
        "Summarize today's Crew Schedule (time, title, location). Mention matching Jobs/2026 Drive folder for main job if found. Read-only. Stay quiet if empty.",
    },
    wedConflictGuard: {
      name: 'Wed conflict guard',
      schedule: '0 18 * * 2',
      timezone: 'America/Detroit',
      promptIntent:
        'Inspect Wednesday Crew Schedule. If Mulch delivery — Van Singel overlaps Consult — Jamestown patio, ping with two propose-only reschedule options. If no conflict, stay quiet. Never edit the calendar.',
    },
  },
  sortCards: [
    { text: "What's on my calendar right now?", answer: 'once' as const },
    {
      text: "Every weekday at 7, brief me on today's jobs",
      answer: 'routine' as const,
    },
    { text: 'Summarize this one PR', answer: 'once' as const },
    {
      text: 'When CI fails on payments-api#42, ping me',
      answer: 'routine' as const,
    },
    { text: "Draft a reply to Sam's comment", answer: 'once' as const },
    {
      text: 'Ping me if a new review is requested on my open PRs this week',
      answer: 'routine' as const,
    },
  ],
  /** Optional PR babysitter path — reuses M1 shipping-friday-pr. */
  prBabysitter: {
    repo: 'demo-acme/payments-api',
    prNumber: 42,
    events: ['review', 'push', 'ci-pass', 'ci-fail'],
    terminal: ['merge', 'close'],
  },
  promptChips: {
    morningCron:
      'Create a routine named Weekday field brief that runs at 7:00 AM America/Detroit Monday–Friday. Summarize today’s Crew Schedule events (time, title, location). If a Drive folder matches today’s main job name under Jobs/2026, mention it. Read-only — never create or edit events. If the calendar is empty, stay quiet.',
    eventBabysit:
      'Watch demo-acme/payments-api PR #42 for review events, pushes, and CI pass/fail. When something fires, ping with what changed + one next action. Remove yourself when the PR merges or closes.',
    eventAlt:
      'Day-before job packet: Tue 6 PM America/Detroit before Thursday install — check Van Singel Drive folder for missing signed-contract.pdf; ping only if missing.',
    pause: 'Pause Weekday field brief.',
    update:
      'Update Weekday field brief to also flag back-to-backs under 30 minutes.',
    deleteJunk: 'Delete test morning.',
    morningChip:
      'Create Weekday field brief: 7am Detroit weekdays, Crew Schedule summary, read-only, quiet if empty.',
    guardChip:
      'Create Wed conflict guard: Tue 6pm Detroit — if Van Singel mulch overlaps Jamestown consult, propose options in chat; don’t edit; quiet if clear.',
    capstoneBlurb:
      "You've got a full crew week. Ship two routines: a calm morning brief, and a Tuesday evening guard so Wednesday's overlap never surprises you. No silent calendar edits.",
  },
} as const;

export type RoutinePackSpringWeek = typeof routinePackSpringWeek;

export function gradeMorningSchedule(answer: string): boolean {
  const a = answer.toLowerCase();
  const weekday =
    a.includes('weekday') ||
    a.includes('mon') ||
    a.includes('1-5') ||
    a.includes('monday');
  const seven =
    a.includes('7') || a.includes('07') || a.includes('7:00') || a.includes('7 am');
  const detroit =
    a.includes('detroit') || a.includes('america/detroit') || a.includes('et');
  return weekday && seven && detroit;
}

export function gradeMorningPrompt(answer: string): boolean {
  const a = answer.toLowerCase();
  const calendar =
    a.includes('calendar') ||
    a.includes('crew schedule') ||
    a.includes('events') ||
    a.includes('jobs');
  const readOnly =
    a.includes('read-only') ||
    a.includes('read only') ||
    a.includes('never create') ||
    a.includes('never edit') ||
    a.includes('no edit') ||
    a.includes('do not edit') ||
    a.includes("don't edit");
  const quiet =
    a.includes('quiet') ||
    a.includes('empty') ||
    a.includes('stay silent') ||
    a.includes('no ping');
  return calendar && readOnly && quiet;
}

export function gradeEventBabysit(answer: string): boolean {
  const a = answer.toLowerCase();
  const github =
    a.includes('github') ||
    a.includes('pr') ||
    a.includes('pull') ||
    a.includes('payments-api') ||
    a.includes('demo-acme') ||
    a.includes('ci') ||
    a.includes('day-before') ||
    a.includes('signed-contract');
  const scoped =
    a.includes('#42') ||
    a.includes('42') ||
    a.includes('van singel') ||
    a.includes('thursday') ||
    a.includes('pr ');
  const digest =
    a.includes('ping') ||
    a.includes('digest') ||
    a.includes('next action') ||
    a.includes('what changed') ||
    a.includes('missing');
  const terminal =
    a.includes('merge') ||
    a.includes('close') ||
    a.includes('remove') ||
    a.includes('quiet') ||
    a.includes('only if');
  return github && scoped && digest && terminal;
}

export function gradeHygienePause(answer: string): boolean {
  const a = answer.toLowerCase();
  return (
    a.includes('pause') &&
    (a.includes('weekday') || a.includes('field brief') || a.includes('brief'))
  );
}

export function gradeHygieneUpdate(answer: string): boolean {
  const a = answer.toLowerCase();
  const update =
    a.includes('update') || a.includes('edit') || a.includes('change');
  const gap =
    a.includes('30') ||
    a.includes('back-to-back') ||
    a.includes('back to back') ||
    a.includes('gap');
  return update && gap;
}

export function gradeHygieneDelete(answer: string): boolean {
  const a = answer.toLowerCase();
  return a.includes('delete') && (a.includes('test morning') || a.includes('test'));
}

/** Capstone verifier key 1 — morning brief */
export function gradeCapstoneMorning(answer: string): boolean {
  const a = answer.toLowerCase();
  const weekday =
    a.includes('weekday') ||
    a.includes('mon') ||
    a.includes('1-5') ||
    a.includes('monday–friday') ||
    a.includes('monday-friday');
  const seven = a.includes('7') || a.includes('07');
  const detroit = a.includes('detroit') || a.includes('america/detroit');
  const readOnly =
    a.includes('read-only') ||
    a.includes('read only') ||
    a.includes('never') ||
    a.includes('no edit') ||
    a.includes("don't edit") ||
    a.includes('do not');
  const quiet =
    a.includes('quiet') || a.includes('empty') || a.includes('silent');
  return weekday && seven && detroit && readOnly && quiet;
}

/** Capstone verifier key 2 — Wed conflict guard */
export function gradeCapstoneGuard(answer: string): boolean {
  const a = answer.toLowerCase();
  const tue =
    a.includes('tue') ||
    a.includes('tuesday') ||
    a.includes('0 18') ||
    a.includes('* * 2') ||
    a.includes('6 pm') ||
    a.includes('6:00') ||
    a.includes('18');
  const conflict =
    (a.includes('van singel') || a.includes('mulch')) &&
    (a.includes('jamestown') || a.includes('consult'));
  const propose =
    a.includes('propose') ||
    a.includes('chat') ||
    a.includes('option') ||
    a.includes("don't edit") ||
    a.includes('do not edit') ||
    a.includes('never edit') ||
    a.includes('propose-only');
  const quiet =
    a.includes('quiet') ||
    a.includes('no conflict') ||
    a.includes('if none') ||
    a.includes('if clear');
  return tue && conflict && propose && quiet;
}

/** Capstone verifier key 3 — schedule vs watch types */
export function gradeCapstoneTypes(answer: string): boolean {
  const a = answer.toLowerCase();
  const bothScheduled =
    (a.includes('both') && a.includes('schedul')) ||
    (a.includes('morning') &&
      a.includes('schedul') &&
      a.includes('guard') &&
      a.includes('schedul'));
  const mixed =
    (a.includes('morning') || a.includes('brief')) &&
    (a.includes('schedul') || a.includes('cron')) &&
    (a.includes('babysit') || a.includes('event') || a.includes('watch'));
  const scheduledWords =
    (a.match(/schedul/g) || []).length >= 1 &&
    (a.includes('brief') ||
      a.includes('morning') ||
      a.includes('guard') ||
      a.includes('both'));
  return bothScheduled || mixed || scheduledWords;
}

/** Capstone verifier key 4 — gated write declaration */
export function gradeCapstoneSafety(answer: string): boolean {
  const a = answer.toLowerCase().trim();
  if (a.length < 8) return false;
  return (
    a.includes('move') ||
    a.includes('edit') ||
    a.includes('write') ||
    a.includes('email') ||
    a.includes('share') ||
    a.includes('merge') ||
    a.includes('delete') ||
    a.includes('create') ||
    a.includes('send') ||
    a.includes('reschedule') ||
    a.includes('confirm')
  );
}
