import type { LessonContent } from '../../types';

export const githubLessons: Record<string, LessonContent> = {
  'm1-l1-connect': {
    id: 'm1-l1-connect',
    title: 'Connect & verify the GitHub connector',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 8,
    practiceId: 'practice-connect',
    sections: [
      {
        heading: 'How Grok Bot pieces fit',
        body: 'Grok Bot uses agents (sidebar), chats, and connectors. Agents live in the left sidebar. Each chat is tied to an agent. Connectors give that agent tools for external systems like GitHub.',
        bullets: [
          'Sidebar: switch and create agents',
          'Chat header: tap the agent name for per-agent info',
          'Settings: account button bottom-left, or Cmd+, (desktop)',
        ],
        uiPath: 'Sidebar → agent · Chat header → agent name · Settings → bottom-left account / Cmd+,',
      },
      {
        heading: 'Connect GitHub (PAT)',
        body: 'Open Settings, find Connectors / Integrations, choose GitHub, and authenticate with a Personal Access Token that has the scopes you need (repo + read org as required). Prior Grok → Git setups do NOT carry over into Grok Bot — connect fresh here.',
        callout: {
          kind: 'warn',
          text: 'Prior Grok→Git does NOT carry over. Reconnect inside Grok Bot.',
        },
        uiPath: 'Settings (bottom-left account / Cmd+,) → Connectors → GitHub',
      },
      {
        heading: 'Verify the connection',
        body: 'In chat, ask which GitHub account you are connected as, then list open PRs. Confirm the account/org matches what you expect (demo: GalacticOrgOfDev or your own).',
        promptExample: 'Which GitHub account am I connected as?',
      },
      {
        heading: 'Deep: scopes & org access',
        body: 'If lists are empty, check org SSO authorization on the token, and that the agent’s connector is the one you just configured — not a different agent’s settings.',
        callout: {
          kind: 'tip',
          text: 'Deep path: name a concrete owner/repo when verifying org-scoped access.',
        },
      },
    ],
  },
  'm1-l2-read': {
    id: 'm1-l2-read',
    title: 'Read PRs, issues, and CI from chat',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 10,
    practiceId: 'practice-read-pr',
    sections: [
      {
        heading: 'Read without leaving chat',
        body: 'Use Grok Bot to list open PRs, summarize a PR, and explain failing CI. Prefer read-only prompts first.',
        promptExample:
          "Summarize PR #42 in demo-acme/payments-api in 5 bullets: intent, key files, risks, test plan, what's left.",
      },
      {
        heading: 'CI and review threads',
        body: 'Ask for CI status by check name, and list open review threads that still need a reply.',
        bullets: [
          "What's the CI status on that PR? Name any failing checks.",
          'List open review threads that still need a reply.',
        ],
        callout: {
          kind: 'info',
          text: 'Sandbox drills use demo-acme/payments-api#42 so answers stay stable offline.',
        },
      },
      {
        heading: 'Empty results?',
        body: 'Name owner/repo explicitly. Wrong account/org scope or expired auth are the usual causes — reconnect if needed.',
        uiPath: 'Settings → Connectors → GitHub → reconnect / re-auth',
      },
    ],
  },
  'm1-l3-review': {
    id: 'm1-l3-review',
    title: 'Structured PR review with Grok Bot',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 12,
    practiceId: 'practice-review',
    sections: [
      {
        heading: 'Chat-only reviews',
        body: 'Ask for a structured review focused on correctness, security, and missing tests — and insist on chat only until you confirm a post.',
        promptExample:
          'Review PR #42 in demo-acme/payments-api. Focus on correctness, security, and missing tests. Do NOT post a comment — return the review to me in chat only.',
      },
      {
        heading: 'Draft, then decide',
        body: 'Follow up: rewrite the top finding as a polite review comment you could post. Keep it in chat vs ask the bot to post only after you explicitly confirm.',
        callout: {
          kind: 'warn',
          text: 'Never ask the bot to post without confirming. Read-first, confirm before mutate.',
        },
      },
      {
        heading: 'Secrets in diffs',
        body: 'If a diff might contain secrets: ask the bot to flag them and suggest rotation — do not echo secrets back into chat.',
        promptExample:
          'Flag any secrets in the diff and suggest rotation; don’t echo the secret back.',
      },
    ],
  },
  'm1-l4-routine': {
    id: 'm1-l4-routine',
    title: 'Build a PR babysitter routine',
    type: 'lesson',
    depths: ['skim', 'solid', 'deep'],
    estMinutes: 12,
    practiceId: 'practice-routine',
    sections: [
      {
        heading: 'Why babysit',
        body: 'A routine watches review/CI/push events and pings you with what changed plus one next action — useful when you are away from a desk.',
      },
      {
        heading: 'Event set that works',
        body: 'Include review events, pr-pushed, ci-passed/ci-failed, and terminal merge/close so the routine can clean itself up.',
        bullets: [
          'review-requested / approved / changes-requested / commented',
          'pr-pushed',
          'ci-passed / ci-failed',
          'pr-merged / pr-closed (self-delete)',
        ],
        promptExample:
          'Create a routine that watches demo-acme/payments-api PR #42 for review requests, approvals, change requests, comments, pushes, and CI pass/fail. When something fires, ping me with what changed and one recommended next action. Delete itself when the PR merges or closes.',
      },
      {
        heading: 'Chief of Staff vs Tutor',
        body: 'Use a Chief of Staff-style agent for orchestration and routines across work; use a specialist Tutor bot for learning this series. Pull humans in for merge authority, security exceptions, and ambiguous product calls.',
        callout: {
          kind: 'tip',
          text: 'Humans decide merges and security exceptions; bots draft and babysit.',
        },
      },
    ],
  },
};
