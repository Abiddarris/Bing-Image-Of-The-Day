chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "fetch_bing_wallpaper") {
        fetch("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1")
          .then(r => r.json())
          .then(data => sendResponse(data));
        return true; 
    }
});
