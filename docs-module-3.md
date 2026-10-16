# Module 3: Grok Bot + Slack

**Status:** live · Solid · passScore 0.8  
**Path:** `src/modules/slack` · `moduleId: slack`  
**Position:** after Google, before Routines.

## Learning outcomes

- Connect the Slack connector and confirm the workspace and channel Grok Bot is acting in.
- Read recent messages and identify an open ask without posting.
- Draft a reply and confirm before sending.
- Create a lightweight routine that watches for keywords and surfaces a digest.
- Know the safety boundaries: never auto-post @channel, pricing, client PII, or credentials.

## Lesson order

`m3-intro` → `m3-l1-connect` → `m3-v2` → `m3-l2-read` → `m3-v3` → `m3-l3-write` → `m3-v4` → `m3-l4-routine` → `m3-practice-capstone` → `m3-test` → `m3-outro`

Flow: connect → read → safe write → Slack routines → practice → quiz → Module 4 (Routines).

## Fixture

`slack-crew-ops` (`src/shared/sandboxFixtures/slackCrewOps.ts` + `slack-crew-ops.json`)

- Workspace: Springdyke Demo
- Channel: `#crew-ops` (`C-CREW-OPS`)
- Open ask: trailer hitch confirmation
- Draft reply shape: Van Singel Thursday 8am, crew of 3, hitch confirmed
- Routine target: weather|cancel keywords
- Safety never-auto: `@channel`, pricing, client PII, passwords

## Practices

| ID | Focus |
|----|-------|
| practice-slack-connect | Verify connector and channel |
| practice-slack-read | Surface the open hitch ask |
| practice-slack-write | Draft-before-post |
| practice-slack-routine | weather\|cancel watcher |
| practice-capstone-slack | Combined drill (4/5 checks) |

Quiz: 10 questions, pass ≥ 8.
