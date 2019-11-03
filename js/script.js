// document.querySelector(".story__expand").addEventListener("click", function() {
//   document
//     .querySelector(".story > .story__content")
//     .classList.toggle("expanded");
// });

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("story__expand")) {
    e.target.parentNode
      .querySelector(".story__content")
      .classList.toggle("expanded");
  }
});
