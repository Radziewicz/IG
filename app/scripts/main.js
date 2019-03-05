const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);
    
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

(function(){

  let slideIndex = 0;
  
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';  
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex-1].style.display = 'block';  
    dots[slideIndex-1].className += ' active';

    setTimeout(showSlides, 4000); 
  }

  showSlides();
})();

(function() {
  const nav = document.querySelector('.top-bar');

  function changeNavClassOnScroll(event) {
    nav.className = window.scrollY <= 200
      ? 'top-bar'
      : 'top-bar scrolled';
  }

  window.addEventListener('scroll', debounce(changeNavClassOnScroll, 100));
})();

(function() {
  const UP = 'UP';
  const DOWN = 'DOWN';
  const scrollUpId = '#scroll-up';
  const scrollDownId = '#scroll-down';

  const scrollUpElement = document.querySelector(scrollUpId);
  const scrollDownElement = document.querySelector(scrollDownId);

  const defaultSection = 'hero';
  let currentSectionName = defaultSection;

  const sectionsList = [
    'hero',
    'mission',
    'clients',
    'products',
    'map',
    'contact',
  ];

  function goToSection(current, direction) {
    const currentSectionIndex = sectionsList.findIndex(section => section === currentSectionName);

    if(direction === UP && currentSectionIndex > 0) {
      currentSectionName = sectionsList[currentSectionIndex - 1];
    }

    if(direction === DOWN && currentSectionIndex < sectionsList.length) {
      currentSectionName = sectionsList[currentSectionIndex + 1];
    }

    document.getElementById(currentSectionName).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrollUpElement.addEventListener('click', () => goToSection(currentSectionName, UP));
  scrollDownElement.addEventListener('click', () => goToSection(currentSectionName, DOWN));
  
})();