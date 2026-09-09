# Grok Bot tutorials

Modules: github, google, routines, teams, skills, swarm (live); slack (stub).

**Core series M1-M6 complete.** Electives optional; Slack stays stub.

# Module 6: Grok Bot + Outcome Swarms

Live unlockable module under src/modules/swarm (`moduleId: swarm`). Final core module.

## Lesson IDs

m6-intro, m6-l1-outcome, m6-v2, m6-l2-assemble, m6-v3, m6-l3-run, m6-v4, m6-l4-teardown, m6-practice-capstone, m6-test, m6-outro

## Flow

outcome -> assemble -> run loop (S0-S6) -> teardown (S7) -> capstone -> quiz -> outro

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

A outcome, B assemble, C run-loop (>=1 Confirm), D teardown, + capstone (4/5 checks). Quiz 10Q pass >=8.

## Slack

Thin stub only (status: stub). Teach channel as Grok Bot group chat, not Slack.

---

# Module 5: Grok Bot + Skills & Custom Tools

Live unlockable module under src/modules/skills (`moduleId: skills`).

## Lesson IDs

m5-intro, m5-l1-sort, m5-v2, m5-l2-author, m5-v3, m5-l3-wire, m5-v4, m5-l4-harden, m5-practice-capstone, m5-test, m5-outro

## Flow

sort -> author -> wire team -> harden -> capstone -> quiz -> outro

## Fixture

skills-pack-field (src/shared/sandboxFixtures/skillsPackField.ts + skills-pack-field.json)
- create: field-job-brief, job-packet-audit
- harden: auto-text-clients (broken)
- delete: tmp-skill-test
- sortCards: 6 Skill / Routine / Once
- checklist: site-before.jpg, layout-sketch.pdf, estimate-*.pdf, signed-contract.pdf
- folder: Jobs / 2026 / Van Singel backyard (missing contract)

## Practices

A sort (>=5/6), B author brief, C wire team, D harden, + capstone (brief + audit + bot map). Quiz 10Q pass >=8.

## Slack

Thin stub only (status: stub). Teach channel as Grok Bot group chat, not Slack.

---

# Module 4: Grok Bot + Bot Teams

Live unlockable module under src/modules/teams (`moduleId: teams`).

## Lesson IDs

m4-intro, m4-l1-roles, m4-v2, m4-l2-dm, m4-v3, m4-l3-channel, m4-v4, m4-l4-coord, m4-practice-capstone, m4-test, m4-outro

## Flow

roles -> DM -> channel -> CoS / no-spam -> capstone -> quiz -> outro

## Fixture

bot-team-van-singel (src/shared/sandboxFixtures/botTeamVanSingel.ts + bot-team-van-singel.json)
- bots: Chief of Staff, Crew Scheduler, Job Packets, Estimator
- channel: Van Singel Install (scheduler, packets, estimator)
- spamCards: 4 OK/Don't tags
- reuses M2 week + missing signed-contract.pdf

## Practices

A roles, B dm, C channel, D no-spam (>=3/4), + capstone (4/5 keys). Quiz 10Q pass >=8.

## Slack

Thin stub only (status: stub). Teach channel as Grok Bot group chat, not Slack.

---

# Module 3: Grok Bot + Routines

Live unlockable module under src/modules/routines (`moduleId: routines`).

## Lesson IDs

m3-intro, m3-l1-when, m3-v2, m3-l2-cron, m3-v3, m3-l3-events, m3-v4, m3-l4-hygiene, m3-practice-capstone, m3-test, m3-outro

## Flow

when -> schedule -> events -> hygiene -> capstone -> quiz -> outro

## Fixture

routine-pack-spring-week (src/shared/sandboxFixtures/routinePackSpringWeek.ts + routine-pack-spring-week.json)
