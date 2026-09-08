/** Fixed sandbox PR: shipping-friday-pr — drills B–D + capstone. */
export const shippingFridayPr = {
  fixtureId: 'shipping-friday-pr',
  owner: 'demo-acme',
  repo: 'payments-api',
  fullName: 'demo-acme/payments-api',
  prNumber: 42,
  title: 'fix: skip signature check on webhook retries',
  author: 'dev-jordan',
  base: 'main',
  head: 'jordan/webhook-retry-skip',
  url: 'https://github.com/demo-acme/payments-api/pull/42',
  state: 'open' as const,
  createdAt: '2026-09-05T16:00:00Z',
  labels: ['risk:security', 'area:webhooks'],
  bodyMarkdown:
    '## Why\nWebhook provider retries timed out under load. This change skips HMAC verification on retries tagged `X-Retry: true` so jobs complete before the Friday cutover.\n\n## Test plan\n- [ ] Unit tests for retry header\n- [ ] Staging replay of 50 webhooks\n- [ ] Confirm signatures still required on first delivery',
  filesChanged: [
    {
      path: 'src/webhooks/verify.ts',
      change: 'Modified',
      highestRisk: true,
      notes: 'early return true when X-Retry present; bypasses HMAC',
    },
    {
      path: 'src/webhooks/handler.ts',
      change: 'Modified',
      highestRisk: false,
      notes: 'Passes retry flag through; no new validation',
    },
    {
      path: 'tests/webhooks/verify.test.ts',
      change: 'Added',
      highestRisk: false,
      notes: 'Happy path only; no forged retry rejection test',
    },
    {
      path: 'README.md',
      change: 'Modified',
      highestRisk: false,
      notes: 'Documents the skip (should not ship as-is)',
    },
  ],
  highestRiskFile: 'src/webhooks/verify.ts',
  highestRiskFileShort: 'verify.ts',
  botSummaryBullets: [
    'Intent: Unblock webhook retries before Friday by skipping HMAC when X-Retry: true.',
    'Key files: verify.ts (bypass), handler.ts, thin unit test, README note.',
    'Risks: Anyone who can send X-Retry: true can forge webhooks; authz gap on public endpoint.',
    'Test plan: Listed but missing negative test for forged retry headers; staging replay unchecked.',
    "What's left: Security review, negative tests, decide if bypass is acceptable vs. queue/backoff fix.",
  ],
  ci: {
    checks: [
      { name: 'lint', status: 'success', details: '' },
      {
        name: 'unit',
        status: 'failure',
        details:
          'tests/webhooks/verify.test.ts — expected reject on invalid sig; got accept when X-Retry: true with garbage signature',
      },
      { name: 'staging-smoke', status: 'pending', details: 'Waiting on unit' },
    ],
    failingCheckName: 'unit',
    canonicalAnswer:
      'Unit check failed — forged retry header accepted; staging-smoke blocked.',
  },
  reviewThread: {
    threadId: 'thr-7',
    file: 'src/webhooks/verify.ts',
    line: 88,
    author: 'sam-sec',
    resolved: false,
    body: "This bypasses HMAC for any client that sets X-Retry. That's forgeable on a public webhook URL. Can we require a signed retry token from the provider instead of trusting the header?",
    canonicalSummary:
      'Unresolved security concern on verify.ts:88 — X-Retry header is forgeable; reviewer wants a signed retry token instead.',
  },
  reviewFindings: [
    {
      severity: 'High',
      finding: 'HMAC bypass via client-controlled X-Retry enables forged webhooks',
    },
    {
      severity: 'Med',
      finding: 'No negative test for invalid signature + retry header',
    },
    {
      severity: 'Low',
      finding: 'README documents an insecure workaround as if final',
    },
  ],
  draftPoliteComment:
    "Thanks for the retry fix — I'm concerned that trusting X-Retry alone on a public endpoint lets anyone skip verification. Could we gate retries on a provider-signed retry token (or replay through an internal queue) and add a test that garbage signatures still fail even when the retry header is set?",
  babysitterTarget: {
    name: 'Babysit payments-api#42',
    trigger: {
      type: 'github',
      repo: 'demo-acme/payments-api',
      pr: 42,
      events: [
        'review-requested',
        'review-approved',
        'review-changes-requested',
        'review-commented',
        'pr-comment',
        'inline-review-comment',
        'pr-pushed',
        'ci-passed',
        'ci-failed',
        'pr-merged',
        'pr-closed',
      ],
    },
    promptIntent:
      'When something fires, ping with what changed and one recommended next action. Stop/delete when PR merges or closes.',
  },
  mergeVerdict: 'wait' as const,
  mergeReasons: [
    'CI unit is failing (forged retry + garbage signature accepted)',
    'Unresolved security thread from sam-sec on verify.ts',
    'HMAC bypass must not ship as-is',
  ],
  promptChips: {
    summarize:
      "Summarize PR #42 in demo-acme/payments-api in 5 bullets: intent, key files, risks, test plan, what's left.",
    review:
      'Review PR #42 in demo-acme/payments-api. Focus on correctness, security, and missing tests. Do NOT post a comment — return the review to me in chat only.',
    capstoneBlurb:
      "It's Thursday 4pm. PR #42 claims to unblock Friday's webhook cutover. CI is red and Sam left a security thread. Triage it with Grok Bot before anyone merges.",
  },
  drillBMc: {
    question: 'Which file did the bot (fixture) highlight as highest risk?',
    choices: ['handler.ts', 'verify.ts', 'README.md', 'verify.test.ts'],
    answerIndex: 1,
    answer: 'verify.ts',
  },
} as const;

