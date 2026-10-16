# Module 4: Grok Bot + Routines

**Status:** live · Solid · passScore 0.8  
**Path:** `src/modules/routines` · `moduleId: routines`

## Learning outcomes

- Decide when a routine is the right tool versus a one-off chat.
- Write a quiet-if-empty cron that reads and digests without noise.
- Attach a routine to an event (PR, message, calendar) and confirm before any write.
- Clean up junk routines and keep the set small and purposeful.

## Lesson order

`m4-intro` → `m4-l1-when` → `m4-v2` → `m4-l2-cron` → `m4-v3` → `m4-l3-events` → `m4-v4` → `m4-l4-hygiene` → `m4-practice-capstone` → `m4-test` → `m4-outro`

Flow: when → schedule → events → hygiene → capstone → quiz.

## Fixture

`routine-pack-spring-week` (`src/shared/sandboxFixtures/routinePackSpringWeek.ts` + `routine-pack-spring-week.json`)

- Timezone: America/Detroit
- Calendar: Crew Schedule
- Existing routines: Weekday field brief (enabled), test morning (junk)
- Targets:
  - Weekday field brief: `0 7 * * 1-5` — read-only, quiet-if-empty
  - Wed conflict guard: `0 18 * * 2` — Van Singel/Jamestown, propose-only
- Sort cards: 6 once/routine tags

## Practices

| ID | Focus |
|----|-------|
| practice-when-routine | Choose the right trigger (≥5/6) |
| practice-morning-cron | Quiet-if-empty weekday brief |
| practice-event-babysit | Event-driven confirm-before-write |
| practice-hygiene | Remove junk, keep the set small |
| practice-capstone-routines | Combined drill (3/4 keys) |

Quiz: 10 questions, pass ≥ 8.
