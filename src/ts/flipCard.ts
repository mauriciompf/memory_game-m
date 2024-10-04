const flipCard = () => {
  const cardButton = document.getElementById("cardId") as HTMLButtonElement;

  if (!cardButton) return;

  cardButton.onclick = () =>
    cardButton.classList.add("[transform:rotateY(180deg)]");
};

export default flipCard;
