import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

const lala = document.querySelector(".lala");
const swipercontainer = document.querySelector(".swiper-container");
const info = document.querySelector(".info");
const infouls = document.querySelectorAll(".info ul");
const clickme = document.querySelector(".clickme");
const navlinks = document.querySelectorAll(".bottomnav ul li");
const logo = document.querySelector(".nav .logo");
const proyectos = document.querySelector(".proyects");
const profiletext = document.querySelector(".profiletext");
const proyectoslinks = document.querySelectorAll(".proyects ul li");
const textlist = document.querySelectorAll(".text ul");

// -------------------- Create timelines -----------------------------------

const tl = new TimelineMax();
const lalaTl = new TimelineMax();
const profileTl = new TimelineMax();
const contactTl = new TimelineMax({ paused: true });

// -------------------- First load animation -----------------------------------

tl.to(".right", 1, { width: "50%", ease: Power3.easeInOut })
  .to(".left", 1, { width: "50%", ease: Power2.easeInOut }, "-=0.8")
  .from(".nav", 1, { opacity: 0, ease: Expo.easeInOut }, "-=0.8")
  .from(".text h1", 2, { x: 1000, ease: Circ.easeInOut }, "-=2")
  .to(lala, 1, { width: "60vw", ease: Power2.easeInOut }, "-=1.8")
  .from(
    ".text p",
    2,
    {
      x: 1000,
      ease: Circ.easeInOut,
    },
    "-=1.7"
  )
  .from(
    ".bottomnav ul li",
    1,
    {
      x: 1000,
      ease: Circ.easeInOut,
    },
    "-=1.5"
  )
  .from(
    ".info",
    2,
    {
      y: 1000,
      ease: Circ.easeInOut,
      onComplete: () => {
        navlinks[1].classList.add("navactive");
        proyectoslinks[0].classList.add("proyectactive");
      },
    },
    "-=2.5"
  );

// -------------------- First load animation -----------------------------------

// -------------------- HeroImg onClick listener  -----------------------------------

function lalaclick() {
  navlinks[1].classList.add("navactive");
  navlinks[0].classList.remove("navactive");
  navlinks[2].classList.remove("navactive");
  lalaTl
    .to(".text h1", 1, { x: 1000, ease: Circ.easeInOut })
    .to(
      ".text p",
      1,
      {
        x: 1000,
        ease: Power3.easeInOut,
      },
      "-=0.8"
    )
    .to(
      profiletext,
      1,
      {
        opacity: 0,
        ease: Circ.easeInOut,
      },
      "-=1.4"
    )
    .to(
      textlist,
      1,
      {
        display: "block",
        ease: Circ.easeInOut,
      },
      "-=1.6"
    )
    .to(
      lala,
      0.5,
      {
        x: -1200,
        ease: Power2.easeInOut,
      },
      "-=1.5"
    )
    .fromTo(
      swipercontainer,
      1,
      { x: -1400, ease: Circ.easeInOut },
      {
        x: -200,
        scale: 0.8,
        y: -60,
        ease: Circ.easeInOut,
        onComplete: () => {
          lala.style.cursor = "grab";
        },
      },
      "-=0.5"
    )
    .fromTo(
      proyectos,
      1,
      { x: 1200, ease: Circ.easeInOut },
      {
        x: 0,
        onComplete: () => {
          proyectos.style.display = "block";
        },
      },
      "-=1"
    );
  lalaTl.play();
}

lala.addEventListener("click", lalaclick);

// -------------------- HeroImg onClick listener  -----------------------------------

// -------------------- logo onClick listener  -----------------------------------

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

function mousemove(e) {
  const pageX = e.screenX + "px";
  const pageY = e.clientY + "px";
  clickme.style.opacity = 1;
  clickme.style.left = pageX;
  clickme.style.top = pageY;
  clickme.textContent = "Click me";
}

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
  profileTl.play();
  profileTl
    .to(lala, 0.5, {
      x: -200,
      width: "750px",
      ease: Power2.easeInOut,
    })
    .to(proyectos, 0.5, { x: 1000, ease: Power3.easeInOut }, "-=1.3")
    .to(swipercontainer, 0.5, {
      x: -1200,
    })
    .to(".text h1", 1, { x: 0, y: -200, ease: Power3.easeInOut }, "-=1")
    .to(
      ".text p",
      0.5,
      {
        y: 500,
        x: 0,
        ease: Power3.easeInOut,
      },
      "-=1.4"
    )
    .to(
      profiletext,
      0.5,
      {
        opacity: 1,
        ease: Power2.easeInOut,
      },
      "-=1"
    );
  lala.removeEventListener("click", lalaclick);
  lala.removeEventListener("mousemove", mousemove);
  profiletext.style.display = "block";
  proyectos.style.display = "none";
  lala.style.cursor = "default";
});

infouls[1].style.display = "none";
navlinks[2].addEventListener("click", () => {
  contactTl.play();
  const abajo = document.querySelector(".abajo");
});

const quit = () => {
  window.removeEventListener("click", quit);
  contactTl.reverse().timeScale(4);
};

contactTl
  .fromTo(
    ".info",
    1,
    {
      background: "rgba(0, 0, 0, 0.8)",
    },
    {
      height: "30%",
      width: "35%",
      ease: Circ.easeInOut,
      zIndex: 10,
      background: "rgba(0, 0, 0, 0.9)",
    },
    "-=0.5"
  )
  .to(
    infouls[0],
    2,
    {
      ease: Circ.easeInOut,
      flexDirection: "column",
      display: "block",
      width: "60%",
    },
    "-=1-2"
  )
  .to(
    infouls[1],
    2,
    {
      ease: Circ.easeInOut,
      flexDirection: "column",
      display: "block",
      onStart: () => {
        window.addEventListener("click", quit);
      },
    },
    "-=1.2"
  );
