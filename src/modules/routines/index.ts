import type { LessonMeta, ModuleBundle } from '../types';
import { routinesManifest } from './manifest';
import { routinesLessons } from './lessons';
import { routinesVideos } from './videos';
import { routinesPractices } from './practices';
import { m3Quiz } from './quizzes/m3-test';

const metaById: Record<string, LessonMeta> = {
  'm3-intro': {
    id: 'm3-intro',
    title: 'Why routines (work while you’re in the truck)',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Routines brief you and watch what matters while you’re away.',
  },
  'm3-l1-when': {
    id: 'm3-l1-when',
    title: 'When to automate vs ask once',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recurring / ping-me-when → routine; one-shots stay asks.',
  },
  'm3-v2': {
    id: 'm3-v2',
    title: 'Scheduled briefs',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: '7 AM field brief — intent prompt, quiet if empty.',
  },
  'm3-l2-cron': {
    id: 'm3-l2-cron',
    title: 'Build a weekday morning routine',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Weekday 7 AM Detroit Crew Schedule brief, read-only.',
  },
  'm3-v3': {
    id: 'm3-v3',
    title: 'Event listeners (“ping me when”)',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Digest + next action; self-clean on merge.',
  },
  'm3-l3-events': {
    id: 'm3-l3-events',
    title: 'Babysit a change (GitHub or job-day pattern)',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'PR #42 babysitter or day-before packet check.',
  },
  'm3-v4': {
    id: 'm3-v4',
    title: 'Safe prompts & silence rules',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Read-first, timezone, pause/update/delete — no zombies.',
  },
  'm3-l4-hygiene': {
    id: 'm3-l4-hygiene',
    title: 'Pause, update, delete, no zombies',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Lifecycle hygiene on Weekday field brief + test morning.',
  },
  'm3-practice-capstone': {
    id: 'm3-practice-capstone',
    title: 'Capstone: field-week automation pack',
    type: 'practice',
    estMinutes: 12,
    depths: ['solid', 'deep'],
    summary: 'Morning brief + Wed conflict guard, no silent edits.',
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
    title: 'Next: bot teams',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recap pack; Module 4 Bot Teams; Slack stays stub.',
  },
};

export const routinesModule: ModuleBundle = {
  manifest: routinesManifest,
  lessons: routinesLessons,
  videos: routinesVideos,
  practices: routinesPractices,
  quiz: m3Quiz,
  lessonMeta: routinesManifest.lessonOrder.map((id) => metaById[id]),
};

export {
  routinesManifest,
  routinesLessons,
  routinesVideos,
  routinesPractices,
  m3Quiz,
};