export type ShippingFridayPr = typeof shippingFridayPr;

export function gradeCapstoneCi(answer: string): boolean {
  const a = answer.toLowerCase();
  const hasUnit = a.includes('unit');
  const hasCause =
    a.includes('forged') ||
    a.includes('retry') ||
    a.includes('signature') ||
    a.includes('hmac') ||
    a.includes('x-retry');
  return hasUnit && hasCause;
}

export function gradeCapstoneThread(answer: string): boolean {
  const a = answer.toLowerCase();
  return (
    a.includes('sam-sec') ||
    a.includes('signed retry') ||
    a.includes('forge') ||
    a.includes('verify.ts')
  );
}

export function gradeCapstoneDraft(answer: string): boolean {
  const a = answer.trim().toLowerCase();
  if (!a || a === 'lgtm' || a.length < 20) return false;
  const acknowledges =
    a.includes('risk') ||
    a.includes('hmac') ||
    a.includes('forge') ||
    a.includes('bypass') ||
    a.includes('security') ||
    a.includes('x-retry');
  const proposes =
    a.includes('token') ||
    a.includes('queue') ||
    a.includes('test') ||
    a.includes('signed');
  return acknowledges && proposes;
}

export function gradeCapstoneMerge(answer: string): boolean {
  const a = answer.toLowerCase();
  const verdictOk = a.includes('wait') || a.includes('block');
  const bareMerge =
    /\b(merge|lgtm|ship it)\b/.test(a) &&
    !a.includes('wait') &&
    !a.includes('block') &&
    !a.includes('not merge') &&
    !a.includes("don't merge") &&
    !a.includes('do not merge');
  const reason =
    a.includes('security') ||
    a.includes('ci') ||
    a.includes('fail') ||
    a.includes('unit') ||
    a.includes('thread') ||
    a.includes('hmac');
  return verdictOk && !bareMerge && reason;
}

export function gradeCapstoneRoutine(answer: string): boolean {
  const a = answer.toLowerCase();
  const repo =
    a.includes('demo-acme/payments-api') ||
    (a.includes('payments-api') && a.includes('demo-acme'));
  const pr = a.includes('42');
  const events =
    a.includes('review') || a.includes('ci') || a.includes('push');
  return Boolean(repo && pr && events);
}
