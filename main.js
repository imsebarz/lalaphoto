lala.addEventListener("click", lalaclick);

logo.addEventListener("click", () => {
  if (navlinks[0].classList.contains("navactive")) {
    profileTl.reverse(-0.5);
    lala.addEventListener("click", lalaclick);
    lala.addEventListener("mousemove", mousemove);
    lala.style.cursor = "none";
  } else {
    lalaTl.reverse(-0.5);
  }
  navlinks[1].classList.add("navactive");
  navlinks[0].classList.remove("navactive");
  navlinks[2].classList.remove("navactive");
});

// -------------------- logo onClick listener  -----------------------------------

navlinks[1].addEventListener("click", () => {
  navlinks[1].classList.add("navactive");
  profileTl.reverse();
  lala.addEventListener("click", lalaclick);
  lala.addEventListener("mousemove", mousemove);
  lala.style.cursor = "none";
});

lala.addEventListener("mousemove", mousemove);
lala.addEventListener("mouseout", (e) => {
  clickme.style.opacity = 0;
});

swipercontainer.addEventListener("mousemove", (e) => {
  const pageX = e.screenX + "px";
  const pageY = e.clientY + "px";
  clickme.style.opacity = 1;
  clickme.style.left = pageX;
  clickme.style.top = pageY;
  clickme.textContent = "Zoom me!";
});

swipercontainer.addEventListener("mouseout", (e) => {
  clickme.style.opacity = 0;
});

infouls[1].style.display = "none";

navlinks[0].addEventListener("click", () => {
  profileTl.play();
  lala.removeEventListener("click", lalaclick);
  lala.removeEventListener("mousemove", mousemove);
  profiletext.style.display = "block";
  proyectos.style.display = "none";
  lala.style.cursor = "default";
});

navlinks[2].addEventListener("click", () => {
  contactTl.play();
  const abajo = document.querySelector(".abajo");
});

proyectoslinks[1].addEventListener("click", () => {
  swipercontainer.swiper.removeAllSlides();

  swipercontainer.swiper.appendSlide(
    '<div class="swiper-slide"><div class="swiper-zoom-container"><img src="./img/proyect/photo2.jpg"></div></div>'
  );
});
