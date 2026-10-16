# Module 7: Grok Bot + Outcome Swarms

**Status:** live · Solid · passScore 0.8  
**Path:** `src/modules/swarm` · `moduleId: swarm`  
**Position:** final core module.

## Learning outcomes

- Name a concrete outcome and the constraints that bound it.
- Assemble a small set of specialist bots, skills, and routines for that outcome.
- Run the loop (S0–S6) with at least one human confirm before consequential action.
- Tear down cleanly (S7) and capture what should become a standing routine.
- Avoid fan-out, private vents between bots, and unscoped “meanwhile” work.

## Lesson order

`m7-intro` → `m7-l1-outcome` → `m7-v2` → `m7-l2-assemble` → `m7-v3` → `m7-l3-run` → `m7-v4` → `m7-l4-teardown` → `m7-practice-capstone` → `m7-test` → `m7-outro`

Flow: outcome → assemble → run loop (S0–S6) → teardown (S7) → capstone → quiz.

## Fixture

`swarm-van-singel-thu` (`src/shared/sandboxFixtures/swarmVanSingelThu.ts` + `swarm-van-singel-thu.json`)

Composes prior fixtures:

- `spring-week-hudsonville`
- `routine-pack-spring-week`
- `bot-team-van-singel`
- `skills-pack-field`

Key elements:

- Channel: Van Singel Install
- Bots: CoS, Crew Scheduler, Job Packets, Estimator
- Skills: field-job-brief, job-packet-audit
- Routines: Weekday field brief, Wed conflict guard
- Orchestration states: S0–S7 (`flow/orchestration-states.json`)
- Packet gap: signed-contract.pdf
- Reschedule options: A Mulch 12:30–2:30 / B Consult 1:00–2:30

## Practices

| ID | Focus |
|----|-------|
| practice-swarm-outcome | Name the outcome and constraints |
| practice-swarm-assemble | Seat the right bots/skills/routines |
| practice-swarm-run | Run the loop with ≥1 Confirm |
| practice-swarm-teardown | Capture what should become standing |
| practice-capstone-swarm | Combined drill (4/5 checks) |

Quiz: 10 questions, pass ≥ 8.
