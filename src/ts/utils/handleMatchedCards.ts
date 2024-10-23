import { cardButtons, flippedEmojis } from "../flipCards";
import winGame from "../winGame";
import cardsMatched from "./cardMatched";
import resetArrays from "./resetArrays";
import saveMatchedCards from "./saveMatchedCards";
import stopTimer from "./stopTimer";
import audio from "../../meme.mp3";

const handleMatchedCards = (cardButton: HTMLButtonElement) => {
  const yupii = new Audio(audio);
  yupii.volume = 0.2;

  const previousCard = cardButtons[0];

  cardsMatched.addAtributes(previousCard, cardButton);

  saveMatchedCards(Array.from(cardsMatched)); // Save in localStorage

  resetArrays(flippedEmojis, cardButtons); // Clear arrays for the next flip attempt

  // Win condition
  if (cardsMatched.size === 12) {
    if (parseInt(localStorage.getItem("seconds") || "") <= 30)
      yupii.play().catch((error) => console.error("Audio failed:", error));

    stopTimer();

    setTimeout(winGame, 1500);
  }
};

export default handleMatchedCards;
