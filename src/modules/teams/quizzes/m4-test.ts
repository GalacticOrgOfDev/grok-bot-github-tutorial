import type { Quiz } from '../../types';

/** 10 questions · pass ≥ 8/10 (passScore 0.8) */
export const m4Quiz: Quiz = {
  id: 'm4-test',
  title: 'Module 4 quiz',
  passScore: 0.8,
  questions: [
    {
      id: 'q1',
      kind: 'mc',
      stem: 'Specialist bots help most when…',
      options: [
        { id: 'A', text: 'You want one mega-chat to do everything forever' },
        {
          id: 'B',
          text: 'Work splits into clear lanes with role boundaries',
        },
        { id: 'C', text: 'You refuse to name any role' },
        { id: 'D', text: 'You always @everyone on every maybe' },
      ],
      correctOptionId: 'B',
      explanation: 'Clear roles with boundaries beat one overloaded blob.',
    },
    {
      id: 'q2',
      kind: 'mc',
      stem: 'Messaging a teammate bot is…',
      options: [
        { id: 'A', text: 'A live conference call — wait in the same turn' },
        { id: 'B', text: 'Async — they reply later' },
        { id: 'C', text: 'Always a silent calendar write' },
        { id: 'D', text: 'Only possible via Slack (required)' },
      ],
      correctOptionId: 'B',
      explanation: 'Async — not waiting in the same turn.',
    },
    {
      id: 'q3',
      kind: 'mc',
      stem: 'Fan-out to every bot “just in case”…',
      options: [
        { id: 'A', text: 'Is best practice' },
        { id: 'B', text: 'Don’t — wake only who needs the context' },
        { id: 'C', text: 'Replaces confirm-before-write' },
        { id: 'D', text: 'Is required for channels' },
      ],
      correctOptionId: 'B',
      explanation: 'Don’t fan-out — scoped assignment only.',
    },
    {
      id: 'q4',
      kind: 'mc',
      stem: 'A project channel is for…',
      options: [
        { id: 'A', text: 'Spamming five redundant pings' },
        {
          id: 'B',
          text: 'Shared project context with the right seats — not spam',
        },
        { id: 'C', text: 'Storing API keys in the title' },
        { id: 'D', text: 'Replacing human confirm on client email' },
      ],
      correctOptionId: 'B',
      explanation: 'Shared project context, not spam.',
    },
    {
      id: 'q5',
      kind: 'mc',
      stem: 'Consequential sends (client email, calendar write) need…',
      options: [
        { id: 'A', text: 'Silent auto-send always' },
        { id: 'B', text: 'Human confirm' },
        { id: 'C', text: 'Fan-out to 50 bots first' },
        { id: 'D', text: 'Relaying private vents verbatim' },
      ],
      correctOptionId: 'B',
      explanation: 'Human confirm before client-facing / write actions.',
    },
    {
      id: 'q6',
      kind: 'mc',
      stem: 'Good Chief-of-Staff pattern…',
      options: [
        { id: 'A', text: 'CoS does all specialty work alone' },
        {
          id: 'B',
          text: 'Assign → specialist returns → human decides',
        },
        { id: 'C', text: 'Wake the whole company on every maybe' },
        { id: 'D', text: 'Skip role descriptions' },
      ],
      correctOptionId: 'B',
      explanation: 'Assign → specialist returns → human decides.',
    },
    {
      id: 'q7',
      kind: 'short',
      stem: 'Name two things a good role description should include.',
      shortRubric: [
        'scope',
        'boundary',
        'boundaries',
        "won't",
        'will not',
        'never',
        'role',
        'name',
        'description',
        'propose',
        'confirm',
        'lane',
      ],
      explanation: 'Scope + boundaries / won’t-do (name + clear limits).',
    },
    {
      id: 'q8',
      kind: 'mc',
      stem: 'Relaying a user’s private angry rant verbatim to Estimator…',
      options: [
        { id: 'A', text: 'OK — more context is always better' },
        { id: 'B', text: 'Don’t' },
        { id: 'C', text: 'Required for CoS patterns' },
        { id: 'D', text: 'The only way to seat a channel' },
      ],
      correctOptionId: 'B',
      explanation: 'Private vents stay private — Don’t.',
    },
    {
      id: 'q9',
      kind: 'mc',
      stem: 'Best first team for field ops?',
      options: [
        { id: 'A', text: '50 random bots with no roles' },
        {
          id: 'B',
          text: 'Scheduler + Packets (+ Estimator) with clear boundaries',
        },
        { id: 'C', text: 'Only a mega-chat blob' },
        { id: 'D', text: 'Slack-only with no Grok Bot channel' },
      ],
      correctOptionId: 'B',
      explanation: 'Scheduler + Packets (+ Estimator) — not 50 random bots.',
    },
    {
      id: 'q10',
      kind: 'mc',
      stem: 'Module 4 complete when you can…',
      options: [
        { id: 'A', text: 'Only use one mega-chat forever' },
        {
          id: 'B',
          text: 'Design roles, DM one, seat a channel, coordinate without spam, gate writes',
        },
        { id: 'C', text: 'Auto-email homeowners with no review' },
        { id: 'D', text: 'Require Slack before any team work' },
      ],
      correctOptionId: 'B',
      explanation:
        'Roles → DM → channel → no-spam coordination → gated writes.',
    },
  ],
};
