import type { LessonContent } from '../../types';

export const googleLessons: Record<string, LessonContent> = {
  'm2-l1-connect': {
    id: 'm2-l1-connect',
    title: 'Connect Calendar + Drive',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 8,
    practiceId: 'practice-google-connect',
    sections: [
      {
        heading: 'Why two connectors',
        body: 'Jobs live on Calendar. Packets live in Drive. Connect both so Grok Bot can pull the day and the job folder from the truck.',
        bullets: ['Google Calendar - Crew Schedule', 'Google Drive - Jobs folders'],
        uiPath: 'Settings → Connectors → Google Calendar + Google Drive',
        promptExample: 'Which Google account am I connected as for Calendar and Drive?',
      },
      {
        heading: 'Verify',
        body: 'List calendars and name one Drive folder. Reconnect if wrong account or missing scopes.',
        promptExample: 'List the calendars I can see. Name one Drive folder at the top of My Drive.',
        callout: { kind: 'warn', text: 'Demo account: ops@demo-springdyke.example. Primary calendar: Crew Schedule.' },
      },
    ],
  },
  'm2-l2-calendar': {
    id: 'm2-l2-calendar',
    title: 'Read schedule, conflicts, gaps',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-week-read',
    sections: [
      {
        heading: 'Field-friendly week list',
        body: 'Ask for Mon-Fri as day, title, time, location. Flag under-30-minute gaps. Sandbox Wed: Mulch Van Singel 9-11 overlaps Consult Jamestown 10:30-12.',
        promptExample: 'Summarize Crew Schedule Mon-Fri next week: day, title, time, location. Flag anything under 30 minutes apart.',
        callout: { kind: 'info', text: 'Sandbox: spring-week-hudsonville' },
      },
    ],
  },
  'm2-l3-write': {
    id: 'm2-l3-write',
    title: 'Confirm-before-write events',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-event-write',
    sections: [
      {
        heading: 'Propose then confirm',
        body: 'Propose new times in chat only first. Explicit yes before any Calendar write.',
        promptExample: 'Propose moving Mulch delivery - Van Singel one hour later. Chat only - do NOT update the calendar yet.',
        callout: { kind: 'warn', text: 'Did you ask to write before seeing the proposal? Must be No.' },
      },
    ],
  },
  'm2-l4-drive': {
    id: 'm2-l4-drive',
    title: 'Find, summarize, share carefully',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-drive-job',
    sections: [
      {
        heading: 'Van Singel packet',
        body: 'Path Jobs / 2026 / Van Singel backyard. site-before.jpg = photo; estimate-van-singel.pdf = high sensitivity. Missing signed-contract.pdf. Draft share in chat only.',
        promptExample: 'Open Jobs / 2026 / Van Singel backyard. List files and which is the estimate. Draft a share message - do not change sharing yet.',
      },
    ],
  },
  'm2-l5-routine': {
    id: 'm2-l5-routine',
    title: 'Build a Calendar/Drive routine',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-google-routine',
    sections: [
      {
        heading: 'Morning field brief',
        body: 'Weekday 7:00 AM America/Detroit: summarize today events (time + title + location), optional Drive folder for main job, 5-line brief. Read-only by default.',
        promptExample: 'Create a routine that runs every weekday at 7:00 AM America/Detroit: summarize today Calendar events, note Drive folder for main job if found, 5-line field brief. Do not create or edit events.',
      },
    ],
  },
};
