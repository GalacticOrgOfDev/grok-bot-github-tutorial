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
    'Module 4 (Routines)',
    'Module 5 (Bot Teams)',
    'Module 6 (Skills)',
  ],
  status: 'live',
  connectors: [],
  platform: 'android',
  lessonOrder: [
    'm7-intro',
    'm7-l1-outcome',
    'm7-v2',
    'm7-l2-assemble',
    'm7-v3',
    'm7-l3-run',
    'm7-v4',
    'm7-l4-teardown',
    'm7-practice-capstone',
    'm7-test',
    'm7-outro',
  ],
};
