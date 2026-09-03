const viewer = document.querySelector(".photo-viewer");

if (viewer) {
  const images = [...document.querySelectorAll(".photo-button img")];
  const viewerImage = viewer.querySelector("img");
  let current = 0;

  const show = (index) => {
    current = (index + images.length) % images.length;
    viewerImage.src = images[current].src;
    viewerImage.alt = images[current].alt;
  };

  images.forEach((image, index) => {
    image.parentElement.addEventListener("click", () => {
      show(index);
      viewer.showModal();
    });
  });

  viewer.querySelector(".viewer-close").addEventListener("click", () => viewer.close());
  viewer.querySelector(".viewer-previous").addEventListener("click", () => show(current - 1));
  viewer.querySelector(".viewer-next").addEventListener("click", () => show(current + 1));
  document.addEventListener("keydown", (event) => {
    if (!viewer.open) return;
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });
}
