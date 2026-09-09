/** Fixed sandbox week: spring-week-hudsonville - drills B-E + capstone. */
export const springWeekHudsonville = {
  fixtureId: 'spring-week-hudsonville',
  business: 'Springdyke Landscaping LLC',
  timezone: 'America/Detroit',
  googleAccount: 'ops@demo-springdyke.example',
  primaryCalendar: 'Crew Schedule',
  driveRootFolder: 'Jobs / 2026',
  calendars: ['Crew Schedule', 'Personal'],
  topDriveFolders: ['Jobs', 'Templates', 'Shared with me'],
  week: [
    { day: 'Mon', title: 'Crew staging - yard', time: '7:00-8:00 AM', location: 'Hudsonville yard' },
    { day: 'Mon', title: 'Mow - Maple St', time: '9:00-11:00 AM', location: '412 Maple St' },
    { day: 'Tue', title: 'Install bed - 8th Ave', time: '8:00 AM-12:00 PM', location: '220 8th Ave' },
    { day: 'Wed', title: 'Mulch delivery - Van Singel', time: '9:00-11:00 AM', location: 'Van Singel Dr', conflictsWith: 'Consult - Jamestown patio' },
    { day: 'Wed', title: 'Consult - Jamestown patio', time: '10:30 AM-12:00 PM', location: 'Jamestown', conflictsWith: 'Mulch delivery - Van Singel' },
    { day: 'Thu', title: 'Van Singel backyard install', time: '8:00 AM-3:00 PM', location: 'Van Singel Dr', capstoneDay: true },
    { day: 'Fri', title: 'Invoicing / estimates', time: '9:00-11:00 AM', location: 'Office / phone' },
  ],
  conflict: {
    day: 'Wed',
    jobs: ['Mulch delivery - Van Singel', 'Consult - Jamestown patio'],
    times: ['9:00-11:00 AM', '10:30 AM-12:00 PM'],
    canonicalLine: 'Wed: Mulch delivery - Van Singel (9-11) overlaps Consult - Jamestown patio (10:30-12).',
  },
  firstTomorrowExample: { title: 'Van Singel backyard install', time: '8:00 AM' },
  rescheduleProposals: [
    { event: 'Mulch delivery - Van Singel', newTime: '12:30-2:30 PM', note: 'same day - chat only until confirm' },
    { event: 'Consult - Jamestown patio', newTime: '1:00-2:30 PM', note: 'same day - chat only until confirm' },
  ],
  driveFolder: {
    folderId: 'fld-van-singel',
    path: 'Jobs / 2026 / Van Singel backyard',
    name: 'Van Singel backyard',
    files: [
      { name: 'site-before.jpg', role: 'Site photo', sensitivity: 'Low' },
      { name: 'layout-sketch.pdf', role: 'Sketch', sensitivity: 'Med' },
      { name: 'estimate-van-singel.pdf', role: 'Estimate', sensitivity: 'High', highestSensitivity: true },
    ],
    missing: ['signed-contract.pdf'],
    expectedChecklist: ['site photo', 'layout sketch', 'estimate', 'signed contract'],
  },
  shareDraftShape: 'Short homeowner text naming estimate-van-singel.pdf only; no other client names/phones.',
  dayVerdict: 'adjust' as const,
  promptChips: {
    weekRead: 'Summarize Crew Schedule Mon-Fri next week: day, title, time, location. Flag anything under 30 minutes apart.',
    eventWrite: 'Propose moving Mulch delivery - Van Singel one hour later. Chat only - do not update Calendar yet.',
    driveJob: 'Open Jobs / 2026 / Van Singel backyard. List files and which is the estimate. Draft a share message - do not change sharing yet.',
    routine: 'Weekday 7:00 AM America/Detroit: 5-line field brief from Calendar; mention todays main job Drive folder if found; read-only.',
    capstoneBlurb: 'It is Wednesday night. Tomorrow Van Singel install is big. Wednesday still has an overlap, and the job folder is missing a signed contract. Triage with Grok Bot before the crew rolls.',
  },
  drillBMc: {
    question: 'Which two jobs collide on Wednesday?',
    choices: [
      'Mow - Maple St and Install bed - 8th Ave',
      'Mulch delivery - Van Singel and Consult - Jamestown patio',
      'Crew staging and Invoicing',
      'Van Singel backyard install and Mow - Maple St',
    ],
    answerIndex: 1,
    answer: 'Mulch delivery - Van Singel and Consult - Jamestown patio',
  },
} as const;

export type SpringWeekHudsonville = typeof springWeekHudsonville;

export function gradeCapstoneConflict(answer: string): boolean {
  const a = answer.toLowerCase();
  return (a.includes('van singel') || a.includes('mulch')) && (a.includes('jamestown') || a.includes('consult'));
}

export function gradeCapstoneProposal(answer: string): boolean {
  const a = answer.toLowerCase();
  const hasTime = /\d/.test(a) && (a.includes('pm') || a.includes('am') || a.includes(':') || a.includes('hour') || a.includes('later') || a.includes('move'));
  const chatOnly = a.includes('not updated') || a.includes('chat only') || a.includes('chat-only') || a.includes('do not update') || a.includes("don't update") || a.includes('proposal') || a.includes('not yet');
  return hasTime && chatOnly;
}

export function gradeCapstoneMissingFile(answer: string): boolean {
  const a = answer.toLowerCase();
  return a.includes('signed-contract') || a.includes('contract');
}

export function gradeCapstoneHomeownerDraft(answer: string): boolean {
  const a = answer.toLowerCase();
  if (!a.includes('estimate')) return false;
  const inventsPhone = /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/.test(a) && (a.includes('maple') || a.includes('8th') || a.includes('jamestown'));
  return !inventsPhone && a.trim().length >= 20;
}

export function gradeCapstoneDayVerdict(answer: string): boolean {
  const a = answer.toLowerCase();
  const adjustOrBlock = a.includes('adjust') || a.includes('block');
  const blindGo = /\bgo\b/.test(a) && !a.includes('adjust') && !a.includes('block') && !a.includes('not go') && !a.includes("don't go");
  const reason = a.includes('conflict') || a.includes('overlap') || a.includes('contract') || a.includes('mulch') || a.includes('jamestown') || a.includes('van singel') || a.includes('missing');
  return adjustOrBlock && !blindGo && reason;
}
