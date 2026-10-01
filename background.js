chrome.runtime.onMessage.addListener((message, sender) => {
  if (message === "close-snowflake-auth-tab" && sender.tab?.id !== undefined) {
    chrome.tabs.remove(sender.tab.id);
  }
});
