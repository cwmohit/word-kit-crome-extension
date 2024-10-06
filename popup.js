// Get the selected text from chrome storage
chrome.storage.local.get('selectedText', function (data) {
    const selectedText = data.selectedText;
  
    if (selectedText) {
      // Create a Wikipedia URL based on the selected text
      const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(selectedText.trim())}`;
  
      // Set the iframe src to load the Wikipedia page
      document.getElementById('wikiFrame').src = wikiUrl;
    } else {
      document.getElementById('wikiFrame').src = 'about:blank';
    }
  });  