import type { Quiz } from '../../types';

/** 10 questions · pass ≥ 8/10 (passScore 0.8) */
export const m2Quiz: Quiz = {
  id: 'm2-test',
  title: 'Module 2 quiz',
  passScore: 0.8,
  questions: [
    {
      id: 'q1',
      kind: 'mc',
      stem: 'Before Grok Bot creates or moves a calendar event, you should…',
      options: [
        { id: 'A', text: 'Let it edit anything it wants' },
        {
          id: 'B',
          text: 'Get a proposal in chat and explicitly confirm the write',
        },
        { id: 'C', text: 'Paste your Google password' },
        { id: 'D', text: 'Disconnect Drive first' },
      ],
      correctOptionId: 'B',
      explanation: 'Propose in chat, then explicitly confirm the write.',
    },
    {
      id: 'q2',
      kind: 'mc',
      stem: 'A good first prompt after connecting Google is…',
      options: [
        { id: 'A', text: 'Delete all my calendars' },
        {
          id: 'B',
          text: 'Which Google account am I using, and what’s on my calendar today?',
        },
        { id: 'C', text: 'Share my whole Drive publicly' },
        { id: 'D', text: 'Ignore conflicts' },
      ],
      correctOptionId: 'B',
      explanation: 'Verify identity and read access first.',
    },
    {
      id: 'q3',
      kind: 'mc',
      stem: 'Best pattern for sharing a Drive estimate…',
      options: [
        { id: 'A', text: 'Make the whole My Drive public' },
        {
          id: 'B',
          text: 'Draft a share message for this one file; don’t change permissions until I confirm',
        },
        { id: 'C', text: 'Email every file in the folder to everyone' },
        { id: 'D', text: 'Upload client SSNs to chat' },
      ],
      correctOptionId: 'B',
      explanation: 'One-file share draft; confirm before permission changes.',
    },
    {
      id: 'q4',
      kind: 'mc',
      stem: 'Bot says it can’t see calendars you know exist. Likely cause?',
      options: [
        { id: 'A', text: 'Calendars only work on desktop websites' },
        {
          id: 'B',
          text: 'Wrong Google account or Calendar connector needs re-auth / missing scope',
        },
        { id: 'C', text: 'Grok Bot never supports Calendar' },
        { id: 'D', text: 'You must delete the event first' },
      ],
      correctOptionId: 'B',
      explanation: 'Wrong account, expired auth, or missing calendar list scope.',
    },
    {
      id: 'q5',
      kind: 'mc',
      stem: 'A weekday morning agenda routine should usually…',
      options: [
        { id: 'A', text: 'Auto-cancel all meetings' },
        {
          id: 'B',
          text: 'Read today’s events and ping a short brief — without writing events unless asked',
        },
        { id: 'C', text: 'Post your full Drive to social media' },
        { id: 'D', text: 'Run every 30 seconds' },
      ],
      correctOptionId: 'B',
      explanation: 'Read-only brief by default; no auto writes.',
    },
    {
      id: 'q6',
      kind: 'mc',
      stem: 'Two jobs are 15 minutes apart across town. Best bot ask?',
      options: [
        { id: 'A', text: 'Ignore travel time' },
        {
          id: 'B',
          text: 'Flag back-to-backs under 30 minutes and propose one move — chat only first',
        },
        { id: 'C', text: 'Delete both jobs' },
        { id: 'D', text: 'Invite 50 random people' },
      ],
      correctOptionId: 'B',
      explanation: 'Flag gaps and propose a move in chat only first.',
    },
    {
      id: 'q7',
      kind: 'short',
      stem: 'Name two things a strong daily field brief should include.',
      shortRubric: [
        'time',
        'title',
        'job',
        'location',
        'travel',
        'conflict',
        'folder',
        'drive',
        'weather',
        'missing',
        'packet',
      ],
      explanation:
        'Any two of: time, job/title, location, travel/conflict warning, Drive folder, weather, missing packet note.',
    },
    {
      id: 'q8',
      kind: 'mc',
      stem: 'Sensitive Drive content (estimates, contracts) — correct ask?',
      options: [
        { id: 'A', text: 'Paste the full contract into chat for fun' },
        {
          id: 'B',
          text: 'Summarize status and file names; don’t dump full private contract text unless I ask for a specific section',
        },
        { id: 'C', text: 'Publish to the open web' },
        { id: 'D', text: 'Ignore the folder' },
      ],
      correctOptionId: 'B',
      explanation: 'Summarize names/status; don’t dump private text.',
    },
    {
      id: 'q9',
      kind: 'mc',
      stem: 'You want a ping every weekday morning with today’s jobs. Best approach?',
      options: [
        { id: 'A', text: 'Open Calendar manually forever' },
        {
          id: 'B',
          text: 'A scheduled routine (e.g. 7 AM local) that summarizes Calendar (+ optional Drive job folder)',
        },
        { id: 'C', text: 'Disconnect Google' },
        { id: 'D', text: 'Ask once in 2024 and never again' },
      ],
      correctOptionId: 'B',
      explanation: 'Scheduled weekday morning routine with Calendar read.',
    },
    {
      id: 'q10',
      kind: 'mc',
      stem: 'Module 2 complete when you can…',
      options: [
        { id: 'A', text: 'Only use the Google website' },
        {
          id: 'B',
          text: 'Verify connectors → read week → confirm-before-write → Drive job packet carefully → optional morning routine',
        },
        { id: 'C', text: 'Auto-share everything' },
        { id: 'D', text: 'Skip confirmations on Android' },
      ],
      correctOptionId: 'B',
      explanation: 'Full safe Google loop with confirmations.',
    },
  ],
};
