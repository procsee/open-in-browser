chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: "openInBrowser",
    title: "Open in Browser",
    type: "normal",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  console.log(`link is ${item.linkUrl}`);
});