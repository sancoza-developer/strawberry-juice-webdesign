const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
document.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/*=============== GSAP ANIMATION ===============*/
TweenMax.from('.home_title', 1, {
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from('.home_description', 1, {
  delay: 0.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from('.home_button', 1, {
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from('.home_liquid', 1, {
  delay: 0.7,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});
TweenMax.from('.home_juice', 1, {
  delay: 1.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.home-strawberry1', 1, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.home-strawberry2', 1, {
  delay: 1.6,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.home-leaf:nth-child(1)', 2, {
  delay: 1.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.home-leaf:nth-child(2)', 2, {
  delay: 1.4,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.home-leaf:nth-child(3)', 2, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.home-leaf:nth-child(4)', 2, {
  delay: 1.6,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.home-leaf:nth-child(5)', 2, {
  delay: 1.7,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.home-leaf:nth-child(6)', 2, {
  delay: 1.8,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

$(function () {
  // animate on scroll
  new WOW().init();
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);