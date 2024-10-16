import disableAllCardButtons from "./disableAllCardButtons";
import enableAllCardButtons from "./enableAllCardButtons";
import generateUniqueEmojiSet from "./generateUniqueEmojiSet";

const handleResetButton = async (resetButton: HTMLButtonElement) => {
  // Count Reset
  const movesCounterElem = document.getElementById(
    "moves-counter"
  ) as HTMLDivElement;
  const movesText = movesCounterElem?.querySelector("span") as HTMLSpanElement;
  localStorage.setItem("movesCounter", JSON.stringify(0));
  movesText!.textContent = `Moves: 0`;

  // Emoji cards reset
  const newEmojis = await generateUniqueEmojiSet();

  localStorage.setItem("shuffledEmojiCards", JSON.stringify(newEmojis));
  localStorage.setItem("matchedCards", JSON.stringify([]));

  for (let i = 0; i < 10; i++) {
    const frontCard = document.getElementById(
      `front-cardId-${i}`
    ) as HTMLDivElement;
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    resetButton.classList.add("cursor-not-allowed");
    cardButton.disabled = false;
    resetButton.disabled = true;
    disableAllCardButtons();

    setTimeout(() => {
      resetButton.classList.remove("cursor-not-allowed");
      enableAllCardButtons();
      frontCard!.textContent = newEmojis![i];
      resetButton.disabled = false;
    }, 1000);

    // Flip all cards to back
    cardButton?.classList.remove("[transform:rotateY(180deg)]");
  }
};

export default handleResetButton;
