import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Depth } from '../modules/types';
import {
  defaultProgress,
  getModuleProgress,
  loadProgress,
  markLessonComplete,
  saveProgress,
  setDepth,
  setPracticeScore,
  setQuizResult,
  type AppProgress,
  type ModuleProgress,
} from './progress';

interface ProgressCtx {
  ready: boolean;
  progress: AppProgress;
  depth: Depth;
  changeDepth: (d: Depth) => void;
  moduleProgress: (moduleId: string) => ModuleProgress;
  completeLesson: (moduleId: string, lessonId: string) => void;
  recordPractice: (moduleId: string, practiceId: string, score: number) => void;
  recordQuiz: (
    moduleId: string,
    correct: number,
    total: number,
    passed: boolean,
  ) => void;
}

const Ctx = createContext<ProgressCtx | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<AppProgress>(defaultProgress());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadProgress().then((p) => {
      setProgress(p);
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    void saveProgress(progress);
  }, [progress, ready]);

  const changeDepth = useCallback((d: Depth) => {
    setProgress((p) => setDepth(p, d));
  }, []);

  const completeLesson = useCallback((moduleId: string, lessonId: string) => {
    setProgress((p) => markLessonComplete(p, moduleId, lessonId));
  }, []);

  const recordPractice = useCallback(
    (moduleId: string, practiceId: string, score: number) => {
      setProgress((p) => setPracticeScore(p, moduleId, practiceId, score));
    },
    [],
  );

  const recordQuiz = useCallback(
    (moduleId: string, correct: number, _total: number, passed: boolean) => {
      setProgress((p) => setQuizResult(p, moduleId, correct, passed));
    },
    [],
  );

  const value = useMemo(
    () => ({
      ready,
      progress,
      depth: progress.depth,
      changeDepth,
      moduleProgress: (id: string) => getModuleProgress(progress, id),
      completeLesson,
      recordPractice,
      recordQuiz,
    }),
    [ready, progress, changeDepth, completeLesson, recordPractice, recordQuiz],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useProgress() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useProgress outside provider');
  return ctx;
}
