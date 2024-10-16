import disableAllCardButtons from "./disableAllCardButtons";
import enableAllCardButtons from "./enableAllCardButtons";
import handleResetButton from "./handleResetButton";

const resetMessage = document.createElement("div") as HTMLDivElement;

const resetConfirmationPopUp = (resetButton: HTMLButtonElement) => {
  disableAllCardButtons();
  resetButton.disabled = true;
  resetMessage.textContent = "";
  resetMessage.className = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 place-items-center mx-auto grid size-[10rem] p-2 z-50 bg-slate-300 rounded-2xl opacity-0 invisible transition-opacity duration-100 ease-in-out`;

  const warning = document.createElement("span") as HTMLSpanElement;
  warning.textContent = "Are you sure?";
  warning.className = "text-center text-2xl block";
  resetMessage.appendChild(warning);

  const allOtherElements = Array.from(document.body.children).filter(
    (el) => el !== resetMessage
  ); //  Get all elements but the resetMessage (popUp)

  const removePopUp = () => {
    resetMessage.classList.add("opacity-0", "invisible");
    setTimeout(() => resetMessage.remove(), 500);
    resetButton.disabled = false;
    enableAllCardButtons();
    allOtherElements.forEach((el) => el.classList.remove("blur-sm"));
  };

  const acceptResetBtn = document.createElement("button") as HTMLButtonElement;
  acceptResetBtn.className =
    "rounded-2xl w-16 bg-white px-2 py-3 ring-offset-2 hover:ring-2 focus:ring-2";
  acceptResetBtn.textContent = "Yes";
  acceptResetBtn.addEventListener("click", () => {
    handleResetButton(resetButton); // Action function
    removePopUp();
  });

  const refuseResetBtn = document.createElement("button") as HTMLButtonElement;
  refuseResetBtn.className =
    "rounded-2xl w-16 bg-white px-2 py-3 ring-offset-2 hover:ring-2 focus:ring-2";
  refuseResetBtn.textContent = "No";
  refuseResetBtn.addEventListener("click", removePopUp);

  const wrapButtons = document.createElement("div") as HTMLDivElement;
  wrapButtons.className = "flex gap-2";
  wrapButtons.append(acceptResetBtn, refuseResetBtn);

  resetMessage.appendChild(wrapButtons);

  document.body.className = "relative font-bold";
  document.body.appendChild(resetMessage);

  allOtherElements.forEach((el) => el.classList.add("blur-sm"));

  setTimeout(() => {
    resetMessage.classList.remove("opacity-0", "invisible");
    resetMessage.classList.add("opacity-100", "visible");
  }, 100);
};

export default resetConfirmationPopUp;
