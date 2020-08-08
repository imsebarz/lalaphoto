import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const nav = document.querySelector(".nav");
const lala = document.querySelector(".lala");
const imgwrapper = document.querySelector(".img-wrapper");
const swipercontainer = document.querySelector(".swiper-container");
const info = document.querySelector(".info");
const infouls = document.querySelectorAll(".info ul");
const clickme = document.querySelector(".clickme");
const heroname = document.querySelector(".text h1");
const herodescription = document.querySelector(".text p");
const navlinks = document.querySelectorAll(".bottomnav ul li");
const logo = document.querySelector(".nav .logo");
const proyectos = document.querySelector(".proyects");
const profiletext = document.querySelector(".profiletext");
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

TweenMax.to(lala, 1, { delay: 0.6, width: "60vw", ease: Power2.easeInOut });

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

lala.addEventListener("click", () => {
  navlinks[1].classList.add("navactive");
  navlinks[0].classList.remove("navactive");
  navlinks[2].classList.remove("navactive");
  TweenMax.to(heroname, 1, { x: 1000, ease: Circ.easeInOut });
  TweenMax.to(herodescription, 1, {
    delay: 0.2,
    x: 1000,
    ease: Circ.easeInOut,
  });

  lala.style.cursor = "grab";

  TweenMax.to(profiletext, 1, {
    delay: 0.2,
    opacity: 0,
    ease: Circ.easeInOut,
  });

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
  TweenMax.to(lala, 0.5, {
    delay: 0.1,
    x: -1200,
    ease: Power2.easeInOut,
  });

  TweenMax.fromTo(
    proyectos,
    2,
    { delay: 0.8, x: 1200, ease: Circ.easeInOut },
    {
      x: 0,
    }
  );
  proyectos.style.display = "block";
});

logo.addEventListener("click", () => {
  navlinks[1].classList.add("navactive");
  navlinks[0].classList.remove("navactive");
  navlinks[2].classList.remove("navactive");

  TweenMax.to(heroname, 1, { x: 0, y: 0, ease: Circ.easeInOut });
  TweenMax.to(herodescription, 1, {
    delay: 0.2,
    x: 0,
    y: 0,
    ease: Circ.easeInOut,
  });
  TweenMax.to(lala, 1, { delay: 0.1, y: 0, scale: 1, ease: Power2 });
  TweenMax.to(proyectos, 1, { delay: 0.3, x: 1000, ease: Circ.easeInOut });
  lala.style.cursor = "none";
  TweenMax.to(lala, 1, { delay: 0.1, x: -80, y: -30, ease: Power2 });
  TweenMax.to(swipercontainer, 1, {
    x: -1200,
  });
  clickme.textContent = "Click me";
  proyectos.style.display = "none";
  TweenMax.to(profiletext, 1, {
    delay: 0.2,
    opacity: 0,
    ease: Circ.easeInOut,
  });
});

navlinks[1].addEventListener("click", () => {
  navlinks[1].classList.add("navactive");
  TweenMax.to(heroname, 1, { x: 0, y: 0, ease: Circ.easeInOut });
  TweenMax.to(herodescription, 1, {
    delay: 0.2,
    x: 0,
    y: 0,
    ease: Circ.easeInOut,
  });
  TweenMax.to(lala, 1, { delay: 0.1, y: 0, scale: 1, ease: Power2 });
  TweenMax.to(proyectos, 1, { delay: 0.3, x: 1000, ease: Circ.easeInOut });
  lala.style.cursor = "none";
  TweenMax.to(lala, 1, { delay: 0.1, x: -80, y: -30, ease: Power2 });
  TweenMax.to(swipercontainer, 1, {
    x: -1200,
  });
  clickme.textContent = "Click me";
  proyectos.style.display = "none";
  TweenMax.to(profiletext, 1, {
    delay: 0.2,
    opacity: 0,
    ease: Circ.easeInOut,
  });
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
  clickme.textContent = "Click me";
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
  clickme.textContent = "Zoom me!";
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
  });
});

navlinks[0].addEventListener("click", () => {
  TweenMax.to(lala, 0.5, {
    delay: 0.1,
    x: -200,
    width: "750px",
    ease: Power2.easeInOut,
  });
  TweenMax.to(proyectos, 1, { delay: 0.3, x: 1000, ease: Circ.easeInOut });
  TweenMax.to(swipercontainer, 1, {
    x: -1200,
  });

  TweenMax.to(heroname, 1, { x: 0, y: -200, ease: Circ.easeInOut });
  TweenMax.to(herodescription, 1, {
    delay: 0.2,
    y: 500,
    x: 0,
    ease: Circ.easeInOut,
  });
  TweenMax.to(profiletext, 1, {
    delay: 0.2,
    opacity: 1,
    ease: Circ.easeInOut,
  });
  profiletext.style.display = "block";
  proyectos.style.display = "none";
});

infouls[1].style.display = "none";
navlinks[2].addEventListener("click", () => {
  TweenMax.to(info, 1, {
    delay: 0.2,
    height: "15em",
    width: "40em",
    ease: Circ.easeInOut,
  });
  TweenMax.fromTo(
    infouls[0],
    2,
    {
      ease: Circ.easeInOut,
      flexDirection: "row",
    },
    {
      delay: 0.5,
      ease: Circ.easeInOut,
      flexDirection: "column",
      display: "block",
    }
  );
  TweenMax.fromTo(
    infouls[1],
    2,
    {
      ease: Circ.easeInOut,
      flexDirection: "row",
    },
    {
      delay: 0.5,
      ease: Circ.easeInOut,
      flexDirection: "column",
      display: "block",
    }
  );
});

const cerrarinfo = () => {
  TweenMax.to(info, 1, {
    delay: 0.2,
    height: "auto",
    width: "auto",
    ease: Circ.easeInOut,
  });
  TweenMax.to(infouls[0], 2, {
    delay: 0.5,
    ease: Circ.easeInOut,
    display: "block",
  });
  TweenMax.to(infouls[1], 2, {
    ease: Circ.easeInOut,
    display: "none",
  });
};
