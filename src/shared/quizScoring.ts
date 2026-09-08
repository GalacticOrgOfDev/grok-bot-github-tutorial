import type { Quiz, QuizQuestion } from '../modules/types';

export type AnswerMap = Record<string, string | undefined>;

export interface ScoredQuestion {
  questionId: string;
  correct: boolean;
  explanation: string;
  stem: string;
}

export interface QuizScoreResult {
  correctCount: number;
  total: number;
  ratio: number;
  passed: boolean;
  details: ScoredQuestion[];
}

export function scoreShortAnswer(
  answer: string | undefined,
  rubric: string[],
): boolean {
  if (!answer) return false;
  const normalized = answer.toLowerCase();
  const hits = rubric.filter((term) => normalized.includes(term.toLowerCase()));
  return hits.length >= 2;
}

export function scoreQuestion(
  question: QuizQuestion,
  answer: string | undefined,
): boolean {
  if (question.kind === 'mc') return answer === question.correctOptionId;
  if (question.kind === 'short') {
    return scoreShortAnswer(answer, question.shortRubric ?? []);
  }
  return false;
}

export function scoreQuiz(quiz: Quiz, answers: AnswerMap): QuizScoreResult {
  const details = quiz.questions.map((q) => ({
    questionId: q.id,
    correct: scoreQuestion(q, answers[q.id]),
    explanation: q.explanation,
    stem: q.stem,
  }));
  const correctCount = details.filter((d) => d.correct).length;
  const total = quiz.questions.length;
  const ratio = total === 0 ? 0 : correctCount / total;
  return {
    correctCount,
    total,
    ratio,
    passed: ratio >= quiz.passScore,
    details,
  };
}
