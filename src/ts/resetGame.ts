import resetConfirmationPopUp from "./handleClicks/resetConfirmationPopUp";

const resetGame = () => {
  const resetDiv = document.getElementById("reset-game") as HTMLDivElement;
  const resetButton = document.createElement("button") as HTMLButtonElement;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  resetButton.className =
    "block rounded-2xl ring-offset-2 hover:ring-2 focus:ring-2 transition-all px-4 py-3 bg-[#0080ff] text-white";
  resetButton.textContent = `Reset game ${isMobile ? "" : "[space]"}`;
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
