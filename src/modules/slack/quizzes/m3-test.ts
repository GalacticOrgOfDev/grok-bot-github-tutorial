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
      stem: 'Before posting to Slack via Grok Bot…',
      options: [
        { id: 'A', text: 'Auto-post every draft immediately' },
        { id: 'B', text: 'Draft in chat, then explicit confirm' },
        { id: 'C', text: 'Always @channel first' },
        { id: 'D', text: 'Paste client passwords into the channel' },
      ],
      correctOptionId: 'B',
      explanation: 'Draft in chat, then explicit confirm.',
    },
    {
      id: 'q2',
      kind: 'mc',
      stem: 'First prompt after connect…',
      options: [
        { id: 'A', text: 'Delete the workspace' },
        { id: 'B', text: 'Which workspace + list channels' },
        { id: 'C', text: 'Post pricing to #general' },
        { id: 'D', text: 'Disable confirmations forever' },
      ],
      correctOptionId: 'B',
      explanation: 'Verify workspace identity and channel visibility.',
    },
    {
      id: 'q3',
      kind: 'mc',
      stem: 'A keyword routine should…',
      options: [
        { id: 'A', text: 'Spam you on every message in every channel' },
        {
          id: 'B',
          text: 'Ping you with a digest; not spam every message',
        },
        { id: 'C', text: 'Auto-reply in Slack with no review' },
        { id: 'D', text: 'Ignore the channel scope' },
      ],
      correctOptionId: 'B',
      explanation: 'Digest ping; stay quiet when irrelevant.',
    },
    {
      id: 'q4',
      kind: 'mc',
      stem: 'Empty channel list likely…',
      options: [
        { id: 'A', text: 'Slack has no channels on Earth' },
        {
          id: 'B',
          text: 'Wrong workspace / missing access / re-auth',
        },
        { id: 'C', text: 'You must @channel to unlock lists' },
        { id: 'D', text: 'Delete Grok Bot' },
      ],
      correctOptionId: 'B',
      explanation: 'Troubleshoot workspace, access, and auth first.',
    },
    {
      id: 'q5',
      kind: 'mc',
      stem: '@channel or client pricing…',
      options: [
        { id: 'A', text: 'Always auto-post for speed' },
        { id: 'B', text: 'Never auto; human confirm' },
        { id: 'C', text: 'Relay through strangers’ DMs' },
        { id: 'D', text: 'Skip draft review' },
      ],
      correctOptionId: 'B',
      explanation: 'Consequential posts stay human-gated.',
    },
    {
      id: 'q6',
      kind: 'mc',
      stem: 'Relaying a teammate’s angry rant verbatim into another channel…',
      options: [
        { id: 'A', text: 'Do it for “transparency”' },
        { id: 'B', text: 'Don’t — paraphrase; no vent-relay' },
        { id: 'C', text: 'Required by Slack' },
        { id: 'D', text: 'Best done with @channel' },
      ],
      correctOptionId: 'B',
      explanation: 'Don’t vent-relay; paraphrase with care.',
    },
    {
      id: 'q7',
      kind: 'short',
      stem: 'Name two fields of a Slack routine.',
      shortRubric: [
        'channel',
        'match',
        'keyword',
        'mention',
        'message',
        'trigger',
        'prompt',
        'digest',
        'name',
      ],
      explanation:
        'Any two of: channel, match (keyword/mention/message), trigger, prompt/digest, name.',
    },
    {
      id: 'q8',
      kind: 'mc',
      stem: 'Best read prompt…',
      options: [
        { id: 'A', text: 'Dump everything with no structure' },
        {
          id: 'B',
          text: 'Structured summary (decisions / asks / blockers)',
        },
        { id: 'C', text: 'Ignore open asks' },
        { id: 'D', text: 'Only react with emoji' },
      ],
      correctOptionId: 'B',
      explanation: 'Structured summary surfaces decisions and asks.',
    },
    {
      id: 'q9',
      kind: 'mc',
      stem: 'Slack module audience…',
      options: [
        { id: 'A', text: 'Required for every Calendar-only user' },
        {
          id: 'B',
          text: 'Specialists who use Slack; optional if you don’t',
        },
        { id: 'C', text: 'Only desktop admins' },
        { id: 'D', text: 'Nobody — always stub' },
      ],
      correctOptionId: 'B',
      explanation: 'Series completeness for Slack-native teams; optional otherwise.',
    },
    {
      id: 'q10',
      kind: 'mc',
      stem: 'Module 3 complete when…',
      options: [
        { id: 'A', text: 'You only read DMs forever' },
        {
          id: 'B',
          text: 'Connect → read → draft/confirm post → keyword routine → safe norms',
        },
        { id: 'C', text: 'You auto-post pricing nightly' },
        { id: 'D', text: 'You skip confirmations' },
      ],
      correctOptionId: 'B',
      explanation: 'Full Slack loop with safe norms.',
    },
  ],
};
