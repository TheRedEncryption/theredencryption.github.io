// GLOBAL VARIABLES AND CONSTANTS

var projectHolder;
const MAX_FETCH_RETRIES = 10;

// EVENT BINDINGS

document.addEventListener("DOMContentLoaded", main);

// FUNCTION DECLARATIONS

function main() {
    console.log("[project-populator.js] main function started");

    projectHolder = document.getElementById("project-holder");

    safeJsonFetch(0);
}

function safeJsonFetch(count) {
    if (count > MAX_FETCH_RETRIES) {
        console.error("[project-populator.js] maximum fetch retries reached");
    }
    try {
        fetch('./data/json/projects.json')
            .then((response) => response.json())
            .then((json) => {
                populationLoop(json);
            });
    } catch (_) {
        safeJsonFetch(++count);
    }
}

function populationLoop(json) {
    for (year in json) {
        for (proj in json[year]) {
            projectHolder.innerHTML = populateByJSON(json[year][proj]) + projectHolder.innerHTML;
        }
        projectHolder.innerHTML = `<h2>${year}</h2>` + projectHolder.innerHTML;
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
                    <div class="project-image" style="background-image: url(${imageLink});"></div>
                    <br>
                </div>
                <div class="project-middle">
                    <description>
                        ${projectDescription}
                    </description>
                </div>
                <br>
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