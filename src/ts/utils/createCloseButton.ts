import excludeElementFromBody from "./excludeElementFromBody";
import stopTimer from "./stopTimer";

export const createCloseButton = (): HTMLButtonElement => {
  const closeButton = document.createElement("button") as HTMLButtonElement;
  closeButton.className =
    "absolute text-3xl top-2 right-4 hover:text-red-500 focus:text-red-500";

  closeButton.addEventListener("click", () => {
    const winBox = document.getElementById("win-box") as HTMLDivElement;
    const resetButton = document.getElementById(
      "reset-btn"
    ) as HTMLButtonElement;

    stopTimer();
    winBox.remove();
    resetButton.disabled = false;

    excludeElementFromBody(winBox).forEach((el) =>
      el.classList.remove("blur-sm", "select-none")
    );
  });

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-square-xmark";
  closeButton.appendChild(icon);

  return closeButton;
};

export default createCloseButton;
