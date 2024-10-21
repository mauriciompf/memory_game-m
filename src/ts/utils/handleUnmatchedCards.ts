import { cardButtons, cardsMatched, flippedEmojis } from "../flipCards";
import disableAllCardButtons from "./disableAllCardButtons";
import enableAllCardButtons from "./enableAllCardButtons";
import { resetArrays } from "./resetArrays";

const handleUnmatchedCards = () => {
  cardButtons.forEach((e) => {
    setTimeout(() => {
      e.classList.remove("[transform:rotateY(180deg)]");
      resetArrays(flippedEmojis, cardButtons); // Clear arrays for the next flip attempt
    }, 1000);
  });

  disableAllCardButtons(); // Click Spamming Prevention

  setTimeout(() => {
    enableAllCardButtons(Array.from(cardsMatched));
  }, 1000);
};

export default handleUnmatchedCards;
