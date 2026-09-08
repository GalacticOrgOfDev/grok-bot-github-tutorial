import type { ModuleManifest } from '../types';

export const githubManifest: ModuleManifest = {
  moduleId: 'github',
  series: 'grok-bot-plus',
  version: 1,
  depth: 'solid',
  passScore: 0.8,
  title: 'Grok Bot + GitHub',
  subtitle: 'Connect, read PRs, review safely, babysit from chat — on the go',
  objectives: [
    'Connect (or verify) the GitHub connector and confirm which account/org Grok Bot is acting as.',
    'Ask Grok Bot to list open PRs, summarize a PR, and explain failing CI — without leaving chat.',
    'Request a structured code review from Grok Bot on a real PR and act on the feedback.',
    'Create a PR babysitter routine that watches review/CI events and pings with a useful digest.',
    'Use safe patterns: read-first, confirm before mutating, never paste secrets into chat.',
    'Troubleshoot common failures (auth expired, wrong repo, empty results) and know when to reconnect.',
  ],
  estMinutes: 55,
  prereqs: [
    'Grok Bot installed',
    'GitHub connector available (you may connect during Lesson 1)',
  ],
  status: 'live',
  lessonOrder: [
    'm1-intro',
    'm1-l1-connect',
    'm1-v2',
    'm1-l2-read',
    'm1-v3',
    'm1-l3-review',
    'm1-v4',
    'm1-l4-routine',
    'm1-practice-capstone',
    'm1-test',
    'm1-outro',
  ],
};
