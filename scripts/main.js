////// variables
const menuTargets = [...document.querySelectorAll(".menuTarget")];
const projectContents = document.querySelectorAll(".projectContent");
const body = document.querySelector("body");

////// functions to update vmin / vmax on browser
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

let gap = vmax(3.5);

///// update value on window resize
window.addEventListener("resize", () => {
  gap = vmax(3.5);
  observeElem();
});

////// header menu hover animation
menuTargets.forEach((item) => {
  let word = item.children[0].children[0].innerText.split("");
  item.children[0].innerHTML = "";
  word.forEach((letter, idx) => {
    item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
  });
  let cloneDiv = item.children[0].cloneNode(true);
  console.log(cloneDiv);
  cloneDiv.classList.add("romie");
  item.appendChild(cloneDiv);
});

////// page transition on click

// projectContents.forEach((element) => {
//   element.addEventListener("click", () => {
//     document.body.classList.add("transition");
//   });
// });

// const localStorage = window.localStorage;

// localStorage.setItem("transitionClass", "transition");

// const transitionClass = localStorage.getItem("transitionClass");
// console.log(transitionClass);

// document.body.classList.remove("transition");
window.onload = () => {
  document.body.classList.add("transition");
  // document.body.classList.remove("transition");
  // body.classList.remove("transition");
  setTimeout(function () {
    pageTransition();
  }, 1000);
  setTimeout(function () {
    document.body.classList.remove("transition");
  }, 500);
};

projectContents.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.add("transition");
  });
});

function pageTransition() {
  projectContents.forEach((element) => {
    element.addEventListener(
      "click",
      () => {
        const elementName = element.getAttribute("data-name");
        // // console.log(elementName);
        // setTimeout(function () {
        //   body.classList.add("transition");
        // });
        // setTimeout(function () {
        //   // body.classList.add("transition");
        //   body.classList.remove("transition");
        // }, 1000);
        // setTimeout(function () {
        // body.classList.toggle("transition");
        window.location.href = `/${elementName}.html`;
      },
      700
    );
    // });
  });
}
// const name = projectContents.getAttribute("data-name");
// console.log(name);

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
  ////// select all projects
  let projects = document.querySelectorAll(".project");

  projects.forEach(function (project) {
    observer.observe(project);
  });
}

////// run observer on each project section

observeElem();
