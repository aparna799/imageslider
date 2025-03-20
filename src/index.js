document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded ✅");

  const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1517816428104-7973a90f0bf5",
    "https://images.unsplash.com/photo-1472214103451-9374e2e7e3bb",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  ];

  let currentIndex = 0;

  const sliderImage = document.getElementById("sliderImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Check if elements exist
  if (!sliderImage || !prevBtn || !nextBtn) {
    console.error("❌ One or more elements not found!");
    return;
  }

  function updateImage() {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = images[currentIndex];
      sliderImage.style.opacity = 1;
      updateButtons();
    }, 300);
  }

  function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateImage();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateImage();
    }
  });

  updateImage();
});
