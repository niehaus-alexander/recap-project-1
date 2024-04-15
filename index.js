const navbarHomePageIcon = document.querySelector("[data-js=homepage-icon]");
const navbarBookmarkIcon = document.querySelector("[data-js=star-icon");
const navbarProfileIcon = document.querySelector("[data-js=profile-icon]");
const starMark = document.querySelector("[data-js=starMark]");
const answer = document.querySelector("[data-js=answer]");
const answerButton = document.querySelector("[data-js=answerButton");

starMark.addEventListener("click", () => {
  starMark.classList.toggle("toggle-background");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
