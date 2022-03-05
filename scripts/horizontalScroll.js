import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectDisplayContainer = document.querySelector(
  ".projectDisplayContainer"
);
let sections = gsap.utils.toArray(".projectDisplay");

// Horizontal scroll using Gsap ScrollTrigger

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    markers: true,
    trigger: ".projectDisplayContainer",
    pin: true,
    start: "top 110",
    end: "bottom 0",
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () =>
      "+=" + projectDisplayContainer.offsetWidth * (sections.length - 1),

    // end: "+=9000",
    ease: "power2.easeOut",
  },
});

// Skew elements depending on scroll velocity

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skewElem", "skewX", "deg"),
  clamp = gsap.utils.clamp(-5, 5); // Skew degrees

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -500);
    // Smooth on skew velocity
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

const aboutTarget = document.querySelector(".aboutMenu");

// Add transition class on redirect
aboutTarget.addEventListener("click", () => {
  document.body.classList.add("transition");
});
