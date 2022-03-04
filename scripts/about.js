// import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".experienceContainer", {
//   scrollTrigger: {
//     trigger: ".scrollView",
//     markers: true,
//     toggleActions: "restart none none none",
//   },
//   x: -500,
//   // rotation: 360,
//   duration: 3,
// })

const experiences = document.querySelectorAll(".experienceCol");
const experiencesText = [
  ...document.querySelectorAll(".experienceTextContainer"),
];

const experienceGlobalContainer = document.querySelector(
  ".experienceTextGlobalContainer"
);

// const experienceAttribute = experience.getAttribute("data-name");
// console.log(experienceAttribute);
// console.log(user);
// console.log(borderExperiences);
// experiencesText.forEach((experienceText) => {
//   console.log(experienceText);
//   console.log(experienceText.getAttribute("data-name"));
// });

const test = "hetic";

experiences.forEach((experience) => {
  const borderBottom = experience.querySelector(".borderExperience");
  const borderTop = experience.querySelector(".borderTop");
  const experienceData = experience.getAttribute("data-name");
  const paragraphData = document.querySelector(
    ".experienceTextContainer[data-name=" + experienceData,
    "]"
  );
  experience.addEventListener("mouseover", () => {
    borderBottom.classList.remove("borderShown");
    borderBottom.classList.add("borderShown");
    borderTop.classList.remove("borderTopShown");
    borderTop.classList.add("borderTopShown");
    // console.log(experienceData);
    // console.log(test);

    setTimeout(() => {
      paragraphData.style.display = "block";
    }, 200);
    paragraphData.classList.remove("paragraphShow");
    setTimeout(() => {
      paragraphData.classList.add("paragraphShow");
    }, 300);

    // console.log(paragraphData);
  });

  experience.addEventListener("mouseleave", () => {
    // console.log("mouseot");
    borderBottom.classList.remove("borderShown");
    borderTop.classList.remove("borderTopShown");
    paragraphData.classList.remove("paragraphShow");
    setTimeout(() => {
      paragraphData.style.display = "none";
    }, 200);
  });
});

const container = document.querySelector(".projectDisplayContainer");
const scrollCta = document.querySelectorAll(".ctaContainer");

scrollCta.forEach((cta) => {
  cta.addEventListener("click", () => {
    container.scrollTop = container.getBoundingClientRect().height;
  });
});

const flexDivs = document.querySelectorAll(".flexDiv");
const experienceText = document.querySelector(".experienceFlex");
const experienceContainer = document.querySelector(".experienceContainer");
function observeElem() {
  let observer = new IntersectionObserver(
    function (observables) {
      observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
          // Get Scroll Id
          let scrollId = observable.target.querySelector("scroll-page").id;
          // console.log(scrollId);
          if (scrollId == 2) {
            setTimeout(function () {
              experienceContainer.classList.add("containerBorder");
              experienceText.classList.add("flexAuto");
              flexDivs.forEach((flexDiv) => {
                flexDiv.classList.add("flexAuto");
              });
              experienceGlobalContainer.classList.add("expGlobalBlock");
            }, 900);
          } else {
            experienceContainer.classList.remove("containerBorder");
            experienceText.classList.remove("flexAuto");
            flexDivs.forEach((flexDiv) => {
              flexDiv.classList.remove("flexAuto");
            });
            experienceGlobalContainer.classList.remove("expGlobalBlock");
          }
        }
      });
    },
    {
      threshold: [0.5],
    }
  );
  ////// select all projects
  let projects = document.querySelectorAll(".project");
  projects.forEach(function (project) {
    observer.observe(project);
  });
}
observeElem();

const menuTargets = [...document.querySelectorAll(".menuRedirect")];

menuTargets.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.add("transition");
  });
});
