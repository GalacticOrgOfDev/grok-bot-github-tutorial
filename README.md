# Grok Bot + Tutorials

Interactive learning app for the **Grok Bot + *** series.

Each module teaches a practical workflow: connect a service, read safely, write with confirmation, and optionally turn the pattern into a routine. The app is a React Native / Expo project with structured lessons, video slides, practice drills, and quizzes.

## Modules (nav order)

| # | moduleId | Title | Status |
|---|----------|-------|--------|
| 1 | `github` | Grok Bot + GitHub | live |
| 2 | `google` | Grok Bot + Google | live |
| 3 | `slack` | Grok Bot + Slack | live |
| 4 | `routines` | Grok Bot + Routines | live |
| 5 | `teams` | Grok Bot + Bot Teams | live |
| 6 | `skills` | Grok Bot + Skills | live |
| 7 | `swarm` | Grok Bot + Outcome Swarms | live |

All modules are Solid depth. `moduleId` folder names stay stable; lesson and quiz IDs follow the module number (`m1-*`, `m2-*`, …).

## Quick start

```bash
npm install
npm start          # Expo dev server
npm test           # vitest
npm run typecheck  # tsc --noEmit
```

The app uses a dark theme and tracks progress locally via AsyncStorage.

## Architecture

```
src/modules/
  types.ts                 # Shared contracts (ModuleManifest, LessonContent, PracticeDrill, Quiz, …)
  index.ts                 # Registry of all modules
  <moduleId>/
    manifest.ts            # Metadata, objectives, lessonOrder, passScore
    lessons/index.ts       # Structured lesson content
    videos/index.ts        # Video slides + narration
    practices/index.ts     # Step-by-step drills with checks
    quizzes/mN-test.ts     # Module quiz
```

Each module exports a `ModuleBundle` that the screens consume. Lessons can be video, structured content, practice, or quiz. Practices include self-checks and optional sandbox fixtures.

## Module docs

- [Module 3 — Slack](docs-module-3.md)
- [Module 4 — Routines](docs-module-4.md)
- [Module 5 — Bot Teams](docs-module-5.md)
- [Module 6 — Skills](docs-module-6.md)
- [Module 7 — Outcome Swarms](docs-module-7.md)

Modules 1 and 2 are documented inside their module folders.

## Design principles

- **Read first, confirm before write.** Never auto-post or auto-merge.
- **One clear ask per turn.** Specialists and channels exist so work stays scoped.
- **Fixtures over live accounts.** Practices use deterministic sandbox data so the app works offline and tests stay stable.
- **Pass score 0.8.** Quizzes and capstones require a high bar.

## License

MIT. See [LICENSE](LICENSE) if present.
