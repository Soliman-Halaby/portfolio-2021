// Variables
const menuTargets = [...document.querySelectorAll(".menuTarget")];
const projectContents = document.querySelectorAll(".projectContent");
const body = document.querySelector("body");

// Functions to get vmin / vmax on browser
function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
}

function vmin(v) {
  return Math.min(vh(v), vw(v));
}

function vmax(v) {
  return Math.max(vh(v), vw(v));
}

// Gap used in Asside and other elements
let gap = vmax(3.5);

// Update values and run observer on window resize
window.addEventListener("resize", () => {
  gap = vmax(3.5);
  observeElem();
});

// Header menu hover animation
menuTargets.forEach((item) => {
  // Split all text to separate letters
  let word = item.children[0].children[0].innerText.split("");
  item.children[0].innerHTML = "";
  word.forEach((letter, idx) => {
    // Get index to animate with delay
    item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
  });
  // Duplicate the div
  let cloneDiv = item.children[0].cloneNode(true);

  // Add class on div then send it to the DOM
  cloneDiv.classList.add("romie");
  item.appendChild(cloneDiv);
});

window.onload = () => {
  // Add transition class when window is on load
  document.body.classList.add("transition");

  setTimeout(function () {
    pageTransition();
  }, 1000);
  setTimeout(function () {
    // Remove transition class after some MS
    document.body.classList.remove("transition");
  }, 500);
};

// Function to run page transition
function pageTransition() {
  projectContents.forEach((element) => {
    element.addEventListener(
      "click",
      () => {
        // Get data name of element then redirect on link
        const elementName = element.getAttribute("data-name");
        window.location.href = `/project/${elementName}.html`;
      },
      700
    );
    // });
  });
}

// Add transition on click in projects
projectContents.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.add("transition");
  });
});

const assideGlobalContainer = document.querySelector(".assideGlobalContainer");

function observeElem() {
  let observer = new IntersectionObserver(
    function (observables) {
      observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
          // Get Scroll Id
          let scrollId = observable.target.querySelector("scroll-page").id;
          // Translate depending on scroll id and gap
          assideGlobalContainer.style.transform = `translateX(${
            gap * [scrollId - 1] + 1
          }px)`;
          assideGlobalContainer.style.transition = "ease 1.75s";
        }
      });
    },
    {
      threshold: [0.5],
    }
  );
  // Select all projects
  let projects = document.querySelectorAll(".project");

  // Run observer on each project section
  projects.forEach(function (project) {
    observer.observe(project);
  });
}

// Call observer function
observeElem();

///// Get dom - nav elements to scroll horizontaly using nav bar
const container = document.querySelector(".projectDisplayContainer");
const navLinks = [...document.querySelectorAll(".navBarItems a")];
const sections = document.querySelectorAll(".projectDisplay");
// Get element position in dom (alternativ to element observer)
const sectionPosition = {
  about: 0,
  work: 1,
  contact: sections.length - 1,
};

// Scroll to elements on click using nav bar
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
