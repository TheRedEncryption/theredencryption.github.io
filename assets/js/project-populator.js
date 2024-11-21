// GLOBAL VARIABLES AND CONSTANTS

var projectHolder;

// EVENT BINDINGS

document.addEventListener("DOMContentLoaded", main);

// FUNCTION DECLARATIONS

function main() {
    console.log("[project-populator.js] main function started");

    projectHolder = document.getElementById("project-holder");

    fetch('./data/json/projects.json')
        .then((response) => response.json())
        .then((json) => {
            populationLoop(json);
        });
}


function populationLoop(json) {
    for (year in json) {
        for (proj in json[year]) {
            projectHolder.innerHTML += populateByJSON(json[year][proj]);
        }
    }
}

function populateByJSON(json) {
    return populate(json["name"], json["image"], json["description"], json["platform"], json["date"]);
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