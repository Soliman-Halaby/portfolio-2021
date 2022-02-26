const x = window.matchMedia("(max-width: 700px)");

function mediaQuery() {
  if (x.matches) {
    window.location.href = `https://solimanalhalaby.fr/`;
  }
}

mediaQuery();

window.addEventListener("resize", mediaQuery);
