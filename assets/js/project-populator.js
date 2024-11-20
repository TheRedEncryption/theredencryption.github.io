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
    projectHolder.innerHTML += populate("4x3 Test", "./assets/images/test4_3.png", "This is a sample description, to be swapped out later", "The Internet!", "Tomorrow");
}

function populate(projectTitle, imageLink, projectDescription, platform, date) {
    return `<div class="project-outer">
            <div class="project-top">
                <project-title>
                    ${projectTitle}
                </project-title>
                <br>
                <img src="${imageLink}">
                <br>
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