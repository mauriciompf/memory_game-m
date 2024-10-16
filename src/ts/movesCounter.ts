import createCardsGrid from "./createCardsGrid";
import flipCards from "./flipCards";

const movesCounter = async () => {
  await createCardsGrid();
  await flipCards();

  const counterDiv = document.getElementById("moves-counter") as HTMLDivElement;
  if (!counterDiv) return;

  let counter = JSON.parse(localStorage.getItem("movesCounter") || "0");
  let lastClickedCardId: string | null = null; // To track the last clicked card

  const counterText = document.createElement("span") as HTMLSpanElement;
  counterText.className = "block rounded-2xl bg-white px-2 py-3";
  counterDiv.appendChild(counterText);
  counterText.textContent = `Moves: ${counter}`;

  for (let i = 0; i < 10; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    cardButton?.addEventListener("click", () => {
      const currentCardId = `cardId-${i}`;

      if (lastClickedCardId !== currentCardId) {
        if (JSON.parse(localStorage.getItem("movesCounter") || "0") === 0) {
          counter = 0;
        }

        counter++;
        localStorage.setItem("movesCounter", JSON.stringify(counter));
        counterText.textContent = `Moves: ${counter}`;
      }

      lastClickedCardId = currentCardId; // Update last clicked card
    });
  }
};

export default movesCounter;
