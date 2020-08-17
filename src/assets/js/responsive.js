const responsiveInit = () => {
  if (breakpoint.matches) {
    if (
      swipercontainer.style.transform === "matrix(0.8, 0, 0, 0.8, -200, -60)"
    ) {
      swipercontainer.style.transform = "matrix(0.8, 0, 0, 0.8, 0, 0)";
    }
  } else {
    if (swipercontainer.style.transform === "matrix(0.8, 0, 0, 0.8, 0, 0)") {
      swipercontainer.style.transform = "matrix(0.8, 0, 0, 0.8, -200, -60)";
    }
  }
};

breakpoint.addListener(responsiveInit);
breakpoint.addListener(responsiveInit);
