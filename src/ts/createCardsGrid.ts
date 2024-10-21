import generateUniqueEmojiSet from "./utils/generateUniqueEmojiSet";

const createCardsGrid = async () => {
  const cardsGrid = document.getElementById("cards-grid") as HTMLDivElement;
  if (!cardsGrid) return;

  cardsGrid.innerHTML = ""; // Clear parent element

  let shuffledEmojiCards = JSON.parse(
    localStorage.getItem("shuffledEmojiCards") || ""
  );

  if (!shuffledEmojiCards) {
    shuffledEmojiCards = await generateUniqueEmojiSet();

    localStorage.setItem(
      "shuffledEmojiCards",
      JSON.stringify(shuffledEmojiCards)
    );
  }

  for (let i = 0; i < shuffledEmojiCards.length; i++) {
    const button = document.createElement("button");
    button.ariaLabel = "Emoji card with back face showing";
    button.className =
      "relative ring-offset-2 hover:ring-2 focus:ring-2 shadow-xl transition-all duration-500 [transform-style:preserve-3d] select-none place-items-center grid rounded-2xl bg-white font-bold text-3xl size-16";
    button.id = `cardId-${i}`;

    const frontCard = document.createElement("div");
    frontCard.className =
      "absolute inset-0 grid place-items-center [backface-visibility:hidden] [transform:rotateY(180deg)]";
    frontCard.textContent = shuffledEmojiCards[i];
    frontCard.id = `front-cardId-${i}`;

    const backCard = document.createElement("div");
    backCard.className =
      "absolute inset-0 grid place-items-center [backface-visibility:hidden]";
    backCard.textContent = "?"; // Placeholder

    button.append(frontCard, backCard);
    cardsGrid.appendChild(button);
  }

  return shuffledEmojiCards;
};

export default createCardsGrid;
