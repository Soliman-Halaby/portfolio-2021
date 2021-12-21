// import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".projectDisplay");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".projectDisplayContainer",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=8000",
    ease: "power2.easeOut",
  },
});
// console.log("coucou");
const assideItems = document.querySelectorAll(".assideBar a");
const assideItem = document.querySelector(".assideBar span");

const sectionPosition = {
  about: 0,
  work: 1,
  contact: sections.length,
};

const container = document.querySelector(".projectDisplayContainer");
const projectDisplays = [...document.querySelectorAll(".projectDisplay")];
const navLinks = [...document.querySelectorAll(".navBarItems a")];

container.style.backgroundColor = "red";
navLinks.map((navLink) => {
  navLink.addEventListener("click", () => {
    // console.log(
    //   container.getBoundingClientRect().width *
    //     sectionPosition[navLink.id.slice(2)]
    // );
    // console.log(navLink.id.slice(2));
    window.scrollTo(
      0,
      container.getBoundingClientRect().width *
        sectionPosition[navLink.id.slice(2)]
    );
  });
});
// console.log(assideItems.length);
const assideArray = ["home", "work", "contact"];
console.log(assideArray[0]);

let observer = new IntersectionObserver(
  function (observables) {
    observables.forEach(function (observable) {
      if (observable.intersectionRatio > 0.5) {
        // Get Scroll Id
        let scrollId = observable.target.querySelector("scroll-page").id;
        // Remove class to all elements
        for (let k = 0; k < assideItems.length; k++) {
          assideItems[k].classList.remove("selected");
        }
        // Add class on element depending on scroll id
        // assideItems[scrollId - 1].classList.add("selected");
        assideItem.textContent = assideArray[scrollId - 1];
      }
    });
  },
  {
    threshold: [0.5],
  }
);

// Select all projets
let projects = document.querySelectorAll(".project");
// Run observer for each project
projects.forEach(function (project) {
  observer.observe(project);
});
