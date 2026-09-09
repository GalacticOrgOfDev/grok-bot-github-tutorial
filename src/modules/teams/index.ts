import type { LessonMeta, ModuleBundle } from '../types';
import { teamsManifest } from './manifest';
import { teamsLessons } from './lessons';
import { teamsVideos } from './videos';
import { teamsPractices } from './practices';
import { m5Quiz } from './quizzes/m5-test';

const metaById: Record<string, LessonMeta> = {
  'm5-intro': {
    id: 'm5-intro',
    title: 'Your AI crew, not one overloaded brain',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Crew > blob — specialists with clear lanes.',
  },
  'm5-l1-roles': {
    id: 'm5-l1-roles',
    title: 'Design 3 roles for a field business',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Scheduler, Packets, Estimator — scope + won’t-do.',
  },
  'm5-v2': {
    id: 'm5-v2',
    title: 'Message one specialist',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'One clear ask; async reply; no fan-out.',
  },
  'm5-l2-dm': {
    id: 'm5-l2-dm',
    title: 'Send a crisp async ask',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'DM Job Packets: missing files; don’t change sharing.',
  },
  'm5-v3': {
    id: 'm5-v3',
    title: 'Channels & seating',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Seat who matters; one kickoff.',
  },
  'm5-l3-channel': {
    id: 'm5-l3-channel',
    title: 'Stand up a project room',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Van Singel Install — Scheduler + Packets + kickoff.',
  },
  'm5-v4': {
    id: 'm5-v4',
    title: 'CoS patterns & fan-out rules',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Assign → return → human confirm; no spam.',
  },
  'm5-l4-coord': {
    id: 'm5-l4-coord',
    title: 'Assignment without spam',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'OK vs Don’t cards for fan-out and vents.',
  },
  'm5-practice-capstone': {
    id: 'm5-practice-capstone',
    title: 'Capstone: Thursday install team',
    type: 'practice',
    estMinutes: 12,
    depths: ['solid', 'deep'],
    summary: 'Roles, channel, Wed propose, missing contract, confirm email.',
  },
  'm5-test': {
    id: 'm5-test',
    title: 'Module quiz',
    type: 'quiz',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: '10 questions, pass ≥ 8/10.',
  },
  'm5-outro': {
    id: 'm5-outro',
    title: 'Next: skills & custom tools',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recap crew; Module 6 Skills next.',
  },
};

export const teamsModule: ModuleBundle = {
  manifest: teamsManifest,
  lessons: teamsLessons,
  videos: teamsVideos,
  practices: teamsPractices,
  quiz: m5Quiz,
  lessonMeta: teamsManifest.lessonOrder.map((id) => metaById[id]),
};

export {
  teamsManifest,
  teamsLessons,
  teamsVideos,
  teamsPractices,
  m5Quiz,
};
