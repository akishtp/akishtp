// document.addEventListener("DOMContentLoaded", function () {
//   fetch("projects.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const projectsList = document.getElementById("projects-list");
//       data.forEach((project) => {
//         const projectElement = document.createElement("div");
//         projectElement.classList.add("project");
//         projectElement.innerHTML = `
//             <h2>${project.name}</h2>
//             <p><strong>Year:</strong> ${project.year}</p>
//             <p>${project.description}</p>
//           `;
//         projectsList.appendChild(projectElement);
//       });
//     })
//     .catch((error) => console.error("Error fetching projects:", error));
// });

const projectsClass = document.querySelector(".projects");

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const projects = await fetch("../data/projects.json");
    if (projects.ok) {
      const in_json = await projects.json();
      in_json.map((project) => {
        const projectClass = document.createElement("div");
        projectClass.classList.add("project");
        projectClass.innerHTML = `
        <div class="left-side">
          <div>⏺</div>
          <img src="../assets/Projects/${project.link}/icon.png" />
          <div class="details">
            <div class="title">${project.name}</div>
            <div class="description">
              ${project.description}
            </div>
          </div>
        </div>
        <div class="right-side">
          <div class="year">${project.year}</div>
          ${
            project.caseStudy
              ? `<a href="./Projects/${project.link}"><button>Case Study</button></a>`
              : ""
          }
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
