import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const nav = document.querySelector(".nav");
const lala = document.querySelector(".lala");
const imgwrapper = document.querySelector(".img-wrapper");
const swipercontainer = document.querySelector(".swiper-container");
const info = document.querySelector(".info");
const name = document.querySelector(".name");
const clickme = document.querySelector(".clickme");
const heroname = document.querySelector(".text h1");
const herodescription = document.querySelector(".text p");
const navlinks = document.querySelectorAll(".bottomnav ul li");
const logo = document.querySelector(".nav .logo");
const proyectos = document.querySelector(".proyects");
const proyectoslinks = document.querySelectorAll(".proyects ul li");
const textlist = document.querySelectorAll(".text ul");

TweenMax.to(left, 2, { delay: 0.8, width: "50%", ease: Power2.easeInOut });
TweenMax.to(right, 2, { delay: 0.6, width: "50%", ease: Power3.easeInOut });
TweenMax.from(nav, 2, { delay: 0.8, opacity: 0, ease: Expo.easeInOut });
TweenMax.from(heroname, 2, { delay: 0.6, x: 1000, ease: Circ.easeInOut });
TweenMax.fromTo(
  proyectos,
  2,
  { delay: 0.6, x: 1000, ease: Circ.easeInOut },
  {
    x: 1300,
  }
);

TweenMax.to(lala, 1, { delay: 0.6, width: "850px", ease: Power2.easeInOut });

navlinks[1].classList.add("navactive");
proyectoslinks[0].classList.add("proyectactive");

TweenMax.from(herodescription, 2, {
  delay: 0.7,
  x: 1000,
  ease: Circ.easeInOut,
});

TweenMax.staggerFrom(
  ".bottomnav ul li",
  2,
  {
    delay: 1,
    x: 1000,
    ease: Circ.easeInOut,
  },
  0.08
);

TweenMax.from(info, 2, { delay: 1.5, y: 100, ease: Circ.easeInOut });
TweenMax.from(name, 2, { delay: 1.5, x: -600, ease: Circ.easeInOut });

lala.addEventListener("click", () => {
  TweenMax.to(heroname, 1, { x: 1000, ease: Circ.easeInOut });
  TweenMax.to(herodescription, 1, {
    delay: 0.2,
    x: 1000,
    ease: Circ.easeInOut,
  });
  TweenMax.to(name, 1, { delay: 0.3, x: -1000, ease: Circ.easeInOut });
  TweenMax.to(lala, 1, {
    delay: 0.8,
    y: -50,
    scale: 0.9,
    ease: Circ.easeInOut,
  });
  lala.style.cursor = "grab";

  lala.classList.remove("lala");
  lala.classList.add("lalasinhover");

  // Aqui se añade el eventListener de click para el logo, sino, no hace nada

  logo.addEventListener("click", () => {
    TweenMax.to(heroname, 1, { x: 0, ease: Circ.easeInOut });
    TweenMax.to(herodescription, 1, {
      delay: 0.2,
      x: 0,
      ease: Circ.easeInOut,
    });
    TweenMax.to(name, 1, { delay: 0.3, x: 0, ease: Circ.easeInOut });
    TweenMax.to(lala, 1, { delay: 0.1, y: 0, scale: 1, ease: Power2 });
    TweenMax.to(proyectos, 1, { delay: 0.3, x: 1000, ease: Circ.easeInOut });
    lala.classList.add("lala");
    lala.classList.remove("lalasinhover");
    lala.style.cursor = "none";
    TweenMax.to(lala, 1, { delay: 0.1, x: -80, y: -30, ease: Power2 });
    TweenMax.fromTo(
      swipercontainer,
      1,
      {
        x: 100,
        ease: Power2,
      },
      {
        x: -1200,
        ease: Circ.easeInOut,
      }
    );
  });

  // ------------------------------- EventListener Logo --------------------

  TweenMax.to(textlist, 1, {
    delay: 0.3,
    display: "block",
    ease: Circ.easeInOut,
  });

  TweenMax.fromTo(
    swipercontainer,
    1,
    { delay: 0.3, x: -1400, ease: Circ.easeInOut },
    {
      delay: 0.3,
      x: -200,
      scale: 0.8,
      y: -60,
      ease: Circ.easeInOut,
    }
  );
  TweenMax.to(lala, 1, {
    delay: 0.3,
    x: -1200,
    ease: Circ.easeInOut,
  });

  TweenMax.fromTo(
    proyectos,
    2,
    { delay: 0.8, x: 1200, ease: Circ.easeInOut },
    {
      x: 0,
    }
  );
});

const swiper = new Swiper(".swiper-container", {
  effect: "flip",
  grabCursor: false,
  loop: true,
  zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

lala.addEventListener("mousemove", (e) => {
  const pageX = e.screenX + "px";
  const pageY = e.clientY + "px";
  clickme.style.opacity = 1;
  clickme.style.left = pageX;
  clickme.style.top = pageY;
});

lala.addEventListener("mouseout", (e) => {
  clickme.style.opacity = 0;
});

swipercontainer.addEventListener("mousemove", (e) => {
  const pageX = e.screenX + "px";
  const pageY = e.clientY + "px";
  clickme.style.opacity = 1;
  clickme.style.left = pageX;
  clickme.style.top = pageY;
  clickme.textContent = "Double click";
});

swipercontainer.addEventListener("mouseout", (e) => {
  clickme.style.opacity = 0;
});

proyectoslinks.forEach((link) => {
  link.addEventListener("click", () => {
    proyectoslinks.forEach((link) => {
      link.classList.remove("proyectactive");
    });
    link.classList.add("proyectactive");
  });
});

navlinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.fontSize = "1.2em";
    link.style.fontWeight = "bolder";
    link.style.cursor = "pointer";
  });
  link.addEventListener("mouseout", () => {
    link.style.fontSize = "1em";
    link.style.fontWeight = "300";
  });
  link.addEventListener("click", () => {
    navlinks.forEach((link) => {
      link.classList.remove("navactive");
    });
    link.classList.add("navactive");
    checkActive();
  });
});

const checkActive = () => {
  if (navlinks[1].classList.contains("navactive")) {
    logo.style.pointerEvents = "none";
  } else {
    logo.style.pointerEvents = "auto";
  }
};
