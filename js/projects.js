const projectsClass = document.querySelector(".projects");
const searchWord = document.querySelector(".search");
console.log(searchWord.value);

document.addEventListener("DOMContentLoaded", function () {
  const backgroundClass = document.querySelector(".background");
  const hamburgesaClass = document.querySelector(".hamburgesa");
  hamburgesaClass.addEventListener("click", function () {
    backgroundClass.classList.toggle("hidden");
  });
  backgroundClass.addEventListener("click", function () {
    backgroundClass.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const projects = await fetch("../data/projects.json");
    if (projects.ok) {
      const in_json = await projects.json();
      in_json.map((project) => {
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
    } else {
      throw Error("Could not fetch projects");
    }
  } catch (error) {
    console.log(error);
  }
});
