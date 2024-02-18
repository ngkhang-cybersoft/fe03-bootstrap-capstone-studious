/* ---------- Back to top ---------- */
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

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


/* ---------- Right Side Bar ---------- */
document.getElementById("toggle_right_sidebar").onclick = function() {
  var hideSideBar = document.getElementById("right_sidebar");
  hideSideBar.classList.toggle("hide_sidebar");
  
  var toggleClass = document.getElementById("toggle_class");
  toggleClass.classList.toggle("fa-angle-double-left")
}