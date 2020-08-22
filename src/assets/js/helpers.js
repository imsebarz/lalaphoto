function mousemove(e) {
  const pageX = e.screenX + "px";
  const pageY = e.clientY + "px";
  clickme.style.opacity = 1;
  clickme.style.left = pageX;
  clickme.style.top = pageY;
  clickme.textContent = "Click me";
}

function lalaclick() {
  navlinks[1].classList.add("navactive");
  navlinks[0].classList.remove("navactive");
  navlinks[2].classList.remove("navactive");
  lalaTl.play();
  createswiper();
  if (breakpoint.matches) {
    text.style.display = "none";
  }
}

const posLala = () => {
  if (breakpoint.matches) {
    return -1000;
  } else {
    return -200;
  }
};

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", (e) => {
      resolve(img.src);
    });
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image's URL: ${url}`));
    });
    img.src = url;
  });
}

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

const quit = () => {
  window.removeEventListener("click", quit);
  contactTl.reverse().timeScale(4);
};
