import { gsap } from "gsap";

// Variables
const cursorContainer = document.querySelector(".cursorElementContainer");
const customCursor = document.querySelector(".customCursorFixed");
const followArea = document.querySelectorAll(".projectContent");
const page = document.querySelector(".projectDisplayContainer");

// Hover animation when entered section
let hoverCursor = (e) => {
  if (cursorContainer) {
    gsap.to(cursorContainer, 0.25, {
      css: {
        left: e.clientX - 85,
        top: e.clientY + 85,
      },
    });
    if (!cursorContainer) {
      return;
    }
  }
  // console.log("tst");
};

// Main cursor
let customCursorFixed = (e) => {
  gsap.to(customCursor, 0.25, {
    css: {
      left: e.clientX,
      top: e.clientY,
    },
  });
  if (!customCursor) {
    return;
  }
};

// Event Listeners

followArea.forEach(function (el) {
  el.addEventListener("mouseenter", () => {
    // Animation to scale and up opacity
    gsap.to(cursorContainer, 0.25, {
      scale: 1,
      autoAlpha: 1,
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(cursorContainer, 0.25, {
      // Animation opacity 0 and scale 0.5
      scale: 0.5,
      autoAlpha: 0,
    });
  });
});

followArea.forEach((area) => {
  // cursorContainer.style.display = "block";
  area.addEventListener("mousemove", hoverCursor);
});

// Events to make tu cursor follow even if not showing
document.body.addEventListener("mousemove", hoverCursor);

document.body.addEventListener("mousemove", customCursorFixed);
