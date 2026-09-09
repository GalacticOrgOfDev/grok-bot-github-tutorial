# Module 7: Grok Bot + Outcome Swarms

Live unlockable module under src/modules/swarm (`moduleId: swarm`). Final core module.

## Lesson IDs

m7-intro, m7-l1-outcome, m7-v2, m7-l2-assemble, m7-v3, m7-l3-run, m7-v4, m7-l4-teardown, m7-practice-capstone, m7-test, m7-outro

## Flow

outcome → assemble → run loop (S0-S6) → teardown (S7) → capstone → quiz → outro

## Fixture

swarm-van-singel-thu (src/shared/sandboxFixtures/swarmVanSingelThu.ts + swarm-van-singel-thu.json)
- composes: spring-week-hudsonville, routine-pack-spring-week, bot-team-van-singel, skills-pack-field
- channel: Van Singel Install
- bots: CoS, Crew Scheduler, Job Packets, Estimator
- skills: field-job-brief, job-packet-audit
- routines: Weekday field brief, Wed conflict guard
- orchestration: S0-S7 (flow/orchestration-states.json)
- packetGap: signed-contract.pdf
- rescheduleOptions: A Mulch 12:30-2:30 / B Consult 1:00-2:30

## Practices

A outcome, B assemble, C run-loop (≥1 Confirm), D teardown, + capstone (4/5 checks). Quiz 10Q pass ≥8.
