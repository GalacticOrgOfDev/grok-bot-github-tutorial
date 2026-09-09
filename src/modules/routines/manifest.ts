import type { ModuleManifest } from '../types';

export const routinesManifest: ModuleManifest = {
  moduleId: 'routines',
  series: 'grok-bot-plus',
  version: 1,
  depth: 'solid',
  passScore: 0.8,
  title: 'Grok Bot + Routines',
  subtitle:
    'Schedules & event listeners that work while you’re away — morning briefs, babysitters, hygiene',
  objectives: [
    'Explain when a routine beats asking once (recurring, “ping me when”, watch while away).',
    'Create a scheduled routine (cron / daily / weekday) with a clear intent prompt — not a brittle tool recipe.',
    'Create an event-driven routine (e.g. GitHub PR events or Calendar-adjacent “morning brief” schedule) and name the right trigger shape.',
    'Write prompts that are read-first / confirm-before-write, timezone-aware, and quiet when nothing changed.',
    'Pause, update, and delete routines without leaving zombie automations.',
    'Troubleshoot: wrong timezone, too-frequent schedule, vague prompt, firing with nothing useful.',
  ],
  estMinutes: 60,
  prereqs: [
    'Comfortable with chat',
    'Module 1 or Module 2 helpful (examples reuse GitHub/Google patterns)',
  ],
  status: 'live',
  connectors: [],
  platform: 'android',
  lessonOrder: [
    'm3-intro',
    'm3-l1-when',
    'm3-v2',
    'm3-l2-cron',
    'm3-v3',
    'm3-l3-events',
    'm3-v4',
    'm3-l4-hygiene',
    'm3-practice-capstone',
    'm3-test',
    'm3-outro',
  ],
};
