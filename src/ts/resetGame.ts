import resetConfirmationPopUp from "./utils/resetConfirmationPopUp";

const resetGame = () => {
  const resetDiv = document.getElementById("reset-game") as HTMLDivElement;
  const resetButton = document.createElement("button") as HTMLButtonElement;
  resetButton.className =
    "block rounded-2xl ring-offset-2 hover:ring-2 focus:ring-2 bg-white px-2 py-3 transition-all";
  resetButton.textContent = "Reset Game (space)";
  resetDiv.appendChild(resetButton);

  resetButton.addEventListener("click", () =>
    resetConfirmationPopUp(resetButton)
  );
  document.body.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.key === " ") resetConfirmationPopUp(resetButton);
  });
};

export default resetGame;
