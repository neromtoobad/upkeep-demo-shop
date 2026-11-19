# Margin — demo shop for Upkeep

A small shop (browse, cart, checkout) pinned to package versions from around 2021. It exists so
[Upkeep](https://github.com/neromtoobad/upkeep) has a real stale app to upgrade.

Nothing here is a planted bug. The app is ordinary code written against the old versions. What
breaks during an upgrade is whatever the new releases of those packages changed.

```bash
npm ci
npm run build && npm run preview   # http://localhost:4173
```

`flows/` holds the three plain-English journeys Kane CLI walks: browse, cart, checkout.
