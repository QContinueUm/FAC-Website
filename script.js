/*********** OVERLAY CONTENT ***********/
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

/*********** IMAGE CAROUSEL ***********/
// const slideshowImages = document.getElementsByClassName("slideshow-images");
// let currentImage = 0;

// function nextImage() {
//     currentImage++;
//     checkLimit();
// }

// const checkLimit = () => {
//     if (currentImage > slideshowImages.length - 1) {
//         currentImage = 0;
//     }
// }
// setInterval(nextImage, 3000);

