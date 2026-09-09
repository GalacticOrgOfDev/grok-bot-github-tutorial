import { describe, expect, it } from 'vitest';
import { scoreQuiz } from '../shared/quizScoring';
import { assertManifest, assertQuiz, assertPractice } from '../shared/schema';
import { slackManifest } from '../modules/slack';
import { m6Quiz } from '../modules/skills/quizzes/m6-test';
import { skillsManifest } from '../modules/skills/manifest';
import { skillsPractices } from '../modules/skills/practices';
import { allManifests, getModule } from '../modules';
import {
  skillsPackField,
  gradeAuthorBrief,
  gradeWireTeam,
  gradeHardenRewrite,
  gradeHardenDelete,
  gradeCapstoneBrief,
  gradeCapstoneAudit,
  gradeCapstoneBotMap,
} from '../shared/sandboxFixtures';

describe('skills module schema', () => {
  it('validates skills manifest', () => {
    expect(assertManifest(skillsManifest)).toEqual([]);
    expect(skillsManifest.moduleId).toBe('skills');
    expect(skillsManifest.status).toBe('live');
    expect(skillsManifest.passScore).toBe(0.8);
    expect(skillsManifest.lessonOrder).toEqual([
      'm6-intro',
      'm6-l1-sort',
      'm6-v2',
      'm6-l2-author',
      'm6-v3',
      'm6-l3-wire',
      'm6-v4',
      'm6-l4-harden',
      'm6-practice-capstone',
      'm6-test',
      'm6-outro',
    ]);
  });

  it('validates m6 quiz shape', () => {
    expect(assertQuiz(m6Quiz, 0.8)).toEqual([]);
    expect(m6Quiz.questions).toHaveLength(10);
  });

  it('validates skills practices', () => {
    for (const drill of Object.values(skillsPractices)) {
      expect(assertPractice(drill)).toEqual([]);
    }
    expect(skillsPractices['practice-skill-sort'].passThreshold).toBe(5);
    expect(skillsPractices['practice-harden'].passThreshold).toBe(3);
    expect(skillsPractices['practice-capstone-m6'].passThreshold).toBe(3);
  });

  it('lists skills on home manifests and getModule', () => {
    expect(allManifests.some((m) => m.moduleId === 'skills')).toBe(true);
    expect(getModule('skills')?.manifest.moduleId).toBe('skills');
    expect(getModule('skills')?.lessonMeta).toHaveLength(11);
  });

  it('lists slack as live Solid module', () => {
    expect(slackManifest.status).toBe('live');
    expect(slackManifest.passScore).toBe(0.8);
  });
});

describe('m6 quiz scoring', () => {
  it('scores all-correct as pass', () => {
    const answers: Record<string, string> = {};
    for (const q of m6Quiz.questions) {
      if (q.kind === 'mc' && q.correctOptionId) answers[q.id] = q.correctOptionId;
      if (q.kind === 'short') answers[q.id] = 'description and body when-to-use';
    }
    const result = scoreQuiz(m6Quiz, answers);
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
    expect(scoreQuiz(m6Quiz, answers).passed).toBe(false);
  });
});

describe('skills-pack-field fixture grades', () => {
  it('matches tutor JSON keys', () => {
    expect(skillsPackField.fixtureId).toBe('skills-pack-field');
    expect(skillsPackField.moduleId).toBe('skills');
    expect(skillsPackField.sortCards).toHaveLength(6);
    expect(skillsPackField.skills['field-job-brief'].action).toBe('create');
    expect(skillsPackField.skills['job-packet-audit'].action).toBe('create');
    expect(skillsPackField.skills['auto-text-clients'].action).toBe('harden');
    expect(skillsPackField.skills['tmp-skill-test'].action).toBe('delete');
    expect(skillsPackField.skills['job-packet-audit'].checklist).toEqual([
      'site-before.jpg',
      'layout-sketch.pdf',
      'estimate-*.pdf',
      'signed-contract.pdf',
    ]);
    expect(skillsPackField.missingFile).toBe('signed-contract.pdf');
  });

  it('grades sort card answers', () => {
    expect(skillsPackField.sortCards.map((c) => c.answer)).toEqual([
      'routine',
      'skill',
      'once',
      'routine',
      'skill',
      'once',
    ]);
  });

  it('grades author / wire / harden / capstone keys', () => {
    expect(
      gradeAuthorBrief(
        'field-job-brief: when same-day field brief from Calendar; body 5 lines read-only NO_EVENTS America/Detroit',
      ),
    ).toBe(true);
    expect(gradeAuthorBrief('stuff')).toBe(false);
    expect(
      gradeWireTeam(
        'Crew Scheduler and Job Packets follow [field-job-brief] for morning brief; CoS assigns once',
      ),
    ).toBe(true);
    expect(gradeWireTeam('wake everyone')).toBe(false);
    expect(
      gradeHardenRewrite(
        'when drafting tomorrow client texts: draft-only, human confirm before send, no unrelated folder scraping',
      ),
    ).toBe(true);
    expect(
      gradeHardenDelete('Deleted tmp-skill-test after confirm'),
    ).toBe(true);
    expect(
      gradeCapstoneBrief(
        'Saved field-job-brief when Calendar brief needed; 5-line read-only NO_EVENTS',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneAudit(
        'job-packet-audit when checking folder before install against checklist; draft share; confirm before permission change',
      ),
    ).toBe(true);
    expect(
      gradeCapstoneBotMap(
        'Crew Scheduler runs field brief; Job Packets runs packet audit',
      ),
    ).toBe(true);
    expect(gradeCapstoneBotMap('nobody')).toBe(false);
  });
});
