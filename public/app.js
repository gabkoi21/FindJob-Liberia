document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const cards = carousel.children;
  let currentIndex = 0;
  const totalCards = cards.length;
  const visibleCards = 3;
  const maxIndex = totalCards - visibleCards;

  function updateCarousel() {
    const offset = currentIndex * -33.33;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // Add event listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});
