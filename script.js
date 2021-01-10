/* Overlay function for teal section */
function showTealOverlay() {
    document.getElementById("tealoverlay").className += " show";
}

function hideTealOverlay() {
    document.getElementById("tealoverlay").classList.remove("show");
}

/* Overlay function for yellow section */
function showYellowOverlay() {
    document.getElementById("yellowoverlay").className += " show";
}

function hideYellowOverlay() {
    document.getElementById("yellowoverlay").classList.remove("show");
}

/* Overlay function for purple section */
function showPurpleOverlay() {
    document.getElementById("purpleoverlay").className += " show";
}

function hidePurpleOverlay() {
    document.getElementById("purpleoverlay").classList.remove("show");
}

/* Overlay function for pink section */
function showPinkOverlay() {
    document.getElementById("pinkoverlay").className += " show";
}

function hidePinkOverlay() {
    document.getElementById("pinkoverlay").classList.remove("show");
}


/* Theme toggler */
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});

