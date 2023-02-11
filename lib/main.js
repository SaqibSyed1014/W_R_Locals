'use strict';

var navBar = document.getElementById('navBtn');
navBar.addEventListener("click", openMenu);

function openMenu() {
  var hamburger = document.querySelector('.navbar-burger');
  var mobileNav = document.getElementById('collapsibleNavbar');
  if (hamburger.classList.contains('is-active')) {
    hamburger.classList.remove('is-active');
    mobileNav.style.height = '0';
    mobileNav.style.opacity = '0';
  } else {
    hamburger.classList.add('is-active');
    mobileNav.style.height = '180px';
    mobileNav.style.opacity = '1';
  }
}