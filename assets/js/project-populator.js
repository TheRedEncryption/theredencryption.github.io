// GLOBAL VARIABLES AND CONSTANTS

var projectHolder;

// EVENT BINDINGS

document.addEventListener("DOMContentLoaded", main);

// FUNCTION DECLARATIONS

function main() {
    console.log("[project-populator.js] main function started");
    /*
    Things TODO:
        - populate the project 
    */
    projectHolder = document.getElementById("project-holder"); // JQuery?
    for (let i = 0; i < 10; i++) {
        projectHolder.innerHTML += populate("Project Test", "./assets/images/test16_9.png", "This is a sample description, to be swapped out later", "The Internet!", "Tomorrow");
    }
}

function populate(projectTitle, imageLink, projectDescription, platform, date) {
    return `<div class="project-outer">
            <div class="project-top">
                <project-title>
                    ${projectTitle}
                </project-title>
                <br>
                <div class="project-image" style="background-image: url(${imageLink});">
                <br>
            </div>
            <div class="project-middle">
                <description>
                    ${projectDescription}
                </description>
            </div>
            <div class="project-bottom">
                <platform>
                    ${platform}
                </platform>
                <date>
                    ${date}
                </date>
            </div>
        </div>`;
}