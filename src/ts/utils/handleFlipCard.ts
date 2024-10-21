import { cardButtons, flippedEmojis } from "../flipCards";

const handleFlipCard = (cardButton: HTMLButtonElement, emoji: string) => {
  cardButton.classList.add("[transform:rotateY(180deg)]"); // Flip card button
  flippedEmojis.push(emoji); // Store the emoji caractere flipped
  cardButtons.push(cardButton); // Store the card button element clicked
};

export default handleFlipCard;
