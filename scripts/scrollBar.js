import Scrollbar from "smooth-scrollbar";
import easing from "easing-js";

Scrollbar.init(document.querySelector("#my-scrollbar"));

const scrollbar = Scrollbar.init(document.querySelector("#my-scrollbar"));

const scrollDownButton = document.querySelector(".scrollDownCta");
const containerProject = document.querySelector(".projectDisplayContainer");

console.log(easing);
// console.log(scrollbar.containerEl === elem); // true
scrollDownButton.addEventListener("click", () => {
  // console.log(containerProject.getBoundingClientRect().height * 2);
  scrollbar.scrollTo(
    0,
    containerProject.getBoundingClientRect().height * 2,
    800
  );
  // scrollbar.scrollTo(
  //   0,
  //   containerProject.getBoundingClientRect().height * 2,
  //   800,
  //   {
  //     callback: () => console.log("done!"),
  //     easing: easing.easeOutBack,
  //   }
  // );
  scrollbar.update();
});
