const modeSwitch = document.querySelector('#mode');

function getMode() {
    const mode = localStorage.getItem('mode');

    return mode;
}

function modeHandler() {
    let mode = getMode();

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

    document.body.classList = mode;
    saveSessionMode(mode);
}

function saveSessionMode(mode) {
    localStorage.setItem('session', mode)
}

function init() {
    if (getMode() === null) {
        localStorage.setItem('session', "light");
        localStorage.setItem('mode', "light");
    }

    if (getMode() === "light") {
        modeSwitch.innerHTML = "🌚";
    }

    else {
        modeSwitch.innerHTML = "🌞";
    }

    document.body.classList = localStorage.getItem('session');
}

modeSwitch.addEventListener('click', modeHandler);

init();
