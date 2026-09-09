# Module 3: Grok Bot + Routines

Live unlockable module under src/modules/routines (`moduleId: routines`).

## Lesson IDs

m3-intro, m3-l1-when, m3-v2, m3-l2-cron, m3-v3, m3-l3-events, m3-v4, m3-l4-hygiene, m3-practice-capstone, m3-test, m3-outro

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

## Slack

Thin stub only (status: stub). Not required.
