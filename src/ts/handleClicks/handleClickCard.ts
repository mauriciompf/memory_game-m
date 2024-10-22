import { cardButtons, cardsMatched, flippedEmojis } from "../flipCards";
import handleFlipCard from "../utils/handleFlipCard";
import handleFlippedCards from "../utils/handleFlippedCards";
import startTimer from "../utils/startTimer";
import { getTimerStarted, setTimerStarted } from "../utils/timerState";
import winGame from "../winGame";

const handleClickCard = (event: MouseEvent, cardButton: HTMLButtonElement) => {
  if (cardsMatched.size === 12) winGame(); // Win condition
  if (cardsMatched.size === 0) cardsMatched.clear(); // Allow flip the same card again after reset
  if (cardsMatched.has(cardButton) || cardButtons.includes(cardButton)) return; // Don't flip already matched cards;

  // Start the timer on the first card flip
  if (!getTimerStarted()) {
    startTimer();
    setTimerStarted(true); // Continue timer when reset
  }

  const currentEmojiElement = (
    event.currentTarget as HTMLElement
  ).querySelector("div");
  const currentEmoji = currentEmojiElement?.innerText;
  if (!currentEmoji) return;

  handleFlipCard(cardButton, currentEmoji); // Action to flip the card

  if (flippedEmojis.length <= 1) return; // Par card

  handleFlippedCards(currentEmoji, cardButton); // Cards behavior
};

export default handleClickCard;
