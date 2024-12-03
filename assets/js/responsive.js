// GLOBAL VARIABLES AND CONSTANTS

var TRE;
var windowStatus;

// EVENT BINDINGS

document.addEventListener("DOMContentLoaded", beginResponsiveDesign);

// FUNCTION DECLARATIONS

function beginResponsiveDesign() {
    TRE = document.getElementById("tre");

    switchViewsIfAppropriate();
    window.addEventListener("resize", switchViewsIfAppropriate);
}

function desktopView() {
    console.log("[responsive.js] switching to desktop view");
    TRE.innerHTML = "TheRedEncryption";
}

function mobileView() {
    console.log("[responsive.js] switching to mobile view");
    TRE.innerHTML = "T.R.E.";
}

function switchViewsIfAppropriate() {
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    let aspectRatio = vw / vh;

    if (windowStatus != "mobile" && aspectRatio < 1.0) {
        windowStatus = "mobile";
        mobileView();
    } else if (windowStatus != "desktop" && aspectRatio >= 1.0) {
        windowStatus = "desktop";
        desktopView();
    }

}