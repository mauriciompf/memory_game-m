import flipCard from "./flipCard";
import fetchEmojiData from "./utils/fetchEmojiData";
import shuffle from "./utils/shuffle";

const createCardsGrid = async () => {
  let cardButtonElements = ""; // To hold all the button elements
  const cardsGrid = document.getElementById("cards-grid") as HTMLDivElement;
  if (!cardsGrid) return;

  const emojiData = await fetchEmojiData();
  if (!emojiData) return;

  // Create array of emojis
  const singleEmojis = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * emojiData.length);
    const emojiCharacter = emojiData[randomIndex].char; // Get a random emoji
    singleEmojis.push(emojiCharacter);
  }

  // Duplicate every single emoji and shuffle
  const fullEmojiCards = singleEmojis.flatMap((e) => [e, e]);
  const shuffledEmojiCards = shuffle(fullEmojiCards);

  for (let i = 0; i < shuffledEmojiCards.length; i++) {
    // Concatenating each button element to the string
    cardButtonElements += `
        <button
            id="cardId-${i}"
            class="relative shadow-xl transition-all duration-500 [transform-style:preserve-3d] select-none place-items-center grid rounded-2xl bg-white font-bold text-3xl size-16 "
        >
            <div
              id="front-card-${i}"
              class="absolute inset-0 grid place-items-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
            >
              ${shuffledEmojiCards[i]}
            </div>
        
            <div
              id="back-card-${i}"
              class="absolute inset-0 grid place-items-center [backface-visibility:hidden]"
            >
              ?
            </div>
        </button>`;
  }

  cardsGrid.innerHTML = cardButtonElements;

  return shuffledEmojiCards;
};

export default createCardsGrid;
