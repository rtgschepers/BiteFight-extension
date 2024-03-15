(async () => {
    const src = chrome.runtime.getURL("src/js/content_main.js");
    const contentMain = await import(src);
    contentMain.main();
})();