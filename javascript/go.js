//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY>0);
});



//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});








function showLoadingScreen() {
  var loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "flex";
}

window.onload = function() {
  var loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";
}