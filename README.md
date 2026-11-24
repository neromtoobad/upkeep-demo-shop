# Margin — demo shop for Upkeep

A small shop (browse, cart, checkout) pinned to package versions released between 2018 and 2022. It exists so
[Upkeep](https://github.com/neromtoobad/upkeep) has a real stale app to upgrade.

Nothing here is a planted bug. The app is ordinary code written against the old versions. What
breaks during an upgrade is whatever the new releases of those packages changed.

```bash
npm ci
npm run build && npm run preview   # http://localhost:4173
```

`flows/` holds the three plain-English journeys Kane CLI walks: browse, cart, checkout.

## What Upkeep did to it

Each `upkeep/*` branch is one real run, as Upkeep left it: one commit per set of upgrades Kane
CLI verified, with the result in the commit message. The run reports are in Upkeep's
[`evidence/`](https://github.com/neromtoobad/upkeep/tree/main/evidence) folder.

| Branch | Run |
|---|---|
| `upkeep/2026-11-19-2222` | All 12 packages upgraded and verified, 4 fixed by Claude Code (the open pull request) |
| `upkeep/2026-11-19-2110` | The same, on an older version of Upkeep |
| `upkeep/2026-11-19-2147` | A handoff run that also tested the guard against edited flows |
| `upkeep/2026-11-19-1500` | `date-fns` 1 → 4 fixed by the agent |
| `upkeep/2026-11-19-1450` | `date-fns` held back (no agent) |

