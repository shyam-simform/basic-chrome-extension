
# Chrome Extension Basics

Browser extensions are small software programs designed to enhance the browsing experience, such as ad blockers, password managers, and language translators. This README provides a high-level overview of building a Chrome extension.

## Manifest File (`manifest.json`)

The `manifest.json` file is the core of any Chrome extension. It provides metadata and defines the main components of the extension. Each extension requires a `manifest.json` with key sections to specify permissions, entry points, and behavior.

## Main Components of a Chrome Extension

### Popup

A popup is the small window that appears when users click on the extension icon in the toolbar.

```json
"action": {
  "default_popup": "popup.html",
  "default_icon": "icon.png"
}
```

**Purpose**:
- Offers a user interface for interacting with extension features.

**Key Characteristics**:
- Opens as an overlay and closes automatically when clicked outside.
- Limited in size (typically around 800x600 pixels).
- Common uses include settings panels, form inputs, and quick toggle switches.

### Background Script

The background script runs separately from web pages, acting as the central event handler.

```json
"background": {
  "service_worker": "background.js"
}
```

**Purpose**:
- Acts as the backend for the extension, accessing browser APIs and managing state.

**Key Characteristics**:
- Runs in a service worker environment in Manifest V3, making it stateless and event-driven.
- Use `chrome.storage` for persistent data.

**Common Uses**:
- Listening for browser events (e.g., tab updates).
- Handling long-term tasks like API calls or data processing.

### Content Script

Content scripts are JavaScript files that run directly on web pages, allowing interaction with the page’s DOM.

```json
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "js": ["content.js"]
  }
]
```

**Purpose**:
- Modify DOM elements, read page content, and inject custom CSS or JavaScript.

**Key Characteristics**:
- Runs in an isolated environment separate from the webpage's JavaScript.
- Can access and modify the DOM of web pages.
- Communicates with background scripts and popups via messaging.

**Common Uses**:
- Web scraping, custom UI additions, and injecting functionality on specific sites.

## Permissions in `manifest.json`

The `manifest.json` file also specifies the permissions needed for the extension to interact with browser features and web pages.

### Common Permissions

- `privacy`: Controls Chrome's privacy-related settings.
- `browsingData`: Allows removal of browsing data like cache and cookies.
- `storage`: Enables storing and retrieving data for the extension.
- `tabs`: Accesses browser tabs.
- `activeTab`: Accesses the current active tab.
- `notifications`: Shows desktop notifications.
- `contextMenus`: Adds items to Chrome's context menu.
- `webRequest`: Intercepts and modifies network requests.

### Host Permissions

The `host_permissions` section defines which websites the extension can interact with directly.

```json
"host_permissions": [
       "<all_urls>",                  // Access ALL websites
       "https://*.google.com/*",      // Only Google sites
       "https://specific-site.com/*", // Single specific site
       "http://*/*",                  // All HTTP sites
       "https://*/*"                  // All HTTPS sites

]
```

These permissions ensure your extension interacts only with designated sites, enhancing security and user privacy.
