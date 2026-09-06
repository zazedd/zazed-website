const viewer = document.querySelector(".photo-viewer");

if (viewer) {
  const albumsElement = document.querySelector(".albums");
  const albumNav = document.querySelector(".photos-sidebar nav");
  const viewerImage = viewer.querySelector("img");
  let images = [];
  let current = 0;

  const show = (index) => {
    current = (index + images.length) % images.length;
    viewerImage.src = images[current].src;
    viewerImage.alt = images[current].alt;
  };

  const addAlbum = (album) => {
    const article = document.createElement("article");
    article.className = "album";
    article.id = album.id;
    article.innerHTML = `<h1>${album.title}</h1><div class="photo-grid"></div>`;
    const grid = article.querySelector(".photo-grid");

    album.images.forEach((path, index) => {
      const button = document.createElement("button");
      const image = document.createElement("img");
      button.className = "photo-button";
      button.type = "button";
      image.src = path;
      image.alt = `${album.title}, photograph ${index + 1}`;
      image.loading = "lazy";
      button.append(image);
      grid.append(button);
    });

    const link = document.createElement("a");
    link.href = `#${album.id}`;
    link.textContent = album.title;
    albumNav.append(link);
    albumsElement.append(article);
  };

  fetch("photos.json")
    .then((response) => {
      if (!response.ok) throw new Error("Could not load photo manifest");
      return response.json();
    })
    .then((albums) => {
      albums.forEach(addAlbum);
      images = [...document.querySelectorAll(".photo-button img")];
      images.forEach((image, index) => {
        image.parentElement.addEventListener("click", () => {
          show(index);
          viewer.showModal();
        });
      });
    })
    .catch((error) => console.error(error));

  viewer.querySelector(".viewer-close").addEventListener("click", () => viewer.close());
  viewer.querySelector(".viewer-previous").addEventListener("click", () => show(current - 1));
  viewer.querySelector(".viewer-next").addEventListener("click", () => show(current + 1));
  document.addEventListener("keydown", (event) => {
    if (!viewer.open || !images.length) return;
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });
}
