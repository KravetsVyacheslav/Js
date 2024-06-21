const galleryImages = document.querySelectorAll(".gallery .image");
const fullImageContainer = document.querySelector(".full-image-container");
const fullImage = document.querySelector(".full-image");

let currentIndex = 0;

const showImage = (index) => {
  const { src, alt } = galleryImages[index];
  fullImage.src = src;
  fullImage.alt = alt;
  fullImageContainer.style.display = "flex";
};

const hideImage = () => {
  fullImageContainer.style.display = "none";
};

const nextImage = () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
};

const previousImage = () => {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
};

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

fullImageContainer.addEventListener("click", hideImage);

document.addEventListener("keydown", (event) => {
  if (fullImageContainer.style.display === "flex") {
    if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      previousImage();
    } else if (event.key === "Escape") {
      hideImage();
    }
  }
});

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const renderButton = controls.querySelector('[data-action="render"]');
const destroyButton = controls.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const createBoxes = (amount) => {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    box.classList.add("box");
    boxes.push(box);
    size += 10;
  }
  boxesContainer.append(...boxes);
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

renderButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (!isNaN(amount) && amount > 0) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener("click", destroyBoxes);
