import type { Quiz } from '../../types';

/** 10 questions · pass ≥ 8/10 (passScore 0.8) */
export const m6Quiz: Quiz = {
  id: 'm6-test',
  title: 'Module 6 quiz',
  passScore: 0.8,
  questions: [
    {
      id: 'q1',
      kind: 'mc',
      stem: 'A skill is best described as…',
      options: [
        { id: 'A', text: 'A schedule that fires every weekday at 7am' },
        {
          id: 'B',
          text: 'A reusable recipe any assistant can run (no trigger by itself)',
        },
        { id: 'C', text: 'A one-shot ask you never save' },
        { id: 'D', text: 'A silent client text blast' },
      ],
      correctOptionId: 'B',
      explanation:
        'Reusable recipe any assistant can run — no trigger by itself.',
    },
    {
      id: 'q2',
      kind: 'mc',
      stem: 'A routine differs because it has a…',
      options: [
        { id: 'A', text: 'Favorite emoji' },
        { id: 'B', text: 'Schedule or event trigger' },
        { id: 'C', text: 'Requirement to silent-write' },
        { id: 'D', text: 'Ban on when-to-use descriptions' },
      ],
      correctOptionId: 'B',
      explanation: 'Routines have a schedule or event trigger.',
    },
    {
      id: 'q3',
      kind: 'mc',
      stem: 'Skill descriptions must answer…',
      options: [
        { id: 'A', text: 'What your password is' },
        { id: 'B', text: 'When to use this' },
        { id: 'C', text: 'How to wake every bot' },
        { id: 'D', text: 'Nothing — leave them blank' },
      ],
      correctOptionId: 'B',
      explanation: 'When to use this — sharp when-to-use description.',
    },
    {
      id: 'q4',
      kind: 'mc',
      stem: 'Vague description + silent client texts is…',
      options: [
        { id: 'A', text: 'Best practice' },
        {
          id: 'B',
          text: 'Dangerous — fix with draft + human confirm',
        },
        { id: 'C', text: 'Required for Cursor-managed skills' },
        { id: 'D', text: 'The only way to share playbooks' },
      ],
      correctOptionId: 'B',
      explanation: 'Bad skill — rewrite to draft + confirm.',
    },
    {
      id: 'q5',
      kind: 'mc',
      stem: 'Sharing a skill across bots means…',
      options: [
        { id: 'A', text: 'Three reinvented morning briefs' },
        { id: 'B', text: 'Same playbook, clearer handoffs' },
        { id: 'C', text: 'Fan-out to every bot forever' },
        { id: 'D', text: 'Deleting all roles' },
      ],
      correctOptionId: 'B',
      explanation: 'Same playbook, clearer handoffs.',
    },
    {
      id: 'q6',
      kind: 'mc',
      stem: 'Cursor-managed skills are…',
      options: [
        { id: 'A', text: 'Editable and deletable by learners' },
        { id: 'B', text: 'Read-only (can’t edit/delete)' },
        { id: 'C', text: 'Always silent-send' },
        { id: 'D', text: 'Banned from teams' },
      ],
      correctOptionId: 'B',
      explanation: 'Read-only — can’t edit or delete managed skills.',
    },
    {
      id: 'q7',
      kind: 'short',
      stem: 'Name the two sections every skill needs.',
      shortRubric: [
        'description',
        'body',
        'when',
        'when-to-use',
        'steps',
        'constraints',
        'markdown',
      ],
      explanation: 'description + body (when-to-use + steps/constraints).',
    },
    {
      id: 'q8',
      kind: 'mc',
      stem: 'NO_EVENTS / quiet rules belong in…',
      options: [
        { id: 'A', text: 'Nowhere — always invent events' },
        {
          id: 'B',
          text: 'The skill body and/or the calling routine',
        },
        { id: 'C', text: 'Your Slack webhook only' },
        { id: 'D', text: 'A secret Drive folder' },
      ],
      correctOptionId: 'B',
      explanation: 'Quiet rules live in skill body and/or calling routine.',
    },
    {
      id: 'q9',
      kind: 'mc',
      stem: 'Best first skills for field ops?',
      options: [
        { id: 'A', text: 'One mega “do everything” skill' },
        {
          id: 'B',
          text: 'Field brief + packet audit (not “do everything”)',
        },
        { id: 'C', text: 'Silent client text blasts' },
        { id: 'D', text: 'Fifty random unnamed skills' },
      ],
      correctOptionId: 'B',
      explanation: 'field-job-brief + job-packet-audit — not “do everything.”',
    },
    {
      id: 'q10',
      kind: 'mc',
      stem: 'Module complete when you can…',
      options: [
        { id: 'A', text: 'Only ask once forever' },
        {
          id: 'B',
          text: 'Sort types → author → wire team → harden',
        },
        { id: 'C', text: 'Auto-text homeowners with no review' },
        { id: 'D', text: 'Require Slack before any skill work' },
      ],
      correctOptionId: 'B',
      explanation: 'Sort → author → wire → harden.',
    },
  ],
};
