lala.addEventListener("click", lalaclick);

// -------------------- logo onClick listener  -----------------------------------

logo.forEach((el) => {
  el.addEventListener("click", () => {
    tl.restart().timeScale(1.2);
    if (lalaTl.progress() == 1) {
      lalaTl.reverse();
    }
    if (profileTl.progress() == 1) {
      profileTl.reverse();
    }
    lala.style.cursor = "none";
    lala.addEventListener("click", lalaclick);
    lala.addEventListener("mousemove", mousemove);
    text.style.display = "block";
    clickme.style.display = "flex";
    navlinks[1].classList.add("navactive");
    navlinks[0].classList.remove("navactive");
    navlinks[2].classList.remove("navactive");
  });
});

const portfolios = [navlinks[1], portfolioside];

portfolios.forEach((item) => {
  item.addEventListener("click", lalaclick);
});

// portfolios.forEach((item) => {
//   item.addEventListener("click", () => {
//     navlinks[1].classList.add("navactive");
//     profileTl.reverse();
//     lala.addEventListener("click", lalaclick);
//     lala.addEventListener("mousemove", mousemove);
//     lala.style.cursor = "none";
//     clickme.style.display = "flex";
//   });
// });

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

profiles = [navlinks[0], profileside];

profiles.forEach((item) => {
  item.addEventListener("click", () => {
    profileTl.play();
    lala.removeEventListener("click", lalaclick);
    lala.removeEventListener("mousemove", mousemove);
    profiletext.style.display = "block";
    proyectos.style.display = "none";
    lala.style.cursor = "default";
    navlinks[0].classList.add("navactive");
    clickme.style.display = "none";
    text.style.display = "block";
    if (breakpoint.matches) {
      text.style.left = "10%";
    }
  });
});

navlinks[2].addEventListener("click", () => {
  contactTl.play();
});

proyectoslinks.forEach((link) => {
  link.addEventListener("click", async () => {
    // Select the proyect data from click based in the class, remove the previous slides
    // And count how many photos have to be appended

    proyect = proyects[link.classList[0]].basesrc;
    swipercontainer.swiper.removeAllSlides();
    const proyectLen = Object.keys(proyects[link.classList[0]]).length;

    //Add the slides

    for (let index = 1; index < proyectLen; index++) {
      //Await for the images to load and then append the slides
      swipercontainer.swiper.appendSlide(
        `<div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="${await loadImage(
                proyect + "/photo" + index + ".jpg"
              )}">
            </div>
        </div>`
      );
    }
    swipercontainer.swiper.update();
  });
});

themebutton.forEach((item) => {
  item.addEventListener("click", () => {
    lala.style.transition = "none";
    logo[0].style.transition = "none";
    html.classList.toggle("darkmode");
    setTimeout(() => {
      lala.style.transition = "0.5s ease";
      logo[0].style.transition = "0.4s ease";
    });
  });
});
