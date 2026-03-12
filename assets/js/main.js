// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navList.classList.contains('open'));
    });
  }

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-list a').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
    });
  });
});
