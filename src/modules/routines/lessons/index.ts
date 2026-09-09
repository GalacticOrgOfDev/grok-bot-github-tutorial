import type { LessonContent } from '../../types';

export const routinesLessons: Record<string, LessonContent> = {
  'm4-l1-when': {
    id: 'm4-l1-when',
    title: 'When to automate vs ask once',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 8,
    practiceId: 'practice-when-routine',
    sections: [
      {
        heading: 'Routine vs once',
        body: 'Ask once when the answer is for this moment. Automate when it will keep happening — every weekday, or whenever something changes while you’re in the truck.',
        bullets: [
          'Once: “What’s on my calendar right now?” / “Summarize this PR”',
          'Routine: weekday briefs, CI failure pings, “when review requested”',
          'Rule of thumb: recurring or “ping me when” → routine',
        ],
        callout: {
          kind: 'tip',
          text: 'If you’ll forget to ask again, make a routine. If you need it once, just ask.',
        },
      },
      {
        heading: 'What a routine needs',
        body: 'Name, schedule or event trigger, clear prompt/intent, timezone, quiet/success rules, enabled state.',
        promptExample:
          'Every weekday at 7, brief me on today’s jobs — read-only, stay quiet if empty.',
      },
    ],
  },
  'm4-l2-cron': {
    id: 'm4-l2-cron',
    title: 'Build a weekday morning routine',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 12,
    practiceId: 'practice-morning-cron',
    sections: [
      {
        heading: 'Intent prompts, not click recipes',
        body: 'Write what you want (intent + constraints). Don’t freeze brittle UI click paths. Include timezone, read-only, and quiet-if-empty.',
        promptExample:
          'Create a routine named Weekday field brief that runs at 7:00 AM America/Detroit Monday–Friday. Summarize today’s Crew Schedule events (time, title, location). If a Drive folder matches today’s main job under Jobs/2026, mention it. Read-only — never create or edit events. If the calendar is empty, stay quiet.',
        uiPath: 'Routines → New → Schedule',
        callout: {
          kind: 'info',
          text: 'Cron shape ≈ 0 7 * * 1-5 in America/Detroit.',
        },
      },
      {
        heading: 'Silence rules',
        body: 'Empty calendar mornings shouldn’t ping “no events.” Stay quiet when nothing useful changed.',
        callout: {
          kind: 'warn',
          text: 'Annoying “no events” every morning → add stay-quiet-when-empty (or pause).',
        },
      },
    ],
  },
  'm4-l3-events': {
    id: 'm4-l3-events',
    title: 'Babysit a change (GitHub or job-day pattern)',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 12,
    practiceId: 'practice-event-babysit',
    sections: [
      {
        heading: 'Ping me when…',
        body: 'Event-driven routines shine when something important may change while you’re away. Scope the repo/PR (or job day), digest what changed + one next action, and self-clean on terminal states.',
        promptExample:
          'Watch demo-acme/payments-api PR #42 for review events, pushes, and CI pass/fail. When something fires, ping with what changed + one next action. Remove yourself when the PR merges or closes.',
        callout: {
          kind: 'info',
          text: 'Reuses M1 fixture shipping-friday-pr (demo-acme/payments-api#42).',
        },
      },
      {
        heading: 'Alt path — day-before packet',
        body: 'No GitHub? Schedule 6 PM Detroit the day before Thursday install: check Van Singel Drive folder for missing signed-contract.pdf; ping only if missing.',
        promptExample:
          'Day-before job packet: Tue 6 PM America/Detroit before Thursday install — check Van Singel Drive folder for missing signed-contract.pdf; ping only if missing.',
      },
    ],
  },
  'm4-l4-hygiene': {
    id: 'm4-l4-hygiene',
    title: 'Pause, update, delete, no zombies',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 8,
    practiceId: 'practice-hygiene',
    sections: [
      {
        heading: 'Lifecycle',
        body: 'Pause = temporary off. Delete = remove. Update rewrites the prompt/schedule and keeps history. Don’t leave duplicate “test morning” zombies.',
        bullets: [
          'Pause Weekday field brief when you’re off this week',
          'Update to flag back-to-backs under 30 minutes',
          'Delete fixture junk named test morning',
        ],
        uiPath: 'Routines → select → Pause / Edit / Delete',
        callout: {
          kind: 'warn',
          text: 'Pause ≠ delete. Zombies keep pinging until you pause or delete them.',
        },
        promptExample: 'Pause Weekday field brief.',
      },
      {
        heading: 'Safe writes stay gated',
        body: 'Read-first. Prefer propose / confirm before any calendar move, email, share, or merge. Timezone on the schedule — not assumed.',
      },
    ],
  },
};
