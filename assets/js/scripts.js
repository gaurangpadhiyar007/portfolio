var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

document.addEventListener('DOMContentLoaded', function() {
  // Target only the links inside the mobile menu that have sub-menus
  const mobileParentLinks = document.querySelectorAll('#main-menu-mobile .has-children > a');

  mobileParentLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Find the associated sub-menu (the next sibling <ul>)
      const subMenu = this.nextElementSibling;

      if (subMenu && subMenu.classList.contains('sub-menu')) {
        // Prevent navigation so the user can see the sub-menu
        e.preventDefault();
        
        // Toggle a class for the sub-menu
        subMenu.classList.toggle('is-open');
        
        // Toggle a class on the parent <li> for styling (like rotating an arrow)
        this.parentElement.classList.toggle('sub-menu-active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    // Reset index if out of bounds
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    // Update classes
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  // Event Listeners
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });

  // Auto Play (Optional - every 5 seconds)
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
});
