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
    'Module 3 (Routines) recommended',
    'Comfortable with chat and confirm-before-write',
  ],
  status: 'live',
  connectors: [],
  platform: 'android',
  lessonOrder: [
    'm4-intro',
    'm4-l1-roles',
    'm4-v2',
    'm4-l2-dm',
    'm4-v3',
    'm4-l3-channel',
    'm4-v4',
    'm4-l4-coord',
    'm4-practice-capstone',
    'm4-test',
    'm4-outro',
  ],
};
