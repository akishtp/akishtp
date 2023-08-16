const projectsClass = document.querySelector(".projects");
const searchWord = document.querySelector(".search");

let allProjects = [];

document.addEventListener("DOMContentLoaded", function () {
  const backgroundClass = document.querySelector(".background");
  const hamburgesaClass = document.querySelector(".hamburgesa");
  hamburgesaClass.addEventListener("click", function () {
    backgroundClass.classList.toggle("hidden");
    backgroundClass.classList.remove("init-load-class");
  });
  backgroundClass.addEventListener("click", function () {
    backgroundClass.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const projectsResponse = await fetch("../data/projects.json");
    if (projectsResponse.ok) {
      allProjects = await projectsResponse.json();
      displayProjects(allProjects);
    } else {
      throw new Error("Could not fetch projects");
    }
  } catch (error) {
    console.log(error);
  }
});

searchWord.addEventListener("input", function () {
  const searchTerm = searchWord.value.toLowerCase();
  const filteredProjects = allProjects.filter((project) =>
    project.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  );

  displayProjects(filteredProjects);
});

function displayProjects(projects) {
  const allProjects = document.querySelectorAll(".project");

  // Remove each project div from the screen
  allProjects.forEach((div) => {
    div.remove();
  });

  projects.forEach((project) => {
    const projectClass = document.createElement("a");
    projectClass.href = project.link;
    projectClass.classList.add("project");
    projectClass.innerHTML = `
      <div class="img-wrapper">
        <img src="../assets/Projects/${project.username}/banner.png" alt="cms" />
      </div>
      <div class="description">
        <a class="name">${project.name}</a>
        <div class="case-study">
          <div class="case-study-text">
            ${project.viewMethod}
          </div>
          <div class="rotator">→</div>
        </div>
      </div>
    `;
    projectsClass.appendChild(projectClass);
  });
}
