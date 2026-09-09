/**
 * Fixed sandbox pack: bot-team-van-singel — drills A–D + capstone.
 * Keys aligned with tutor JSON: sandboxFixtures/bot-team-van-singel.json
 */
export const botTeamVanSingel = {
  fixtureId: 'bot-team-van-singel',
  moduleId: 'teams',
  bots: [
    {
      sandboxId: 'bot-cos',
      name: 'Chief of Staff',
      role: "Assigns; doesn't do specialty work",
    },
    {
      sandboxId: 'bot-scheduler',
      name: 'Crew Scheduler',
      role: 'Calendar; propose only; never silent-write',
    },
    {
      sandboxId: 'bot-packets',
      name: 'Job Packets',
      role: 'Drive job folders; draft shares only',
    },
    {
      sandboxId: 'bot-estimator',
      name: 'Estimator',
      role: 'Draft quotes; no send without confirm',
    },
  ],
  channel: {
    name: 'Van Singel Install',
    memberSandboxIds: ['bot-scheduler', 'bot-packets', 'bot-estimator'],
  },
  spamCards: [
    {
      text: 'Message Job Packets only about missing contract',
      answer: 'ok' as const,
    },
    {
      text: '@entire company about a maybe',
      answer: 'dont' as const,
    },
    {
      text: 'Wait for user confirm before emailing homeowner',
      answer: 'ok' as const,
    },
    {
      text: "Relay user's angry rant verbatim to Estimator",
      answer: 'dont' as const,
    },
  ],
  roleTargets: [
    {
      name: 'Crew Scheduler',
      mustInclude: ['calendar', 'propose', 'never silent-write'],
    },
    {
      name: 'Job Packets',
      mustInclude: ['drive', 'folder', 'draft shares'],
    },
    {
      name: 'Estimator',
      mustInclude: ['quote', 'confirm', 'no send'],
    },
  ],
  missingFile: 'signed-contract.pdf',
  promptChips: {
    dmPackets:
      'Ask Job Packets: list files in Van Singel backyard and name anything missing vs site photo, sketch, estimate, signed contract. Report back; don’t change sharing.',
    channelKickoff:
      'Create channel Van Singel Install seating Crew Scheduler + Job Packets (+ Estimator optional). Post one kickoff: Thursday 8–3 install; conflict cleared; need contract check.',
    schedulerPropose:
      'Ask Crew Scheduler: propose a Wed fix for the Van Singel/Jamestown overlap — chat only, do not edit the calendar.',
    packetsMissing:
      'Ask Job Packets: report whether signed-contract.pdf is in the Van Singel backyard folder.',
    capstoneBlurb:
      "Thursday’s install is real. Stand up a tiny staff, put them in one room, and get a packet gap + schedule proposal — without waking the whole world.",
  },
} as const;

export type BotTeamVanSingel = typeof botTeamVanSingel;

/** Drill A — three role names with clear boundaries */
export function gradeRolesAnswer(answer: string): boolean {
  const a = answer.toLowerCase();
  const hasScheduler =
    a.includes('scheduler') || a.includes('crew schedule');
  const hasPackets =
    a.includes('packet') || a.includes('job packet');
  const hasEstimator = a.includes('estimator') || a.includes('quote');
  const hasBoundary =
    a.includes('never') ||
    a.includes('only') ||
    a.includes('propose') ||
    a.includes('confirm') ||
    a.includes('draft') ||
    a.includes("won't") ||
    a.includes('will not') ||
    a.includes('no send') ||
    a.includes('boundary') ||
    a.includes('not ');
  return hasScheduler && hasPackets && hasEstimator && hasBoundary;
}

