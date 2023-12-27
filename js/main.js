//filter JS
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "general") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
  //add active btn
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
//header background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 380);
});

var url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "category=business&" +
  "apiKey=8e311eaa87174fff997bc0f2ac90bce7";
var req = new Request(url);
fetch(req).then(function (response) {
  console.log(response.json());
});
