// Variables
const experiences = document.querySelectorAll(".experienceCol");
const experienceGlobalContainer = document.querySelector(
  ".experienceTextGlobalContainer"
);

experiences.forEach((experience) => {
  // Variables from the select div
  const borderBottom = experience.querySelector(".borderExperience");
  const borderTop = experience.querySelector(".borderTop");

  // Get data attribute
  const experienceData = experience.getAttribute("data-name");

  // Select div which got this attribute
  const paragraphData = document.querySelector(
    ".experienceTextContainer[data-name=" + experienceData,
    "]"
  );

  experience.addEventListener("mouseover", () => {
    // Remove all classes
    borderBottom.classList.remove("borderShown");
    borderTop.classList.remove("borderTopShown");
    paragraphData.classList.remove("paragraphShow");

    // Add classes
    borderBottom.classList.add("borderShown");
    borderTop.classList.add("borderTopShown");

    // Fade in effect
    setTimeout(() => {
      paragraphData.style.display = "block";
    }, 200);
    setTimeout(() => {
      paragraphData.classList.add("paragraphShow");
    }, 300);
  });

  experience.addEventListener("mouseleave", () => {
    // Remove classes to hide borders
    borderBottom.classList.remove("borderShown");
    borderTop.classList.remove("borderTopShown");
    paragraphData.classList.remove("paragraphShow");

    // Fade out effect
    setTimeout(() => {
      paragraphData.style.display = "none";
    }, 200);
  });
});

const container = document.querySelector(".projectDisplayContainer");
const scrollCta = document.querySelector(".scrollDownContainer");

// Scroll onclick CTAS
scrollCta.addEventListener("click", () => {
  container.scrollTop = container.getBoundingClientRect().height;
});

const flexDivs = document.querySelectorAll(".flexDiv");
const experienceText = document.querySelector(".experienceFlex");
const experienceContainer = document.querySelector(".experienceContainer");

// Function to run element observer
function observeElem() {
  let observer = new IntersectionObserver(
    function (observables) {
      observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
          // Get Scroll Id
          let scrollId = observable.target.querySelector("scroll-page").id;
          if (scrollId == 2) {
            setTimeout(function () {
              // Add classes to do the animation when on second section
              experienceContainer.classList.add("containerBorder");
              experienceText.classList.add("flexAuto");

              // Add flex auto on each div to remove justify content center
              flexDivs.forEach((flexDiv) => {
                flexDiv.classList.add("flexAuto");
              });

              // Add classes on right element of 2nd section to show paragraph
              experienceGlobalContainer.classList.add("expGlobalBlock");
            }, 900);
          }
          if (scrollId == 1) {
            setTimeout(function () {
              // Remove classes as long as we leave 2nd section
              experienceContainer.classList.remove("containerBorder");
              experienceText.classList.remove("flexAuto");
              flexDivs.forEach((flexDiv) => {
                flexDiv.classList.remove("flexAuto");
                experienceGlobalContainer.classList.remove("expGlobalBlock");
              });
            }, 200);
          }
        }
      });
    },
    {
      threshold: [0.5],
    }
  );

  // Select all projects
  let projects = document.querySelectorAll(".project");
  projects.forEach(function (project) {
    // Run observer
    observer.observe(project);
  });
}

// Run observer function
observeElem();

// Select all menus
const menuTargets = [...document.querySelectorAll(".menuRedirect")];

// Add class transition to switch pages
menuTargets.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.add("transition");
  });
});
