// Targetting the button that toggles the theme
const modeSwitch = document.querySelector('#mode');

// Initialize function
function init() {
    // Default theme is light mode if no key is currently stored in local storage
    if (getMode() === null) {
        localStorage.setItem('session', "light");
        localStorage.setItem('mode', "light");
    }

    // For switching the icon on page load to the correct icon
    if (getMode() === "light") {
        modeSwitch.innerHTML = "🌚";
    }

    else {
        modeSwitch.innerHTML = "🌞";
    }

    // Applying the mode to the page
    document.body.classList = localStorage.getItem('session');
}

// Get the current theme from local storage
function getMode() {
    const mode = localStorage.getItem('mode');

    return mode;
}

// Handles the transition between themes
function modeHandler() {
    let mode = getMode();

    // Switches mode and icon and stores it in the local storage key
    if (mode === "light") {
        mode = "dark";
        modeSwitch.innerHTML = "🌞";
        localStorage.setItem('mode', mode);
    }

    else {
        mode = "light";
        modeSwitch.innerHTML = "🌚";
        localStorage.setItem('mode', mode);
    }

    // Applying the mode to the page
    document.body.classList = mode;
    
    saveSessionMode(mode);
}

// Save the theme in the session so it persists between page changes
function saveSessionMode(mode) {
    localStorage.setItem('session', mode)
}

// Theme button is clicked
modeSwitch.addEventListener('click', modeHandler);

// Initialize
init();
