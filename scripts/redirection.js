const matesLink = document.querySelectorAll(".detail a");

matesLink.forEach((mateLink) => {
  console.log(mateLink);
  // console.log(mateLink.getAttribute("href"));
  const mateUrl = mateLink.getAttribute("href");
  mateLink.addEventListener("click", () => {
    window.location.href = mateUrl;
  });
});

const x = window.matchMedia("(max-width: 700px)");

function mediaQuery() {
  if (x.matches) {
    window.location.href = `https://solimanalhalaby.fr/`;
  }
}

mediaQuery();

window.addEventListener("resize", mediaQuery);
