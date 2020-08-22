const tl = new TimelineMax();
const lalaTl = new TimelineMax({ paused: true });
const profileTl = new TimelineMax({ paused: true });
const contactTl = new TimelineMax({ paused: true });

tl.to(".right", 1, { width: "70%", ease: Power3.easeInOut })
  .to(".left", 1, { width: "30%", ease: Power2.easeInOut }, "-=0.8")
  .from(".nav", 1, { opacity: 0, ease: Expo.easeInOut }, "-=0.8")
  .from(".sidemenu", 1, { x: 100, ease: Circ.easeInOut }, "-=1.2")
  .from(".text h1", 2, { x: 1000, ease: Circ.easeInOut }, "-=2")
  .to(".lala", 1, { width: "60vw", ease: Power2.easeInOut }, "-=1.8")
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
        responsiveInit();
      },
    },
    "-=2.5"
  );

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
  )
  .to(
    ".text ul",
    1,
    {
      display: "block",
      ease: Circ.easeInOut,
    },
    "-=1.6"
  )
  .to(
    ".lala",
    0.5,
    {
      x: -1200,
      ease: Power2.easeInOut,
    },
    "-=1.5"
  )
  .fromTo(
    ".swiper-container",
    1,
    { x: -1400, ease: Circ.easeInOut },
    {
      x: -200,
      scale: 0.8,
      y: -60,
      ease: Circ.easeInOut,
      onComplete: () => {
        lala.style.cursor = "grab";
        responsiveInit();
      },
    },
    "-=0.5"
  );

profileTl
  .to(lala, 0.5, {
    x: posLala,
    width: "750px",
    ease: Power2.easeInOut,
  })
  .to(proyectos, 0.5, { x: 1000, ease: Power3.easeInOut }, "-=1.3")
  .to(".swiper-container", 0.5, {
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
    ".profiletext",
    0.5,
    {
      opacity: 1,
      ease: Power2.easeInOut,
    },
    "-=0.8"
  );

contactTl
  .fromTo(
    ".info",
    1,
    {
      background: "rgba(0, 0, 0, 0.8)",
    },
    {
      height: "8vw",
      width: "38%",
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
