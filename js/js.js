const footer = document.getElementById("footer");
const bottomPosition = footer.offsetTop + footer.offsetHeight;
const displayHeight = window.innerHeight;
console.log(bottomPosition);
console.log(displayHeight);
let biggerLength = 0;

if (bottomPosition > displayHeight) {
  biggerLength = bottomPosition;
} else {
  biggerLength = displayHeight;
}

console.log(biggerLength);
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("moving-text")) {
    event.preventDefault();
    const parentDiv = event.target.parentElement;
    const targetUrl = parentDiv.href;
    const y = parentDiv.offsetTop;
    parentDiv.style.cssText = `width:100vw; border-top: 0.4vw solid #000; height: ${biggerLength}px; transition: background-color 10s ease-in; background-color: #dde7f3; transition: height 0.6s ease-in-out, background-color 1s ease-in-out, transform 0.6s ease-in-out; z-index: 99;`;
    parentDiv.style.transform = `translateY(-${y}px)`;
    const childElements = parentDiv.querySelectorAll("*");
    childElements.forEach(function (childElement) {
      childElement.style.display = "none";
    });
    setTimeout(() => {
      window.location.href = targetUrl; // transition to the new page
    }, 1100);
  }
});
