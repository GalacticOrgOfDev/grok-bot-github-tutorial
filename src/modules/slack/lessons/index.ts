import type { LessonContent } from '../../types';

export const slackLessons: Record<string, LessonContent> = {
  'm3-l1-connect': {
    id: 'm3-l1-connect',
    title: 'Connect & verify workspace',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 8,
    practiceId: 'practice-slack-connect',
    sections: [
      {
        heading: 'Connect Slack',
        body: 'Specialists who live in Slack need the connector so Grok Bot can see the right workspace from the truck — without tab thrash.',
        bullets: [
          'Confirm workspace name (sandbox: Springdyke Demo)',
          'Confirm bot / @Grok Bot visibility expectation',
          'List channels you can see (or named allowlist)',
        ],
        uiPath: 'Settings → Connectors → Slack',
        promptExample: 'Which Slack workspace am I connected to?',
        callout: {
          kind: 'tip',
          text: 'First prompts after connect: which workspace + list channels.',
        },
      },
      {
        heading: 'Empty channel list?',
        body: 'Wrong workspace, missing channel access, or expired auth. Reconnect and re-check scopes before assuming Slack is “broken.”',
        promptExample: 'List channels I can see',
        callout: {
          kind: 'warn',
          text: 'Empty list → wrong workspace / missing access / re-auth — not “Slack has no channels.”',
        },
      },
    ],
  },
  'm3-l2-read': {
    id: 'm3-l2-read',
    title: 'Summarize a channel / thread',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-slack-read',
    sections: [
      {
        heading: 'Structured channel summary',
        body: 'Ask for decisions, asks, blockers, owners, and what’s next — not a raw dump. Sandbox channel: #crew-ops (fixture slack-crew-ops).',
        promptExample:
          'Summarize the last 10 messages in #crew-ops in 5 bullets: decisions, asks, blockers, owners, what’s next.',
        callout: {
          kind: 'info',
          text: 'Open ask in fixture: trailer hitch confirmation for @crew-lead.',
        },
      },
      {
        heading: 'Find the ask for you',
        body: 'Follow with: Is there an open ask for me / the crew lead? Paraphrase — don’t vent-relay angry rants into another channel.',
        promptExample: 'Is there an open ask for me / the crew lead?',
      },
    ],
  },
  'm3-l3-write': {
    id: 'm3-l3-write',
    title: 'Confirm-before-send posts',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-slack-write',
    sections: [
      {
        heading: 'Draft then confirm',
        body: 'Draft the reply in chat first. Review. Only post after explicit confirm. App gate: write attempted before draft visible → fail.',
        promptExample:
          'Draft a short reply in #crew-ops confirming Van Singel Thursday 8am crew of 3 — do NOT post yet.',
        uiPath: 'Chat → draft → Confirm Post sheet',
        callout: {
          kind: 'warn',
          text: 'Never auto @channel, pricing, or client PII. Human confirm only.',
        },
      },
      {
        heading: 'Expected shape',
        body: 'Confirmed: Van Singel Thursday 8am, crew of 3. Trailer hitch reserved / confirmed. —[name]',
        promptExample: 'Yes, post that reply.',
      },
    ],
  },
  'm3-l4-routine': {
    id: 'm3-l4-routine',
    title: 'Keyword / mention routine',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 12,
    practiceId: 'practice-slack-routine',
    sections: [
      {
        heading: 'Ping me when… in Slack',
        body: 'Scope to a channel and a match (keyword / mention / message). Digest: author, text, one next action. Quiet on irrelevant messages. Do not auto-reply in Slack unless asked.',
        promptExample:
          'Create a routine: in Slack channel #crew-ops, when a message contains keyword weather OR cancel, ping me with the message text, author, and one recommended next action. Ignore other messages.',
        callout: {
          kind: 'tip',
          text: 'Two fields every Slack routine needs: channel + match (keyword/mention/message).',
        },
      },
      {
        heading: 'Fixture target',
        body: 'Name: Crew-ops weather/cancel. Keywords weather|cancel. Prompt intent: Ping with author, text, and one next action. Do not reply in Slack unless asked.',
        uiPath: 'Routines → New → Slack trigger',
      },
    ],
  },
};
