import createCardsGrid from "./createCardsGrid";
import disableAllCardButtons from "./utils/disableAllCardButtons";
import enableAllCardButtons from "./utils/enableAllCardButtons";

const flipCards = async () => {
  await createCardsGrid();
  let clickCount = 0;

  for (let i = 0; i < 10; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;
    if (!cardButton) return;

    cardButton.addEventListener("click", () => {
      cardButton.classList.add("[transform:rotateY(180deg)]"); // Flip card button
      clickCount++;

      // Disabling card button for each par flipled and enable after few seconds
      if (clickCount === 2) {
        disableAllCardButtons();

        setTimeout(() => {
          enableAllCardButtons();
          clickCount = 0; // Reset count
        }, 1250);
      }
    });
  }
};

export default flipCards;
