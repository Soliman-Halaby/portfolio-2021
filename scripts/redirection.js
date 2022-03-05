// Variables
const matesLink = document.querySelectorAll(".detail a");

matesLink.forEach((mateLink) => {
  // Get url for each mate
  const mateUrl = mateLink.getAttribute("href");
  mateLink.addEventListener("click", () => {
    // Redirect on URL on click
    window.location.href = mateUrl;
  });
});

// Visit project links
const webSiteLink = document.querySelector(".seeWebsite");

if (webSiteLink) {
  console.log(webSiteLink);
  // console.log(webSiteLinkUrl);
  const webSiteLinkUrl = webSiteLink.getAttribute("data-url");
  webSiteLink.addEventListener("click", () => {
    window.open(webSiteLinkUrl, "_blank");
  });
}
// Media query to redirect for responsive
const mediaQueryDimension = window.matchMedia("(max-width: 700px)");

function mediaQuery() {
  if (mediaQueryDimension.matches) {
    window.location.href = `https://solimanalhalaby.fr/`;
  }
}

mediaQuery();

// Run function on resize
window.addEventListener("resize", mediaQuery);
