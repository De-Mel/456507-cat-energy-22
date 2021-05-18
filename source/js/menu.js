var navMain = document.querySelector('.page__header');
var navToggle = document.querySelector('.page__header-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page__header--closed')) {
    navMain.classList.remove('page__header--closed');
    navMain.classList.add('page__header--opened');
  } else {
    navMain.classList.add('page__header--closed');
    navMain.classList.remove('page__header--opened');
  }
});
