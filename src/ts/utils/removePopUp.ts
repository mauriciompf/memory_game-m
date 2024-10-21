import enableAllCardButtons from "./enableAllCardButtons";
import excludeElementFromBody from "./excludeElementFromBody";

const removePopUp = (resetMessageBox: HTMLDivElement) => {
  const resetButton = document.getElementById("reset-btn") as HTMLButtonElement;
  if (!resetButton) return;

  resetMessageBox.classList.add("opacity-0", "invisible");
  setTimeout(() => resetMessageBox.remove(), 500);
  resetButton.disabled = false;
  enableAllCardButtons();

  excludeElementFromBody(resetMessageBox).forEach((el) =>
    el.classList.remove("blur-sm", "select-none")
  );
};

export default removePopUp;
