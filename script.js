const button = document.querySelector(".card-btn");
const blogCard = document.querySelector(".blog-card");

button.addEventListener("click", () => {
  blogCard.classList.toggle("change")
    ? (button.firstElementChild.textContent = "Moins")
    : (button.firstElementChild.textContent = "Plus");
});
