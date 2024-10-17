import createCardsGrid from "./createCardsGrid";
import flipCards from "./flipCards";
import movesCounter from "./movesCounter";
import resetGame from "./resetGame";
import timer from "./timer";

await createCardsGrid();
await flipCards();
await movesCounter();
resetGame();
timer();
