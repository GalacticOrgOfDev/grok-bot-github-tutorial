import type { PracticeDrill } from '../../types';
import {
  gradeCapstoneCi,
  gradeCapstoneDraft,
  gradeCapstoneMerge,
  gradeCapstoneRoutine,
  gradeCapstoneThread,
  shippingFridayPr,
} from '../../../shared/sandboxFixtures';

const f = shippingFridayPr;

export const githubPractices: Record<string, PracticeDrill> = {
  'practice-connect': {
    id: 'practice-connect',
    title: 'Drill A — Connect & verify',
    goal: 'Prove the connector works.',
    afterLesson: 'm1-l1-connect',
    passCriteria:
      'Bot returns a real account identity + at least one PR list response (or clear “none open” with repo scope).',
    failHints: [
      'Reconnect GitHub connector',
      'Check org access / SSO on the PAT',
      'Try naming one concrete owner/repo',
    ],
    passThreshold: 2,
    usesSandbox: false,
    steps: [
      {
        id: 'a1',
        instruction: 'Open Grok Bot chat and ask which GitHub account you are connected as.',
        promptChip: 'Which GitHub account am I connected as?',
      },
      {
        id: 'a2',
        instruction:
          'Confirm the account matches your expectation (demo: GalacticOrgOfDev or your own).',
      },
      {
        id: 'a3',
        instruction: 'Ask the bot to list open pull requests you can access.',
        promptChip: 'List my open pull requests across repos I can access',
      },
    ],
    checks: [
      {
        id: 'a-account',
        prompt: 'Did the bot return a GitHub account/org identity you recognize?',
        kind: 'self-check',
        correctBoolean: true,
        explanation: 'You should see a real login/org — e.g. GalacticOrgOfDev or your account.',
      },
      {
        id: 'a-prs',
        prompt: 'Did you get a PR list response (or a clear “none open” with scope)?',
        kind: 'self-check',
        correctBoolean: true,
        explanation: 'Empty mystery results usually mean wrong scope — name owner/repo and retry.',
      },
      {
        id: 'a-carryover',
        prompt: 'Does prior Grok→Git automatically carry into Grok Bot?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Prior Grok→Git does NOT carry over. Connect fresh inside Grok Bot.',
      },
    ],
  },

  'practice-read-pr': {
    id: 'practice-read-pr',
    title: 'Drill B — Read a PR end-to-end',
    goal: 'Read a PR end-to-end from chat (sandbox fixture).',
    afterLesson: 'm1-l2-read',
    passCriteria:
      'Summary covers intent + files; CI answer matches fixture; threads listed or none open; MC on highest-risk file.',
    failHints: [
      'Use demo-acme/payments-api#42',
      'CI: unit failed on forged retry / HMAC',
      'Highest risk file is verify.ts',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'b1',
        instruction: 'Ask for a 5-bullet summary of the sandbox PR.',
        promptChip: f.promptChips.summarize,
        hint: `Fixture: ${f.fullName}#${f.prNumber}`,
      },
      {
        id: 'b2',
        instruction: 'Ask for CI status and failing checks.',
        promptChip: "What's the CI status on that PR? Name any failing checks.",
      },
      {
        id: 'b3',
        instruction: 'Ask for open review threads that still need a reply.',
        promptChip: 'List open review threads that still need a reply.',
      },
    ],
    checks: [
      {
        id: 'b-risk-file',
        prompt: f.drillBMc.question,
        kind: 'mc',
        options: [...f.drillBMc.choices],
        correctIndex: f.drillBMc.answerIndex,
        explanation:
          'Highest risk is src/webhooks/verify.ts — HMAC bypass via client-controlled X-Retry.',
      },
      {
        id: 'b-ci',
        prompt: 'Which CI check failed on the sandbox PR?',
        kind: 'mc',
        options: ['lint', 'unit', 'staging-smoke', 'typecheck'],
        correctIndex: 1,
        explanation: f.ci.canonicalAnswer,
      },
      {
        id: 'b-thread',
        prompt: 'Who left the unresolved security thread on verify.ts?',
        kind: 'mc',
        options: ['dev-jordan', 'sam-sec', 'reviewer-bot', 'ci-bot'],
        correctIndex: 1,
        explanation: f.reviewThread.canonicalSummary,
      },
    ],
  },

  'practice-review': {
    id: 'practice-review',
    title: 'Drill C — Safe structured review',
    goal: 'Get a review without auto-posting.',
    afterLesson: 'm1-l3-review',
    passCriteria:
      'Structured review (findings + severity) + draft comment; correctly refuse auto-post until confirmed.',
    failHints: [
      'Use chat-only wording',
      'Do not post without confirm',
      'Top finding: HMAC bypass via X-Retry',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'c1',
        instruction: 'Request a chat-only review focused on correctness, security, tests.',
        promptChip: f.promptChips.review,
      },
      {
        id: 'c2',
        instruction: 'Ask the bot to rewrite the top finding as a polite review comment.',
        promptChip: 'Rewrite the top finding as a polite review comment I could post.',
      },
      {
        id: 'c3',
        instruction: 'Decide: keep in chat vs ask bot to post — only after explicit confirm.',
      },
    ],
    checks: [
      {
        id: 'c-posted',
        prompt: 'Did you ask the bot to post without confirming?',
        kind: 'boolean',
        correctBoolean: false,
        explanation: 'Must be No — confirm before any write to GitHub.',
      },
      {
        id: 'c-high',
        prompt: 'What is the High severity finding on the sandbox PR?',
        kind: 'mc',
        options: [
          'README typo',
          'HMAC bypass via client-controlled X-Retry',
          'Missing label',
          'Slow staging-smoke',
        ],
        correctIndex: 1,
        explanation: f.reviewFindings[0].finding,
      },
      {
        id: 'c-draft',
        prompt: 'A good draft comment should propose…',
        kind: 'mc',
        options: [
          'LGTM and merge now',
          'A signed retry token (or queue) + negative test',
          'Delete the webhook endpoint',
          'Disable CI',
        ],
        correctIndex: 1,
        explanation: 'Draft should acknowledge forgeable header and propose token/queue + test.',
      },
    ],
  },

  'practice-routine': {
    id: 'practice-routine',
    title: 'Drill D — PR babysitter routine',
    goal: 'Create a babysitter for one PR or repo.',
    afterLesson: 'm1-l4-routine',
    passCriteria:
      'Routine exists with GitHub trigger, correct repo/PR, sensible events, clear prompt.',
    failHints: [
      'Include review-*, pr-pushed, ci-passed/failed',
      'Self-delete on merge/close',
      'Name: Babysit payments-api#42',
    ],
    passThreshold: 2,
    usesSandbox: true,
    steps: [
      {
        id: 'd1',
        instruction: 'Ask Grok Bot to create a babysitter for the sandbox PR.',
        promptChip:
          'Create a routine that watches demo-acme/payments-api PR #42 for review requests, approvals, change requests, comments, pushes, and CI pass/fail. When something fires, ping me with what changed and one recommended next action. Delete itself when the PR merges or closes.',
      },
      {
        id: 'd2',
        instruction: 'Confirm the routine name and that events include review, push, and CI.',
      },
    ],
    checks: [
      {
        id: 'd-events',
        prompt: 'Which event set is required for an active PR babysitter?',
        kind: 'mc',
        options: [
          'Only issue-assigned',
          'Review events + pr-pushed + CI pass/fail (+ merge/close cleanup)',
          'Only star/fork events',
          'Calendar invites',
        ],
        correctIndex: 1,
        explanation: 'Review + push + CI + terminal merge/close.',
      },
      {
        id: 'd-target',
        prompt: 'Babysitter should target which repo/PR?',
        kind: 'mc',
        options: [
          'GalacticOrgOfDev/grok-bot-github-tutorial#1',
          'demo-acme/payments-api#42',
          'any fork at random',
          'main only, no PR',
        ],
        correctIndex: 1,
        explanation: `Target ${f.babysitterTarget.trigger.repo} PR #${f.babysitterTarget.trigger.pr}.`,
      },
      {
        id: 'd-selfcheck',
        prompt: 'Did you create (or simulate) a routine with those events?',
        kind: 'self-check',
        correctBoolean: true,
        explanation: 'Paste the routine name in your notes; events must include review/CI/push.',
      },
    ],
  },

  'practice-capstone': {
    id: 'practice-capstone',
    title: 'Capstone — Shipping Friday triage',
    goal: 'Triage the sandbox PR before anyone merges.',
    afterLesson: 'm1-practice-capstone',
    blurb: f.promptChips.capstoneBlurb,
    passCriteria: '4/5 checklist items correct in the in-app verifier.',
    failHints: [
      'CI: unit + forgery/retry/hmac',
      'Thread: sam-sec / signed retry / verify.ts',
      'Merge verdict: wait or block — not merge',
    ],
    passThreshold: 4,
    usesSandbox: true,
    steps: [
      {
        id: 'cap1',
        instruction: 'Identify why CI failed (use fixture / bot).',
        hint: f.ci.canonicalAnswer,
      },
      {
        id: 'cap2',
        instruction: 'Summarize the unresolved thread.',
        hint: f.reviewThread.canonicalSummary,
      },
      {
        id: 'cap3',
        instruction: 'Draft a reply to the thread.',
      },
      {
        id: 'cap4',
        instruction: 'Ask for a merge readiness verdict (merge / wait / block) with reasons.',
      },
      {
        id: 'cap5',
        instruction: 'Optionally propose a babysitter for the remaining life of the PR.',
      },
    ],
    checks: [
      {
        id: 'cap-ci',
        prompt: 'Why did CI fail? (mention unit + cause)',
        kind: 'text',
        grade: gradeCapstoneCi,
        explanation: f.ci.canonicalAnswer,
      },
      {
        id: 'cap-thread',
        prompt: 'Summarize the open thread (sam-sec / forge / signed retry / verify.ts).',
        kind: 'text',
        grade: gradeCapstoneThread,
        explanation: f.reviewThread.canonicalSummary,
      },
      {
        id: 'cap-draft',
        prompt: 'Draft a reply (not LGTM — acknowledge risk + propose token/queue/test).',
        kind: 'text',
        grade: gradeCapstoneDraft,
        explanation: f.draftPoliteComment,
      },
      {
        id: 'cap-merge',
        prompt: 'Merge verdict? (wait or block + reason mentioning security or failing CI)',
        kind: 'text',
        grade: gradeCapstoneMerge,
        explanation: 'Correct verdict is wait/block — not merge — due to failing unit + security thread.',
      },
      {
        id: 'cap-routine',
        prompt: 'Optional: describe a babysitter (repo + #42 + review/CI/push).',
        kind: 'text',
        grade: gradeCapstoneRoutine,
        explanation: 'Should mention demo-acme/payments-api, 42, and review/CI/push.',
      },
    ],
  },
};
