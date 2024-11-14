import browser from 'webextension-polyfill';

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
});

console.log(browser, "Browser API")

chrome.runtime.onMessage.addListener(async (message, sender) => {
    console.log(message, "Message");
    console.log(sender, "Sender");
    if (message.type === 'TOGGLE_FEATURE') {
        browser.privacy.services.passwordSavingEnabled.set({ value: message.state});
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "buttonClicked") {
        console.log("Message received in background:", request.message);
        
        // Send response back to content script
        sendResponse({ status: "Message received successfully" });
    }
    return true;
});