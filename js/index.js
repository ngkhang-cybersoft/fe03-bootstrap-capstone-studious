/* ---------- Back to top ---------- */
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Handle header when scroll
window.addEventListener('scroll', () => {
  let topHeaderId = document.getElementById("top-header");
  let headerId = document.getElementById("header");
  const OFFSET = topHeaderId.getBoundingClientRect().height;

  let windowTop = window.scrollY || document.documentElement.scrollTop;

  (windowTop > OFFSET)
    ? headerId.classList.add('nav-fixed')
    : headerId.classList.remove('nav-fixed');
})

/* ---------- Right Side Bar ---------- */
document.getElementById("toggle_right_sidebar").onclick = function () {
  var hideSideBar = document.getElementById("right_sidebar");
  hideSideBar.classList.toggle("hide_sidebar");

  var toggleClass = document.getElementById("toggle_class");
  toggleClass.classList.toggle("fa-angle-double-left")
}

/* ---------- Counter-Up ---------- */
$(".counter").countUp({
  "time": 3000,
});

/* ---------- Owl-Carousel ---------- */
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1000,
});