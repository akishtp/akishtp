document.addEventListener("click", function (event) {
  if (event.target.classList.contains("moving-text")) {
    event.preventDefault();
    const parentDiv = event.target.parentElement;
    const targetUrl = parentDiv.href;
    const y = parentDiv.offsetTop;
    parentDiv.style.cssText =
      "width:100vw; border-top: 0.4vw solid #000; height: 66vw; transition: background-color 10s ease-in; background-color: #dde7f3; transition: height 0.6s ease-in-out, background-color 1s ease-in-out, transform 0.6s ease-in-out; z-index: 99;";
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
