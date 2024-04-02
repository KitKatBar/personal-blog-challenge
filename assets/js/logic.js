const modeSwitch = document.querySelector('#mode');

function getMode() {
    const mode = localStorage.getItem('mode');

    return mode;
}

function modeHandler() {
    let mode = getMode();

    if (mode === "light") {
        mode = "dark";
        localStorage.setItem('mode', mode);
    }

    else {
        mode = "light";
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

    document.body.classList = localStorage.getItem('session');
}

modeSwitch.addEventListener('click', modeHandler);

init();
