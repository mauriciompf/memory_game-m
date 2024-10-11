const saveMatchedCards = (cardsMatched: HTMLButtonElement[]) => {
  const matchedCardIds = cardsMatched.map((card) => card.id);
  localStorage.setItem("matchedCards", JSON.stringify(matchedCardIds));
};

export default saveMatchedCards;
