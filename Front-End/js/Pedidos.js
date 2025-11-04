// Sistema de avaliação com estrelas
const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("active", i <= index);
    });
  });
});
