import handleResetButton from "../handleClicks/handleResetButton";
import enableAllCardButtons from "./enableAllCardButtons";
import excludeElementFromBody from "./excludeElementFromBody";

export const createPlayAgainButton = (): HTMLButtonElement => {
  const playAgainButton = document.createElement("button") as HTMLButtonElement;
  playAgainButton.textContent = "Play again";
  playAgainButton.className =
    "text-2xl bg-slate-300 transition-all hover:ring-2 focus:ring-2 px-4 py-2 rounded-2xl";

  playAgainButton.addEventListener("click", () => {
    const winBox = document.getElementById("win-box") as HTMLDivElement;
    const resetButton = document.getElementById(
      "reset-btn"
    ) as HTMLButtonElement;

    handleResetButton();
    enableAllCardButtons();

    resetButton.disabled = false;
    excludeElementFromBody(winBox).forEach((el) =>
      el.classList.remove("blur-sm")
    );
    winBox.remove();
  });

  return playAgainButton;
};

export default createPlayAgainButton;
