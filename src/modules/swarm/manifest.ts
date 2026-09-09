import type { ModuleManifest } from '../types';

export const swarmManifest: ModuleManifest = {
  moduleId: 'swarm',
  series: 'grok-bot-plus',
  version: 1,
  depth: 'solid',
  passScore: 0.8,
  title: 'Grok Bot + Outcome Swarms',
  subtitle:
    'Aim a minimum crew at a checkable result — kickoff → assign → gather → decide → act(with confirm) → retrospect, then tear down',
  objectives: [
    'Define a swarm outcome in one sentence (informed / efficient / user-friendly / results-driven).',
    'Assemble the minimum crew: CoS + specialists + skills + routines (no extras).',
    'Run a kickoff → assign → gather → decide → act(with confirm) → retrospect loop.',
    'Keep the human in the loop for client-facing and calendar/Drive writes.',
    'Measure success with checkable outcomes — not “bots talked a lot.”',
    'Shut down or pause swarm pieces after the outcome lands (no zombie routines/channels).',
  ],
  estMinutes: 70,
  prereqs: [
    'Module 3 (Routines)',
    'Module 4 (Bot Teams)',
    'Module 5 (Skills)',
  ],
  status: 'live',
  connectors: [],
  platform: 'android',
  lessonOrder: [
    'm6-intro',
    'm6-l1-outcome',
    'm6-v2',
    'm6-l2-assemble',
    'm6-v3',
    'm6-l3-run',
    'm6-v4',
    'm6-l4-teardown',
    'm6-practice-capstone',
    'm6-test',
    'm6-outro',
  ],
};
