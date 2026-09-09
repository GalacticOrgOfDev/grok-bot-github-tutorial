import type { ModuleManifest } from '../types';

export const googleManifest: ModuleManifest = {
  moduleId: 'google',
  series: 'grok-bot-plus',
  version: 1,
  depth: 'solid',
  passScore: 0.8,
  title: 'Grok Bot + Google',
  subtitle:
    'Connect Calendar + Drive, read the week, confirm-before-write, job packets, morning routine',
  objectives: [
    'Connect (or verify) Google Calendar and Google Drive connectors and confirm which Google account Grok Bot is using.',
    'Ask Grok Bot for today’s / this week’s schedule and spot conflicts or travel gaps from chat.',
    'Create or reschedule a calendar event only after explicit confirmation (safe write pattern).',
    'Find a Drive folder/file for a job, summarize what’s in it, and draft a share/link request without leaking private docs.',
    'Set a light routine (e.g. morning agenda ping or day-before job packet check) that uses Calendar and/or Drive.',
    'Troubleshoot common failures (wrong account, missing calendar, Drive permission, expired auth) and know when to reconnect.',
  ],
  estMinutes: 55,
  prereqs: [
    'Grok Bot installed',
    'Google Calendar + Google Drive connectors available (you may connect during Lesson 1)',
    'Module 1 optional but helpful',
  ],
  status: 'live',
  connectors: ['google-calendar', 'google-drive'],
  platform: 'android',
  lessonOrder: [
    'm2-intro',
    'm2-l1-connect',
    'm2-v2',
    'm2-l2-calendar',
    'm2-v3',
    'm2-l3-write',
    'm2-v4',
    'm2-l4-drive',
    'm2-v5',
    'm2-l5-routine',
    'm2-practice-capstone',
    'm2-test',
    'm2-outro',
  ],
};
