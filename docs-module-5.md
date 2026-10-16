# Module 5: Grok Bot + Bot Teams

**Status:** live · Solid · passScore 0.8  
**Path:** `src/modules/teams` · `moduleId: teams`

## Learning outcomes

- Explain why specialized bots beat one mega-chat for real work.
- Define clear roles (name + description) for 2–3 teammates.
- Message one teammate with a crisp ask; know replies are async.
- Create a channel for a project and seat only the bots that belong.
- Use Chief-of-Staff coordination: one owner assigns, specialists deliver, human confirms.
- Avoid private vents, unscoped fan-out, and “wake everyone meanwhile.”

## Lesson order

`m5-intro` → `m5-l1-roles` → `m5-v2` → `m5-l2-dm` → `m5-v3` → `m5-l3-channel` → `m5-v4` → `m5-l4-coord` → `m5-practice-capstone` → `m5-test` → `m5-outro`

Flow: roles → DM → channel → CoS / no-spam → capstone → quiz.

## Fixture

`bot-team-van-singel` (`src/shared/sandboxFixtures/botTeamVanSingel.ts` + `bot-team-van-singel.json`)

- Bots: Chief of Staff, Crew Scheduler, Job Packets, Estimator
- Channel: Van Singel Install (scheduler, packets, estimator)
- Spam cards: 4 OK/Don’t tags
- Reuses Module 2 week data + missing `signed-contract.pdf`

## Practices

| ID | Focus |
|----|-------|
| practice-teams-roles | Name and describe the specialists |
| practice-teams-dm | One crisp ask to one bot |
| practice-teams-channel | Seat the right bots, no extras |
| practice-teams-no-spam | Reject fan-out and private vents (≥3/4) |
| practice-capstone-teams | Combined drill (4/5 keys) |

Quiz: 10 questions, pass ≥ 8.

## Note

“Channel” in this module means a Grok Bot group chat. It is distinct from the Slack connector taught in Module 3.
