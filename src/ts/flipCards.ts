import createCardsGrid from "./createCardsGrid";
import disableAllCardButtons from "./utils/disableAllCardButtons";
import enableAllCardButtons from "./utils/enableAllCardButtons";
import loadMatchedCards from "./utils/loadMatchedCards";
import saveMatchedCards from "./utils/saveMatchedCards";

const flipCards = async () => {
  await createCardsGrid();

  let clickCount = 0,
    flippedEmojis: string[] = [],
    cardButtons: HTMLButtonElement[] = [], // All card buttons
    cardsMatched: HTMLButtonElement[] = [];

  const resetArrays = () => {
    // Clear arrays for the next flip attempt
    flippedEmojis = []; // Keep flip cards in par
    cardButtons = []; // Prevent flip matched cards
  };

  loadMatchedCards(cardsMatched);

  for (let i = 0; i < 10; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    if (!cardButton) return;

    cardButton.addEventListener("click", (event: any) => {
      if (cardsMatched.includes(cardButton) || cardButtons.includes(cardButton))
        return; // Don't flip already matched cards

      cardButton.classList.add("[transform:rotateY(180deg)]"); // Flip card button

      const currentEmoji = event.currentTarget.querySelector("div").innerText;
      flippedEmojis.push(currentEmoji); // Store the emoji flipped
      cardButtons.push(cardButton); // Store the card button element clicked

      if (flippedEmojis.length > 1) {
        const previousEmoji = flippedEmojis[0];
        const previousCard = cardButtons[0];

        if (currentEmoji !== previousEmoji) {
          // Flip back the unmatched cards after a delay
          cardButtons.forEach((e) => {
            setTimeout(() => {
              e.classList.remove("[transform:rotateY(180deg)]");
            }, 1000);

            resetArrays();
          });
        } else {
          cardsMatched.push(previousCard, cardButton); // Store matched cards

          saveMatchedCards(cardsMatched);
          resetArrays();
        }
      }

      // Disabling card button for each par flipped and enable after a delay
      clickCount++;
      if (clickCount === 2) {
        disableAllCardButtons();

        setTimeout(() => {
          enableAllCardButtons();
          clickCount = 0; // Reset count
        }, 1000);
      }
    });
  }
};

export default flipCards;
