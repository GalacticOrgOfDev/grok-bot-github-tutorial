import type { LessonContent } from '../../types';

export const skillsLessons: Record<string, LessonContent> = {
  'm5-l1-sort': {
    id: 'm5-l1-sort',
    title: 'Skill vs routine vs once',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 8,
    practiceId: 'practice-skill-sort',
    sections: [
      {
        heading: 'Three shapes of ask',
        body: 'A skill is a reusable recipe any assistant can run — it has no trigger by itself. A routine has a schedule or event trigger. A one-shot ask is now only.',
        bullets: [
          'Skill — playbook: when-to-use + body; invoked on demand',
          'Routine — triggered: cron / weekday / event listener',
          'Once — this turn only; not saved for reuse',
        ],
        callout: {
          kind: 'tip',
          text: 'If you retype the same steps, it wants to be a skill. If it must fire on a clock or event, it wants a routine.',
        },
      },
      {
        heading: 'Sort the field week',
        body: '“How to build a 5-line field brief” is a skill. “Every weekday 7am, run the field brief” is a routine that can call that skill. “Summarize today’s calendar right now” is once.',
        promptExample:
          'Tag each card Skill / Routine / Once before you author anything.',
        uiPath: 'Skills → Sort cards → Pass ≥5/6',
      },
    ],
  },
  'm5-l2-author': {
    id: 'm5-l2-author',
    title: 'Author field-job-brief',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 12,
    practiceId: 'practice-author-brief',
    sections: [
      {
        heading: 'Description = when to use',
        body: 'Every skill needs a sharp when-to-use description plus a clear markdown body (steps, constraints, outputs). Vague descriptions (“stuff”) make bots mis-fire.',
        promptExample:
          'Use this when the learner or a bot needs a concise same-day field brief from Calendar (and optional Drive job folder).',
        callout: {
          kind: 'info',
          text: 'Two sections every skill needs: description + body.',
        },
      },
      {
        heading: 'Body: read-only, 5 lines, quiet',
        body: 'Encode timezone America/Detroit, flag gaps under 30 minutes, optional Drive job-folder check, exactly 5-line output, read-only (no calendar edits / Drive sharing changes). If nothing on calendar, return a single line NO_EVENTS so callers may stay quiet.',
        bullets: [
          'Read today’s events (time, title, location)',
          'Flag gaps < 30 minutes',
          'Optional Jobs/2026 folder match + checklist gaps',
          'Output exactly 5 lines',
          'Do not create/edit calendar or change Drive sharing',
          'NO_EVENTS if empty',
        ],
        promptExample:
          'Save skill field-job-brief: when building a same-day field brief from Calendar (+ optional Drive). Body: 5 lines, flag <30m gaps, read-only, NO_EVENTS if empty.',
        uiPath: 'Skills → New → description + body → Save',
      },
    ],
  },
  'm5-l3-wire': {
    id: 'm5-l3-wire',
    title: 'Point the team at one skill',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-wire-team',
    sections: [
      {
        heading: 'Same playbook, clearer handoffs',
        body: 'Sharing a skill across bots means Scheduler, Packets, and Estimator follow the same recipe — not three reinvented morning briefs. CoS assigns once; specialists reference [field-job-brief].',
        promptExample:
          'Tell Crew Scheduler and Job Packets to follow [field-job-brief] when asked for a morning brief; CoS assigns once.',
        callout: {
          kind: 'warn',
          text: 'No fan-out to unrelated bots. Wire only who needs the playbook.',
        },
        uiPath: 'Bots → Point at skill → Confirm seats',
      },
      {
        heading: 'Reuse M4 crew',
        body: 'Fixture bots Crew Scheduler and Job Packets already exist from Module 4. Point both at field-job-brief for morning-brief asks. Leave Estimator out unless estimating.',
        bullets: [
          'Both specialists referenced',
          'Skill named: field-job-brief',
          'No @everyone / unrelated wake-ups',
        ],
      },
    ],
  },
  'm5-l4-harden': {
    id: 'm5-l4-harden',
    title: 'Harden / update / delete',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-harden',
    sections: [
      {
        heading: 'Dangerous skills',
        body: 'Broken fixture auto-text-clients has description “stuff” and a body that silent-texts clients using any phone numbers in Drive. Fix: clear when-to-use, draft-only messages, human confirm before send, no scraping unrelated folders.',
        promptExample:
          'Rewrite auto-text-clients so it only drafts and waits for confirm. Delete tmp-skill-test.',
        callout: {
          kind: 'warn',
          text: 'Cursor-managed skills are read-only — you can’t edit or delete them. Your own skills you can update or delete carefully.',
        },
      },
      {
        heading: 'Update without breaking teams',
        body: 'When bots already point at a skill, keep the id stable and tighten the body. Delete junk (tmp-skill-test) only after confirming nothing depends on it.',
        bullets: [
          'Rewrite gates sends (draft + confirm)',
          'Delete obsolete tmp-skill-test',
          'Don’t break wired teams by renaming casually',
        ],
        uiPath: 'Skills → Edit / Delete → Confirm',
      },
    ],
  },
};
