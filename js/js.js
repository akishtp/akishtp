const footer = document.getElementById("footer");
const bottomPosition = footer.offsetTop + footer.offsetHeight;
const displayHeight = window.innerHeight;
let biggerLength = 0;

if (bottomPosition > displayHeight) {
  biggerLength = bottomPosition;
} else {
  biggerLength = displayHeight;
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("moving-text")) {
    event.preventDefault();
    const parentDiv = event.target.parentElement;
    const targetUrl = parentDiv.href;
    const y = parentDiv.offsetTop;

    const isExpanded = sessionStorage.getItem("isExpanded"); // Check if it's already expanded
    if (!isExpanded) {
      parentDiv.style.cssText = `width:100vw; border-top: 0.4vw solid #000; height: ${biggerLength}px; background-color: #dde7f3; transition: height 0.6s ease-in-out, background-color 1s ease-in-out, transform 0.6s ease-in-out; z-index: 99;`;
      parentDiv.style.transform = `translateY(-${y}px)`;
      const childElements = parentDiv.querySelectorAll("*");
      childElements.forEach(function (childElement) {
        childElement.style.display = "none";
      });

      // Store the expanded state in sessionStorage
      sessionStorage.setItem("isExpanded", "true");

      setTimeout(() => {
        window.location.href = targetUrl; // Transition to the new page
      }, 1100);
    } else {
      window.location.href = targetUrl; // Directly transition to the new page
    }
  }
});
