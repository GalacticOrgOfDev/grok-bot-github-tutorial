import type { PracticeDrill } from '../../types';
import {
  slackCrewOps,
  gradeSlackConnect,
  gradeSlackOpenAsk,
  gradeSlackDraft,
  gradeSlackRoutine,
  gradeSlackCapstoneSummary,
  gradeSlackCapstoneDraft,
  gradeSlackCapstoneRoutine,
  gradeSlackCapstoneNever,
} from '../../../shared/sandboxFixtures';

const f = slackCrewOps;

export const slackPractices: Record<string, PracticeDrill> = {
  'practice-slack-connect': {
    id: 'practice-slack-connect',
    title: 'Drill A — Connect & verify',
    goal: 'Prove Slack workspace + channel access.',
    afterLesson: 'm3-l1-connect',
    passCriteria: 'Workspace name + ≥1 channel (or clear access error with fix hint).',
    failHints: [
      'Ask which workspace you are connected to',
      'List channels (or allowlist)',
      'Reconnect if empty list',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'a1',
        instruction: 'Ask which Slack workspace you are connected to.',
        promptChip: f.promptChips.workspace,
      },
      {
        id: 'a2',
        instruction: 'List channels you can see.',
        promptChip: f.promptChips.listChannels,
      },
      {
        id: 'a3',
        instruction: 'Confirm bot / @Grok Bot visibility expectation.',
      },
    ],
    checks: [
      {
        id: 'a-workspace',
        prompt: 'Which workspace did the bot return (sandbox)?',
        kind: 'mc',
        options: [
          'Personal DM only',
          'Springdyke Demo',
          'Random Discord',
          'No workspace ever',
        ],
        correctIndex: 1,
        explanation: 'Sandbox workspace: Springdyke Demo',
      },
      {
        id: 'a-channel',
        prompt: 'Name one channel you should see in the fixture.',
        kind: 'text',
        grade: gradeSlackConnect,
        explanation: '#crew-ops / C-CREW-OPS',
      },
      {
        id: 'a-empty',
        prompt: 'Empty channel list most likely means…',
        kind: 'mc',
        options: [
          'Slack has zero channels worldwide',
          'Wrong workspace / missing access / re-auth',
          'Always delete the connector',
          'Post @channel immediately',
        ],
        correctIndex: 1,
        explanation: 'Wrong workspace, missing access, or expired auth.',
      },
    ],
  },

  'practice-slack-read': {
    id: 'practice-slack-read',
    title: 'Drill B — Summarize #crew-ops',
    goal: 'Structured summary + open ask.',
    afterLesson: 'm3-l2-read',
    passCriteria: 'Summary matches fixture; open ask identified (need trailer hitch confirmation).',
    failHints: [
      '5 bullets: decisions, asks, blockers, owners, what’s next',
      'Open ask: trailer hitch confirmation',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'b1',
        instruction: 'Summarize last messages in #crew-ops (5 bullets).',
        promptChip: f.promptChips.summarize,
        hint: f.fixtureId,
      },
      {
        id: 'b2',
        instruction: 'Ask if there is an open ask for you / the crew lead.',
        promptChip: f.promptChips.openAsk,
      },
    ],
    checks: [
      {
        id: 'b-structure',
        prompt: 'Best read prompt shape?',
        kind: 'mc',
        options: [
          'Paste raw dump with no structure',
          'Structured summary (decisions / asks / blockers / owners / next)',
          'Relay every rant verbatim to another channel',
          'Ignore the channel',
        ],
        correctIndex: 1,
        explanation: 'Structured summary beats raw dump / vent-relay.',
      },
      {
        id: 'b-ask',
        prompt: 'What is the open ask in #crew-ops?',
        kind: 'text',
        grade: gradeSlackOpenAsk,
        explanation: f.openAsk,
      },
      {
        id: 'b-author',
        prompt: 'Who flagged the hitch confirmation ask?',
        kind: 'mc',
        options: ['alex', 'jordan', 'sam', 'nobody'],
        correctIndex: 2,
        explanation: 'sam: @crew-lead need trailer hitch confirmation before 6pm',
      },
    ],
  },

  'practice-slack-write': {
    id: 'practice-slack-write',
    title: 'Drill C — Draft then post',
    goal: 'Draft-before-post gate.',
    afterLesson: 'm3-l3-write',
    passCriteria: 'Write before draft visible → fail; confirm-after-draft → pass.',
    failHints: [
      'Draft only first — do NOT post yet',
      'Then Yes, post that reply',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'c1',
        instruction: 'Draft Van Singel Thu 8am crew-of-3 reply — no post yet.',
        promptChip: f.promptChips.draft,
      },
      {
        id: 'c2',
        instruction: 'Review draft shape.',
      },
      {
        id: 'c3',
        instruction: 'Confirm post or cancel.',
        promptChip: f.promptChips.confirmPost,
      },
    ],
    checks: [
      {
        id: 'c-early',
        prompt: 'Did you ask to post before the draft was visible?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Must be No — draft first.',
      },
      {
        id: 'c-draft',
        prompt: 'Paraphrase the draft reply (Van Singel + crew of 3 + hitch).',
        kind: 'text',
        grade: gradeSlackDraft,
        explanation: f.draftReplyShape,
      },
      {
        id: 'c-pattern',
        prompt: 'Before posting to Slack via Grok Bot…',
        kind: 'mc',
        options: [
          'Auto-post every draft',
          'Draft in chat, then explicit confirm',
          'Always @channel first',
          'Skip review for pricing',
        ],
        correctIndex: 1,
        explanation: 'Draft in chat, then explicit confirm.',
      },
    ],
  },

  'practice-slack-routine': {
    id: 'practice-slack-routine',
    title: 'Drill D — weather/cancel routine',
    goal: 'Slack keyword routine scoped to #crew-ops.',
    afterLesson: 'm3-l4-routine',
    passCriteria:
      'Slack trigger, channel scoped, keyword match, digest prompt, no auto-reply unless asked.',
    failHints: [
      '#crew-ops',
      'weather|cancel',
      'Ping author + text + next action; no auto-reply',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'd1',
        instruction: 'Create Crew-ops weather/cancel keyword routine.',
        promptChip: f.promptChips.routine,
      },
      {
        id: 'd2',
        instruction: 'Confirm channel scope, keywords, digest, no auto-reply.',
      },
    ],
    checks: [
      {
        id: 'd-behavior',
        prompt: 'A keyword routine should…',
        kind: 'mc',
        options: [
          'Spam you on every channel message',
          'Ping you with a digest; not spam every message',
          'Auto @channel the company',
          'Post pricing without confirm',
        ],
        correctIndex: 1,
        explanation: 'Digest ping; ignore irrelevant messages.',
      },
      {
        id: 'd-config',
        prompt: 'Describe your routine (channel + keywords + digest / no auto-reply).',
        kind: 'text',
        grade: gradeSlackRoutine,
        explanation: f.routineTarget.name,
      },
      {
        id: 'd-fields',
        prompt: 'Two fields every Slack routine needs?',
        kind: 'mc',
        options: [
          'Password + API key in the prompt',
          'Channel + match (keyword / mention / message)',
          'Only a witty name',
          'Global @here on every fire',
        ],
        correctIndex: 1,
        explanation: 'Channel + match kind.',
      },
    ],
  },

  'practice-capstone-slack': {
    id: 'practice-capstone-slack',
    title: 'Capstone — Crew ops morning',
    goal: 'Summarize, draft-confirm hitch reply, ensure weather/cancel routine, declare a never-auto.',
    afterLesson: 'm3-practice-capstone',
    blurb: f.promptChips.capstoneBlurb,
    passCriteria: '4/5 checks.',
    failHints: [
      'Summarize #crew-ops + hitch ask',
      'Draft then confirm hitch reply',
      'weather/cancel routine exists',
      'Never auto: @channel / pricing / client PII',
    ],
    passThreshold: 4,
    usesSandbox: true,
    steps: [
      {
        id: 'cap1',
        instruction: 'Summarize #crew-ops (fixture).',
        promptChip: f.promptChips.summarize,
      },
      {
        id: 'cap2',
        instruction: 'Draft hitch confirmation reply (no post yet).',
        promptChip: f.promptChips.draft,
      },
      {
        id: 'cap3',
        instruction: 'Confirm post.',
        promptChip: f.promptChips.confirmPost,
      },
      {
        id: 'cap4',
        instruction: 'Ensure weather/cancel routine exists or create it.',
        promptChip: f.promptChips.routine,
      },
      {
        id: 'cap5',
        instruction: 'State one thing you will never auto-post.',
      },
    ],
    checks: [
      {
        id: 'cap-summary',
        prompt: 'What open ask did you find?',
        kind: 'text',
        grade: gradeSlackCapstoneSummary,
        explanation: f.openAsk,
      },
      {
        id: 'cap-draft',
        prompt: 'Describe the hitch reply you drafted then confirmed.',
        kind: 'text',
        grade: gradeSlackCapstoneDraft,
        explanation: f.draftReplyShape,
      },
      {
        id: 'cap-early',
        prompt: 'Did you post before the draft was visible?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Draft-before-post gate.',
      },
      {
        id: 'cap-routine',
        prompt: 'Describe the weather/cancel routine you kept or created.',
        kind: 'text',
        grade: gradeSlackCapstoneRoutine,
        explanation: 'Channel #crew-ops + weather|cancel + digest, no auto-reply.',
      },
      {
        id: 'cap-never',
        prompt: 'Name one thing you will never auto-post.',
        kind: 'text',
        grade: gradeSlackCapstoneNever,
        explanation: f.safetyNeverAuto.join(', '),
      },
    ],
  },
};
