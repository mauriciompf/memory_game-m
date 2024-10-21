import resetConfirmationPopUp from "./handleClicks/resetConfirmationPopUp";

const resetGame = () => {
  const resetDiv = document.getElementById("reset-game") as HTMLDivElement;
  const resetButton = document.createElement("button") as HTMLButtonElement;
  resetButton.className =
    "block rounded-2xl ring-offset-2 hover:ring-2 focus:ring-2 bg-white px-2 py-3 transition-all";
  resetButton.textContent = "Reset Game [space]";
  resetButton.id = "reset-btn";
  resetDiv.appendChild(resetButton);

  resetButton.addEventListener("click", () => resetConfirmationPopUp());

  // Space bar action
  document.body.addEventListener("keyup", (e: KeyboardEvent) => {
    const winBox = document.getElementById("win-box") as HTMLDivElement;
    const resetMessage = document.getElementById(
      "reset-message"
    ) as HTMLDivElement;
    if (winBox || resetMessage) return; // Prevent space bar action if is winner or reset
    if (e.key === " ") resetConfirmationPopUp();
  });
};

export default resetGame;
