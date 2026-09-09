import { describe, expect, it } from 'vitest';
import { m1Quiz } from '../modules/github/quizzes/m1-test';
import { scoreQuiz, scoreShortAnswer } from '../shared/quizScoring';
import { assertManifest, assertQuiz, assertPractice } from '../shared/schema';
import { githubManifest } from '../modules/github/manifest';
import {
  gradeCapstoneCi,
  gradeCapstoneMerge,
  gradeCapstoneThread,
  shippingFridayPr,
  gradeCapstoneConflict,
  gradeCapstoneDayVerdict,
  gradeCapstoneHomeownerDraft,
  gradeCapstoneMissingFile,
  gradeCapstoneProposal,
  springWeekHudsonville,
} from '../shared/sandboxFixtures';
import { m2Quiz } from '../modules/google/quizzes/m2-test';
import { googleManifest } from '../modules/google/manifest';
import { googlePractices } from '../modules/google/practices';
import { slackManifest } from '../modules/slack';
import { m3Quiz } from '../modules/routines/quizzes/m3-test';
import { routinesManifest } from '../modules/routines/manifest';
import { routinesPractices } from '../modules/routines/practices';
import {
  routinePackSpringWeek,
  gradeMorningSchedule,
  gradeMorningPrompt,
  gradeEventBabysit,
  gradeHygienePause,
  gradeHygieneUpdate,
  gradeHygieneDelete,
  gradeCapstoneMorning,
  gradeCapstoneGuard,
  gradeCapstoneTypes,
  gradeCapstoneSafety,
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

describe('google module schema', () => {
  it('validates google manifest', () => {
    expect(assertManifest(googleManifest)).toEqual([]);
    expect(googleManifest.moduleId).toBe('google');
    expect(googleManifest.status).toBe('live');
    expect(googleManifest.passScore).toBe(0.8);
    expect(googleManifest.lessonOrder).toContain('m2-practice-capstone');
    expect(googleManifest.connectors).toEqual([
      'google-calendar',
      'google-drive',
    ]);
  });

  it('validates m2 quiz shape', () => {
    expect(assertQuiz(m2Quiz, 0.8)).toEqual([]);
    expect(m2Quiz.questions).toHaveLength(10);
  });

  it('validates google practices', () => {
    for (const drill of Object.values(googlePractices)) {
      expect(assertPractice(drill));
    }
    expect(googlePractices['practice-capstone-m2'].passThreshold).toBe(4);
  });

  it('keeps slack as thin stub', () => {
    expect(slackManifest.status).toBe('stub');
    expect(slackManifest.lessonOrder).toEqual([]);
  });
});

describe('m2 quiz scoring', () => {
  it('scores all-correct as pass', () => {
    const answers: Record<string, string> = {};
    for (const q of m2Quiz.questions) {
      if (q.kind === 'mc' && q.correctOptionId) answers[q.id] = q.correctOptionId;
      if (q.kind === 'short') answers[q.id] = 'time and location plus conflict warning';
    }
    const result = scoreQuiz(m2Quiz, answers);
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
    expect(scoreQuiz(m2Quiz, answers).passed).toBe(false);
  });
});

describe('spring-week-hudsonville fixture grades', () => {
  it('has correct identity and conflict', () => {
    expect(springWeekHudsonville.fixtureId).toBe('spring-week-hudsonville');
    expect(springWeekHudsonville.timezone).toBe('America/Detroit');
    expect(springWeekHudsonville.primaryCalendar).toBe('Crew Schedule');
    expect(springWeekHudsonville.driveFolder.missing).toContain(
      'signed-contract.pdf',
    );
    expect(springWeekHudsonville.drillBMc.answerIndex).toBe(1);
  });

  it('grades capstone keys', () => {
    expect(
      gradeCapstoneConflict('Mulch Van Singel overlaps Consult Jamestown'),
    ).toBe(true);
    expect(gradeCapstoneConflict('only maple')).toBe(false);
    expect(
      gradeCapstoneProposal(
        'Move mulch to 12:30-2:30 PM — chat only, not updated yet',
      ),
    ).toBe(true);
    expect(gradeCapstoneMissingFile('signed-contract.pdf is missing')).toBe(
      true,
    );
    expect(
      gradeCapstoneHomeownerDraft(
        'Hi — sharing estimate-van-singel.pdf for your review before we start.',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneDayVerdict(
        'adjust morning — Wednesday conflict and missing contract',
      ),
    ).toBe(true);
    expect(gradeCapstoneDayVerdict('go ship it')).toBe(false);
  });
});

describe('routines module schema', () => {
  it('validates routines manifest', () => {
    expect(assertManifest(routinesManifest)).toEqual([]);
    expect(routinesManifest.moduleId).toBe('routines');
    expect(routinesManifest.status).toBe('live');
    expect(routinesManifest.passScore).toBe(0.8);
    expect(routinesManifest.lessonOrder).toEqual([
      'm3-intro',
      'm3-l1-when',
      'm3-v2',
      'm3-l2-cron',
      'm3-v3',
      'm3-l3-events',
      'm3-v4',
      'm3-l4-hygiene',
      'm3-practice-capstone',
      'm3-test',
      'm3-outro',
    ]);
  });

  it('validates m3 quiz shape', () => {
    expect(assertQuiz(m3Quiz, 0.8)).toEqual([]);
    expect(m3Quiz.questions).toHaveLength(10);
  });

  it('validates routines practices', () => {
    for (const drill of Object.values(routinesPractices)) {
      expect(assertPractice(drill)).toEqual([]);
    }
    expect(routinesPractices['practice-when-routine'].passThreshold).toBe(5);
    expect(routinesPractices['practice-capstone-m3'].passThreshold).toBe(3);
  });

  it('keeps slack as thin stub', () => {
    expect(slackManifest.status).toBe('stub');
    expect(slackManifest.lessonOrder).toEqual([]);
  });
});

describe('m3 quiz scoring', () => {
  it('scores all-correct as pass', () => {
    const answers: Record<string, string> = {};
    for (const q of m3Quiz.questions) {
      if (q.kind === 'mc' && q.correctOptionId) answers[q.id] = q.correctOptionId;
      if (q.kind === 'short') answers[q.id] = 'name and schedule plus timezone';
    }
    const result = scoreQuiz(m3Quiz, answers);
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
    expect(scoreQuiz(m3Quiz, answers).passed).toBe(false);
  });
});

describe('routine-pack-spring-week fixture grades', () => {
  it('matches tutor JSON keys', () => {
    expect(routinePackSpringWeek.fixtureId).toBe('routine-pack-spring-week');
    expect(routinePackSpringWeek.moduleId).toBe('routines');
    expect(routinePackSpringWeek.timezone).toBe('America/Detroit');
    expect(routinePackSpringWeek.calendar).toBe('Crew Schedule');
    expect(routinePackSpringWeek.targets.weekdayFieldBrief.schedule).toBe(
      '0 7 * * 1-5',
    );
    expect(routinePackSpringWeek.targets.wedConflictGuard.schedule).toBe(
      '0 18 * * 2',
    );
    expect(routinePackSpringWeek.sortCards).toHaveLength(6);
    expect(routinePackSpringWeek.existingRoutines.some((r) => 'junk' in r && r.junk === true)).toBe(
      true,
    );
  });

  it('grades sort cards answers', () => {
    const expected = ['once', 'routine', 'once', 'routine', 'once', 'routine'];
    expect(routinePackSpringWeek.sortCards.map((c) => c.answer)).toEqual(
      expected,
    );
  });

  it('grades morning / hygiene / capstone keys', () => {
    expect(
      gradeMorningSchedule('weekday 7:00 AM America/Detroit Mon-Fri'),
    ).toBe(true);
    expect(gradeMorningPrompt('Crew Schedule summary, read-only, quiet if empty')).toBe(
      true,
    );
    expect(
      gradeEventBabysit(
        'Watch demo-acme/payments-api PR #42 CI; ping what changed + next action; remove on merge/close',
      ),
    ).toBe(true);
    expect(gradeHygienePause('Pause Weekday field brief')).toBe(true);
    expect(
      gradeHygieneUpdate('Update prompt to flag back-to-backs under 30 minutes'),
    ).toBe(true);
    expect(gradeHygieneDelete('Delete test morning')).toBe(true);
    expect(
      gradeCapstoneMorning(
        'Weekday 7 AM Detroit read-only Crew Schedule brief, quiet if empty',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneGuard(
        'Tue 6 PM: if Van Singel mulch overlaps Jamestown consult, propose options; never edit; quiet if clear',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneTypes('Both are scheduled routines — morning and guard'),
    ).toBe(true);
    expect(
      gradeCapstoneSafety('Never move calendar events without confirmation'),
    ).toBe(true);
    expect(gradeCapstoneSafety('no')).toBe(false);
  });
});