/** Drill B — single-target scoped DM */
export function gradeDmAsk(answer: string): boolean {
  const a = answer.toLowerCase();
  const target =
    a.includes('job packets') ||
    a.includes('packets') ||
    a.includes('bot-packets');
  const scoped =
    a.includes('van singel') ||
    a.includes('signed') ||
    a.includes('contract') ||
    a.includes('missing') ||
    a.includes('files');
  const noFanOut =
    !a.includes('everyone') &&
    !a.includes('all bots') &&
    !a.includes('@all') &&
    !a.includes('entire');
  const gated =
    a.includes("don't change") ||
    a.includes('do not change') ||
    a.includes('report') ||
    a.includes('no share') ||
    a.includes('sharing') ||
    a.includes('confirm') ||
    a.includes("don't") ||
    a.includes('do not');
  return target && scoped && noFanOut && gated;
}

/** Drill C — channel name + members + one kickoff */
export function gradeChannelSetup(answer: string): boolean {
  const a = answer.toLowerCase();
  const name =
    a.includes('van singel install') ||
    (a.includes('van singel') && a.includes('install'));
  const members =
    ((a.includes('scheduler') || a.includes('crew')) &&
      (a.includes('packet') || a.includes('job packet'))) ||
    a.includes('≥2') ||
    a.includes('2 members') ||
    a.includes('two') ||
    (a.includes('scheduler') && a.includes('estimator'));
  const kickoff =
    a.includes('kickoff') ||
    a.includes('thursday') ||
    a.includes('8') ||
    a.includes('contract') ||
    a.includes('one post') ||
    a.includes('conflict');
  return name && members && kickoff;
}

/** Capstone key 1 — roles exist / fixture bots confirmed */
export function gradeCapstoneRoles(answer: string): boolean {
  const a = answer.toLowerCase();
  const count =
    (a.includes('scheduler') ? 1 : 0) +
    (a.includes('packet') ? 1 : 0) +
    (a.includes('estimator') ? 1 : 0) +
    (a.includes('chief') || a.includes('cos') ? 1 : 0);
  return (
    count >= 2 ||
    a.includes('fixture') ||
    a.includes('bot-team') ||
    a.includes('three role') ||
    a.includes('3 role') ||
    a.includes('roles exist')
  );
}

/** Capstone key 2 — channel seated */
export function gradeCapstoneChannel(answer: string): boolean {
  const a = answer.toLowerCase();
  return (
    (a.includes('van singel') &&
      (a.includes('channel') || a.includes('install') || a.includes('room'))) ||
    (a.includes('channel') &&
      (a.includes('scheduler') || a.includes('packet') || a.includes('seat')))
  );
}

/** Capstone key 3 — scheduler proposes Wed fix (chat only) */
export function gradeCapstoneScheduler(answer: string): boolean {
  const a = answer.toLowerCase();
  const scheduler =
    a.includes('scheduler') || a.includes('crew schedule');
  const propose =
    a.includes('propose') ||
    a.includes('wed') ||
    a.includes('wednesday') ||
    a.includes('fix') ||
    a.includes('option');
  const chatOnly =
    a.includes('chat') ||
    a.includes('propose-only') ||
    a.includes('propose only') ||
    a.includes("don't edit") ||
    a.includes('do not edit') ||
    a.includes('never edit') ||
    a.includes('no edit') ||
    a.includes('not edit');
  return scheduler && propose && chatOnly;
}

/** Capstone key 4 — packets reports missing signed-contract.pdf */
export function gradeCapstonePackets(answer: string): boolean {
  const a = answer.toLowerCase();
  const packets = a.includes('packet') || a.includes('job packet');
  const missing =
    a.includes('signed-contract') ||
    a.includes('signed contract') ||
    a.includes('missing') ||
    a.includes('contract.pdf');
  return packets && missing;
}

/** Capstone key 5 — who emails homeowner only after human confirm */
export function gradeCapstoneConfirm(answer: string): boolean {
  const a = answer.toLowerCase();
  const who =
    a.includes('estimator') ||
    a.includes('self') ||
    a.includes('human') ||
    a.includes('me') ||
    a.includes('i ');
  const confirm =
    a.includes('confirm') ||
    a.includes('after') ||
    a.includes('gate') ||
    a.includes('approval') ||
    a.includes('only after');
  const email =
    a.includes('email') ||
    a.includes('homeowner') ||
    a.includes('send') ||
    a.includes('client');
  return who && confirm && email;
}
