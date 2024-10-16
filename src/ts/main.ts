import createCardsGrid from "./createCardsGrid";
import flipCards from "./flipCards";
import movesCounter from "./movesCounter";
import resetGame from "./resetGame";

await createCardsGrid();
await flipCards();

await movesCounter();
resetGame();
