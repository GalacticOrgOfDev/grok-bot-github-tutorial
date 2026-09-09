import type { ModuleManifest } from '../types';

export const skillsManifest: ModuleManifest = {
  moduleId: 'skills',
  series: 'grok-bot-plus',
  version: 1,
  depth: 'solid',
  passScore: 0.8,
  title: 'Grok Bot + Skills & Custom Tools',
  subtitle:
    'Reusable playbooks every bot can run — when-to-use descriptions, confirm-gated bodies, shared across the crew',
  objectives: [
    'Tell skill vs routine vs one-shot ask (skill = reusable recipe any assistant can run; routine = triggered; one-shot = now only).',
    'Write a skill with a sharp when-to-use description and a clear markdown body (steps, constraints, outputs).',
    'Save skills that encode confirm-before-write, timezone, and quiet/success criteria.',
    'Invoke / point bots at a skill so Scheduler, Packets, and Estimator share the same playbook.',
    'Update or delete a skill without breaking teams; know Cursor-managed skills are read-only.',
    'Spot bad skills (vague description, secret leakage, silent client sends) and fix them.',
  ],
  estMinutes: 60,
  prereqs: [
    'Module 3 (Routines)',
    'Module 4 (Bot Teams) recommended',
  ],
  status: 'live',
  connectors: [],
  platform: 'android',
  lessonOrder: [
    'm5-intro',
    'm5-l1-sort',
    'm5-v2',
    'm5-l2-author',
    'm5-v3',
    'm5-l3-wire',
    'm5-v4',
    'm5-l4-harden',
    'm5-practice-capstone',
    'm5-test',
    'm5-outro',
  ],
};
