import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./popup.css"

function Popup() {
    const [enable, setEnable] = useState(false);
    const handleClick = async (event) => {
        setEnable(!enable);
        const response = await chrome.runtime.sendMessage({type: 'TOGGLE_FEATURE', state: enable})
        return response;
    };

    return (
        <div className="popup-container">
            <h1>Extension Demo</h1>
            <button onClick={handleClick}>
                {enable ? 'Enable' : 'Disable'}
            </button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Popup />);