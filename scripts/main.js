document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slider-wrapper img");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  const dots = document.querySelectorAll(".slider-dots .dot");
  let currentIndex = 0;
  let autoSlideInterval;

  function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(goToNextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  prevArrow.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSlider();
    stopAutoSlide();
    startAutoSlide();
  });

  nextArrow.addEventListener("click", () => {
    goToNextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
      stopAutoSlide();
      startAutoSlide();
    });
  });

  startAutoSlide();
  updateSlider();
});

// ハンバーガーメニュー
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("active");
}

//SPスライダー
document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".sp-slider .sp-slider-wrapper");
  const slides = document.querySelectorAll(".sp-slider .sp-slider-wrapper img");
  const dots = document.querySelectorAll(".sp-slider .sp-slider-dots .dot");
  let currentIndex = 0;
  let autoSlideInterval;
  let startX = 0;
  let isDragging = false;

  function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(goToNextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  sliderWrapper.addEventListener("touchstart", (e) => {
    stopAutoSlide();
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  sliderWrapper.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      goToNextSlide();
      isDragging = false;
    } else if (diffX < -50) {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
      updateSlider();
      isDragging = false;
    }
  });

  sliderWrapper.addEventListener("touchend", () => {
    isDragging = false;
    startAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
      stopAutoSlide();
      startAutoSlide();
    });
  });

  startAutoSlide();
  updateSlider();
});

// ページトップボタン
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//ポップアップ表示
document.addEventListener("DOMContentLoaded", function () {
  const deleteBtn = document.getElementById("deleteBtn");
  const popup = document.querySelector(".popup");
  deleteBtn.addEventListener("click", () => {
    popup.classList.add("delete");
  });
});
