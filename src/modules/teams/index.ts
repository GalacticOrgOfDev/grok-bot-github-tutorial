import type { LessonMeta, ModuleBundle } from '../types';
import { teamsManifest } from './manifest';
import { teamsLessons } from './lessons';
import { teamsVideos } from './videos';
import { teamsPractices } from './practices';
import { m4Quiz } from './quizzes/m4-test';

const metaById: Record<string, LessonMeta> = {
  'm4-intro': {
    id: 'm4-intro',
    title: 'Your AI crew, not one overloaded brain',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Crew > blob — specialists with clear lanes.',
  },
  'm4-l1-roles': {
    id: 'm4-l1-roles',
    title: 'Design 3 roles for a field business',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Scheduler, Packets, Estimator — scope + won’t-do.',
  },
  'm4-v2': {
    id: 'm4-v2',
    title: 'Message one specialist',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'One clear ask; async reply; no fan-out.',
  },
  'm4-l2-dm': {
    id: 'm4-l2-dm',
    title: 'Send a crisp async ask',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'DM Job Packets: missing files; don’t change sharing.',
  },
  'm4-v3': {
    id: 'm4-v3',
    title: 'Channels & seating',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Seat who matters; one kickoff.',
  },
  'm4-l3-channel': {
    id: 'm4-l3-channel',
    title: 'Stand up a project room',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Van Singel Install — Scheduler + Packets + kickoff.',
  },
  'm4-v4': {
    id: 'm4-v4',
    title: 'CoS patterns & fan-out rules',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Assign → return → human confirm; no spam.',
  },
  'm4-l4-coord': {
    id: 'm4-l4-coord',
    title: 'Assignment without spam',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'OK vs Don’t cards for fan-out and vents.',
  },
  'm4-practice-capstone': {
    id: 'm4-practice-capstone',
    title: 'Capstone: Thursday install team',
    type: 'practice',
    estMinutes: 12,
    depths: ['solid', 'deep'],
    summary: 'Roles, channel, Wed propose, missing contract, confirm email.',
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
    title: 'Next: skills & custom tools',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recap crew; Module 5 Skills; Slack stays stub.',
  },
};

export const teamsModule: ModuleBundle = {
  manifest: teamsManifest,
  lessons: teamsLessons,
  videos: teamsVideos,
  practices: teamsPractices,
  quiz: m4Quiz,
  lessonMeta: teamsManifest.lessonOrder.map((id) => metaById[id]),
};

export {
  teamsManifest,
  teamsLessons,
  teamsVideos,
  teamsPractices,
  m4Quiz,
};
