import createCardsGrid from "./createCardsGrid";
import flipCards from "./flipCards";
import {
  getLastClickedCardId,
  setLastClickedCardId,
} from "./utils/lastClickedCardIdState";

const movesCounter = async () => {
  await createCardsGrid();
  await flipCards();

  const counterDiv = document.getElementById("moves-counter") as HTMLDivElement;
  if (!counterDiv) return;

  let counter = JSON.parse(localStorage.getItem("movesCounter") || "0");

  // Create and append counter text element
  const counterText = document.createElement("span") as HTMLSpanElement;
  counterText.className = "block rounded-2xl bg-white px-2 py-3";
  counterDiv.appendChild(counterText);
  counterText.textContent = `Moves: ${counter}`;

  for (let i = 0; i < 12; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    cardButton?.addEventListener("click", (event: MouseEvent) => {
      const currentCardId = `cardId-${i}`;

      if (getLastClickedCardId() === currentCardId) return; // Prevent clicking the same card consecutively

      if (JSON.parse(localStorage.getItem("movesCounter") || "0") === 0)
        counter = 0; // Ensure that localStorage counter and local counter matched

      const matchedCards = JSON.parse(
        localStorage.getItem("matchedCards") || "[]"
      );

      // Check if the card was already matched
      const isCardMatched = matchedCards.some(
        (matchedCardId: string) =>
          (event.currentTarget as HTMLButtonElement).id === matchedCardId
      );
      if (isCardMatched) return;

      // Increment counter and update localStorage
      counter++;
      localStorage.setItem("movesCounter", JSON.stringify(counter));
      counterText.textContent = `Moves: ${counter}`;

      setLastClickedCardId(currentCardId);
    });
  }
};

export default movesCounter;
