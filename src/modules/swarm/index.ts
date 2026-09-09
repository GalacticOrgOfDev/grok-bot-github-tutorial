import type { LessonMeta, ModuleBundle } from '../types';
import { swarmManifest } from './manifest';
import { swarmLessons } from './lessons';
import { swarmVideos } from './videos';
import { swarmPractices } from './practices';
import { m6Quiz } from './quizzes/m6-test';

const metaById: Record<string, LessonMeta> = {
  'm6-intro': {
    id: 'm6-intro',
    title: 'Aim the crew at a result',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Crew without a target is noise - aim at a checkable outcome.',
  },
  'm6-l1-outcome': {
    id: 'm6-l1-outcome',
    title: 'Write a one-line outcome + success checks',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'One-line outcome + binary checks for install week.',
  },
  'm6-v2': {
    id: 'm6-v2',
    title: 'Minimum viable swarm',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Four bots, two skills, two routines - enough.',
  },
  'm6-l2-assemble': {
    id: 'm6-l2-assemble',
    title: 'Seat bots, attach skills, set routines',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'CoS + specialists + skills + only needed routines.',
  },
  'm6-v3': {
    id: 'm6-v3',
    title: 'The orchestration loop',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Kickoff -> assign -> gather -> decide -> confirm act -> retro.',
  },
  'm6-l3-run': {
    id: 'm6-l3-run',
    title: 'Run kickoff -> decide (sandbox)',
    type: 'lesson',
    estMinutes: 15,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Sandbox S0-S6 with Confirm write sheet.',
  },
  'm6-v4': {
    id: 'm6-v4',
    title: 'Guardrails & teardown',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Pause the guard; keep the brief; keep the skills.',
  },
  'm6-l4-teardown': {
    id: 'm6-l4-teardown',
    title: 'Pause/delete what you do not need',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'No zombie routines; retain reusable skills.',
  },
  'm6-practice-capstone': {
    id: 'm6-practice-capstone',
    title: 'Capstone: Thursday Van Singel install swarm',
    type: 'practice',
    estMinutes: 15,
    depths: ['solid', 'deep'],
    summary: 'Clear Wed, know packet gaps, draft follow-up - confirm before writes.',
  },
  'm6-test': {
    id: 'm6-test',
    title: 'Module quiz',
    type: 'quiz',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: '10 questions, pass >= 8/10.',
  },
  'm6-outro': {
    id: 'm6-outro',
    title: 'Series complete + electives',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Core series M1-M6 complete; electives optional; Slack stays stub.',
  },
};

export const swarmModule: ModuleBundle = {
  manifest: swarmManifest,
  lessons: swarmLessons,
  videos: swarmVideos,
  practices: swarmPractices,
  quiz: m6Quiz,
  lessonMeta: swarmManifest.lessonOrder.map((id) => metaById[id]),
};

export {
  swarmManifest,
  swarmLessons,
  swarmVideos,
  swarmPractices,
  m6Quiz,
};
