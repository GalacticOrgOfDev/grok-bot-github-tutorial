import type { VideoLesson } from '../../types';

export const swarmVideos: Record<string, VideoLesson> = {
  'm7-intro': {
    id: 'm7-intro',
    title: 'Aim the crew at a result',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 1,
    cta: 'Write a one-line outcome + checks.',
    slides: [
      { id: 'v0-1', title: 'Hook', narration: 'Crew without a target is noise.', durationSec: 15, bullets: ['Bots talking != progress', 'Need a checkable result'] },
      { id: 'v0-2', title: 'Promise', narration: 'Aim the crew at one outcome with binary success checks.', durationSec: 15, bullets: ['One-line outcome', 'Pass/fail checks'] },
      { id: 'v0-3', title: 'Arc', narration: 'Connect -> daily use -> routines -> teams -> skills -> outcome swarm.', durationSec: 15, bullets: ['M1-M5 done', 'M6 final core'] },
      { id: 'v0-4', title: 'CTA', narration: 'Next: rewrite fluffy goals into outcome + checks.', durationSec: 15, bullets: ['CTA: Outcome drill'] },
    ],
  },
  'm7-v2': {
    id: 'm7-v2',
    title: 'Minimum viable swarm',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 2,
    cta: 'Seat bots, attach skills, set routines.',
    slides: [
      { id: 'v2-1', title: 'Four bots', narration: 'CoS plus Crew Scheduler, Job Packets, Estimator - enough.', durationSec: 20, bullets: ['Owner/CoS', 'Few specialists'] },
      { id: 'v2-2', title: 'Two skills', narration: 'field-job-brief and job-packet-audit keep playbooks shared.', durationSec: 20, bullets: ['Shared playbooks', 'No drift'] },
      { id: 'v2-3', title: 'Two routines', narration: 'Weekday field brief + Wed conflict guard - only what you need.', durationSec: 20, bullets: ['No extras', 'No Slack required'] },
      { id: 'v2-4', title: 'CTA', narration: 'Assemble the Van Singel Install crew next.', durationSec: 15, bullets: ['CTA: Assemble'] },
    ],
  },
  'm7-v3': {
    id: 'm7-v3',
    title: 'The orchestration loop',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 2,
    cta: 'Run kickoff -> decide in the sandbox.',
    slides: [
      { id: 'v3-1', title: 'Kickoff -> assign', narration: 'Post outcome + checks; assign Packets audit and Scheduler inspect.', durationSec: 20, bullets: ['S0 Kickoff', 'S1-S2 Gather'] },
      { id: 'v3-2', title: 'You decide', narration: 'Human picks A, B, or accept-risk - bots propose only.', durationSec: 25, bullets: ['S3 Human choose', 'Propose-only first'] },
      { id: 'v3-3', title: 'Confirm act -> retro', narration: 'Confirm write, save draft unsent, score checks.', durationSec: 25, bullets: ['S4 Confirm', 'S5 Draft', 'S6 Retro'] },
      { id: 'v3-4', title: 'CTA', narration: 'Run the sandbox loop next.', durationSec: 20, bullets: ['CTA: Run loop'] },
    ],
  },
  'm7-v4': {
    id: 'm7-v4',
    title: 'Guardrails & teardown',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 1,
    cta: 'Pause what you do not need; keep skills.',
    slides: [
      { id: 'v4-1', title: 'Pause the guard', narration: 'If the conflict is cleared, pause Wed conflict guard.', durationSec: 15, bullets: ['No zombie routines'] },
      { id: 'v4-2', title: 'Keep the brief', narration: 'Weekday field brief still earns its keep.', durationSec: 15, bullets: ['Keep useful schedules'] },
      { id: 'v4-3', title: 'Keep the skills', narration: 'Reusable playbooks stay; do not delete skills after one job.', durationSec: 15, bullets: ['Skills retained'] },
      { id: 'v4-4', title: 'CTA', narration: 'Teardown drill next.', durationSec: 15, bullets: ['CTA: Teardown'] },
    ],
  },
  'm7-outro': {
    id: 'm7-outro',
    title: 'Series complete + electives',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 1,
    cta: 'Pass quiz; electives optional.',
    slides: [
      { id: 'vo-1', title: 'Series complete', narration: 'You are series-complete: connect -> daily use -> routines -> teams -> skills -> outcome swarm with guardrails.', durationSec: 20, bullets: ['M1-M6 core done'] },
      { id: 'vo-2', title: 'Electives', narration: 'Electives like Gmail, maps, shopping are optional.', durationSec: 20, bullets: ['Optional deep paths'] },
      { id: 'vo-3', title: 'Series', narration: 'Core path complete — Slack is live for specialists who need it.', durationSec: 20, bullets: ['M1–M7 core complete', 'Pass quiz >=8/10'] },
    ],
  },
};
