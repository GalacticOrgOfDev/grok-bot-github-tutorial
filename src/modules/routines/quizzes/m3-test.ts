import type { Quiz } from '../../types';

/** 10 questions · pass ≥ 8/10 (passScore 0.8) */
export const m3Quiz: Quiz = {
  id: 'm3-test',
  title: 'Module 3 quiz',
  passScore: 0.8,
  questions: [
    {
      id: 'q1',
      kind: 'mc',
      stem: 'Best candidate for a routine?',
      options: [
        { id: 'A', text: 'One-off “summarize this email”' },
        { id: 'B', text: '“Every morning, brief today’s jobs”' },
        { id: 'C', text: 'Typing a password' },
        { id: 'D', text: 'A single calendar rename you do once' },
      ],
      correctOptionId: 'B',
      explanation: 'Recurring morning briefs are classic routine material.',
    },
    {
      id: 'q2',
      kind: 'mc',
      stem: 'Scheduled routine prompts should be written as…',
      options: [
        {
          id: 'A',
          text: 'Frozen click-by-click UI recipes that never change',
        },
        {
          id: 'B',
          text: 'Intent + constraints (timezone, read-only, quiet rules)',
        },
        { id: 'C', text: 'Your Google password' },
        { id: 'D', text: '“Do anything”' },
      ],
      correctOptionId: 'B',
      explanation: 'Intent prompts with constraints beat brittle UI recipes.',
    },
    {
      id: 'q3',
      kind: 'mc',
      stem: 'Event-driven routines shine when…',
      options: [
        { id: 'A', text: 'You enjoy refreshing GitHub every 2 minutes' },
        {
          id: 'B',
          text: 'Something important may change while you’re away',
        },
        { id: 'C', text: 'You want to delete all calendars nightly' },
        { id: 'D', text: 'You refuse confirmations' },
      ],
      correctOptionId: 'B',
      explanation: 'Watch while away — CI, reviews, conflicts.',
    },
    {
      id: 'q4',
      kind: 'mc',
      stem: 'Routine pings “no events” every morning and annoys you. Fix?',
      options: [
        { id: 'A', text: 'Add more pings' },
        {
          id: 'B',
          text: 'Add a stay-quiet-when-empty rule (or pause)',
        },
        { id: 'C', text: 'Disconnect the phone' },
        { id: 'D', text: 'Make it every minute' },
      ],
      correctOptionId: 'B',
      explanation: 'Silence rules (or pause) stop empty spam.',
    },
    {
      id: 'q5',
      kind: 'mc',
      stem: 'Before a routine moves calendar events it should…',
      options: [
        { id: 'A', text: 'Always auto-move' },
        {
          id: 'B',
          text: 'Not write unless the saved prompt and your standing rules allow — prefer propose / confirm',
        },
        { id: 'C', text: 'Share your Drive publicly' },
        { id: 'D', text: 'Ignore timezone' },
      ],
      correctOptionId: 'B',
      explanation: 'Prefer propose / confirm; gate writes.',
    },
    {
      id: 'q6',
      kind: 'mc',
      stem: 'Pause vs delete…',
      options: [
        { id: 'A', text: 'Same thing' },
        {
          id: 'B',
          text: 'Pause = temporary off; delete = remove; update keeps history when rewriting',
        },
        { id: 'C', text: 'Pause erases the routine forever' },
        { id: 'D', text: 'Delete is the only way to change a prompt' },
      ],
      correctOptionId: 'B',
      explanation: 'Pause is temporary; delete removes; update rewrites.',
    },
    {
      id: 'q7',
      kind: 'short',
      stem: 'Name two fields every good routine needs.',
      shortRubric: [
        'name',
        'schedule',
        'cron',
        'trigger',
        'event',
        'prompt',
        'intent',
        'timezone',
        'quiet',
        'enabled',
        'success',
      ],
      explanation:
        'Any two of: name, schedule/event trigger, prompt/intent, timezone, quiet/success rules, enabled state.',
    },
    {
      id: 'q8',
      kind: 'mc',
      stem: 'Fastest allowed useful schedule spacing (conceptually for learners)?',
      options: [
        { id: 'A', text: 'Every second' },
        {
          id: 'B',
          text: 'Sensible intervals (minutes+, not spam); prefer event triggers over tight polling',
        },
        { id: 'C', text: 'Once per decade only' },
        { id: 'D', text: 'Only leap years' },
      ],
      correctOptionId: 'B',
      explanation: 'Minutes+ spacing; prefer events over spam polling.',
    },
    {
      id: 'q9',
      kind: 'mc',
      stem: 'You want CI failure alerts on one PR. Best?',
      options: [
        { id: 'A', text: 'Open GitHub all night' },
        {
          id: 'B',
          text: 'Event routine on that repo/PR for ci-failed (+ related), digest + next action',
        },
        { id: 'C', text: 'Disable CI' },
        {
          id: 'D',
          text: 'Slack spam to strangers (not this user’s stack)',
        },
      ],
      correctOptionId: 'B',
      explanation: 'Scoped event routine with digest + next action.',
    },
    {
      id: 'q10',
      kind: 'mc',
      stem: 'Module 3 complete when you can…',
      options: [
        { id: 'A', text: 'Only ask one-shot questions forever' },
        {
          id: 'B',
          text: 'Choose routine vs once → ship a schedule + an event (or day-before) routine → hygiene (pause/update/delete) → keep writes gated',
        },
        { id: 'C', text: 'Auto-send client texts with no review' },
        { id: 'D', text: 'Skip timezones on Android' },
      ],
      correctOptionId: 'B',
      explanation: 'Full routine loop with hygiene and gated writes.',
    },
  ],
};
