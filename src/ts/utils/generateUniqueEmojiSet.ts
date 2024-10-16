import fetchEmojiData from "./fetchEmojiData";
import shuffle from "./shuffle";

const generateUniqueEmojiSet = async () => {
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

  return shuffle(fullEmojiCards);
};

export default generateUniqueEmojiSet;
