import createCardsGrid from "./createCardsGrid";
import disableAllCardButtons from "./utils/disableAllCardButtons";
import enableAllCardButtons from "./utils/enableAllCardButtons";
import loadMatchedCards from "./utils/loadMatchedCards";
import saveMatchedCards from "./utils/saveMatchedCards";
import startTimer from "./utils/startTimer";
import winBox from "./winBox";

const flipCards = async () => {
  await createCardsGrid(); // Emojis were fully complete loaded

  let clickCount = 0,
    flippedEmojis: string[] = [],
    cardButtons: HTMLButtonElement[] = [], // All card buttons
    cardsMatched: HTMLButtonElement[] = [],
    timerStarted = false;

  loadMatchedCards(cardsMatched); // Call matched cards local storage

  const resetArrays = () => {
    // Clear arrays for the next flip attempt
    flippedEmojis = []; // Keep flip cards in par
    cardButtons = []; // Prevent flip matched cards
  };

  const flipCard = (cardButton: HTMLButtonElement, emoji: string) => {
    cardButton.classList.add("[transform:rotateY(180deg)]"); // Flip card button
    flippedEmojis.push(emoji); // Store the emoji caractere flipped
    cardButtons.push(cardButton); // Store the card button element clicked
  };

  const handleClickCard = (
    event: MouseEvent,
    cardButton: HTMLButtonElement
  ) => {
    if (JSON.parse(localStorage.getItem("matchedCards") || "").length === 0)
      cardsMatched = [];

    if (cardsMatched.includes(cardButton) || cardButtons.includes(cardButton))
      return; // Don't flip already matched cards

    if (!timerStarted) {
      startTimer(); // Start the timer on the first card flip
      timerStarted = true;
    }

    const currentEmojiElement = (
      event.currentTarget as HTMLElement
    ).querySelector("div");
    if (!currentEmojiElement) return;

    const currentEmoji = currentEmojiElement.innerText; // Get flipped emoji caractere

    flipCard(cardButton, currentEmoji);

    // 2 flipped cards
    if (flippedEmojis.length > 1) {
      const previousEmoji = flippedEmojis[0];
      const previousCard = cardButtons[0];

      if (currentEmoji !== previousEmoji) {
        // Unmatched cards
        cardButtons.forEach((e) => {
          setTimeout(() => {
            e.classList.remove("[transform:rotateY(180deg)]");
            resetArrays();
          }, 1000);
        });
      } else {
        // Matched cards
        cardsMatched.push(previousCard, cardButton); // Store matched cards
        previousCard.disabled = true;
        cardButton.disabled = true;
        saveMatchedCards(cardsMatched);
        resetArrays();

        if (cardsMatched.length === 10) winBox();
      }
    }

    clickCount++; // Count every click

    // Disabling card button for each par flipped and enable after a delay
    if (clickCount === 2) {
      disableAllCardButtons();

      setTimeout(() => {
        enableAllCardButtons(cardsMatched);
        clickCount = 0; // Reset count
      }, 1000);
    }
  };

  for (let i = 0; i < 10; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;
    if (!cardButton) return;

    cardButton.addEventListener("click", (event: MouseEvent) =>
      handleClickCard(event, cardButton)
    );
  }
};

export default flipCards;
