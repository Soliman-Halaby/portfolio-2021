const experiences = document.querySelectorAll(".experience");

// console.log(borderExperiences);
experiences.forEach((experience) => {
  //   const border = experience.childNodes.length;
  const border = experience.querySelector(".borderExperience");
  console.log(border);
  console.log(experience);

  experience.addEventListener("mouseover", () => {
    border.classList.remove("borderShown");
    border.classList.add("borderShown");
  });

  experience.addEventListener("mouseout", () => {
    border.classList.remove("borderShown");
  });
});

const container = document.querySelector(".projectDisplayContainer");
const scrollCta = document.querySelector(".scrollDownCta");

scrollCta.addEventListener("click", () => {
  container.scrollTop = container.getBoundingClientRect().height * 2;
});
