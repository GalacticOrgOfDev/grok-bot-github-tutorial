# Module 4: Grok Bot + Routines

Live unlockable module under src/modules/routines (`moduleId: routines`).

## Lesson IDs

m4-intro, m4-l1-when, m4-v2, m4-l2-cron, m4-v3, m4-l3-events, m4-v4, m4-l4-hygiene, m4-practice-capstone, m4-test, m4-outro

## Flow

when → schedule → events → hygiene → capstone → quiz → outro

## Fixture

routine-pack-spring-week (src/shared/sandboxFixtures/routinePackSpringWeek.ts + routine-pack-spring-week.json)
- timezone America/Detroit, calendar Crew Schedule
- existingRoutines: Weekday field brief (enabled), test morning (junk)
- targets.weekdayFieldBrief: `0 7 * * 1-5` read-only quiet-if-empty
- targets.wedConflictGuard: `0 18 * * 2` Van Singel/Jamestown propose-only
- sortCards: 6 once/routine tags

## Practices

A when-routine (≥5/6), B morning-cron, C event-babysit, D hygiene, + capstone (3/4 keys). Quiz 10Q pass ≥8.
