import { gsap } from "gsap";

// Variables
const cursorContainer = document.querySelector(".cursorElementContainer");
const customCursor = document.querySelector(".customCursorFixed");
const followArea = document.querySelectorAll(".projectContent");
const page = document.querySelector(".projectDisplayContainer");
const seeWebsite = document.querySelector(".seeWebsite");
const title = document.querySelector(".projectFixed .title");
console.log(title);
console.log(seeWebsite);
const cursorText = document.querySelector(".cursorElement");

// Hover animation when entered section
let hoverCursor = (e) => {
  if (cursorContainer) {
    gsap.to(cursorContainer, 0.7, {
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

let rotateLogo = gsap
  .timeline()
  .fromTo(
    cursorText,
    {
      rotation: 0,
      yPercent: -50,
      xPercent: -50,
    },
    {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    },
    0
  )
  .timeScale(1);

let seeWebsiteCursor = (e) => {
  // if (cursorContainer) {
  gsap.to(cursorContainer, 0.25, {
    css: {
      left: e.clientX - 85,
      top: e.clientY + 85,
    },
  });
  if (!cursorContainer) {
    return;
  }
  console.log("coucou");
};
// console.log("tst");
// };

// Main cursor
let customCursorFixed = (e) => {
  gsap.to(customCursor, 0.25, {
    css: {
      left: e.clientX,
      top: e.clientY,
    },
  });
  if (!customCursor) {
    // return;
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

if (seeWebsite) {
  seeWebsite.addEventListener("mouseenter", () => {
    // Animation to scale and up opacity
    gsap.to(cursorContainer, 0.25, {
      scale: 1,
      autoAlpha: 1,
    });
  });

  seeWebsite.addEventListener("mouseleave", () => {
    gsap.to(cursorContainer, 0.25, {
      // Animation opacity 0 and scale 0.5
      scale: 0.5,
      autoAlpha: 0,
    });
  });
}

if (seeWebsite) {
  title.addEventListener("mousemove", seeWebsiteCursor);
  seeWebsite.addEventListener("mousemove", seeWebsiteCursor);
  console;
}
