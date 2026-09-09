import { describe, expect, it } from 'vitest';
import { scoreQuiz } from '../shared/quizScoring';
import { assertManifest, assertQuiz, assertPractice } from '../shared/schema';
import { slackManifest } from '../modules/slack';
import { m5Quiz } from '../modules/teams/quizzes/m5-test';
import { teamsManifest } from '../modules/teams/manifest';
import { teamsPractices } from '../modules/teams/practices';
import {
  botTeamVanSingel,
  gradeRolesAnswer,
  gradeDmAsk,
  gradeChannelSetup,
  gradeCapstoneRoles,
  gradeCapstoneChannel,
  gradeCapstoneScheduler,
  gradeCapstonePackets,
  gradeCapstoneConfirm,
} from '../shared/sandboxFixtures';

describe('teams module schema', () => {
  it('validates teams manifest', () => {
    expect(assertManifest(teamsManifest)).toEqual([]);
    expect(teamsManifest.moduleId).toBe('teams');
    expect(teamsManifest.status).toBe('live');
    expect(teamsManifest.passScore).toBe(0.8);
    expect(teamsManifest.lessonOrder).toEqual([
      'm5-intro',
      'm5-l1-roles',
      'm5-v2',
      'm5-l2-dm',
      'm5-v3',
      'm5-l3-channel',
      'm5-v4',
      'm5-l4-coord',
      'm5-practice-capstone',
      'm5-test',
      'm5-outro',
    ]);
  });

  it('validates m5 quiz shape', () => {
    expect(assertQuiz(m5Quiz, 0.8)).toEqual([]);
    expect(m5Quiz.questions).toHaveLength(10);
  });

  it('validates teams practices', () => {
    for (const drill of Object.values(teamsPractices)) {
      expect(assertPractice(drill)).toEqual([]);
    }
    expect(teamsPractices['practice-no-spam'].passThreshold).toBe(3);
    expect(teamsPractices['practice-capstone-m5'].passThreshold).toBe(4);
  });

  it('lists slack as live Solid module', () => {
    expect(slackManifest.status).toBe('live');
    expect(slackManifest.depth).toBe('solid');
    expect(slackManifest.lessonOrder.length).toBeGreaterThan(0);
  });
});

describe('m5 quiz scoring', () => {
  it('scores all-correct as pass', () => {
    const answers: Record<string, string> = {};
    for (const q of m5Quiz.questions) {
      if (q.kind === 'mc' && q.correctOptionId) answers[q.id] = q.correctOptionId;
      if (q.kind === 'short') answers[q.id] = 'scope and boundaries plus wont';
    }
    const result = scoreQuiz(m5Quiz, answers);
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
    expect(scoreQuiz(m5Quiz, answers).passed).toBe(false);
  });
});

describe('bot-team-van-singel fixture grades', () => {
  it('matches tutor JSON keys', () => {
    expect(botTeamVanSingel.fixtureId).toBe('bot-team-van-singel');
    expect(botTeamVanSingel.moduleId).toBe('teams');
    expect(botTeamVanSingel.bots).toHaveLength(4);
    expect(botTeamVanSingel.channel.name).toBe('Van Singel Install');
    expect(botTeamVanSingel.channel.memberSandboxIds).toEqual([
      'bot-scheduler',
      'bot-packets',
      'bot-estimator',
    ]);
    expect(botTeamVanSingel.spamCards).toHaveLength(4);
    expect(botTeamVanSingel.missingFile).toBe('signed-contract.pdf');
  });

  it('grades spam cards answers', () => {
    expect(botTeamVanSingel.spamCards.map((c) => c.answer)).toEqual([
      'ok',
      'dont',
      'ok',
      'dont',
    ]);
  });

  it('grades roles / dm / channel / capstone keys', () => {
    expect(
      gradeRolesAnswer(
        'Crew Scheduler propose-only calendar; Job Packets draft shares; Estimator no send without confirm',
      ),
    ).toBe(true);
    expect(gradeRolesAnswer('just one mega bot')).toBe(false);
    expect(
      gradeDmAsk(
        "Ask Job Packets: list files in Van Singel backyard; report missing signed contract; don't change sharing",
      ),
    ).toBe(true);
    expect(
      gradeChannelSetup(
        'Van Singel Install with Scheduler and Packets; kickoff Thursday 8-3 install and contract check',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneRoles('Fixture bots: Scheduler, Packets, Estimator'),
    ).toBe(true);
    expect(
      gradeCapstoneChannel('Channel Van Singel Install seated with scheduler and packets'),
    ).toBe(true);
    expect(
      gradeCapstoneScheduler(
        'Scheduler proposes Wed fix in chat only — do not edit calendar',
      ),
    ).toBe(true);
    expect(
      gradeCapstonePackets('Job Packets reports missing signed-contract.pdf'),
    ).toBe(true);
    expect(
      gradeCapstoneConfirm(
        'Estimator emails homeowner only after human confirm',
      ),
    ).toBe(true);
    expect(gradeCapstoneConfirm('send it now')).toBe(false);
  });
});
