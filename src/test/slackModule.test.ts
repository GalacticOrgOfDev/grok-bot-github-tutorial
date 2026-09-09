import { describe, expect, it } from 'vitest';
import { scoreQuiz } from '../shared/quizScoring';
import { assertManifest, assertQuiz, assertPractice } from '../shared/schema';
import { slackManifest, slackModule, m3Quiz } from '../modules/slack';
import { slackPractices } from '../modules/slack/practices';
import { allManifests, getModule } from '../modules';
import {
  slackCrewOps,
  gradeSlackConnect,
  gradeSlackOpenAsk,
  gradeSlackDraft,
  gradeSlackRoutine,
  gradeSlackCapstoneNever,
} from '../shared/sandboxFixtures';

describe('slack module schema', () => {
  it('validates slack manifest as live Solid M3', () => {
    expect(assertManifest(slackManifest)).toEqual([]);
    expect(slackManifest.moduleId).toBe('slack');
    expect(slackManifest.status).toBe('live');
    expect(slackManifest.depth).toBe('solid');
    expect(slackManifest.passScore).toBe(0.8);
    expect(slackManifest.connectors).toEqual(['slack']);
    expect(slackManifest.lessonOrder).toEqual([
      'm3-intro',
      'm3-l1-connect',
      'm3-v2',
      'm3-l2-read',
      'm3-v3',
      'm3-l3-write',
      'm3-v4',
      'm3-l4-routine',
      'm3-practice-capstone',
      'm3-test',
      'm3-outro',
    ]);
  });

  it('validates m3 quiz shape', () => {
    expect(assertQuiz(m3Quiz, 0.8)).toEqual([]);
    expect(m3Quiz.questions).toHaveLength(10);
  });

  it('validates slack practices', () => {
    for (const drill of Object.values(slackPractices)) {
      expect(assertPractice(drill)).toEqual([]);
    }
    expect(slackPractices['practice-slack-read'].passThreshold).toBe(2);
    expect(slackPractices['practice-capstone-slack'].passThreshold).toBe(4);
  });

  it('lists slack on home between google and routines; getModule returns bundle', () => {
    const ids = allManifests.map((m) => m.moduleId);
    expect(ids).toEqual([
      'github',
      'google',
      'slack',
      'routines',
      'teams',
      'skills',
      'swarm',
    ]);
    const bundle = getModule('slack');
    expect(bundle).not.toBeNull();
    expect(bundle?.manifest.moduleId).toBe('slack');
    expect(bundle?.lessonMeta).toHaveLength(11);
    expect(bundle?.quiz.id).toBe('m3-test');
    expect(slackModule.practices['practice-slack-write']).toBeTruthy();
  });
});

describe('m3 quiz scoring', () => {
  it('scores all-correct as pass', () => {
    const answers: Record<string, string> = {};
    for (const q of m3Quiz.questions) {
      if (q.kind === 'mc' && q.correctOptionId) answers[q.id] = q.correctOptionId;
      if (q.kind === 'short') answers[q.id] = 'channel and keyword match';
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

describe('slack-crew-ops fixture grades', () => {
  it('matches tutor JSON keys', () => {
    expect(slackCrewOps.fixtureId).toBe('slack-crew-ops');
    expect(slackCrewOps.moduleId).toBe('slack');
    expect(slackCrewOps.workspace).toBe('Springdyke Demo');
    expect(slackCrewOps.channel).toBe('#crew-ops');
    expect(slackCrewOps.openAsk).toBe('trailer hitch confirmation');
    expect(slackCrewOps.routineTarget.keywords).toEqual(['weather', 'cancel']);
    expect(slackCrewOps.messages).toHaveLength(6);
  });

  it('grades connect / open ask / draft / routine / never-auto', () => {
    expect(gradeSlackConnect('#crew-ops on Springdyke Demo')).toBe(true);
    expect(gradeSlackConnect('nowhere')).toBe(false);
    expect(
      gradeSlackOpenAsk('open ask: trailer hitch confirmation for crew-lead'),
    ).toBe(true);
    expect(gradeSlackOpenAsk('nothing')).toBe(false);
    expect(
      gradeSlackDraft(
        'Confirmed: Van Singel Thursday 8am, crew of 3. Trailer hitch reserved.',
      ),
    ).toBe(true);
    expect(
      gradeSlackRoutine(
        '#crew-ops weather|cancel — ping author, text, next action; do not reply unless asked',
      ),
    ).toBe(true);
    expect(gradeSlackCapstoneNever('never auto @channel or pricing')).toBe(true);
    expect(gradeSlackCapstoneNever('x')).toBe(false);
  });
});
