import type { Quiz } from '../../types';

/** 10 questions · pass ≥ 8/10 (passScore 0.8) */
export const m1Quiz: Quiz = {
  id: 'm1-test',
  title: 'Module 1 quiz',
  passScore: 0.8,
  questions: [
    {
      id: 'q1',
      kind: 'mc',
      stem: 'Before asking Grok Bot to merge a PR, you should…',
      options: [
        { id: 'A', text: 'Paste your GitHub password into chat' },
        { id: 'B', text: 'Confirm the repo/PR and explicitly approve the merge action' },
        { id: 'C', text: 'Ask it to merge every open PR' },
        { id: 'D', text: 'Disconnect the connector first' },
      ],
      correctOptionId: 'B',
      explanation: 'Confirm repo/PR and explicitly approve writes.',
    },
    {
      id: 'q2',
      kind: 'mc',
      stem: 'A good first prompt after connecting GitHub is…',
      options: [
        { id: 'A', text: 'Delete all my forks' },
        { id: 'B', text: 'Which GitHub account am I connected as, and list open PRs?' },
        { id: 'C', text: 'Force push to main' },
        { id: 'D', text: 'Ignore CI failures' },
      ],
      correctOptionId: 'B',
      explanation: 'Verify identity and read access first.',
    },
    {
      id: 'q3',
      kind: 'mc',
      stem: 'Best prompt pattern for a review you might post later…',
      options: [
        { id: 'A', text: 'Post a LGTM on everything' },
        { id: 'B', text: 'Review this PR in chat only; don’t post until I say so' },
        { id: 'C', text: 'Approve and merge immediately' },
        { id: 'D', text: 'Rewrite git history' },
      ],
      correctOptionId: 'B',
      explanation: 'Chat-only until you confirm a write.',
    },
    {
      id: 'q4',
      kind: 'mc',
      stem: 'Bot returns no PRs but you know one is open. Likely cause?',
      options: [
        { id: 'A', text: 'GitHub is down forever' },
        { id: 'B', text: 'Wrong account/org scope or connector needs re-auth' },
        { id: 'C', text: 'PRs can’t be read via Grok Bot' },
        { id: 'D', text: 'You must use only the GitHub website' },
      ],
      correctOptionId: 'B',
      explanation: 'Usually wrong scope or expired auth — reconnect / name owner/repo.',
    },
    {
      id: 'q5',
      kind: 'mc',
      stem: 'A PR babysitter routine should usually…',
      options: [
        { id: 'A', text: 'Poll every 30 seconds with no event trigger' },
        { id: 'B', text: 'Listen for review/CI/push events and summarize what changed' },
        { id: 'C', text: 'Auto-merge on any comment' },
        { id: 'D', text: 'Email your password to teammates' },
      ],
      correctOptionId: 'B',
      explanation: 'Event-driven digests with a next action.',
    },
    {
      id: 'q6',
      kind: 'mc',
      stem: 'Which event set is most useful for babysitting an active PR?',
      options: [
        { id: 'A', text: 'Only issue-assigned' },
        {
          id: 'B',
          text: 'Review events + pr-pushed + CI pass/fail (+ merge/close to clean up)',
        },
        { id: 'C', text: 'Only star/fork events' },
        { id: 'D', text: 'Calendar invites' },
      ],
      correctOptionId: 'B',
      explanation: 'Review + push + CI + terminal cleanup.',
    },
    {
      id: 'q7',
      kind: 'short',
      stem: 'Name two things a strong PR summary from the bot should include.',
      shortRubric: [
        'intent',
        'goal',
        'files',
        'diff',
        'risk',
        'test',
        'thread',
        'ci',
        'left',
      ],
      explanation:
        'Any two of: intent/goal, key files/diffs, risks, test plan, open threads, CI status, what’s left.',
    },
    {
      id: 'q8',
      kind: 'mc',
      stem: 'Secrets (tokens, .env) in a PR diff — correct bot ask?',
      options: [
        { id: 'A', text: 'Commit my token to the repo' },
        {
          id: 'B',
          text: 'Flag any secrets in the diff and suggest rotation; don’t echo the secret back',
        },
        { id: 'C', text: 'Print the full secret so I can copy it' },
        { id: 'D', text: 'Ignore secrets' },
      ],
      correctOptionId: 'B',
      explanation: 'Flag + rotate; never echo secrets into chat.',
    },
    {
      id: 'q9',
      kind: 'mc',
      stem: 'You want daily awareness of review requests across acme/api. Best approach?',
      options: [
        { id: 'A', text: 'Manually refresh GitHub every hour' },
        {
          id: 'B',
          text: 'A GitHub-triggered routine on acme/api for review-requested (+ related review events)',
        },
        { id: 'C', text: 'Disconnect GitHub' },
        { id: 'D', text: 'Ask the bot once and never again' },
      ],
      correctOptionId: 'B',
      explanation: 'Event-triggered routine on the repo.',
    },
    {
      id: 'q10',
      kind: 'mc',
      stem: 'Module complete when you can…',
      options: [
        { id: 'A', text: 'Only open the GitHub website' },
        {
          id: 'B',
          text: 'Verify connector → read PR/CI → review in chat → optional routine — with confirmations before writes',
        },
        { id: 'C', text: 'Bypass all approvals' },
        { id: 'D', text: 'Share credentials between bots casually' },
      ],
      correctOptionId: 'B',
      explanation: 'Full safe loop with confirmations before writes.',
    },
  ],
};
