import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Variables
const projectTitle = document.querySelectorAll(".projectTitle");
const projectTextContent = document.querySelector(".projectTextContent");

let projects = "";

projectTitle.forEach((title) => {
  // Get title to dynamicly add it to asside
  projects += title.textContent;
});

// Add dynamic asside text depending on title
projectTextContent.textContent = projects;

const menuTargets = [...document.querySelectorAll(".menuTarget")];

menuTargets.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.add("transition");
  });
});

const projectSection = document.querySelector(".projectDisplayRow");

// let slides = gsap.utils.toArray(".projectScroll");

// gsap.to(slides, {
//   xPercent: -100 * (slides.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     markers: true,
//     trigger: ".projectDisplayRow",
//     scroller: ".projectDisplayContainer",
//     pin: true,
//     start: "top top",
//     pinSpacing: false,
//     scrub: true,
//     // snap: {
//     //   snapTo: 1 / (slides.length - 1),
//     //   inertia: false,
//     //   duration: { min: 0.1, max: 0.1 },
//     // },
//     end: () => "+=" + projectSection.offsetWidth * (slides.length - 1),
//     // end: "+=22000", // end after scrolling 500px beyond the start
//     // ease: "power2.easeOut",
//   },
// });

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".projectScroll");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projectDisplayRow",
    // scroller: ".projectDisplayContainer",
    markers: true,
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".projectDisplayRow").offsetWidth,
    ease: "power3.out",
  },
});

const container = document.querySelector(".projectDisplayContainer");

const scrollCta = document.querySelector(".scrollDownContainer");

// Scroll to second section on click
scrollCta.addEventListener("click", () => {
  container.scrollTop = container.getBoundingClientRect().height;
});
