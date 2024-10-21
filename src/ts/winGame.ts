import disableAllCardButtons from "./utils/disableAllCardButtons";
import excludeElementFromBody from "./utils/excludeElementFromBody";
import { createTable } from "./utils/createTable";
import createCloseButton from "./utils/createCloseButton";
import { createPlayAgainButton } from "./utils/createPlayAgainButton";

const winGame = () => {
  const winBox = document.createElement("div") as HTMLDivElement;
  winBox.id = "win-box";
  winBox.className =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 place-items-center mx-auto gap-4 grid w-[15.1rem] shadow-2xl w-max p-4 z-50 bg-white rounded-2xl text-left";

  disableAllCardButtons();

  const resetButton = document.getElementById("reset-btn") as HTMLButtonElement;
  resetButton.disabled = true;
  resetButton.classList.add("cursor-default");

  excludeElementFromBody(winBox).forEach((el) =>
    el.classList.add("blur-sm", "select-none")
  );

  const winLabel = document.createElement("span") as HTMLSpanElement;
  winLabel.className = "text-3xl";
  winLabel.textContent = "You win!";

  const table = createTable();
  const closeButton = createCloseButton();
  const playAgainButton = createPlayAgainButton();

  winBox.append(closeButton, winLabel, table, playAgainButton);

  document.body.appendChild(winBox);
};

export default winGame;
