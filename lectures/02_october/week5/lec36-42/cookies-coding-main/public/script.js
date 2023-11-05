var images = [];
var time = 3000;
var i = 0;

images[0] = "img/elon.png";
images[1] = "img/billy.png";
images[2] = "img/zucc.png";

// testimonials slider
function changeImg() {
  document.getElementById("slide").src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

// toggling dark/light theme
const b = document.getElementById("button");
b.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

function toggleExpandable(answerId) {
  var answer = document.getElementById(answerId);

  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
