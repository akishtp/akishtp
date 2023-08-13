// // document.addEventListener("DOMContentLoaded", function () {
// //   fetch("projects.json")
// //     .then((response) => response.json())
// //     .then((data) => {
// //       const projectsList = document.getElementById("projects-list");
// //       data.forEach((project) => {
// //         const projectElement = document.createElement("div");
// //         projectElement.classList.add("project");
// //         projectElement.innerHTML = `
// //             <h2>${project.name}</h2>
// //             <p><strong>Year:</strong> ${project.year}</p>
// //             <p>${project.description}</p>
// //           `;
// //         projectsList.appendChild(projectElement);
// //       });
// //     })
// //     .catch((error) => console.error("Error fetching projects:", error));
// // });

// const projectsClass = document.querySelector(".projects");

// document.addEventListener("DOMContentLoaded", async function () {
//   try {
//     const projects = await fetch("../data/projects.json");
//     if (projects.ok) {
//       const in_json = await projects.json();
//       in_json.map((project) => {
//         const projectClass = document.createElement("div");
//         projectClass.classList.add("project");
//         projectClass.innerHTML = `
//         <div class="left-side">
//           <div>⏺</div>
//           <img src="../assets/Projects/${project.username}/icon.png" />
//           <div class="details">
//             <a href="${project.link}" target="_blank">
//               <div class="title">${project.name}</div>
//             </a>
//             <div class="description">${project.description}</div>
//           </div>
//         </div>
//         <div class="right-side">
//           <div class="year">${project.year}</div>
//           ${
//             project.caseStudy
//               ? `<a href="./Projects/${project.username}"
//             ><button>Case Study</button></a
//           >`
//               : ""
//           }
//         </div>
//           `;
//         projectsClass.appendChild(projectClass);
//       });
//     } else {
//       throw Error("Could not fetch projects");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

var doc = window.document,
  context = doc.querySelector(".js-loop"),
  clones = context.querySelectorAll(".is-clone"),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  clonesHeight = 0,
  i = 0;

function getScrollPos() {
  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
}

function setScrollPos(pos) {
  context.scrollTop = pos;
}

function getClonesHeight() {
  clonesHeight = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalc() {
  scrollPos = getScrollPos();
  scrollHeight = context.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate() {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesHeight + scrollPos >= scrollHeight) {
      // Scroll to the top when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the top
      setScrollPos(scrollHeight - clonesHeight);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init() {
  reCalc();

  context.addEventListener(
    "scroll",
    function () {
      window.requestAnimationFrame(scrollUpdate);
    },
    false
  );

  window.addEventListener(
    "resize",
    function () {
      window.requestAnimationFrame(reCalc);
    },
    false
  );
}

if (document.readyState !== "loading") {
  init();
} else {
  doc.addEventListener("DOMContentLoaded", init, false);
}

// Just for this demo: Center the middle block on page load
window.onload = function () {
  setScrollPos(
    Math.round(
      clones[0].getBoundingClientRect().top +
        getScrollPos() -
        (context.offsetHeight - clones[0].offsetHeight) / 2
    )
  );
};
