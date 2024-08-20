//menue bar
function menueBar() {
  document.getElementById("menuNav").classList.toggle("openMenu");
  document.querySelector(".bb").classList.toggle("change");
  if ((scroll = document.querySelector(".bb.change"))) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    var loadder = document.getElementById("loader");
    setTimeout(function () {
      loadder.style.opacity = "0";
      loadder.style.visibility = "hidden";
    }, 1000);
    setTimeout(function () {
      document.body.style.overflowY = "scroll";
    }, 1200);
  });
});
