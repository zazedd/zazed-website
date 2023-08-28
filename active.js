const navLinks = document.querySelectorAll(".navig");

function updateActiveLink() {
  const scrollPosition = window.scrollY;

  const aboutSection = document.querySelector("#about").offsetTop;
  const experienceSection = document.querySelector("#experience").offsetTop;
  const projectsSection = document.querySelector("#projects").offsetTop;
  const opensourceSection = document.querySelector("#opensource").offsetTop;
  const awardsSection = document.querySelector("#awards").offsetTop;

  const sectionOffsets = [
    aboutSection,
    experienceSection,
    projectsSection,
    opensourceSection,
    awardsSection,
  ];

  sectionOffsets.forEach((offset, index) => {
    if (
      scrollPosition >= offset - 100 &&
      scrollPosition < sectionOffsets[index + 1]
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();
