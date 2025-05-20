function goToSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = 1200; 
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  };