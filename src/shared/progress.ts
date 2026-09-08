import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Depth } from '../modules/types';

const STORAGE_KEY = 'grok-bot-plus-progress-v1';

export interface ModuleProgress {
  completedLessonIds: string[];
  practiceScores: Record<string, number>;
  quizBestScore: number | null;
  quizPassed: boolean;
  lastVisitedLessonId?: string;
}

export interface AppProgress {
  depth: Depth;
  modules: Record<string, ModuleProgress>;
}

export function defaultProgress(): AppProgress {
  return { depth: 'solid', modules: {} };
}

function emptyModule(): ModuleProgress {
  return {
    completedLessonIds: [],
    practiceScores: {},
    quizBestScore: null,
    quizPassed: false,
  };
}

export async function loadProgress(): Promise<AppProgress> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as AppProgress;
    if (!parsed.depth) parsed.depth = 'solid';
    if (!parsed.modules) parsed.modules = {};
    return parsed;
  } catch {
    return defaultProgress();
  }
}

export async function saveProgress(progress: AppProgress): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getModuleProgress(
  progress: AppProgress,
  moduleId: string,
): ModuleProgress {
  return progress.modules[moduleId] ?? emptyModule();
}

export function markLessonComplete(
  progress: AppProgress,
  moduleId: string,
  lessonId: string,
): AppProgress {
  const mod = { ...getModuleProgress(progress, moduleId) };
  if (!mod.completedLessonIds.includes(lessonId)) {
    mod.completedLessonIds = [...mod.completedLessonIds, lessonId];
  }
  mod.lastVisitedLessonId = lessonId;
  return {
    ...progress,
    modules: { ...progress.modules, [moduleId]: mod },
  };
}

export function setPracticeScore(
  progress: AppProgress,
  moduleId: string,
  practiceId: string,
  score: number,
): AppProgress {
  const mod = { ...getModuleProgress(progress, moduleId) };
  mod.practiceScores = { ...mod.practiceScores, [practiceId]: score };
  return {
    ...progress,
    modules: { ...progress.modules, [moduleId]: mod },
  };
}

export function setQuizResult(
  progress: AppProgress,
  moduleId: string,
  score: number,
  passed: boolean,
): AppProgress {
  const mod = { ...getModuleProgress(progress, moduleId) };
  mod.quizBestScore =
    mod.quizBestScore == null ? score : Math.max(mod.quizBestScore, score);
  mod.quizPassed = mod.quizPassed || passed;
  return {
    ...progress,
    modules: { ...progress.modules, [moduleId]: mod },
  };
}

export function setDepth(progress: AppProgress, depth: Depth): AppProgress {
  return { ...progress, depth };
}
