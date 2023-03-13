document.addEventListener("click", function (event) {
  if (event.target.classList.contains("moving-text")) {
    const parentDiv = event.target.parentElement;
    const y = parentDiv.offsetTop;
    console.log(y);
    parentDiv.style.cssText =
      "width:100vw; position: absolute; top: 0; left: 0; height: 100vh; transition: background-color 2s ease-in; background-color: #dde7f3; transition: all 5s ease-in;";
    parentDiv.style.transform = "translateY(-${y}px)";
    const childElements = parentDiv.querySelectorAll("*");
    childElements.forEach(function (childElement) {
      childElement.style.display = "none";
    });
  }
});
