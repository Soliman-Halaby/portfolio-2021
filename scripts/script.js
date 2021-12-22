// import { gsap } from "gsap";

// const assideItems = document.querySelectorAll(".assideBar span");
const assideItem = document.querySelector(".assideBar span");

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
    end: "+=8000",
    ease: "power2.easeOut",
  },
});

sections[5].style.backgroundColor = "blue";
// Get dom - nav elements to scroll horizontaly using nav bar
const container = document.querySelector(".projectDisplayContainer");
const projectDisplays = [...document.querySelectorAll(".projectDisplay")];
const navLinks = [...document.querySelectorAll(".navBarItems a")];

// Positions of elements in DOM
const sectionPosition = {
  about: 0,
  work: 1,
  contact: sections.length,
};

container.style.backgroundColor = "red";
// projectDisplays[sections.length].style.backgroundColor = "blue";
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
        // for (let k = 0; k < assideItems.length; k++) {
        //   assideItems[k].classList.remove("selected");
        // }
        // Add class on element depending on scroll id
        // assideItems[scrollId - 1].classList.add("selected");

        // Change text on elements depending on scroll id
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
