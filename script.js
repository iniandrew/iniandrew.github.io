const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = document.querySelectorAll("#site-nav a");
const reveals = document.querySelectorAll(".reveal");
const revealStaggers = document.querySelectorAll(".reveal-stagger");
const yearEl = document.querySelector("#year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

for (const link of navLinks) {
  link.addEventListener("click", () => {
    if (siteNav && navToggle) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      }
    },
    { threshold: 0.01 }
  );

  for (const item of reveals) {
    observer.observe(item);
  }

  const staggerObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      }
    },
    { threshold: 0.01 }
  );

  for (const item of revealStaggers) {
    staggerObserver.observe(item);
  }
} else {
  for (const item of reveals) {
    item.classList.add("visible");
  }
  for (const item of revealStaggers) {
    item.classList.add("visible");
  }
}

// Project Slider
const slider = document.querySelector(".project-slider");
if (slider) {
  const track = slider.querySelector(".project-track");
  const dotsContainer = slider.querySelector(".slider-dots");
  const prevBtn = slider.querySelector(".slider-btn.prev");
  const nextBtn = slider.querySelector(".slider-btn.next");
  const cards = track.querySelectorAll(".project-card");
  let currentIndex = 0;
  const totalCards = cards.length;

  // Create dots
  for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlider();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Touch support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  track.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  });
}
