// Hide the 'Account menu' button on x.com
function hideAccountMenuButton() {
  const buttons = document.querySelectorAll('button[aria-label="Account menu"][role="button"]');
  buttons.forEach(btn => {
    btn.style.display = 'none';
  });
}

// Run once on load
hideAccountMenuButton();

// Observe for dynamically added buttons (SPA behavior)
const observer = new MutationObserver(() => {
  hideAccountMenuButton();
});

observer.observe(document.body, { childList: true, subtree: true }); 