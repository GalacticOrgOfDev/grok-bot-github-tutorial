import type { PracticeDrill } from '../../types';
import {
  botTeamVanSingel,
  gradeRolesAnswer,
  gradeDmAsk,
  gradeChannelSetup,
  gradeCapstoneRoles,
  gradeCapstoneChannel,
  gradeCapstoneScheduler,
  gradeCapstonePackets,
  gradeCapstoneConfirm,
} from '../../../shared/sandboxFixtures';

const f = botTeamVanSingel;
const cards = f.spamCards;

export const teamsPractices: Record<string, PracticeDrill> = {
  'practice-roles': {
    id: 'practice-roles',
    title: 'Drill A — Design 3 roles',
    goal: 'Pick/write 3 bots for a landscaping week with clear boundaries.',
    afterLesson: 'm4-l1-roles',
    passCriteria: '3 names + descriptions with clear boundaries (what they won’t do).',
    failHints: [
      'Crew Scheduler — calendar; propose; never silent-write',
      'Job Packets — Drive folders; draft shares only',
      'Estimator — quotes; no send without confirm',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'a1',
        instruction:
          'Name three roles (Scheduler, Packets, Estimator) with boundaries.',
        hint: f.fixtureId,
        promptChip:
          'Create Crew Scheduler, Job Packets, and Estimator with propose-only / draft-shares / no-send-without-confirm boundaries.',
      },
    ],
    checks: [
      {
        id: 'a-roles',
        prompt:
          'List your 3 bots and one “won’t do” for each (or confirm fixture bots).',
        kind: 'text',
        grade: gradeRolesAnswer,
        explanation:
          'Scheduler + Packets + Estimator with propose/confirm/draft boundaries.',
      },
      {
        id: 'a-boundary',
        prompt: 'What must every good role description include?',
        kind: 'mc',
        options: [
          'Only a funny name',
          'Scope + clear boundaries / won’t-do',
          'Your Google password',
          'Permission to silent-write everything',
        ],
        correctIndex: 1,
        explanation: 'Scope + boundaries (what they won’t do).',
      },
      {
        id: 'a-scheduler',
        prompt: 'Crew Scheduler may silent-write calendar moves?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Propose only — never silent-write.',
      },
    ],
  },

  'practice-dm': {
    id: 'practice-dm',
    title: 'Drill B — Crisp async ask',
    goal: 'Message one specialist with a scoped, confirm-gated ask.',
    afterLesson: 'm4-l2-dm',
    passCriteria: 'Single target, scoped ask, no fan-out, confirm-gated writes.',
    failHints: [
      'Target Job Packets only',
      'Van Singel backyard missing-file check',
      'Report back; don’t change sharing',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'b1',
        instruction: 'DM Job Packets with the chip ask.',
        promptChip: f.promptChips.dmPackets,
      },
      {
        id: 'b2',
        instruction: 'Confirm: one target, scoped, no fan-out.',
      },
    ],
    checks: [
      {
        id: 'b-async',
        prompt: 'Messaging a bot is…',
        kind: 'mc',
        options: [
          'A live conference call — wait in the same turn',
          'Async — they reply later',
          'Always @everyone',
          'A silent calendar write',
        ],
        correctIndex: 1,
        explanation: 'Async — not waiting in the same turn.',
      },
      {
        id: 'b-ask',
        prompt: 'Paste or paraphrase your DM to Job Packets.',
        kind: 'text',
        grade: gradeDmAsk,
        explanation: f.promptChips.dmPackets,
      },
      {
        id: 'b-fanout',
        prompt: 'Should you also @all bots “just in case”?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'No fan-out — single target.',
      },
    ],
  },

  'practice-channel': {
    id: 'practice-channel',
    title: 'Drill C — Project channel',
    goal: 'Create Van Singel Install with the right seats + one kickoff.',
    afterLesson: 'm4-l3-channel',
    passCriteria: 'Channel name, ≥2 members, one kickoff not five redundant pings.',
    failHints: [
      'Name: Van Singel Install',
      'Seat Scheduler + Packets (+ Estimator)',
      'One kickoff: Thursday 8–3; contract check',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'c1',
        instruction: 'Create channel and seat bots.',
        promptChip: f.promptChips.channelKickoff,
      },
      {
        id: 'c2',
        instruction: 'Post one kickoff — not five pings.',
      },
    ],
    checks: [
      {
        id: 'c-purpose',
        prompt: 'A channel is mainly for…',
        kind: 'mc',
        options: [
          'Spamming every bot in the company',
          'Shared project context for the right seats',
          'Storing passwords',
          'Replacing confirm-before-write',
        ],
        correctIndex: 1,
        explanation: 'Shared project context — not spam.',
      },
      {
        id: 'c-setup',
        prompt:
          'Describe your channel (name + who seated + kickoff gist).',
        kind: 'text',
        grade: gradeChannelSetup,
        explanation:
          'Van Singel Install · Scheduler + Packets · Thursday kickoff / contract check.',
      },
      {
        id: 'c-slack',
        prompt: 'In this tutorial, “channel” means Slack?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Grok Bot group chat — Slack stays stub.',
      },
    ],
  },

  'practice-no-spam': {
    id: 'practice-no-spam',
    title: 'Drill D — OK vs Don’t',
    goal: 'Tag coordination cards OK vs Don’t.',
    afterLesson: 'm4-l4-coord',
    passCriteria: '≥3/4 cards tagged correctly.',
    failHints: [
      'Scoped specialist ping → OK',
      '@entire company about a maybe → Don’t',
      'Confirm before homeowner email → OK',
      'Relay private rant verbatim → Don’t',
    ],
    passThreshold: 3,
    usesSandbox: true,
    steps: [
      {
        id: 'd1',
        instruction: 'Tag each scenario OK or Don’t (4 cards).',
        hint: f.fixtureId,
      },
    ],
    checks: cards.map((card, i) => ({
      id: `d-card-${i}`,
      prompt: card.text,
      kind: 'mc' as const,
      options: ['OK', "Don't"],
      correctIndex: card.answer === 'ok' ? 0 : 1,
      explanation:
        card.answer === 'ok'
          ? 'Scoped / confirm-gated — OK'
          : 'Fan-out or private vent relay — Don’t',
    })),
  },

  'practice-capstone-m4': {
    id: 'practice-capstone-m4',
    title: 'Capstone — Thursday install team',
    goal: 'Stand up staff + room; get proposal + packet gap; gate client email.',
    afterLesson: 'm4-practice-capstone',
    blurb: f.promptChips.capstoneBlurb,
    passCriteria: '4/5 verifier keys.',
    failHints: [
      'Confirm fixture roles (Scheduler, Packets, Estimator)',
      'Channel Van Singel Install seated',
      'Scheduler proposes Wed fix — chat only',
      'Packets reports missing signed-contract.pdf',
      'Estimator or self emails homeowner only after human confirm',
    ],
    passThreshold: 4,
    usesSandbox: true,
    steps: [
      {
        id: 'cap1',
        instruction: 'Confirm roles exist (or fixture bots).',
      },
      {
        id: 'cap2',
        instruction: 'Seat channel Van Singel Install.',
        promptChip: f.promptChips.channelKickoff,
      },
      {
        id: 'cap3',
        instruction: 'Scheduler proposes Wed fix (chat only).',
        promptChip: f.promptChips.schedulerPropose,
      },
      {
        id: 'cap4',
        instruction: 'Packets reports missing signed-contract.pdf.',
        promptChip: f.promptChips.packetsMissing,
      },
      {
        id: 'cap5',
        instruction:
          'State who emails homeowner only after human confirm.',
      },
    ],
    checks: [
      {
        id: 'cap-roles',
        prompt: 'Confirm roles / fixture bots for the Thursday team.',
        kind: 'text',
        grade: gradeCapstoneRoles,
        explanation: 'Scheduler + Packets + Estimator (fixture OK).',
      },
      {
        id: 'cap-channel',
        prompt: 'Describe the seated channel.',
        kind: 'text',
        grade: gradeCapstoneChannel,
        explanation: 'Van Singel Install with specialists seated.',
      },
      {
        id: 'cap-scheduler',
        prompt: 'What did Scheduler propose? (chat only)',
        kind: 'text',
        grade: gradeCapstoneScheduler,
        explanation: 'Wed fix proposed in chat — no silent calendar edit.',
      },
      {
        id: 'cap-packets',
        prompt: 'What did Packets report missing?',
        kind: 'text',
        grade: gradeCapstonePackets,
        explanation: 'signed-contract.pdf missing.',
      },
      {
        id: 'cap-confirm',
        prompt:
          'Who emails the homeowner, and when (confirm gate)?',
        kind: 'text',
        grade: gradeCapstoneConfirm,
        explanation: 'Estimator or self — only after human confirm.',
      },
    ],
  },
};
