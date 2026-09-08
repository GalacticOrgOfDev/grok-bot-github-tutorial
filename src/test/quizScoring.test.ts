import { describe, expect, it } from 'vitest';
import { m1Quiz } from '../modules/github/quizzes/m1-test';
import { scoreQuiz, scoreShortAnswer } from '../shared/quizScoring';
import { assertManifest, assertQuiz } from '../shared/schema';
import { githubManifest } from '../modules/github/manifest';
import {
  gradeCapstoneCi,
  gradeCapstoneMerge,
  gradeCapstoneThread,
  shippingFridayPr,
} from '../shared/sandboxFixtures';

describe('schema helpers', () => {
  it('validates github manifest', () => {
    expect(assertManifest(githubManifest)).toEqual([]);
    expect(githubManifest.moduleId).toBe('github');
    expect(githubManifest.series).toBe('grok-bot-plus');
    expect(githubManifest.passScore).toBe(0.8);
  });

  it('validates m1 quiz shape', () => {
    expect(assertQuiz(m1Quiz, 0.8)).toEqual([]);
    expect(m1Quiz.questions).toHaveLength(10);
  });
});

describe('quiz scoring', () => {
  it('scores all-correct as pass', () => {
    const answers: Record<string, string> = {};
    for (const q of m1Quiz.questions) {
      if (q.kind === 'mc' && q.correctOptionId) answers[q.id] = q.correctOptionId;
      if (q.kind === 'short') answers[q.id] = 'intent and key files plus risks';
    }
    const result = scoreQuiz(m1Quiz, answers);
    expect(result.correctCount).toBe(10);
    expect(result.passed).toBe(true);
  });

  it('fails below 8/10', () => {
    const answers: Record<string, string> = {
      q1: 'A',
      q2: 'A',
      q3: 'A',
      q4: 'A',
      q5: 'A',
      q6: 'A',
      q7: 'nope',
      q8: 'A',
      q9: 'A',
      q10: 'A',
    };
    const result = scoreQuiz(m1Quiz, answers);
    expect(result.passed).toBe(false);
  });

  it('short answer needs two rubric hits', () => {
    expect(scoreShortAnswer('intent and risks', ['intent', 'files', 'risk'])).toBe(
      true,
    );
    expect(scoreShortAnswer('intent only', ['intent', 'files', 'risk'])).toBe(
      false,
    );
  });
});

describe('shipping-friday-pr fixture grades', () => {
  it('has correct identity', () => {
    expect(shippingFridayPr.fullName).toBe('demo-acme/payments-api');
    expect(shippingFridayPr.prNumber).toBe(42);
    expect(shippingFridayPr.highestRiskFileShort).toBe('verify.ts');
    expect(shippingFridayPr.ci.failingCheckName).toBe('unit');
  });

  it('grades CI answers', () => {
    expect(gradeCapstoneCi('unit failed because forged X-Retry bypassed hmac')).toBe(
      true,
    );
    expect(gradeCapstoneCi('something broke')).toBe(false);
  });

  it('grades thread and merge', () => {
    expect(gradeCapstoneThread('sam-sec wants signed retry on verify.ts')).toBe(
      true,
    );
    expect(
      gradeCapstoneMerge('wait — security issue and failing CI unit check'),
    ).toBe(true);
    expect(gradeCapstoneMerge('merge now lgtm')).toBe(false);
  });
});
