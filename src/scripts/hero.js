document
  .querySelector("[sub-hero-contact]")
  .addEventListener("click", function () {
    expand(this, "./contact");
  });

document
  .querySelector("[sub-hero-projects]")
  .addEventListener("click", function () {
    expand(this, "./projects");
  });

document
  .querySelector("[sub-hero-stuff]")
  .addEventListener("click", function () {
    expand(this, "./stuff");
  });

function expand(subhero, URL) {
  subhero.classList.add("expanded");
  setTimeout(function () {
    window.location = URL;
  }, 800);
}
