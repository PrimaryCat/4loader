browser.browserAction.onClicked.addListener(requestImageLinks);
browser.runtime.onMessage.addListener(downloadImages);

function requestImageLinks(tab) {
    browser.tabs.sendMessage(tab.id,"run")
};

function downloadImages(linkList) {
    linkList.forEach(link => {
        link["filename"] = "4loader/" + link["filename"];
        link["conflictAction"] = "uniquify";
        browser.downloads.download(link);
    });
};