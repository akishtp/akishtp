window.onscroll = function () {
  var headerImg = document.getElementById("header");
  var mainContent = document.getElementById("mainContent");
  if (window.scrollY > 12) {
    headerImg!.classList.add("h-[52px]");
    headerImg?.classList.add("top-[3px]");
    headerImg!.classList.remove("top-[42px]");
    headerImg?.classList.remove("h-[calc(100vw*(87.577/512))]");
  } else {
    headerImg!.classList.add("top-[42px]");
    headerImg?.classList.add("h-[calc(100vw*(87.577/512))]");
    headerImg!.classList.remove("h-[52px]");
    headerImg?.classList.remove("top-[3px]");
  }
};
