import createCardsGrid from "./createCardsGrid";
import handleClickCard from "./handleClicks/handleClickCard";
import loadMatchedCards from "./utils/loadMatchedCards";

export const cardsMatched = new Set<HTMLButtonElement>();

export let flippedEmojis: string[] = [],
  cardButtons: HTMLButtonElement[] = []; // All card buttons

const flipCards = async () => {
  await createCardsGrid(); // Emojis were fully complete loaded

  loadMatchedCards(Array.from(cardsMatched)); // Call matched cards local storage

  const matchedCardsFromStorage = JSON.parse(
    localStorage.getItem("matchedCards") || "[]"
  );
  matchedCardsFromStorage.forEach((cardId: string) => {
    const cardButton = document.getElementById(cardId) as HTMLButtonElement;
    if (cardButton) cardsMatched.add(cardButton); // Add each matched to array (cardsMatched)
  });

  // Each card should be clickable
  for (let i = 0; i < 12; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    cardButton?.addEventListener("click", (event: MouseEvent) =>
      handleClickCard(event, cardButton)
    );
  }
};

export default flipCards;
