// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("nav-item")) {
//     event.target.style.height = "100vh";
//   }
// });

// const divElement = document.querySelector(".moving-text");
// divElement.addEventListener("click", function () {
//   // Get the parent div element
//   const parentDiv = this.parentElement;
//   // Change the style of the parent div element
//   parentDiv.style.backgroundColor = "red";
// });

document.addEventListener("click", function (event) {
  const parentDiv = event.target.parentElement;
  console.log(parentDiv);
  parentDiv.style.height = "100vh";
});
