chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "wikiSearch",
      title: "Search Wikipedia for '%s'",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "wikiSearch" && info.selectionText) {
      // Store the selected text in chrome storage
      chrome.storage.local.set({ selectedText: info.selectionText }, function () {
        chrome.action.openPopup(); // Open the popup to show Wikipedia page
      });
    }
  });
  