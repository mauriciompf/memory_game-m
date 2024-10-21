import disableAllCardButtons from "../utils/disableAllCardButtons";
// import enableAllCardButtons from "../utils/enableAllCardButtons";
import handleResetButton from "./handleResetButton";
// import moreThanTen from "../utils/moreThanTen";
import excludeElementFromBody from "../utils/excludeElementFromBody";
import removePopUp from "../utils/removePopUp";
import createStyledButton from "../utils/createStyledButton";

const resetConfirmationPopUp = () => {
  const resetButton = document.getElementById("reset-btn") as HTMLButtonElement;
  if (!resetButton) return;

  const resetMessageBox = document.createElement("div") as HTMLDivElement;
  resetMessageBox.id = "reset-message";
  resetMessageBox.className = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 place-items-center mx-auto grid size-[10rem] p-2 z-50 bg-slate-300 rounded-2xl opacity-0 invisible transition-opacity duration-100 ease-in-out`;

  const warningLabel = document.createElement("span") as HTMLSpanElement;
  warningLabel.textContent = "Are you sure?";
  warningLabel.className = "text-center text-2xl block";
  resetMessageBox.appendChild(warningLabel);

  const acceptResetBtn = createStyledButton("Yes");
  acceptResetBtn.focus();
  acceptResetBtn.addEventListener("click", () => {
    removePopUp(resetMessageBox);
    handleResetButton(); // Action reset function
  });

  const refuseResetBtn = createStyledButton("No");
  refuseResetBtn.addEventListener("click", () => removePopUp(resetMessageBox));

  const wrapButtons = document.createElement("div") as HTMLDivElement;
  wrapButtons.className = "flex gap-2";
  wrapButtons.append(acceptResetBtn, refuseResetBtn);

  resetMessageBox.appendChild(wrapButtons);
  document.body.appendChild(resetMessageBox);

  // Add blur effect in all body elements, exclude resetMessageBox
  excludeElementFromBody(resetMessageBox).forEach((el) =>
    el.classList.add("blur-sm", "select-none")
  );

  // Display resetMessageBox
  resetMessageBox.classList.remove("opacity-0", "invisible");
  resetMessageBox.classList.add("opacity-100", "visible");

  // Ensure the other buttons is disabled
  disableAllCardButtons();
  resetButton.disabled = true;
};

export default resetConfirmationPopUp;
