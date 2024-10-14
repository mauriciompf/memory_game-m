import createCardsGrid from "./createCardsGrid";
import flipCards from "./flipCards";

const movesCounter = async () => {
  await createCardsGrid();
  await flipCards();

  const counterDiv = document.getElementById("moves-counter") as HTMLDivElement;
  if (!counterDiv) return;
  let counter = JSON.parse(localStorage.getItem("movesCounter") || "0");

  const counterText = document.createElement("span") as HTMLSpanElement;
  counterText.className = "block rounded-2xl bg-white px-2 py-3";
  counterDiv.appendChild(counterText);
  counterText.textContent = `Moves: ${counter}`;

  for (let i = 0; i < 10; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    cardButton.addEventListener("click", () => {
      counter++;
      counterText.textContent = `Moves ${counter}`;
      localStorage.setItem("movesCounter", JSON.stringify(counter));
    });
  }
};

export default movesCounter;
