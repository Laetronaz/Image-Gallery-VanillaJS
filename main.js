const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

//Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  //reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  //change current img to source of clicked image
  current.src = e.target.src;

  //add Fading class
  current.classList.add("fade-in");

  // remove the fade-in class after .5seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  //change opacity to opacity var
  e.target.style.opacity = opacity;
}
