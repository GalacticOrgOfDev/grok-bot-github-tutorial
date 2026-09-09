import type { PracticeDrill } from '../../types';
import {
  swarmVanSingelThu,
  gradeOutcomeWrite,
  gradeAssemble,
  gradeRunLoop,
  gradeConfirmTap,
  gradeTeardown,
  gradeCapstoneConflictChoice,
  gradeCapstonePacket,
  gradeCapstoneDraft,
  gradeCapstoneTeardown,
} from '../../../shared/sandboxFixtures/swarmVanSingelThu';

const f = swarmVanSingelThu;

export const swarmPractices: Record<string, PracticeDrill> = {
  'practice-outcome': {
    id: 'practice-outcome',
    title: 'Drill A - Outcome + checks',
    goal: 'Rewrite fluffy goals into one-line outcome + >=2 binary checks.',
    afterLesson: 'm6-l1-outcome',
    passCriteria: 'learner writes one outcome with >=2 binary checks for the install week.',
    failHints: [
      'Not use bots more - clear Wed conflict before Thu install',
      'Checks: no overlap; proposal confirmed/dismissed',
      'Packet: checklist 4/4 or missing list pinged',
      'Brief: delivered or NO_EVENTS quiet',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      { id: 'a1', instruction: 'Rewrite a fluffy goal into outcome + >=2 binary checks for install week.', hint: f.fluffyExamples.map((e) => e.fluffy).join(' / ') },
      { id: 'a2', instruction: 'Confirm checks are binary / observable.' },
    ],
    checks: [
      { id: 'a-binary', prompt: 'Success checks should be…', kind: 'mc', options: ['Vague vibes', 'Binary / observable', 'Message volume only', 'Optional forever'], correctIndex: 1, explanation: 'Binary / observable.' },
      { id: 'a-write', prompt: 'Paste your one-line outcome + >=2 binary checks for the Van Singel install week.', kind: 'text', grade: gradeOutcomeWrite, explanation: f.outcome },
      { id: 'a-not-volume', prompt: 'Is bots talked a lot a good success measure?', kind: 'boolean', correctBoolean: false, explanation: 'Optimize for checkable outcomes, not message volume.' },
    ],
  },
  'practice-assemble': {
    id: 'practice-assemble',
    title: 'Drill B - Assemble MVS',
    goal: 'Seat CoS + specialists, attach skills, set only needed routines.',
    afterLesson: 'm6-l2-assemble',
    passCriteria: 'no Slack dependency; no extra bots; skills linked in kickoff notes.',
    failHints: ['Channel: Van Singel Install', 'Bots: CoS, Crew Scheduler, Job Packets, Estimator', 'Skills: field-job-brief, job-packet-audit', 'Routines: Weekday field brief, Wed conflict guard', 'No Slack required'],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      { id: 'b1', instruction: 'Assemble the minimum viable swarm from fixtures.', promptChip: f.promptChips.assemble },
      { id: 'b2', instruction: 'Confirm: no Slack dependency; skills linked; no extras.' },
    ],
    checks: [
      { id: 'b-mvs', prompt: 'Minimum viable swarm includes…', kind: 'mc', options: ['Every bot forever', 'Owner/CoS + few specialists + skills + only needed routines', 'Slack-only webhooks', 'No skills at all'], correctIndex: 1, explanation: 'Owner/CoS + few specialists + skills + only needed routines.' },
      { id: 'b-assemble', prompt: 'Describe channel, bots, skills, and routines you seated.', kind: 'text', grade: gradeAssemble, explanation: f.promptChips.assemble },
      { id: 'b-slack', prompt: 'Is Slack required for this swarm?', kind: 'boolean', correctBoolean: false, explanation: 'False - Grok channels; Slack stays stub.' },
    ],
  },
  'practice-run-loop': {
    id: 'practice-run-loop',
    title: 'Drill C - Run the loop',
    goal: 'Kickoff -> assign -> gather -> decide -> act(confirm) -> retrospect.',
    afterLesson: 'm6-l3-run',
    passCriteria: 'steps 1-6 completed; no silent writes; at least one Confirm tap recorded.',
    failHints: ['Kickoff: outcome + checks in channel', 'Assign Packets audit + Scheduler Wed conflict', 'Gather: missing signed-contract.pdf; overlap proposals', 'Decide A|B|accept-risk', 'Confirm calendar before write; draft unsent', 'Retrospect: mark checks'],
    passThreshold: 3,
    usesSandbox: true,
    steps: [
      { id: 'c1', instruction: 'Post kickoff with outcome + checks.', promptChip: f.promptChips.kickoff },
      { id: 'c2', instruction: 'Assign Packets audit + Scheduler proposals.', promptChip: f.promptChips.assign },
      { id: 'c3', instruction: 'Decide A/B/accept-risk; Confirm write; save draft unsent.', promptChip: f.promptChips.decide },
    ],
    checks: [
      { id: 'c-human', prompt: 'Client texts and calendar edits need…', kind: 'mc', options: ['Silent auto-send', 'Human confirmation', 'Fan-out to all bots', 'Deleting skills first'], correctIndex: 1, explanation: 'Human confirmation - Confirm write sheet.' },
      { id: 'c-loop', prompt: 'Describe your run: kickoff -> assign -> gather -> decide -> act -> retro (mention Confirm).', kind: 'text', grade: gradeRunLoop, explanation: 'S0-S6: kickoff, assign, gather, decide, confirm act, retrospect.' },
      { id: 'c-confirm', prompt: 'Evidence of at least one Confirm tap (calendar or gated send).', kind: 'text', grade: gradeConfirmTap, explanation: 'Confirm tap recorded before any write.' },
      { id: 'c-silent', prompt: 'May the swarm silently move calendar events?', kind: 'boolean', correctBoolean: false, explanation: 'No silent writes - Confirm required.' },
    ],
  },
  'practice-teardown': {
    id: 'practice-teardown',
    title: 'Drill D - Teardown',
    goal: 'Pause guard if cleared; keep brief; retain skills.',
    afterLesson: 'm6-l4-teardown',
    passCriteria: 'correct keep vs pause; skills retained.',
    failHints: ['Pause Wed conflict guard if conflict cleared', 'Keep Weekday field brief', 'Do not delete skills', 'Archive note if contract outstanding'],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      { id: 'd1', instruction: 'Apply teardown after outcome.', promptChip: f.promptChips.teardown },
      { id: 'd2', instruction: 'Confirm keep vs pause decisions.' },
    ],
    checks: [
      { id: 'd-after', prompt: 'After the job you should…', kind: 'mc', options: ['Leave every routine forever', 'Tear down or pause what you do not need; keep reusable skills', 'Delete all skills', 'Require Slack teardown'], correctIndex: 1, explanation: 'Pause unused; keep reusable skills.' },
      { id: 'd-teardown', prompt: 'What did you pause, keep, and retain?', kind: 'text', grade: gradeTeardown, explanation: f.promptChips.teardown },
      { id: 'd-skills', prompt: 'Should you delete field-job-brief and job-packet-audit after one install?', kind: 'boolean', correctBoolean: false, explanation: 'Keep reusable skills.' },
    ],
  },
  'practice-capstone-m6': {
    id: 'practice-capstone-m6',
    title: 'Capstone - Thursday Van Singel install swarm',
    goal: f.outcome,
    afterLesson: 'm6-practice-capstone',
    blurb: f.promptChips.capstoneBlurb,
    passCriteria: '4/5 success checks + human confirm evidence on any write.',
    failHints: ['Wed conflict: A|B|accept-risk with confirm', 'Packet audit reports signed-contract.pdf missing', 'Homeowner draft exists - not auto-sent', 'Thu morning brief still scheduled', 'Conflict guard paused or still justified'],
    passThreshold: 4,
    usesSandbox: true,
    steps: [
      { id: 'cap1', instruction: 'Run kickoff + assign + gather for Van Singel Install.', promptChip: f.promptChips.kickoff },
      { id: 'cap2', instruction: 'Decide conflict; Confirm calendar; save homeowner draft unsent.', promptChip: f.promptChips.decide },
      { id: 'cap3', instruction: 'Score checks; teardown (pause guard / keep brief / keep skills).', promptChip: f.promptChips.teardown },
    ],
    checks: [
      { id: 'cap-conflict', prompt: 'How did you address the Wed conflict (A / B / accept-risk + confirm)?', kind: 'text', grade: gradeCapstoneConflictChoice, explanation: 'Chose A (Mulch 12:30-2:30), B (Consult 1:00-2:30), or accept-risk - with confirm.' },
      { id: 'cap-packet', prompt: 'Packet audit result (what was missing)?', kind: 'text', grade: gradeCapstonePacket, explanation: `Packet gap: ${f.packetGap}` },
      { id: 'cap-draft', prompt: 'Confirm homeowner draft exists and was not auto-sent.', kind: 'text', grade: gradeCapstoneDraft, explanation: f.homeownerDraftShape },
      { id: 'cap-teardown', prompt: 'Thu brief still scheduled? Guard paused or justified?', kind: 'text', grade: gradeCapstoneTeardown, explanation: 'Keep Weekday field brief; pause or justify Wed conflict guard.' },
      { id: 'cap-confirm', prompt: 'Any calendar/client write happened without human Confirm?', kind: 'boolean', correctBoolean: false, explanation: 'Human confirm evidence required on any write.' },
    ],
  },
};
