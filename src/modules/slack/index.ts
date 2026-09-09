import type { LessonMeta, ModuleBundle } from '../types';
import { slackManifest } from './manifest';
import { slackLessons } from './lessons';
import { slackVideos } from './videos';
import { slackPractices } from './practices';
import { m3Quiz } from './quizzes/m3-test';

const metaById: Record<string, LessonMeta> = {
  'm3-intro': {
    id: 'm3-intro',
    title: 'Why Slack + Grok Bot on the go',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Slack is noisy; Grok Bot filters from the truck.',
  },
  'm3-l1-connect': {
    id: 'm3-l1-connect',
    title: 'Connect & verify workspace',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Workspace identity, bot visibility, list channels.',
  },
  'm3-v2': {
    id: 'm3-v2',
    title: 'Read channels from chat',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Structured #crew-ops summary.',
  },
  'm3-l2-read': {
    id: 'm3-l2-read',
    title: 'Summarize a channel / thread',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Decisions/asks/blockers + hitch open ask.',
  },
  'm3-v3': {
    id: 'm3-v3',
    title: 'Draft then post (safely)',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Draft → confirm → post.',
  },
  'm3-l3-write': {
    id: 'm3-l3-write',
    title: 'Confirm-before-send posts',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Chat draft first; explicit confirm before post.',
  },
  'm3-v4': {
    id: 'm3-v4',
    title: '“Ping me when…” in Slack',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Keyword weather/cancel → phone digest.',
  },
  'm3-l4-routine': {
    id: 'm3-l4-routine',
    title: 'Keyword / mention routine',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: '#crew-ops weather|cancel digest; no auto-reply.',
  },
  'm3-practice-capstone': {
    id: 'm3-practice-capstone',
    title: 'Capstone: crew ops channel',
    type: 'practice',
    estMinutes: 12,
    depths: ['solid', 'deep'],
    summary: 'Summarize, draft-confirm hitch, weather/cancel, never-auto.',
  },
  'm3-test': {
    id: 'm3-test',
    title: 'Module quiz',
    type: 'quiz',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: '10 questions, pass ≥ 8/10.',
  },
  'm3-outro': {
    id: 'm3-outro',
    title: 'Next: Module 4 — Routines',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recap Slack loop; deepen with Routines.',
  },
};

export const slackModule: ModuleBundle = {
  manifest: slackManifest,
  lessons: slackLessons,
  videos: slackVideos,
  practices: slackPractices,
  quiz: m3Quiz,
  lessonMeta: slackManifest.lessonOrder.map((id) => metaById[id]),
};

export {
  slackManifest,
  slackLessons,
  slackVideos,
  slackPractices,
  m3Quiz,
};
