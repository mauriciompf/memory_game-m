import createCardsGrid from "./createCardsGrid";

const flipCard = async () => {
  await createCardsGrid();

  for (let i = 0; i < 10; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;

    if (!cardButton) return;

    cardButton.addEventListener("click", () => {
      cardButton.classList.add("[transform:rotateY(180deg)]");
    });
  }
};

export default flipCard;
