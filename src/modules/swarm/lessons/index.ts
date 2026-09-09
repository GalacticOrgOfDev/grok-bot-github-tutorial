import type { LessonContent } from '../../types';

export const swarmLessons: Record<string, LessonContent> = {
  'm7-l1-outcome': {
    id: 'm7-l1-outcome',
    title: 'Write a one-line outcome + success checks',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 8,
    practiceId: 'practice-outcome',
    sections: [
      {
        heading: 'Aim at a result, not chatter',
        body: 'A swarm without a target is noise. Write one sentence that is informed, efficient, user-friendly, and results-driven — then attach binary success checks you can pass/fail.',
        bullets: [
          'Outcome = one line anyone can verify',
          'Checks = binary / observable (cleared, complete, delivered)',
          'Not “bots talked a lot”',
        ],
        callout: {
          kind: 'tip',
          text: 'Fluffy “use bots more” → “Wednesday schedule conflict resolved before Thursday install” with two checks.',
        },
      },
      {
        heading: 'Rewrite fluff for install week',
        body: 'Practice turning “be organized” and “stay informed” into packet-ready / brief-delivered outcomes with ≥2 binary checks.',
        promptExample:
          'Outcome: clear Wed calendar + known packet status + drafted signature follow-up before Thu install. Checks: conflict addressed; contract gap reported; draft unsent; Thu brief on; guard paused or justified.',
        uiPath: 'Swarm → Outcome + checks → Save',
      },
    ],
  },
  'm7-l2-assemble': {
    id: 'm7-l2-assemble',
    title: 'Seat bots, attach skills, set routines',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 12,
    practiceId: 'practice-assemble',
    sections: [
      {
        heading: 'Minimum viable swarm',
        body: 'Four bots, two skills, two routines — enough. Owner/CoS plus a few specialists, shared playbooks, only the routines you need. No extras, no Slack dependency.',
        bullets: [
          'Channel: Van Singel Install',
          'Bots: CoS, Crew Scheduler, Job Packets, Estimator',
          'Skills: field-job-brief, job-packet-audit',
          'Routines: Weekday field brief, Wed conflict guard',
        ],
        callout: {
          kind: 'warn',
          text: 'Don’t fan out to every bot on day one. Teach channel as Grok Bot group chat (Slack connector is a separate optional module).',
        },
        uiPath: 'Channel → Seat bots → Attach skills → Set routines',
      },
      {
        heading: 'Link skills in kickoff notes',
        body: 'Skills linked in kickoff notes keep specialists from drifting. Scheduler inspects conflicts; Packets runs the audit; Estimator stays scoped.',
        promptExample:
          'Seat CoS + Crew Scheduler + Job Packets + Estimator; attach field-job-brief + job-packet-audit; set Weekday field brief + Wed conflict guard.',
      },
    ],
  },
  'm7-l3-run': {
    id: 'm7-l3-run',
    title: 'Run kickoff → decide (sandbox)',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 15,
    practiceId: 'practice-run-loop',
    sections: [
      {
        heading: 'The orchestration loop',
        body: 'Kickoff → assign → gather → decide → act(with confirm) → retrospect. State machine S0–S6 covers the run; S7 is teardown.',
        bullets: [
          'S0 Kickoff posted (outcome + checks)',
          'S1 Packets audit returned (signed-contract.pdf missing)',
          'S2 Scheduler proposals returned (A/B)',
          'S3 Human chose A | B | accept-risk',
          'S4 Calendar write confirmed or skipped',
          'S5 Homeowner draft saved (unsent)',
          'S6 Retro checks scored',
        ],
        callout: {
          kind: 'info',
          text: 'Android UX: single “Confirm write” bottom sheet — no silent calendar or client sends.',
        },
      },
      {
        heading: 'Human in the loop',
        body: 'Client texts and calendar edits need human confirmation. Propose-only first; Confirm tap recorded before any write. Draft homeowner “need signature” text — send gated.',
        promptExample:
          'Pick reschedule A or B (or accept-risk). Confirm calendar update only after tap. Save homeowner draft unsent.',
        uiPath: 'Swarm dashboard → Confirm write sheet',
      },
    ],
  },
  'm7-l4-teardown': {
    id: 'm7-l4-teardown',
    title: 'Pause/delete what you don’t need',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 8,
    practiceId: 'practice-teardown',
    sections: [
      {
        heading: 'No zombie routines',
        body: 'After the outcome lands, pause or delete what you don’t need. Keep reusable skills. Keep the weekday brief. Pause the conflict guard if the conflict is cleared.',
        bullets: [
          'Pause Wed conflict guard if conflict cleared',
          'Keep Weekday field brief',
          'Don’t delete skills',
          'Archive/close channel note if contract still outstanding',
        ],
        callout: {
          kind: 'tip',
          text: 'Big Pause routine buttons on the swarm dashboard make teardown obvious.',
        },
        uiPath: 'Swarm → Pause guard → Keep brief → Retain skills',
      },
      {
        heading: 'Archive note',
        body: 'If the packet gap remains, archive with “Install complete — packet gap: contract outstanding” so the next crew isn’t guessing.',
        promptExample:
          'Pause Wed conflict guard; keep Weekday field brief; keep skills; archive note if contract still missing.',
      },
    ],
  },
};
