import type { LessonMeta, ModuleBundle } from '../types';
import { skillsManifest } from './manifest';
import { skillsLessons } from './lessons';
import { skillsVideos } from './videos';
import { skillsPractices } from './practices';
import { m6Quiz } from './quizzes/m6-test';

const metaById: Record<string, LessonMeta> = {
  'm6-intro': {
    id: 'm6-intro',
    title: 'Playbooks > repeating yourself',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Stop retyping the same steps — skills are reusable playbooks.',
  },
  'm6-l1-sort': {
    id: 'm6-l1-sort',
    title: 'Skill vs routine vs once',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Skill = recipe; routine = triggered; once = now only.',
  },
  'm6-v2': {
    id: 'm6-v2',
    title: 'Anatomy of a good skill',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'When-to-use + body + constraints.',
  },
  'm6-l2-author': {
    id: 'm6-l2-author',
    title: 'Author field-job-brief',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: '5 lines, read-only, NO_EVENTS, America/Detroit.',
  },
  'm6-v3': {
    id: 'm6-v3',
    title: 'Share playbooks across bots',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Scheduler & Packets call the same brief.',
  },
  'm6-l3-wire': {
    id: 'm6-l3-wire',
    title: 'Point the team at one skill',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Wire Scheduler + Packets to field-job-brief.',
  },
  'm6-v4': {
    id: 'm6-v4',
    title: 'Dangerous skills & fixes',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Vague + silent send → draft + confirm; delete junk.',
  },
  'm6-l4-harden': {
    id: 'm6-l4-harden',
    title: 'Harden / update / delete',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Rewrite auto-text-clients; delete tmp-skill-test.',
  },
  'm6-practice-capstone': {
    id: 'm6-practice-capstone',
    title: 'Capstone: two skills for install week',
    type: 'practice',
    estMinutes: 12,
    depths: ['solid', 'deep'],
    summary: 'field-job-brief + job-packet-audit; map bots.',
  },
  'm6-test': {
    id: 'm6-test',
    title: 'Module quiz',
    type: 'quiz',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: '10 questions, pass ≥ 8/10.',
  },
  'm6-outro': {
    id: 'm6-outro',
    title: 'Next: outcome swarms',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recap skills; Module 7 outcome swarms next.',
  },
};

export const skillsModule: ModuleBundle = {
  manifest: skillsManifest,
  lessons: skillsLessons,
  videos: skillsVideos,
  practices: skillsPractices,
  quiz: m6Quiz,
  lessonMeta: skillsManifest.lessonOrder.map((id) => metaById[id]),
};

export {
  skillsManifest,
  skillsLessons,
  skillsVideos,
  skillsPractices,
  m6Quiz,
};
