# Story Points — Trello Power-Up
**By Threeclipse Inc.**

Discipline-tagged story point tracking for Trello cards.

## Features

- **Multiple entries per card**: Add separate point values per discipline (Art: 5, Technical: 8, Audio: 2)
- **Freeform disciplines**: Type any discipline name — no fixed list
- **Card badge**: Shows total points on the board view (e.g., "15 pts")
- **Detail badges**: Each discipline shown separately on the card back, plus total
- **Card back section**: Full breakdown with inline add/remove
- **One-click remove**: ✕ button to remove any entry

## Setup

1. Host these files on GitHub Pages or Netlify (same as Card Nesting)
2. Register at [trello.com/power-ups/admin](https://trello.com/power-ups/admin)
3. Set the Iframe Connector URL to your hosted URL
4. Enable capabilities: Card Buttons, Card Badges, Card Detail Badges, Card Back Section
5. Add to your board from Power-Ups → Custom

## File Structure

```
trello-story-points/
├── index.html
├── js/
│   └── client.js
└── pages/
    ├── card-section.html
    └── add-points.html
```
