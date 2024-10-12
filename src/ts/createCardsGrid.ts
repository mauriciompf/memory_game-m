import fetchEmojiData from "./utils/fetchEmojiData";
import shuffle from "./utils/shuffle";

const createCardsGrid = async () => {
  const cardsGrid = document.getElementById("cards-grid") as HTMLDivElement;
  if (!cardsGrid) return;

  cardsGrid.innerHTML = "";

  let shuffledEmojiCards = JSON.parse(
    localStorage.getItem("shuffledEmojiCards") || "null"
  );

  if (!shuffledEmojiCards) {
    const emojiData = await fetchEmojiData();
    if (!emojiData) return;

    // Create array of emojis
    const singleEmojis = [];
    const usedIndices = new Set<number>(); // Track <unique> used indices

    for (let i = 0; i < 5; i++) {
      let randomIndex;

      // Generating a random index until it finds one that hasn't been used yet.
      // If it's been used, the loop runs again to find a new one.
      do {
        randomIndex = Math.floor(Math.random() * emojiData.length);
      } while (usedIndices.has(randomIndex));

      usedIndices.add(randomIndex); // Prevent use again

      const emojiCharacter = emojiData[randomIndex].char; // Get a random emoji
      singleEmojis.push(emojiCharacter);
    }

    const fullEmojiCards = singleEmojis.flatMap((e) => [e, e]); // Duplicate every single emoji

    shuffledEmojiCards = shuffle(fullEmojiCards);

    localStorage.setItem(
      "shuffledEmojiCards",
      JSON.stringify(shuffledEmojiCards)
    );
  }

  for (let i = 0; i < shuffledEmojiCards.length; i++) {
    const button = document.createElement("button");
    button.ariaLabel = "Emoji card with back face showing";
    button.className =
      "relative shadow-xl transition-all duration-500 [transform-style:preserve-3d] select-none place-items-center grid rounded-2xl bg-white font-bold text-3xl size-16";
    button.id = `cardId-${i}`;

    const frontCard = document.createElement("div");
    frontCard.className =
      "absolute inset-0 grid place-items-center [backface-visibility:hidden] [transform:rotateY(180deg)]";
    frontCard.textContent = shuffledEmojiCards[i];

    const backCard = document.createElement("div");
    backCard.className =
      "absolute inset-0 grid place-items-center [backface-visibility:hidden]";
    backCard.textContent = "?";

    button.append(frontCard, backCard);
    cardsGrid.appendChild(button);
  }

  return shuffledEmojiCards;
};

export default createCardsGrid;
