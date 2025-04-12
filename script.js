// Toggle Skills Section

document.getElementById("toggle-skills").addEventListener("click",
     function()
 {
    var skillsSection = document.getElementById("skills-list");
    skillsSection.classList.toggle("hidden");
});


// Toggle Projects Section

/*document.getElementById("toggle-projects").addEventListener("click", 
    function() 
{
    var projectsSection = document.getElementById("projects-list");
    projectsSection.classList.toggle("hidden");
});*/


//skill- text change

var button= document.getElementById("toggle-skills");
button.addEventListener(
    "click",
function () {
    if (button.getAttribute("data-text") == button.innerHTML)
    {
        button.innerHTML = button.getAttribute("data-text1");
    } 

    else 
    {
        button.setAttribute("data-text1", button.innerHTML);
        button.innerHTML = button.getAttribute("data-text");
    }
},
false
);


//projects- text change

document.getElementById("toggle-projects").addEventListener("click", function() {
    var projectsSection = document.getElementById("projects-list");
    var button = document.getElementById("toggle-projects");

    // Toggle the visibility of the projects section
    projectsSection.classList.toggle("hidden");

    // Change the button text based on the visibility of the projects section
    if (projectsSection.classList.contains("hidden")) {
        button.textContent = "Show Projects";  // Button text when the projects are hidden
    } else {
        button.textContent = "Hide Projects";  // Button text when the projects are shown
    }
});
