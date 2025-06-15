# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chrome extension that hides the "Account menu" button on X.com (formerly Twitter). The extension is built using Manifest V3 and consists of a simple content script that targets specific UI elements on the X.com website.

## Architecture

- **manifest.json**: Chrome extension manifest (V3) that defines permissions, content scripts, and matching URLs
- **content.js**: Content script that runs on X.com pages to hide the account menu button
- **README.md**: User installation and usage instructions

The extension uses a MutationObserver to handle X.com's single-page application (SPA) behavior, ensuring the button remains hidden even after dynamic page updates.

## Development

### Testing the Extension
1. Load unpacked extension in Chrome via `chrome://extensions/`
2. Enable Developer mode
3. Navigate to x.com to test functionality

### Key Implementation Details
- Uses `document.querySelectorAll('button[aria-label="Account menu"][role="button"]')` to target the specific button
- Implements `MutationObserver` to handle dynamic content changes on X.com
- Runs at `document_idle` to ensure page content is loaded

### File Modifications
When modifying the extension:
- Update version in `manifest.json` for new releases
- Test on both `x.com` and `www.x.com` (both URLs are in the manifest matches)
- Verify the button remains hidden during navigation and page updates