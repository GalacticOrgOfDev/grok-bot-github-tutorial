/**
 * Fixed sandbox pack: swarm-van-singel-thu - drills A-D + capstone.
 * Keys aligned with tutor JSON: sandboxFixtures/swarm-van-singel-thu.json
 * Orchestration state machine: S0-S7
 */
export const swarmVanSingelThu = {
  fixtureId: 'swarm-van-singel-thu',
  moduleId: 'swarm',
  composes: [
    'spring-week-hudsonville',
    'routine-pack-spring-week',
    'bot-team-van-singel',
    'skills-pack-field',
  ],
  outcome:
    'Thursday Van Singel install starts with a clear Wednesday calendar and a known packet status; homeowner signature follow-up drafted.',
  successChecks: [
    'Wed conflict addressed (confirmed move or explicit accept-risk)',
    'Packet audit run - contract missing reported',
    'Homeowner draft exists - not auto-sent',
    'Thu morning brief still scheduled',
    'Conflict guard paused or still justified',
  ],
  channel: 'Van Singel Install',
  bots: ['Chief of Staff', 'Crew Scheduler', 'Job Packets', 'Estimator'],
  skills: ['field-job-brief', 'job-packet-audit'],
  routines: ['Weekday field brief', 'Wed conflict guard'],
  rescheduleOptions: [
    { id: 'A', move: 'Mulch delivery - Van Singel', start: '12:30', end: '14:30' },
    { id: 'B', move: 'Consult - Jamestown patio', start: '13:00', end: '14:30' },
  ],
  packetGap: 'signed-contract.pdf',
  homeownerDraftShape: 'Short ask to e-sign/return contract; no other clients named',
  orchestrationStates: [
    { id: 'S0', label: 'Kickoff posted' },
    { id: 'S1', label: 'Packets audit returned' },
    { id: 'S2', label: 'Scheduler proposals returned' },
    { id: 'S3', label: 'Human chose A|B|accept-risk' },
    { id: 'S4', label: 'Calendar write confirmed or skipped' },
    { id: 'S5', label: 'Homeowner draft saved (unsent)' },
    { id: 'S6', label: 'Retro checks scored' },
    { id: 'S7', label: 'Teardown actions applied' },
  ],
  fluffyExamples: [
    { fluffy: 'Use bots more', better: 'Wednesday schedule conflict resolved before Thursday install', checks: ['No overlap on Crew Schedule Wed', 'proposal confirmed or dismissed'] },
    { fluffy: 'Be organized', better: 'Van Singel packet ready or gaps escalated', checks: ['Checklist 4/4 or missing list pinged'] },
    { fluffy: 'Stay informed', better: 'Thu 7am field brief delivered', checks: ['Brief received or NO_EVENTS quiet'] },
  ],
  teardown: {
    pause: 'Wed conflict guard',
    keep: 'Weekday field brief',
    retainSkills: true,
    archiveNote: 'Install complete - packet gap: contract outstanding',
  },
  promptChips: {
    kickoff: 'Kickoff in Van Singel Install: outcome = clear Wed calendar + known packet status + drafted signature follow-up before Thu install. Checks: Wed conflict addressed; packet audit reports contract; homeowner draft unsent; Thu brief still on; guard paused or justified.',
    assemble: 'Seat CoS + Crew Scheduler + Job Packets + Estimator in Van Singel Install; attach field-job-brief + job-packet-audit; set Weekday field brief + Wed conflict guard. No Slack.',
    assign: 'Assign Packets -> job-packet-audit on Van Singel; Scheduler -> inspect Wed conflict and propose A/B only.',
    decide: 'Human decides: reschedule option A (Mulch 12:30-2:30), B (Consult 1:00-2:30), or accept-risk. Calendar write only after Confirm.',
    draft: 'Draft homeowner e-sign/return contract ask - save unsent; no other clients named.',
    teardown: 'Pause Wed conflict guard if cleared; keep Weekday field brief; keep skills; archive note if contract still missing.',
    capstoneBlurb: "This is the Thursday install. Run the swarm: clear Wednesday, know what's missing in the packet, draft the homeowner follow-up - and don't send or move anything until you confirm.",
  },
} as const;

export type SwarmVanSingelThu = typeof swarmVanSingelThu;

export function gradeOutcomeWrite(answer: string): boolean {
  const a = answer.toLowerCase();
  const hasOutcome = a.includes('conflict') || a.includes('packet') || a.includes('brief') || a.includes('install') || a.includes('wednesday') || a.includes('wed') || a.includes('thursday') || a.includes('thu') || a.includes('calendar') || a.includes('signature') || a.includes('contract');
  const checkHints = ['check', 'no overlap', 'confirm', 'dismiss', 'checklist', 'missing', 'delivered', 'no_events', 'quiet', 'pass', 'fail', 'binary'];
  const checkHits = checkHints.filter((h) => a.includes(h)).length;
  return hasOutcome && checkHits >= 1 && a.length > 40;
}

