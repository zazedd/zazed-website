const navLinks = document.querySelectorAll(".navig");

function updateActiveLink() {
  const height = window.innerHeight;
  const scrollPosition = window.scrollY;

  const sectionOffsets = [
    document.querySelector("#about").offsetTop,
    document.querySelector("#experience").offsetTop - 100,
    document.querySelector("#projects").offsetTop - 300,
    document.querySelector("#opensource").offsetTop - 900,
    document.querySelector("#awards").offsetTop,
  ];

  let activeIndex = 0;

  for (let i = sectionOffsets.length - 1; i >= 0; i--) {
    if (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight
    ) {
      activeIndex = 4;
      break;
    }
    if (scrollPosition >= sectionOffsets[i]) {
      activeIndex = i;
      break;
    }
  }

  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[activeIndex].classList.add("active");
}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();
