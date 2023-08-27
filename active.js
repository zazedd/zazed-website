const navLinks = document.querySelectorAll(".navig");

function updateActiveLink() {
  const scrollPosition = window.scrollY;

  const aboutSection = document.querySelector("#about").offsetTop;
  const experienceSection = document.querySelector("#experience").offsetTop;
  const projectsSection = document.querySelector("#projects").offsetTop - 10;

  if (scrollPosition >= aboutSection && scrollPosition < experienceSection) {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[0].classList.add("active");
  } else if (
    scrollPosition >= experienceSection &&
    scrollPosition < projectsSection
  ) {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[1].classList.add("active");
  } else if (scrollPosition >= projectsSection) {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[2].classList.add("active");
  }
}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();