export function gradeAssemble(answer: string): boolean {
  const a = answer.toLowerCase();
  const channel = a.includes('van singel') || a.includes('van-singel') || a.includes('install');
  const cos = a.includes('cos') || a.includes('chief of staff') || a.includes('chief');
  const scheduler = a.includes('scheduler');
  const packets = a.includes('packet');
  const estimator = a.includes('estimator');
  const skills = (a.includes('field-job-brief') || a.includes('field job brief') || a.includes('brief')) && (a.includes('job-packet-audit') || a.includes('packet audit') || a.includes('audit'));
  const routines = (a.includes('weekday') || a.includes('field brief') || a.includes('morning')) && (a.includes('conflict') || a.includes('wed') || a.includes('guard'));
  const requiresSlack = a.includes('must use slack') || (a.includes('slack required') && !a.includes('no slack'));
  return channel && cos && scheduler && packets && estimator && skills && routines && !requiresSlack;
}

export function gradeRunLoop(answer: string): boolean {
  const a = answer.toLowerCase();
  const stages = ['kickoff', 'assign', 'gather', 'decide', 'act', 'retrospect', 'retro'];
  const stageHits = stages.filter((s) => a.includes(s)).length;
  const confirm = a.includes('confirm') || a.includes('human') || a.includes('tap') || a.includes('gate');
  const noSilent = a.includes('confirm') || a.includes('not auto') || a.includes('unsent') || a.includes('no silent') || a.includes("don't send") || a.includes('do not send');
  return stageHits >= 4 && confirm && noSilent;
}

export function gradeConfirmTap(answer: string): boolean {
  const a = answer.toLowerCase();
  return a.includes('confirm') && (a.includes('tap') || a.includes('calendar') || a.includes('write') || a.includes('sheet') || a.includes('recorded') || a.includes('yes'));
}

export function gradeTeardown(answer: string): boolean {
  const a = answer.toLowerCase();
  const pauseGuard = (a.includes('pause') || a.includes('paused')) && (a.includes('conflict') || a.includes('guard') || a.includes('wed'));
  const keepBrief = (a.includes('keep') || a.includes('retain') || a.includes('still')) && (a.includes('brief') || a.includes('weekday') || a.includes('morning'));
  const keepSkills = (a.includes('skill') && (a.includes('keep') || a.includes('retain') || a.includes("don't delete") || a.includes('do not delete') || a.includes('not delete'))) || a.includes('skills retained') || a.includes('keep the skills') || a.includes('keep skills');
  return pauseGuard && keepBrief && keepSkills;
}

export function gradeCapstoneConflictChoice(answer: string): boolean {
  const a = answer.toLowerCase();
  const chose = a.includes('option a') || a.includes('option b') || /\b(a|b)\b/.test(a) || a.includes('mulch') || a.includes('consult') || a.includes('accept-risk') || a.includes('accept risk') || a.includes('accept');
  const confirm = a.includes('confirm') || a.includes('chose') || a.includes('choose') || a.includes('picked') || a.includes('selected') || a.includes('moved') || a.includes('risk');
  return chose && confirm;
}

export function gradeCapstonePacket(answer: string): boolean {
  const a = answer.toLowerCase();
  return (a.includes('audit') || a.includes('packet') || a.includes('checklist')) && (a.includes('signed-contract') || a.includes('contract') || a.includes('missing') || a.includes('gap'));
}

export function gradeCapstoneDraft(answer: string): boolean {
  const a = answer.toLowerCase();
  const draft = a.includes('draft') || a.includes('e-sign') || a.includes('esign') || a.includes('signature') || a.includes('homeowner');
  const unsent = a.includes('unsent') || a.includes('not sent') || a.includes('not auto') || a.includes('confirm') || a.includes('saved') || a.includes("didn't send") || a.includes('did not send') || a.includes('no send');
  return draft && unsent;
}

export function gradeCapstoneTeardown(answer: string): boolean {
  const a = answer.toLowerCase();
  const brief = a.includes('brief') && (a.includes('keep') || a.includes('still') || a.includes('scheduled') || a.includes('retain'));
  const guard = (a.includes('guard') || a.includes('conflict')) && (a.includes('pause') || a.includes('paused') || a.includes('justif') || a.includes('keep'));
  return brief && guard;
}
