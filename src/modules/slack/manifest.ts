import type { ModuleManifest } from '../types';

export const slackManifest: ModuleManifest = {
  moduleId: 'slack',
  series: 'grok-bot-plus',
  version: 1,
  depth: 'solid',
  passScore: 0.8,
  title: 'Grok Bot + Slack',
  subtitle:
    'Connect workspace, read channels from chat, draft-then-confirm posts, keyword routines — for teams that live in Slack',
  objectives: [
    'Connect (or verify) the Slack connector and confirm workspace + bot identity.',
    'Read a channel or DM summary from Grok Bot chat without leaving the phone.',
    'Draft a reply or channel post in chat first; post only after explicit confirm.',
    'Create a Slack-triggered routine (keyword, mention, or channel message) that pings a useful digest — quiet when irrelevant.',
    'Use safe team patterns: no dumping secrets, no fan-out spam, paraphrase not vent-relay, confirm before @channel / posts.',
    'Troubleshoot: wrong workspace, missing channel access, auth expired, empty reads.',
  ],
  estMinutes: 55,
  prereqs: [
    'Comfortable with chat',
    'Google or GitHub module helpful',
  ],
  status: 'live',
  connectors: ['slack'],
  platform: 'android',
  lessonOrder: [
    'm3-intro',
    'm3-l1-connect',
    'm3-v2',
    'm3-l2-read',
    'm3-v3',
    'm3-l3-write',
    'm3-v4',
    'm3-l4-routine',
    'm3-practice-capstone',
    'm3-test',
    'm3-outro',
  ],
};
