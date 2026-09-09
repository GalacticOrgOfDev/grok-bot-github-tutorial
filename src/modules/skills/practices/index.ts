import type { PracticeDrill } from '../../types';
import {
  skillsPackField,
  gradeAuthorBrief,
  gradeWireTeam,
  gradeHardenRewrite,
  gradeHardenDelete,
  gradeCapstoneBrief,
  gradeCapstoneAudit,
  gradeCapstoneBotMap,
} from '../../../shared/sandboxFixtures';

const f = skillsPackField;
const cards = f.sortCards;
const SORT_LABELS = ['Skill', 'Routine', 'Once'] as const;
const sortIndex = (answer: (typeof cards)[number]['answer']) =>
  answer === 'skill' ? 0 : answer === 'routine' ? 1 : 2;

export const skillsPractices: Record<string, PracticeDrill> = {
  'practice-skill-sort': {
    id: 'practice-skill-sort',
    title: 'Drill A — Skill / Routine / Once',
    goal: 'Tag each card Skill, Routine, or Once.',
    afterLesson: 'm6-l1-sort',
    passCriteria: '≥5/6 cards tagged correctly.',
    failHints: [
      'Weekday 7am run → Routine',
      'How to build a 5-line brief → Skill',
      'Summarize today right now → Once',
      'When PR CI fails, ping me → Routine',
      'Steps to check a job folder → Skill',
      'Draft one homeowner text → Once',
    ],
    passThreshold: 5,
    usesSandbox: true,
    steps: [
      {
        id: 'a1',
        instruction: 'Tag each card Skill / Routine / Once (6 cards).',
        hint: f.fixtureId,
      },
    ],
    checks: cards.map((card, i) => ({
      id: `a-card-${i}`,
      prompt: card.text,
      kind: 'mc' as const,
      options: [...SORT_LABELS],
      correctIndex: sortIndex(card.answer),
      explanation: `${SORT_LABELS[sortIndex(card.answer)]} — ${card.answer}`,
    })),
  },

  'practice-author-brief': {
    id: 'practice-author-brief',
    title: 'Drill B — Author field-job-brief',
    goal: 'Create skill field-job-brief with when-to-use + read-only 5-line body.',
    afterLesson: 'm6-l2-author',
    passCriteria:
      'description is when-to-use; body has read-only + 5-line format + NO_EVENTS.',
    failHints: [
      'id/name: field-job-brief',
      'when-to-use from Calendar (+ optional Drive)',
      '5 lines, America/Detroit, gaps <30m',
      'read-only; NO_EVENTS if empty',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'b1',
        instruction: 'Save skill field-job-brief with the chip prompt.',
        promptChip: f.promptChips.saveBrief,
      },
      {
        id: 'b2',
        instruction: 'Confirm description answers when-to-use.',
      },
    ],
    checks: [
      {
        id: 'b-when',
        prompt: 'Skill descriptions must answer…',
        kind: 'mc',
        options: [
          'Your favorite emoji',
          'When to use this',
          'The bot’s password',
          'How often to silent-write',
        ],
        correctIndex: 1,
        explanation: 'When to use this — not a vague label.',
      },
      {
        id: 'b-author',
        prompt:
          'Paste or paraphrase your field-job-brief (name + when-to-use + body gist).',
        kind: 'text',
        grade: gradeAuthorBrief,
        explanation: f.promptChips.saveBrief,
      },
      {
        id: 'b-quiet',
        prompt: 'If nothing is on the calendar, the skill should…',
        kind: 'mc',
        options: [
          'Invent fake jobs',
          'Return NO_EVENTS (caller may stay quiet)',
          'Email every homeowner',
          'Edit the calendar silently',
        ],
        correctIndex: 1,
        explanation: 'NO_EVENTS — quiet when empty.',
      },
    ],
  },

  'practice-wire-team': {
    id: 'practice-wire-team',
    title: 'Drill C — Wire the team',
    goal: 'Point Crew Scheduler + Job Packets at [field-job-brief].',
    afterLesson: 'm6-l3-wire',
    passCriteria:
      'both specialists referenced; skill named; no fan-out to unrelated bots.',
    failHints: [
      'Crew Scheduler + Job Packets',
      'Skill: field-job-brief',
      'CoS assigns once',
      'No @everyone',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'c1',
        instruction: 'Point Scheduler + Packets at field-job-brief.',
        promptChip: f.promptChips.wireTeam,
      },
      {
        id: 'c2',
        instruction: 'Confirm: both specialists, named skill, no fan-out.',
      },
    ],
    checks: [
      {
        id: 'c-share',
        prompt: 'Sharing a skill across bots means…',
        kind: 'mc',
        options: [
          'Three reinvented briefs',
          'Same playbook, clearer handoffs',
          'Wake every bot forever',
          'Delete all routines',
        ],
        correctIndex: 1,
        explanation: 'Same playbook, clearer handoffs.',
      },
      {
        id: 'c-wire',
        prompt: 'Describe who you pointed at which skill.',
        kind: 'text',
        grade: gradeWireTeam,
        explanation: f.promptChips.wireTeam,
      },
      {
        id: 'c-fanout',
        prompt: 'Should you also @all bots for the morning brief?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'No fan-out — wire only who needs it.',
      },
    ],
  },

  'practice-harden': {
    id: 'practice-harden',
    title: 'Drill D — Harden / delete',
    goal: 'Rewrite auto-text-clients; delete tmp-skill-test.',
    afterLesson: 'm6-l4-harden',
    passCriteria: 'rewrite gates sends; delete confirmed.',
    failHints: [
      'Clear when-to-use (not “stuff”)',
      'Draft-only + human confirm before send',
      'No unrelated folder scraping',
      'Delete tmp-skill-test',
    ],
    passThreshold: 3,
    usesSandbox: true,
    steps: [
      {
        id: 'd1',
        instruction: 'Rewrite the broken auto-text-clients skill.',
        promptChip: f.promptChips.hardenRewrite,
        hint: `Broken: "${f.skills['auto-text-clients'].brokenDescription}" / ${f.skills['auto-text-clients'].brokenBody}`,
      },
      {
        id: 'd2',
        instruction: 'Delete obsolete tmp-skill-test.',
      },
    ],
    checks: [
      {
        id: 'd-managed',
        prompt: 'Cursor-managed skills are…',
        kind: 'mc',
        options: [
          'Editable by anyone',
          'Read-only (can’t edit/delete)',
          'Always silent-send',
          'Required to delete first',
        ],
        correctIndex: 1,
        explanation: 'Read-only — can’t edit/delete managed skills.',
      },
      {
        id: 'd-rewrite',
        prompt: 'Paste your rewritten auto-text-clients (when-to-use + gates).',
        kind: 'text',
        grade: gradeHardenRewrite,
        explanation:
          'Clear when-to-use; draft-only; human confirm; no unrelated scraping.',
      },
      {
        id: 'd-delete',
        prompt: 'Confirm you deleted tmp-skill-test.',
        kind: 'text',
        grade: gradeHardenDelete,
        explanation: 'Delete confirmed for junk tmp-skill-test.',
      },
      {
        id: 'd-silent',
        prompt: 'Vague description + silent client texts is OK?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Bad — fix with draft + confirm.',
      },
    ],
  },

  'practice-capstone-m6': {
    id: 'practice-capstone-m6',
    title: 'Capstone — two skills for install week',
    goal: 'Ship field-job-brief + job-packet-audit; name which bot runs which.',
    afterLesson: 'm6-practice-capstone',
    blurb: f.promptChips.capstoneBlurb,
    passCriteria:
      'both saved with when-to-use; both confirm-gated; learner names which bot should run which.',
    failHints: [
      'Save field-job-brief (5 lines, read-only, NO_EVENTS)',
      'Save job-packet-audit (checklist; draft share; confirm)',
      'Scheduler → brief; Packets → audit',
      'Nothing texts a homeowner without you',
    ],
    passThreshold: 3,
    usesSandbox: true,
    steps: [
      {
        id: 'cap1',
        instruction: 'Save field-job-brief.',
        promptChip: f.promptChips.saveBrief,
      },
      {
        id: 'cap2',
        instruction: 'Save job-packet-audit.',
        promptChip: f.promptChips.saveAudit,
      },
      {
        id: 'cap3',
        instruction: 'Name which bot should run which skill.',
      },
    ],
    checks: [
      {
        id: 'cap-brief',
        prompt: 'Confirm field-job-brief (when-to-use + body gist).',
        kind: 'text',
        grade: gradeCapstoneBrief,
        explanation: f.promptChips.saveBrief,
      },
      {
        id: 'cap-audit',
        prompt: 'Confirm job-packet-audit (when-to-use + confirm gates).',
        kind: 'text',
        grade: gradeCapstoneAudit,
        explanation: f.promptChips.saveAudit,
      },
      {
        id: 'cap-bots',
        prompt: 'Which bot runs the brief? Which runs the audit?',
        kind: 'text',
        grade: gradeCapstoneBotMap,
        explanation: 'Crew Scheduler → field-job-brief; Job Packets → job-packet-audit.',
      },
      {
        id: 'cap-gate',
        prompt: 'May either skill text a homeowner without human confirm?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Confirm-gated — nothing texts without you.',
      },
    ],
  },
};
