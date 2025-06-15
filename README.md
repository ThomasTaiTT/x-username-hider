# X Username Hider

A Chrome extension that hides the account menu button on X.com (formerly Twitter) to reduce UI distractions.

## Features

- Automatically hides the "Account menu" button on X.com
- Works with X.com's dynamic content loading (SPA behavior)
- Lightweight with no permissions required
- Compatible with both x.com and www.x.com

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top right)
4. Click **Load unpacked** and select this folder
5. Visit X.com - the account menu button will be automatically hidden

## Technical Details

- Built with Chrome Extension Manifest V3
- Uses MutationObserver to handle dynamic content changes
- Targets elements with `aria-label="Account menu"` and `role="button"`
- Content script runs at `document_idle` for optimal performance

## Files

- `manifest.json` - Extension configuration and permissions
- `content.js` - Main content script that hides the button
- `CLAUDE.md` - Development guidance for AI assistants