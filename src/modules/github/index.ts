import type { LessonMeta, ModuleBundle } from '../types';
import { githubManifest } from './manifest';
import { githubLessons } from './lessons';
import { githubVideos } from './videos';
import { githubPractices } from './practices';
import { m1Quiz } from './quizzes/m1-test';

const metaById: Record<string, LessonMeta> = {
  'm1-intro': {
    id: 'm1-intro',
    title: 'Why Grok Bot + GitHub',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Series hook: connect once, work PRs from chat.',
  },
  'm1-l1-connect': {
    id: 'm1-l1-connect',
    title: 'Connect & verify the GitHub connector',
    type: 'lesson',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Agents, settings paths, PAT, verify account.',
  },
  'm1-v2': {
    id: 'm1-v2',
    title: 'Day-to-day: PRs in chat',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'List, summarize, explain CI.',
  },
  'm1-l2-read': {
    id: 'm1-l2-read',
    title: 'Read PRs, issues, and CI from chat',
    type: 'lesson',
    estMinutes: 10,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Read-only prompts + sandbox PR.',
  },
  'm1-v3': {
    id: 'm1-v3',
    title: 'Ask for a review (safely)',
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Chat-only review loop.',
  },
  'm1-l3-review': {
    id: 'm1-l3-review',
    title: 'Structured PR review with Grok Bot',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Findings, draft comment, confirm before post.',
  },
  'm1-v4': {
    id: 'm1-v4',
    title: 'Automate with a PR babysitter',
    type: 'video',
    estMinutes: 2,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Event-driven babysitter overview.',
  },
  'm1-l4-routine': {
    id: 'm1-l4-routine',
    title: 'Build a PR babysitter routine',
    type: 'lesson',
    estMinutes: 12,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Events, cleanup, CoS vs Tutor.',
  },
  'm1-practice-capstone': {
    id: 'm1-practice-capstone',
    title: 'Capstone practice (sandbox repo)',
    type: 'practice',
    estMinutes: 10,
    depths: ['solid', 'deep'],
    summary: 'Shipping-Friday triage on payments-api#42.',
  },
  'm1-test': {
    id: 'm1-test',
    title: 'Module quiz',
    type: 'quiz',
    estMinutes: 8,
    depths: ['skim', 'solid', 'deep'],
    summary: '10 questions, pass ≥ 8/10.',
  },
  'm1-outro': {
    id: 'm1-outro',
    title: "What's next (Google, Slack, …)",
    type: 'video',
    estMinutes: 1,
    depths: ['skim', 'solid', 'deep'],
    summary: 'Recap + tease next modules.',
  },
};

export const githubModule: ModuleBundle = {
  manifest: githubManifest,
  lessons: githubLessons,
  videos: githubVideos,
  practices: githubPractices,
  quiz: m1Quiz,
  lessonMeta: githubManifest.lessonOrder.map((id) => metaById[id]),
};

export { githubManifest, githubLessons, githubVideos, githubPractices, m1Quiz };
