const enableAllCardButtons = (cardsMatched?: HTMLButtonElement[]) => {
  for (let i = 0; i < 12; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    if (cardsMatched && !cardsMatched.includes(cardButton)) {
      cardButton.disabled = false;
    }

    if (cardButton) cardButton.disabled = false;
  }
};

export default enableAllCardButtons;
