const navbarHomePageIcon = document.querySelector("[data-js=homepage-icon]");
const navbarBookmarkIcon = document.querySelector("[data-js=star-icon");
const navbarProfileIcon = document.querySelector("[data-js=profile-icon]");
const starMark = document.querySelector("[data-js=starMark]");

starMark.addEventListener("click", () => {
  starMark.classList.toggle("toggle-background");
});
