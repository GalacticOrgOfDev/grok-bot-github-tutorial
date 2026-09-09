# Module 3: Grok Bot + Slack

Live Solid module under src/modules/slack (`moduleId: slack`). Path slot: after Google, before Routines.

## Lesson IDs

m3-intro, m3-l1-connect, m3-v2, m3-l2-read, m3-v3, m3-l3-write, m3-v4, m3-l4-routine, m3-practice-capstone, m3-test, m3-outro

## Flow

connect → read → safe write → Slack routines → practice → test → outro (Module 4 Routines)

## Fixture

slack-crew-ops (src/shared/sandboxFixtures/slackCrewOps.ts + slack-crew-ops.json)
- workspace Springdyke Demo, channel #crew-ops (C-CREW-OPS)
- openAsk: trailer hitch confirmation
- draftReplyShape: Van Singel Thursday 8am crew of 3 + hitch confirmed
- routineTarget: Crew-ops weather/cancel (keywords weather|cancel)
- safetyNeverAuto: @channel, pricing, client PII, passwords

## Practices

A practice-slack-connect, B practice-slack-read (open ask = hitch), C practice-slack-write (draft-before-post), D practice-slack-routine (weather|cancel), + practice-capstone-slack (4/5). Quiz 10Q pass ≥8.
