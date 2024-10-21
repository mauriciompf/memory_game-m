import { flippedEmojis } from "../flipCards";
// import disableAllCardButtons from "./disableAllCardButtons";
import handleMatchedCards from "./handleMatchedCards";
import handleUnmatchedCards from "./handleUnmatchedCards";

const handleFlippedCards = (
  currentEmoji: string,
  cardButton: HTMLButtonElement
) => {
  const previousEmoji = flippedEmojis[0];
  if (currentEmoji === previousEmoji) handleMatchedCards(cardButton);

  handleUnmatchedCards();
};

export default handleFlippedCards;
