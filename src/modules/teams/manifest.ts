import type { ModuleManifest } from '../types';

export const teamsManifest: ModuleManifest = {
  moduleId: 'teams',
  series: 'grok-bot-plus',
  version: 1,
  depth: 'solid',
  passScore: 0.8,
  title: 'Grok Bot + Bot Teams',
  subtitle:
    'Specialists, channels, and Chief-of-Staff handoffs — without fan-out spam',
  objectives: [
    'Explain why specialized bots beat one mega-chat for real businesses.',
    'Define clear roles (name + description) for 2–3 teammates (e.g. Scheduler, Job Packet, Estimator).',
    'Message one teammate with a crisp ask; know replies are async (not a live conference call).',
    'Create a channel for a project and seat the right bots — without fan-out spam.',
    'Use Chief-of-Staff-style coordination: one owner assigns, specialists deliver, human confirms consequential actions.',
    'Avoid anti-patterns: dumping private vents between bots, waking everyone “meanwhile,” unscoped fan-out.',
  ],
  estMinutes: 65,
  prereqs: [
    'Module 4 (Routines) recommended',
    'Comfortable with chat and confirm-before-write',
  ],
  status: 'live',
  connectors: [],
  platform: 'android',
  lessonOrder: [
    'm5-intro',
    'm5-l1-roles',
    'm5-v2',
    'm5-l2-dm',
    'm5-v3',
    'm5-l3-channel',
    'm5-v4',
    'm5-l4-coord',
    'm5-practice-capstone',
    'm5-test',
    'm5-outro',
  ],
};
