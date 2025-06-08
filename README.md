# Hide X.com Account Menu Button Chrome Extension

This Chrome extension hides the 'Account menu' button on [x.com](https://x.com).

## Installation

1. Download or clone this repository to your computer.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the folder containing these files.
5. Visit [x.com](https://x.com) and the 'Account menu' button will be hidden automatically.

## How it works
- The extension injects a content script that hides any button with `aria-label="Account menu"` and `role="button"`.
- It also observes the page for changes, so the button will stay hidden even if the page updates dynamically. 