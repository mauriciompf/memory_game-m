const loadMatchedCards = (cardsMatched: HTMLButtonElement[]) => {
  const matchedCardIds = JSON.parse(
    localStorage.getItem("matchedCards") || "[]"
  ); // Get only the matched par cards
  matchedCardIds.forEach((id: string) => {
    const matchedCardButton = document.getElementById(id) as HTMLButtonElement;

    if (matchedCardButton) {
      matchedCardButton.classList.add("[transform:rotateY(180deg)]");
      cardsMatched.push(matchedCardButton); // Keep each matched par flipped
    }
  });
};

export default loadMatchedCards;
