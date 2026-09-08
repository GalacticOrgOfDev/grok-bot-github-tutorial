# Grok Bot + GitHub (Module 1) — Android

Expo (React Native) interactive tutorial for specialists on the go. Module 1 of the **Grok Bot + \*** series.

## Run on Android

```bash
npm install
npx expo start
```

- **Emulator:** start an Android Studio AVD, then press `a` in the Expo terminal (or `npm run android`).
- **Device:** install Expo Go and scan the QR code (same network).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | Expo dev server |
| `npm run android` | Open on Android |
| `npm test` | Vitest (quiz scoring, schema, fixture grades) |
| `npm run typecheck` | `tsc --noEmit` |

## Module 1 lessons (order)

| ID | Title | Type |
|----|-------|------|
| `m1-intro` | Why Grok Bot + GitHub | Video |
| `m1-l1-connect` | Connect & verify (+ `practice-connect`) | Lesson |
| `m1-v2` | Day-to-day: PRs in chat | Video |
| `m1-l2-read` | Read PRs/CI (+ `practice-read-pr`) | Lesson |
| `m1-v3` | Ask for a review (safely) | Video |
| `m1-l3-review` | Structured review (+ `practice-review`) | Lesson |
| `m1-v4` | PR babysitter | Video |
| `m1-l4-routine` | Build babysitter (+ `practice-routine`) | Lesson |
| `m1-practice-capstone` | Capstone (`practice-capstone`) | Practice |
| `m1-test` | Module quiz (10 Q, pass ≥8) | Quiz |
| `m1-outro` | What’s next | Video |

Sandbox fixture: `demo-acme/payments-api#42` (`shipping-friday-pr`). Drill B highest-risk file: `verify.ts`.

## Grok Bot UI paths (taught in L1)

- Agents: left sidebar
- Settings: account button bottom-left / `Cmd+,`
- Per-agent info: tap agent name in chat header
- Prior Grok→Git does **not** carry over

## Add Module 2

1. Create `src/modules/<id>/` with manifest, lessons, practices, quizzes, videos.
2. Register in `src/modules/index.ts` (`getModule` + `allManifests`).
3. Stubs already exist for `google` and `slack`.
4. Keep `series: "grok-bot-plus"` and `passScore: 0.8`.

## Architecture

```
src/modules/{github,google,slack}
src/shared/{progress,quizScoring,schema,sandboxFixtures,ProgressContext}
src/{screens,components,navigation,theme}
```
