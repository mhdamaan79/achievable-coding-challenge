export const displayQuestion = ({ prompt, choices, answer, explanation }) => {
  document.querySelector(".prompt").innerHTML = prompt;

  const choicesContainer = document.querySelector(".choices");
  choicesContainer.innerHTML = "";

  choices.forEach((choice) => {
    const choiceElement = document.createElement("li");
    choiceElement.innerHTML =
      choice === answer ? `<b>${choice} (answer)</b>` : choice;
    choicesContainer.appendChild(choiceElement);
  });

  document.querySelector(".explanation").innerHTML = explanation;

  const random = String(Math.random()).slice(2, 8);
  document.querySelector(".rand").innerHTML = `RAND: ${random}`;
};
