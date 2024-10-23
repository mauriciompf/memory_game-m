import generateUniqueEmojiSet from "./utils/generateUniqueEmojiSet";

const createCardsGrid = async () => {
  const cardsGrid = document.getElementById("cards-grid") as HTMLDivElement;
  if (!cardsGrid) return;

  cardsGrid.innerHTML = ""; // Clear parent element

  let shuffledEmojiCards = JSON.parse(
    localStorage.getItem("shuffledEmojiCards") || "null"
  );

  if (!shuffledEmojiCards) {
    shuffledEmojiCards = await generateUniqueEmojiSet();

    localStorage.setItem(
      "shuffledEmojiCards",
      JSON.stringify(shuffledEmojiCards)
    );
  }

  for (let i = 0; i < shuffledEmojiCards.length; i++) {
    const cardButton = document.createElement("button");
    cardButton.ariaLabel = "Emoji card with back face showing";
    cardButton.className =
      "relative ring-offset-2 hover:ring-2 focus:ring-2 shadow-xl transition-all duration-500 [transform-style:preserve-3d] select-none place-items-center grid rounded-2xl bg-white font-bold text-4xl size-16 min-[375px]:size-20";
    cardButton.id = `cardId-${i}`;

    const frontCard = document.createElement("div");
    frontCard.className =
      "absolute inset-0 grid place-items-center rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]";
    frontCard.textContent = shuffledEmojiCards[i];
    frontCard.id = `front-cardId-${i}`;

    const backCard = document.createElement("div");
    backCard.className =
      "absolute inset-0 grid place-items-center [backface-visibility:hidden]";
    backCard.textContent = "?"; // Placeholder

    cardButton.append(frontCard, backCard);
    cardsGrid.appendChild(cardButton);
  }

  return shuffledEmojiCards;
};

export default createCardsGrid;
