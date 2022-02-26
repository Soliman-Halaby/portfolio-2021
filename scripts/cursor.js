import { gsap } from "gsap";

///// variables
const cursorContainer = document.querySelector(".cursorElementContainer");
const customCursor = document.querySelector(".customCursorFixed");
// var buttonText = document.querySelector(".cursorPointer");
const followArea = document.querySelectorAll(".projectContent");
const page = document.querySelector(".projectDisplayContainer");
const body = document.querySelector("body");

///// hover animation when entered section
let hoverCursor = (e) => {
  gsap.to(cursorContainer, 0.25, {
    css: {
      left: e.clientX - 85,
      top: e.clientY + 85,
    },
  });
  cursorContainer.style.display = "block";
};

///// main cursor
let customCursorFixed = (e) => {
  gsap.to(customCursor, 0.25, {
    css: {
      left: e.clientX,
      top: e.clientY,
    },
  });
};

// Event Listeners
// ************

followArea.forEach(function (el) {
  el.addEventListener("mouseover", () => {
    gsap.to(cursorContainer, 0.25, {
      scale: 1,
      autoAlpha: 1,
    });
  });

  el.addEventListener("mouseout", () => {
    gsap.to(cursorContainer, 0.25, {
      scale: 0.5,
      autoAlpha: 0,
    });
  });
});

followArea.forEach((area) => {
  // console.log(area);
  area.addEventListener("mousemove", hoverCursor);
});
// el.addEventListener("mousemove", hoverCursor);

body.addEventListener("mousemove", customCursorFixed);
