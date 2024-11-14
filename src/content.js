console.log("content script loaded");
console.log(document, "Document");

const usernameInput = document.querySelector('input[id="username"]');
console.log(usernameInput, "userName Input")
if (usernameInput) {
    usernameInput.style.background = 'red';
}

const footer = document.querySelector('footer');
console.log(footer, "footer")
if (footer) {
    const button = document.createElement('button');
    button.textContent = 'Button from Content Script';
    button.style.padding = '8px 16px';
    button.style.margin = '10px';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        // Send message to background script
        chrome.runtime.sendMessage({ action: "buttonClicked", message: "Button was clicked in content script" }, 
            (response) => {
                console.log('Response from background:', response);
                alert('This button was injected by the content script!');
            }
        );
    });

    footer.appendChild(button);
} else {
    console.log('Footer element not found');
}
