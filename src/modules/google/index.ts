import type { LessonMeta, ModuleBundle } from '../types';
import { googleManifest } from './manifest';
import { googleLessons } from './lessons';
import { googleVideos } from './videos';
import { googlePractices } from './practices';
import { m2Quiz } from './quizzes/m2-test';

const metaById: Record<string, LessonMeta> = {
  'm2-intro': {
    id: 'm2-intro',
    title: 'Why Grok Bot + Google on the go',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Jobs on Calendar, packets in Drive — from the truck.',
  },
  'm2-l1-connect': {
    id: 'm2-l1-connect',
    title: 'Connect Calendar + Drive',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Connectors, account verify, list calendars & folders.',
  },
  'm2-v2': {
    id: 'm2-v2',
    title: 'Day-to-day: your week in chat',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Field-friendly week list + conflict flag.',
  },
  'm2-l2-calendar': {
    id: 'm2-l2-calendar',
    title: 'Read schedule, conflicts, gaps',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Week read + Wednesday Van Singel / Jamestown conflict.',
  },
  'm2-v3': {
    id: 'm2-v3',
    title: 'Change the calendar (safely)',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Propose → confirm write loop.',
  },
  'm2-l3-write': {
    id: 'm2-l3-write',
    title: 'Confirm-before-write events',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Chat-only proposal then explicit update.',
  },
  'm2-v4': {
    id: 'm2-v4',
    title: 'Job folders in Drive',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Van Singel packet: photo vs estimate.',
  },
  'm2-l4-drive': {
    id: 'm2-l4-drive',
    title: 'Find, summarize, share carefully',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Folder find, sensitivity, share draft only.',
  },
  'm2-v5': {
    id: 'm2-v5',
    title: 'Morning agenda / job-packet routine',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: '7 AM America/Detroit field brief.',
  },
  'm2-l5-routine': {
    id: 'm2-l5-routine',
    title: 'Build a Calendar/Drive routine',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Weekday brief, read-only by default.',
  },
  'm2-practice-capstone': {
    id: 'm2-practice-capstone',
    title: 'Capstone: Thursday field day',
    type: 'practice',
    estMinutes: 10,
    depths: ['solid', 'deep'],
    summary: 'Conflict + missing contract triage.',
  },
  'm2-test': {
    id: 'm2-test',
    title: 'Module quiz',
    type: 'quiz',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: '10 questions, pass ≥ 8/10.',
  },
  'm2-outro': {
    id: 'm2-outro',
    title: "What's next (Slack + Routines)",
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recap; Module 3 Slack for specialists; then Routines.',
  },
};

export const googleModule: ModuleBundle = {
  manifest: googleManifest,
  lessons: googleLessons,
  videos: googleVideos,
  practices: googlePractices,
  quiz: m2Quiz,
  lessonMeta: googleManifest.lessonOrder.map((id) => metaById[id]),
};

export {
  googleManifest,
  googleLessons,
  googleVideos,
  googlePractices,
  m2Quiz,
};
