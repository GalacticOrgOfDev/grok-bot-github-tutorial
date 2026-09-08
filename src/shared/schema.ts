import type { Depth, LessonMeta, ModuleManifest, PracticeDrill, Quiz } from '../modules/types';

export function assertManifest(m: ModuleManifest): string[] {
  const errors: string[] = [];
  if (!m.moduleId) errors.push('moduleId required');
  if (m.series !== 'grok-bot-plus') errors.push('series must be grok-bot-plus');
  if (m.passScore < 0 || m.passScore > 1) errors.push('passScore must be 0–1');
  if (!m.lessonOrder?.length) errors.push('lessonOrder required');
  return errors;
}

export function assertQuiz(quiz: Quiz, expectedPass = 0.8): string[] {
  const errors: string[] = [];
  if (quiz.questions.length < 8 || quiz.questions.length > 12) {
    errors.push('quiz should have 8–12 questions');
  }
  if (Math.abs(quiz.passScore - expectedPass) > 1e-9) {
    errors.push(`passScore should be ${expectedPass}`);
  }
  for (const q of quiz.questions) {
    if (q.kind === 'mc' && !q.correctOptionId) {
      errors.push(`${q.id}: mc needs correctOptionId`);
    }
    if (q.kind === 'short' && (!q.shortRubric || q.shortRubric.length < 2)) {
      errors.push(`${q.id}: short needs rubric terms`);
    }
  }
  return errors;
}

export function assertPractice(p: PracticeDrill): string[] {
  const errors: string[] = [];
  if (!p.checks.length) errors.push(`${p.id}: needs checks`);
  if (p.passThreshold <= 0 || p.passThreshold > p.checks.length) {
    errors.push(`${p.id}: invalid passThreshold`);
  }
  return errors;
}

export function depthsForMode(depth: Depth): Depth[] {
  if (depth === 'skim') return ['skim'];
  if (depth === 'solid') return ['skim', 'solid'];
  return ['skim', 'solid', 'deep'];
}

export function lessonVisibleAtDepth(
  lessonDepths: Depth[],
  selected: Depth,
): boolean {
  const allowed = depthsForMode(selected);
  return lessonDepths.some((d) => allowed.includes(d));
}

export function buildLessonIndex(
  order: string[],
  metaById: Record<string, LessonMeta>,
): LessonMeta[] {
  return order.map((id) => {
    const m = metaById[id];
    if (!m) throw new Error(`Missing lesson meta for ${id}`);
    return m;
  });
}
