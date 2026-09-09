import type { LessonMeta, ModuleBundle } from '../types';
import { routinesManifest } from './manifest';
import { routinesLessons } from './lessons';
import { routinesVideos } from './videos';
import { routinesPractices } from './practices';
import { m4Quiz } from './quizzes/m4-test';

const metaById: Record<string, LessonMeta> = {
  'm4-intro': {
    id: 'm4-intro',
    title: 'Why routines (work while you’re in the truck)',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Routines brief you and watch what matters while you’re away.',
  },
  'm4-l1-when': {
    id: 'm4-l1-when',
    title: 'When to automate vs ask once',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recurring / ping-me-when → routine; one-shots stay asks.',
  },
  'm4-v2': {
    id: 'm4-v2',
    title: 'Scheduled briefs',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: '7 AM field brief — intent prompt, quiet if empty.',
  },
  'm4-l2-cron': {
    id: 'm4-l2-cron',
    title: 'Build a weekday morning routine',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Weekday 7 AM Detroit Crew Schedule brief, read-only.',
  },
  'm4-v3': {
    id: 'm4-v3',
    title: 'Event listeners (“ping me when”)',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Digest + next action; self-clean on merge.',
  },
  'm4-l3-events': {
    id: 'm4-l3-events',
    title: 'Babysit a change (GitHub or job-day pattern)',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'PR #42 babysitter or day-before packet check.',
  },
  'm4-v4': {
    id: 'm4-v4',
    title: 'Safe prompts & silence rules',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Read-first, timezone, pause/update/delete — no zombies.',
  },
  'm4-l4-hygiene': {
    id: 'm4-l4-hygiene',
    title: 'Pause, update, delete, no zombies',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Lifecycle hygiene on Weekday field brief + test morning.',
  },
  'm4-practice-capstone': {
    id: 'm4-practice-capstone',
    title: 'Capstone: field-week automation pack',
    type: 'practice',
    estMinutes: 12,
    depths: ['solid', 'deep'],
    summary: 'Morning brief + Wed conflict guard, no silent edits.',
  },
  'm4-test': {
    id: 'm4-test',
    title: 'Module quiz',
    type: 'quiz',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: '10 questions, pass ≥ 8/10.',
  },
  'm4-outro': {
    id: 'm4-outro',
    title: 'Next: Module 5 — Bot Teams',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recap pack; Module 5 Bot Teams next.',
  },
};

export const routinesModule: ModuleBundle = {
  manifest: routinesManifest,
  lessons: routinesLessons,
  videos: routinesVideos,
  practices: routinesPractices,
  quiz: m4Quiz,
  lessonMeta: routinesManifest.lessonOrder.map((id) => metaById[id]),
};

export {
  routinesManifest,
  routinesLessons,
  routinesVideos,
  routinesPractices,
  m4Quiz,
};
