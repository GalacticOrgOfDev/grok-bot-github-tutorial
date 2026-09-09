export type Depth = 'skim' | 'solid' | 'deep';
export type LessonType = 'video' | 'lesson' | 'practice' | 'quiz';

export interface LessonMeta {
  id: string;
  title: string;
  type: LessonType;
  estMinutes: number;
  depths: Depth[];
  summary: string;
}

export interface ModuleManifest {
  moduleId: string;
  series: string;
  version: number;
  depth: Depth;
  passScore: number;
  title: string;
  subtitle: string;
  objectives: string[];
  estMinutes: number;
  prereqs: string[];
  status: 'live' | 'coming-soon' | 'stub';
  lessonOrder: string[];
  connectors?: string[];
  platform?: string;
}

export interface ContentBlock {
  heading?: string;
  body: string;
  bullets?: string[];
  callout?: { kind: 'tip' | 'warn' | 'info'; text: string };
  promptExample?: string;
  uiPath?: string;
}

export interface LessonContent {
  id: string;
  title: string;
  type: 'lesson';
  depths: Depth[];
  estMinutes: number;
  sections: ContentBlock[];
  practiceId?: string;
}

export interface VideoSlide {
  id: string;
  title: string;
  narration: string;
  durationSec: number;
  bullets?: string[];
}

export interface VideoLesson {
  id: string;
  title: string;
  type: 'video';
  depths: Depth[];
  estMinutes: number;
  slides: VideoSlide[];
  cta: string;
  mp4Url?: string;
}

export interface PracticeStep {
  id: string;
  instruction: string;
  hint?: string;
  promptChip?: string;
}

export interface PracticeCheck {
  id: string;
  prompt: string;
  kind: 'mc' | 'boolean' | 'text' | 'self-check';
  options?: string[];
  correctIndex?: number;
  correctBoolean?: boolean;
  grade?: (answer: string) => boolean;
  explanation: string;
}

export interface PracticeDrill {
  id: string;
  title: string;
  goal: string;
  afterLesson: string;
  steps: PracticeStep[];
  passCriteria: string;
  failHints: string[];
  checks: PracticeCheck[];
  passThreshold: number;
  usesSandbox?: boolean;
  blurb?: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  kind: 'mc' | 'short';
  stem: string;
  options?: QuizOption[];
  correctOptionId?: string;
  shortRubric?: string[];
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  passScore: number;
  questions: QuizQuestion[];
}

export interface ModuleBundle {
  manifest: ModuleManifest;
  lessons: Record<string, LessonContent>;
  videos: Record<string, VideoLesson>;
  practices: Record<string, PracticeDrill>;
  quiz: Quiz;
  lessonMeta: LessonMeta[];
}
