import axios from "axios";

const createCardGrid = async () => {
  const cardsGrid = document.getElementById("cards-grid") as HTMLDivElement;
  if (!cardsGrid) return;

  const d = await axios.get("https://unpkg.com/emoji.json@15.1.0/emoji.json");
  const response = d.data;
  const emojiData = response.filter(
    (emoji: { char: string }, index: number) =>
      index < 134 && emoji.char !== "☺️" && emoji.char !== "☺"
  );

  //   const randomNumber = () => {
  //     return Math.floor(Math.random() * emojiData.length - 1);
  //   };

  //   emojiData.forEach((a) => console.log(a.char));
  let cardButtonElements = ""; // To hold all the button elements

  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * emojiData.length);
    const emojiCharacter = emojiData[randomIndex].char; // Get a random emoji

    // Concatenating each button element to the string
    cardButtonElements += `
        <button
            id="cardId-${i}"
            class="relative shadow-xl transition-all duration-500 [transform-style:preserve-3d] select-none place-items-center grid rounded-2xl bg-white font-bold text-3xl size-20"
        >
            <div
              id="front-card-${i}"
              class="absolute inset-0 grid place-items-center"
            >
              ${emojiCharacter}
            </div>

            <div
              id="back-card-${i}"
              class="absolute inset-0 grid place-items-center [backface-visibility:hidden]"
            >
              ?
            </div>
        </button>`;
  }

  cardsGrid.innerHTML = cardButtonElements; // Assigning the generated button elements to the cardsGrid
};

export default createCardGrid;
