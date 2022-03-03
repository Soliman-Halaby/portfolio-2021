import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const projectDisplayContainer = document.querySelector(
  ".projectDisplayContainer"
);

const assideItems = document.querySelectorAll(".assideBar span");

let sections = gsap.utils.toArray(".projectDisplay");

////// horizontal scroll gsap

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    markers: true,
    trigger: ".projectDisplayContainer",
    pin: true,
    start: "top 110",
    end: "bottom 0",
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () =>
      "+=" + projectDisplayContainer.offsetWidth * (sections.length - 1),

    // end: "+=9000",
    ease: "power2.easeOut",
  },
});

////// skew elements depending on scroll velocity

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skewElem", "skewX", "deg"),
  clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -500);
    ///// smooth on skew velocity
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

///// Get dom - nav elements to scroll horizontaly using nav bar
const container = document.querySelector(".projectDisplayContainer");
const projectDisplays = [...document.querySelectorAll(".projectDisplay")];
const navLinks = [...document.querySelectorAll(".navBarItems a")];

////// POSITION OF ELEMENTS IN DOM

const sectionPosition = {
  about: 0,
  work: 1,
  contact: sections.length - 1,
};

// container.style.backgroundColor = "red";

////// SCROLL TO ELEMENT ON CLICK IN NAV BAR

navLinks.map((navLink) => {
  navLink.addEventListener("click", () => {
    window.scrollTo(
      0,
      container.getBoundingClientRect().width *
        sectionPosition[navLink.id.slice(2)]
    );
    console.log(container.getBoundingClientRect().width);
  });
});

const assideArray = ["home", "work", "contact"];

const aboutTarget = document.querySelector(".aboutMenu");
console.log(aboutTarget);

aboutTarget.addEventListener("click", () => {
  document.body.classList.add("transition");
});

// console.log(assideArray[0]);

////// ELEMENT OBSERVER ON HORIZONTAL SCROLL
