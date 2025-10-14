function set_wallpaper() {
    console.log('fetching wallpaper');
    chrome.runtime.sendMessage({action: "fetch_bing_wallpaper"}, function(response) {
        const imageUrl = "https://www.bing.com" + response.images[0].url;
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    });
}

document.addEventListener('dblclick', () => {
    const element = document.documentElement; 
    if (document.fullscreen) {
        document.exitFullscreen();
        return;
    }

    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
});


set_wallpaper();

setInterval(set_wallpaper, 60 * 1000 * 60 * 5);
