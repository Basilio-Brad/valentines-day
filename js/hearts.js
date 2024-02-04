const createHearts = () => {
  //obtener el div
  const container = document.getElementById("particles");
  for (let index = 0; index < 50; index++) {
    const particleHeart = document.createElement("div");
    particleHeart.className = "heart";
    particleHeart.style.left = `${Math.random() * 100}vw`;
    particleHeart.style.animationDuration = `${Math.random() * 5 + 1}s`;
    container.appendChild(particleHeart);
    particleHeart.addEventListener("animationiteration", () => {
      particleHeart.style.left = `${Math.random() * 100}vw`;
      particleHeart.style.animationDuration = `${Math.random() * 10 + 1}s`;
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  createHearts();
});
