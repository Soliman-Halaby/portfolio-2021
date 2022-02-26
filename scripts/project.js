import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

///// variables
const projectTitle = document.querySelectorAll(".projectTitle");
const assideContainer = document.querySelector(".assideGlobalContainer");
const projectTextContent = document.querySelector(".projectTextContent");

let projects = "";
// console.log(projectTextContent);

projectTitle.forEach((title) => {
  //   console.log(project.textContent);
  projects += title.textContent;
});
console.log(projects);
///// add asside text depending on title
projectTextContent.textContent = projects;
// console.log(projects.textContent);

// let observerElement = new IntersectionObserver(
//   function (observables) {
//     observables.forEach(function (observable) {
//       if (observable.intersectionRatio > 0.5) {
//         // Get Scroll Id
//         let scrollId = observable.target.querySelector("scroll-page").id;
//         // Remove class to all elements
//         // for (let k = 0; k < assideItems.length; k++) {
//         //   assideItems[k].classList.remove("selected");
//         //   // console.log(assideItems[k]);
//         //   // console.log(assideItems.length);
//         // }
//         // Add class on element depending on scroll id
//         // console.log(scrollId);
//         // console.log(assideItems[scrollId]);
//         // assideItems[scrollId - 1].classList.add("selected");

//         console.log(scrollId);
//         assideContainer.style.transform = `translateX(${
//           gap * [scrollId - 1] + 1
//         }px)`;
//         assideContainer.style.transition = "ease 1.75s";
//         // Change text on elements depending on scroll id
//       }
//     });
//   },
//   {
//     threshold: [0.5],
//   }
// );

////// SELECT ALL PROJECTS
let projectsSection = document.querySelectorAll(".project");

////// RUN OBSERVER ON EACH PROJECT SECTION

// projectsSection.forEach(function (project) {
//   observerElement.observe(project);
// });

const projectSection = document.querySelector("#projectSection");

let slides = gsap.utils.toArray(".projectSectionScroll");

// gsap.to(slides, {
//   xPercent: -100 * (slides.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     markers: true,
//     trigger: "#projectSection",
//     pin: true,
//     start: "top 110",
//     end: "bottom 0",
//     // start: "top top",
//     scrub: 1,
//     // end: "3000",
//     // snap: 1 / (slides.length - 1),
//     // end: () => "+=" + projectSection.offsetWidth * (slides.length - 1),

//     // end: "+=9000",
//     ease: "power2.easeOut",
//   },
// });
