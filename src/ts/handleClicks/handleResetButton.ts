import { cardButtons, cardsMatched, flippedEmojis } from "../flipCards";
import disableAllCardButtons from "../utils/disableAllCardButtons";
import enableAllCardButtons from "../utils/enableAllCardButtons";
import generateUniqueEmojiSet from "../utils/generateUniqueEmojiSet";
import { setLastClickedCardId } from "../utils/lastClickedCardIdState";
import { resetArrays } from "../utils/resetArrays";
import stopTimer from "../utils/stopTimer";
import { setTimerStarted } from "../utils/timerState";

const handleResetButton = async () => {
  const resetButton = document.getElementById("reset-btn") as HTMLButtonElement;
  if (!resetButton) return;

  resetButton.classList.add("cursor-not-allowed");
  resetButton.disabled = true;

  const newEmojis = await generateUniqueEmojiSet();
  localStorage.setItem("shuffledEmojiCards", JSON.stringify(newEmojis));

  // Insert new emojis set into display
  newEmojis?.forEach((emoji, i) => {
    const frontCard = document.getElementById(
      `front-cardId-${i}`
    ) as HTMLDivElement;
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    disableAllCardButtons();

    cardButton?.classList.remove("[transform:rotateY(180deg)]"); // Flip all cards to back state

    // Enable cards to flip with new emojis array
    setTimeout(() => {
      resetButton.classList.remove("cursor-not-allowed");
      resetButton.disabled = false;

      enableAllCardButtons();
      frontCard!.textContent = emoji;
    }, 1500);
  });

  // Timer reset
  const secondsLabel = document.getElementById("seconds") as HTMLSpanElement;
  const minutesLabel = document.getElementById("minutes") as HTMLSpanElement;

  secondsLabel.textContent = "00";
  minutesLabel.textContent = "00";

  localStorage.setItem("seconds", "00");
  localStorage.setItem("minutes", "00");

  stopTimer();

  setTimerStarted(false);

  // Matched cards reset
  resetArrays(cardButtons, flippedEmojis);
  cardsMatched.clear();
  localStorage.setItem("matchedCards", JSON.stringify([]));

  // Moves counter reset
  const movesCounterElem = document.getElementById(
    "moves-counter"
  ) as HTMLDivElement;
  const movesText = movesCounterElem?.querySelector("span") as HTMLSpanElement;
  localStorage.setItem("movesCounter", JSON.stringify(0));
  movesText!.textContent = `Moves: 0`;
  setLastClickedCardId(null);
};

export default handleResetButton;
