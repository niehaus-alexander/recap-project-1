const homePageIcon = document.querySelector("[data-js=homepage-icon]");
const bookmarkIcon = document.querySelector("[data-js=bookmark-icon");
const profileIcon = document.querySelector("[data-js=profile-icon]");

homePageIcon.addEventListener("click", function () {
  homePageIcon.classList.add("brownclick");
  homePageIcon.classList.remove("color-icons");
});
