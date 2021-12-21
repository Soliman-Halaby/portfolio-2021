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
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=8000",
  },
});
// console.log("coucou");
const assideItems = document.querySelectorAll(".assideBar a");
const assideItem = document.querySelector(".assideBar span");
let pageNavigate = false;
// console.log(test);

// test.forEach((testt) => {
//   //   console.log(testt);
//   testt.addEventListener("click", function () {
//     // console.log(testt);
//     testt.classList.add("selected");
//     // test.classList.remove("selected");
//     // console.log(test);
//     // test.cl;
//   });
// });

// for (let i = 0; i < assideItems.length; i++) {
//   // Click on the element selected
//   assideItems[i].addEventListener("click", () => {
//     // Fix Observer class on each element of asside
//     pageNavigate = true;
//     // Remove class to all elements
//     for (let k = 0; k < assideItems.length; k++) {
//       assideItems[k].classList.remove("selected");
//     }
//     // Add class on the specified element
//     assideItems[i].classList.add("selected");
//     // Observer can now do his job !
//     setTimeout(() => {
//       pageNavigate = false;
//     }, 1000);
//   });
// }

// console.log(assideItems.length);
const assideArray = ["home", "work", "contact"];
console.log(assideArray[0]);

let observer = new IntersectionObserver(
  function (observables) {
    observables.forEach(function (observable) {
      if (observable.intersectionRatio > 0.5 && !pageNavigate) {
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
