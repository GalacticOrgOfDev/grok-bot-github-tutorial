import { describe, expect, it } from 'vitest';
import { scoreQuiz } from '../shared/quizScoring';
import { assertManifest, assertQuiz, assertPractice } from '../shared/schema';
import { slackManifest } from '../modules/slack';
import { m7Quiz } from '../modules/swarm/quizzes/m7-test';
import { swarmManifest } from '../modules/swarm/manifest';
import { swarmPractices } from '../modules/swarm/practices';
import { allManifests, getModule } from '../modules';
import {
  swarmVanSingelThu,
  gradeOutcomeWrite,
  gradeAssemble,
  gradeRunLoop,
  gradeConfirmTap,
  gradeTeardown,
  gradeCapstoneConflictChoice,
  gradeCapstonePacket,
  gradeCapstoneDraft,
  gradeCapstoneTeardown,
} from '../shared/sandboxFixtures/swarmVanSingelThu';
import orchestration from '../modules/swarm/flow/orchestration-states.json';

describe('swarm module schema', () => {
  it('validates swarm manifest', () => {
    expect(assertManifest(swarmManifest)).toEqual([]);
    expect(swarmManifest.moduleId).toBe('swarm');
    expect(swarmManifest.status).toBe('live');
    expect(swarmManifest.passScore).toBe(0.8);
    expect(swarmManifest.lessonOrder).toEqual([
      'm7-intro',
      'm7-l1-outcome',
      'm7-v2',
      'm7-l2-assemble',
      'm7-v3',
      'm7-l3-run',
      'm7-v4',
      'm7-l4-teardown',
      'm7-practice-capstone',
      'm7-test',
      'm7-outro',
    ]);
  });

  it('validates m7 quiz shape', () => {
    expect(assertQuiz(m7Quiz, 0.8)).toEqual([]);
    expect(m7Quiz.questions).toHaveLength(10);
  });

  it('validates swarm practices', () => {
    for (const drill of Object.values(swarmPractices)) {
      expect(assertPractice(drill)).toEqual([]);
    }
    expect(swarmPractices['practice-outcome'].passThreshold).toBe(2);
    expect(swarmPractices['practice-run-loop'].passThreshold).toBe(3);
    expect(swarmPractices['practice-capstone-m7'].passThreshold).toBe(4);
  });

  it('lists swarm on home manifests and getModule', () => {
    expect(allManifests.some((m) => m.moduleId === 'swarm')).toBe(true);
    expect(allManifests.map((m) => m.moduleId)).toEqual([
      'github',
      'google',
      'slack',
      'routines',
      'teams',
      'skills',
      'swarm',
    ]);
    expect(getModule('swarm')?.manifest.moduleId).toBe('swarm');
    expect(getModule('swarm')?.lessonMeta).toHaveLength(11);
  });

  it('lists slack as live Solid before routines in nav', () => {
    expect(slackManifest.status).toBe('live');
    const ids = allManifests.map((m) => m.moduleId);
    expect(ids.indexOf('google')).toBeLessThan(ids.indexOf('slack'));
    expect(ids.indexOf('slack')).toBeLessThan(ids.indexOf('routines'));
  });

  it('keeps prior modules live', () => {
    for (const id of ['github', 'google', 'slack', 'routines', 'teams', 'skills', 'swarm']) {
      expect(getModule(id)?.manifest.status).toBe('live');
    }
  });
});

describe('m7 quiz scoring', () => {
  it('scores all-correct as pass', () => {
    const answers: Record<string, string> = {};
    for (const q of m7Quiz.questions) {
      if (q.kind === 'mc' && q.correctOptionId) answers[q.id] = q.correctOptionId;
      if (q.kind === 'short') {
        answers[q.id] = 'kickoff assign gather decide act retrospect';
      }
    }
    const result = scoreQuiz(m7Quiz, answers);
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
    expect(scoreQuiz(m7Quiz, answers).passed).toBe(false);
  });
});

describe('swarm-van-singel-thu fixture + S0-S7', () => {
  it('matches tutor JSON keys', () => {
    expect(swarmVanSingelThu.fixtureId).toBe('swarm-van-singel-thu');
    expect(swarmVanSingelThu.moduleId).toBe('swarm');
    expect(swarmVanSingelThu.channel).toBe('Van Singel Install');
    expect(swarmVanSingelThu.packetGap).toBe('signed-contract.pdf');
    expect(swarmVanSingelThu.orchestrationStates).toHaveLength(8);
    expect(swarmVanSingelThu.orchestrationStates.map((s) => s.id)).toEqual([
      'S0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7',
    ]);
    expect(swarmVanSingelThu.rescheduleOptions.map((o) => o.id)).toEqual(['A', 'B']);
    expect(swarmVanSingelThu.composes).toEqual([
      'spring-week-hudsonville',
      'routine-pack-spring-week',
      'bot-team-van-singel',
      'skills-pack-field',
    ]);
  });

  it('ships orchestration-states.json S0-S7', () => {
    expect(orchestration.states).toHaveLength(8);
    expect(orchestration.states[0].id).toBe('S0');
    expect(orchestration.states[7].id).toBe('S7');
    expect(orchestration.states[3].requiresHuman).toBe(true);
    expect(orchestration.states[4].requiresConfirm).toBe(true);
  });

  it('grades outcome / assemble / loop / teardown / capstone', () => {
    expect(
      gradeOutcomeWrite(
        'Outcome: Wednesday schedule conflict resolved before Thursday install. Checks: no overlap on Wed; proposal confirmed or dismissed.',
      ),
    ).toBe(true);
    expect(gradeOutcomeWrite('use bots')).toBe(false);
    expect(
      gradeAssemble(
        'Channel Van Singel Install; bots CoS, Crew Scheduler, Job Packets, Estimator; skills field-job-brief + job-packet-audit; routines Weekday field brief + Wed conflict guard. No Slack required.',
      ),
    ).toBe(true);
    expect(gradeAssemble('just slack everyone')).toBe(false);
    expect(
      gradeRunLoop(
        'kickoff outcome; assign Packets+Scheduler; gather gaps; decide A; act with confirm; retrospect checks. Draft unsent.',
      ),
    ).toBe(true);
    expect(gradeConfirmTap('Confirmed calendar write via Confirm tap')).toBe(true);
    expect(
      gradeTeardown(
        'Paused Wed conflict guard; keep Weekday field brief; keep skills retained.',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneConflictChoice(
        'Chose option A Mulch 12:30-2:30 and confirmed the calendar move',
      ),
    ).toBe(true);
    expect(
      gradeCapstonePacket(
        'Packet audit run - signed-contract.pdf missing reported',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneDraft(
        'Homeowner draft saved unsent - ask to e-sign contract',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneTeardown(
        'Thu morning brief still scheduled; conflict guard paused after clear',
      ),
    ).toBe(true);
    expect(gradeCapstonePacket('nothing')).toBe(false);
  });
});
