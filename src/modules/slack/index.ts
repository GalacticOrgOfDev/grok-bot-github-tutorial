import type { ModuleManifest } from '../types';

/** Thin stub only — for specialists who live in Slack; not prioritized. */
export const slackManifest: ModuleManifest = {
  moduleId: 'slack',
  series: 'grok-bot-plus',
  version: 0,
  depth: 'solid',
  passScore: 0.8,
  title: 'Grok Bot + Slack (coming)',
  subtitle:
    'For teams that live in Slack — not required for Calendar/Drive specialists',
  objectives: [
    'Placeholder stub: channels, digests, and on-call handoffs for Slack-native teams.',
  ],
  estMinutes: 45,
  prereqs: ['Complete Module 1 — GitHub (optional)'],
  status: 'stub',
  lessonOrder: [],
  connectors: ['slack'],
  platform: 'android',
};
