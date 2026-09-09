import type { PracticeDrill } from '../../types';
import {
  gradeCapstoneGuard,
  gradeCapstoneMorning,
  gradeCapstoneSafety,
  gradeCapstoneTypes,
  gradeEventBabysit,
  gradeHygieneDelete,
  gradeHygienePause,
  gradeHygieneUpdate,
  gradeMorningPrompt,
  gradeMorningSchedule,
  routinePackSpringWeek,
} from '../../../shared/sandboxFixtures';

const f = routinePackSpringWeek;
const cards = f.sortCards;

export const routinesPractices: Record<string, PracticeDrill> = {
  'practice-when-routine': {
    id: 'practice-when-routine',
    title: 'Drill A — When to automate',
    goal: 'Sort asks into Routine vs Once.',
    afterLesson: 'm3-l1-when',
    passCriteria: '≥5/6 cards tagged correctly.',
    failHints: [
      'Recurring / “ping me when” → Routine',
      'This-moment one-offs → Once',
    ],
    passThreshold: 5,
    usesSandbox: true,
    steps: [
      {
        id: 'a1',
        instruction: 'Tag each card Routine or Once (6 cards below).',
        hint: f.fixtureId,
      },
    ],
    checks: cards.map((card, i) => ({
      id: `a-card-${i}`,
      prompt: card.text,
      kind: 'mc' as const,
      options: ['Routine', 'Once'],
      correctIndex: card.answer === 'routine' ? 0 : 1,
      explanation:
        card.answer === 'routine'
          ? 'Recurring or “ping me when” → Routine'
          : 'One-shot ask → Once',
    })),
  },

  'practice-morning-cron': {
    id: 'practice-morning-cron',
    title: 'Drill B — Weekday morning routine',
    goal: 'Create a scheduled routine from a prompt chip.',
    afterLesson: 'm3-l2-cron',
    passCriteria:
      'Schedule ≈ 0 7 * * 1-5 Detroit; prompt has calendar + read-only + quiet-if-empty; name present.',
    failHints: [
      'Weekday 7:00 AM America/Detroit',
      'Stay quiet if empty',
      'Read-only — never create/edit events',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'b1',
        instruction: 'Create Weekday field brief from the chip.',
        promptChip: f.promptChips.morningCron,
      },
      {
        id: 'b2',
        instruction: 'Confirm schedule, read-only, quiet-if-empty.',
      },
    ],
    checks: [
      {
        id: 'b-empty',
        prompt: 'What should the bot do if there are no events?',
        kind: 'mc',
        options: [
          'Ping “no events” every morning',
          'Stay quiet',
          'Delete the calendar',
          'Run every second',
        ],
        correctIndex: 1,
        explanation: 'Stay quiet when empty.',
      },
      {
        id: 'b-schedule',
        prompt: 'Describe the schedule (weekday + 7 AM + Detroit).',
        kind: 'text',
        grade: gradeMorningSchedule,
        explanation: f.targets.weekdayFieldBrief.schedule + ' America/Detroit',
      },
      {
        id: 'b-prompt',
        prompt:
          'Paste or paraphrase the prompt (calendar summary + read-only + quiet).',
        kind: 'text',
        grade: gradeMorningPrompt,
        explanation: f.targets.weekdayFieldBrief.promptIntent,
      },
    ],
  },

  'practice-event-babysit': {
    id: 'practice-event-babysit',
    title: 'Drill C — Event babysitter',
    goal: 'Event-driven babysitter (GitHub PR or day-before packet).',
    afterLesson: 'm3-l3-events',
    passCriteria:
      'GitHub-shaped trigger, PR scoped, terminal merge/close, useful digest — or day-before alt.',
    failHints: [
      'demo-acme/payments-api#42',
      'Remove on merge/close',
      'Alt: ping only if signed-contract.pdf missing',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'c1',
        instruction: 'Configure PR #42 babysitter (or day-before alt).',
        promptChip: f.promptChips.eventBabysit,
        hint: 'Alt chip available for no-GitHub path',
      },
      {
        id: 'c2',
        instruction: 'Confirm digest + next action + terminal cleanup.',
        promptChip: f.promptChips.eventAlt,
      },
    ],
    checks: [
      {
        id: 'c-shape',
        prompt: 'Best trigger shape for CI failure on one PR?',
        kind: 'mc',
        options: [
          'Poll GitHub every second',
          'Event routine scoped to that repo/PR (ci-failed + related)',
          'Disable CI',
          'Slack spam to strangers',
        ],
        correctIndex: 1,
        explanation: 'Scoped event routine beats tight polling.',
      },
      {
        id: 'c-terminal',
        prompt: 'When should a PR babysitter remove itself?',
        kind: 'mc',
        options: [
          'Never',
          'When the PR merges or closes',
          'Every leap year',
          'Only on Sundays',
        ],
        correctIndex: 1,
        explanation: 'Self-clean on merge/close.',
      },
      {
        id: 'c-config',
        prompt:
          'Describe your babysitter (repo/PR + events + digest, or day-before alt).',
        kind: 'text',
        grade: gradeEventBabysit,
        explanation:
          'GitHub-shaped + PR scoped + digest + terminal, or day-before missing-contract.',
      },
    ],
  },

  'practice-hygiene': {
    id: 'practice-hygiene',
    title: 'Drill D — Pause, update, delete',
    goal: 'Manage lifecycle — no zombies.',
    afterLesson: 'm3-l4-hygiene',
    passCriteria: 'Correct action matched to each step; pause ≠ delete.',
    failHints: [
      'Pause Weekday field brief',
      'Update to flag <30m gaps',
      'Delete test morning (junk fixture)',
    ],
    passThreshold: 3,
    usesSandbox: true,
    steps: [
      {
        id: 'd1',
        instruction: 'Pause Weekday field brief.',
        promptChip: f.promptChips.pause,
      },
      {
        id: 'd2',
        instruction: 'Update its prompt to flag back-to-backs under 30 minutes.',
        promptChip: f.promptChips.update,
      },
      {
        id: 'd3',
        instruction: 'Delete duplicate junk named test morning.',
        promptChip: f.promptChips.deleteJunk,
        hint: 'existingRoutines junk: true',
      },
    ],
    checks: [
      {
        id: 'd-pause',
        prompt: 'What did you do to Weekday field brief first?',
        kind: 'text',
        grade: gradeHygienePause,
        explanation: 'Pause = temporary off.',
      },
      {
        id: 'd-update',
        prompt: 'What update did you apply?',
        kind: 'text',
        grade: gradeHygieneUpdate,
        explanation: 'Flag back-to-backs under 30 minutes.',
      },
      {
        id: 'd-delete',
        prompt: 'Which junk routine did you delete?',
        kind: 'text',
        grade: gradeHygieneDelete,
        explanation: 'Delete test morning (junk: true).',
      },
      {
        id: 'd-diff',
        prompt: 'Pause vs delete — same thing?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Pause = temporary off; delete = remove.',
      },
    ],
  },

  'practice-capstone-m3': {
    id: 'practice-capstone-m3',
    title: 'Capstone — Field-week automation pack',
    goal: 'Ship two automations, no spam.',
    afterLesson: 'm3-practice-capstone',
    blurb: f.promptChips.capstoneBlurb,
    passCriteria: '3/4 verifier keys + safety declaration non-empty.',
    failHints: [
      'Weekday 7 AM Detroit read-only quiet',
      'Tue 6 PM guard + Van Singel/Jamestown propose-only',
      'Both scheduled (or morning=schedule, babysit=event)',
      'Name a gated write',
    ],
    passThreshold: 3,
    usesSandbox: true,
    steps: [
      {
        id: 'cap1',
        instruction: 'Configure Weekday field brief.',
        promptChip: f.promptChips.morningChip,
      },
      {
        id: 'cap2',
        instruction: 'Configure Wed conflict guard.',
        promptChip: f.promptChips.guardChip,
      },
      {
        id: 'cap3',
        instruction: 'Declare which is schedule vs watch style.',
      },
      {
        id: 'cap4',
        instruction:
          'State one thing routines will not do without confirmation.',
      },
    ],
    checks: [
      {
        id: 'cap-morning',
        prompt:
          'Describe Weekday field brief (weekday + 7 AM + Detroit + read-only + quiet).',
        kind: 'text',
        grade: gradeCapstoneMorning,
        explanation: f.targets.weekdayFieldBrief.promptIntent,
      },
      {
        id: 'cap-guard',
        prompt:
          'Describe Wed conflict guard (Tue 6 PM + conflict names + propose-only + quiet).',
        kind: 'text',
        grade: gradeCapstoneGuard,
        explanation: f.targets.wedConflictGuard.promptIntent,
      },
      {
        id: 'cap-types',
        prompt: 'Are these schedule or event/watch style? (name both)',
        kind: 'text',
        grade: gradeCapstoneTypes,
        explanation:
          'Both scheduled — or morning=schedule and babysit=event if alt path.',
      },
      {
        id: 'cap-safety',
        prompt:
          'Name one gated write you will not let routines do without confirmation.',
        kind: 'text',
        grade: gradeCapstoneSafety,
        explanation: 'e.g. move events, email clients, share, merge.',
      },
    ],
  },
};
