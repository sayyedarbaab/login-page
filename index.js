function showModel() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".loginform").classList.add("showloginform");
}
function closeModel() {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(".loginform").classList.remove("showloginform");
}

var btnClick = document.querySelector(".btn-login");
btnClick.addEventListener("click", showModel);

var close = document.querySelector("span");
close.addEventListener("click", closeModel);

var closeByOverlay = document.querySelector(".overlay");
closeByOverlay.addEventListener("click", closeModel);
