import type { VideoLesson } from '../../types';

export const routinesVideos: Record<string, VideoLesson> = {
  'm3-intro': {
    id: 'm3-intro',
    title: 'Why routines (work while you’re in the truck)',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 1,
    cta: 'Learn when to automate.',
    slides: [
      {
        id: 'v0-1',
        title: 'Hook',
        narration:
          'You can’t stare at GitHub or Calendar in the truck.',
        durationSec: 15,
        bullets: ['Phone in the cab', 'No tab thrash'],
      },
      {
        id: 'v0-2',
        title: 'Promise',
        narration: 'Routines brief you and watch what matters.',
        durationSec: 15,
        bullets: ['Morning briefs', 'Event watches'],
      },
      {
        id: 'v0-3',
        title: 'Arc',
        narration:
          'After connect and day-to-day comes the automation layer.',
        durationSec: 15,
        bullets: ['Connect ✓', 'Day-to-day ✓', 'Routines now'],
      },
      {
        id: 'v0-4',
        title: 'CTA',
        narration: 'Next: learn when to automate.',
        durationSec: 15,
        bullets: ['CTA: when vs once'],
      },
    ],
  },
  'm3-v2': {
    id: 'm3-v2',
    title: 'Scheduled briefs',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 2,
    cta: 'Build weekday brief.',
    slides: [
      {
        id: 'v2-1',
        title: '7 AM field brief',
        narration: 'Seven AM field brief appears on your phone.',
        durationSec: 18,
        bullets: ['7:00 America/Detroit', 'Weekdays'],
      },
      {
        id: 'v2-2',
        title: 'Intent prompt',
        narration: 'Show an intent prompt — not brittle clicks.',
        durationSec: 20,
        bullets: ['Intent + constraints', 'Timezone on schedule'],
      },
      {
        id: 'v2-3',
        title: 'Quiet if empty',
        narration: 'Quiet if empty — no spam mornings.',
        durationSec: 18,
        bullets: ['Stay quiet when nothing useful'],
      },
      {
        id: 'v2-4',
        title: 'CTA',
        narration: 'Build your weekday brief next.',
        durationSec: 19,
        bullets: ['CTA: Build weekday brief'],
      },
    ],
  },
  'm3-v3': {
    id: 'm3-v3',
    title: 'Event listeners (“ping me when”)',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 2,
    cta: 'Babysit one change.',
    slides: [
      {
        id: 'v3-1',
        title: 'Pain',
        narration: 'Missed CI. Missed conflict. You’re away.',
        durationSec: 20,
        bullets: ['Missed CI', 'Missed calendar conflict'],
      },
      {
        id: 'v3-2',
        title: 'Ping me when…',
        narration: 'Ping me when… → digest plus one next action.',
        durationSec: 25,
        bullets: ['What changed', 'One next action'],
      },
      {
        id: 'v3-3',
        title: 'Self-clean',
        narration:
          'Self-clean on PR merge — or stay quiet if no conflict.',
        durationSec: 25,
        bullets: ['Merge/close removes babysitter', 'Quiet if clear'],
      },
      {
        id: 'v3-4',
        title: 'CTA',
        narration: 'Babysit one change.',
        durationSec: 20,
        bullets: ['CTA: Babysit one change'],
      },
    ],
  },
  'm3-v4': {
    id: 'm3-v4',
    title: 'Safe prompts & silence rules',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 1,
    cta: 'Hygiene drill.',
    slides: [
      {
        id: 'v4-1',
        title: 'Read-first',
        narration: 'Read-first; confirm writes.',
        durationSec: 15,
        bullets: ['Propose / confirm before writes'],
      },
      {
        id: 'v4-2',
        title: 'Timezone',
        narration: 'Timezone on the schedule — America/Detroit, not guesswork.',
        durationSec: 15,
        bullets: ['Put TZ on the schedule'],
      },
      {
        id: 'v4-3',
        title: 'No zombies',
        narration: 'Pause, update, delete — no zombie pings.',
        durationSec: 15,
        bullets: ['Pause ≠ delete', 'Kill test duplicates'],
      },
      {
        id: 'v4-4',
        title: 'CTA',
        narration: 'Hygiene drill next.',
        durationSec: 15,
        bullets: ['CTA: Hygiene drill'],
      },
    ],
  },
  'm3-outro': {
    id: 'm3-outro',
    title: 'Next: bot teams',
    type: 'video',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 1,
    cta: 'Pass quiz; keep Slack stub.',
    slides: [
      {
        id: 'vo-1',
        title: 'Recap pack',
        narration: 'Recap pack: morning brief plus watch/guard.',
        durationSec: 15,
        bullets: ['Morning brief', 'Conflict guard / babysitter'],
      },
      {
        id: 'vo-2',
        title: 'Next module',
        narration:
          'Next module: Bot Teams — specialists you can message.',
        durationSec: 15,
        bullets: ['Module 4: Bot Teams'],
      },
      {
        id: 'vo-3',
        title: 'CTA',
        narration:
          'Pass the quiz; keep Slack stub unless you need team chat later.',
        durationSec: 15,
        bullets: ['80% to pass', 'Slack stays stub'],
      },
    ],
  },
};
