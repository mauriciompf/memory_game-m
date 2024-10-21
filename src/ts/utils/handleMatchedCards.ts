import { cardButtons, cardsMatched, flippedEmojis } from "../flipCards";
import winGame from "../winGame";
import { resetArrays } from "./resetArrays";
import saveMatchedCards from "./saveMatchedCards";
import stopTimer from "./stopTimer";

const handleMatchedCards = (cardButton: HTMLButtonElement) => {
  const previousCard = cardButtons[0];
  cardsMatched.add(previousCard);
  cardsMatched.add(cardButton);
  previousCard.disabled = true;
  cardButton.disabled = true;

  saveMatchedCards(Array.from(cardsMatched));
  resetArrays(flippedEmojis, cardButtons); // Clear arrays for the next flip attempt

  if (cardsMatched.size === 10) {
    stopTimer();
    setTimeout(winGame, 1500);
  }
};

export default handleMatchedCards;
