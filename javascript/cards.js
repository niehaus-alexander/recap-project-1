const form = document.querySelector("[data-js=form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const cardQuestion = data.formQuestion;
  const cardAnswer = data.formAnswer;
  const cardTag = data.formTag;

  const card = document.createElement("section");
  card.classList.add("card");

  card.innerHTML = `<p class="question">
    ${cardQuestion}
  </p>
  <div class="button">
    <button data-js="answerButton">Show Answer</button>
  </div>
  <p data-js="answer" class="hidden">
    ${cardAnswer}
  </p>
  <div class="tag-container">
    <span class="tag">#${cardTag}</span>
    <span class="tag"></span>
    <span class="tag"></span>
  </div>
  <i data-js="starMark" class="fa-solid fa-star" id="fa-star"></i>
`;

  document.body.append(card);
  event.target.reset();
});

const questionInput = document.querySelector("[data-js=question-input]");
const answerInput = document.querySelector("[data-js=answer-input]");

const remainingQuestion = document.querySelector(
  "[data-js=remaining-characters-question]"
);
const remainingAnswer = document.querySelector(
  "[data-js=remaining-characters-answer]"
);

questionInput.addEventListener("input", (event) => {
  remainingQuestion.textContent = 150 - event.target.value.length;
});

answerInput.addEventListener("input", (event) => {
  remainingAnswer.textContent = 150 - event.target.value.length;
});
