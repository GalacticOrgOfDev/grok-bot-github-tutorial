import type { LessonContent } from '../../types';

export const teamsLessons: Record<string, LessonContent> = {
  'm5-l1-roles': {
    id: 'm5-l1-roles',
    title: 'Design 3 roles for a field business',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-roles',
    sections: [
      {
        heading: 'Crew > blob',
        body: 'One mega-chat tries to be scheduler, packet clerk, and estimator at once — and blurs boundaries. Specialized bots with clear roles keep lanes clean for a landscaping week.',
        bullets: [
          'Crew Scheduler — calendar read; propose moves; never silent-write',
          'Job Packets — Drive folders; missing-file checks; draft shares only',
          'Estimator — quotes from packet + scope notes; no send without confirm',
        ],
        callout: {
          kind: 'tip',
          text: 'Every role description needs scope + a clear “won’t do.”',
        },
      },
      {
        heading: 'Name + boundary',
        body: 'Write a short name and a description that states what they own and what they refuse. Fixture bots (bot-scheduler, bot-packets, bot-estimator) already model this for Van Singel week.',
        promptExample:
          'Create three bots: Crew Scheduler (calendar propose-only), Job Packets (Drive folders, draft shares), Estimator (draft quotes, no send without confirm).',
        uiPath: 'Bots → New → Role name + description',
      },
    ],
  },
  'm5-l2-dm': {
    id: 'm5-l2-dm',
    title: 'Send a crisp async ask',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-dm',
    sections: [
      {
        heading: 'One specialist, one ask',
        body: 'Messaging a bot is async — not a live conference call. Pick one teammate, scope the ask, and gate any writes. Don’t fan-out “just in case.”',
        promptExample:
          'Ask Job Packets: list files in Van Singel backyard and name anything missing vs site photo, sketch, estimate, signed contract. Report back; don’t change sharing.',
        callout: {
          kind: 'info',
          text: 'Single target · scoped ask · confirm-gated writes · no @everyone.',
        },
      },
      {
        heading: 'Replies come later',
        body: 'You keep working. The specialist reports back when ready. Treat it like assigning a crew member — not waiting on a Zoom.',
        uiPath: 'Chat → DM teammate → Send',
      },
    ],
  },
  'm5-l3-channel': {
    id: 'm5-l3-channel',
    title: 'Stand up a project room',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 12,
    practiceId: 'practice-channel',
    sections: [
      {
        heading: 'Channel = shared project context',
        body: 'A Grok Bot channel (not Slack) seats who matters for one job. Name it clearly, invite ≥2 specialists, and post one kickoff — not five redundant pings.',
        promptExample:
          'Create channel Van Singel Install seating Crew Scheduler + Job Packets (+ Estimator optional). Post one kickoff: Thursday 8–3 install; conflict cleared; need contract check.',
        callout: {
          kind: 'warn',
          text: 'Teach “channel” as Grok Bot group chat here — distinct from the Slack connector module.',
        },
        uiPath: 'Channels → New → Seat bots → Kickoff',
      },
      {
        heading: 'Seat, don’t spam',
        body: 'Fixture channel Van Singel Install members: bot-scheduler, bot-packets, bot-estimator. Leave Chief of Staff out of the room if CoS only assigns from outside.',
        bullets: [
          'Channel name: Van Singel Install',
          'Members: Scheduler + Packets (+ Estimator)',
          'One kickoff post covering Thursday install + contract check',
        ],
      },
    ],
  },
  'm5-l4-coord': {
    id: 'm5-l4-coord',
    title: 'Assignment without spam',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-no-spam',
    sections: [
      {
        heading: 'CoS pattern',
        body: 'Chief of Staff assigns. Specialists deliver. Human confirms consequential actions (client email, calendar write). CoS does not do specialty work.',
        bullets: [
          'OK: Message Job Packets only about missing contract',
          'Don’t: @entire company about a maybe',
          'OK: Wait for user confirm before emailing homeowner',
          'Don’t: Relay user’s angry rant verbatim to Estimator',
        ],
        callout: {
          kind: 'tip',
          text: 'Assign → specialist returns → human decides.',
        },
      },
      {
        heading: 'Fan-out rules',
        body: 'Wake only who needs the context. Private vents stay private. Client-facing sends stay confirm-gated.',
        promptExample:
          'CoS: ask Scheduler for a Wed propose-only fix; ask Packets for signed-contract.pdf status; do not @everyone.',
      },
    ],
  },
};
