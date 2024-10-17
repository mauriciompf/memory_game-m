const winBox = () => {
  const box = document.createElement("div") as HTMLDivElement;
  box.className =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 place-items-center mx-auto gap-4 grid w-[15.1rem] shadow-2xl w-max p-4 z-50 bg-white rounded-2xl text-left";

  const winLabel = document.createElement("span") as HTMLSpanElement;
  winLabel.className = "text-3xl";
  winLabel.textContent = "You win!";

  const table = document.createElement("table") as HTMLTableElement;

  const headingLabels = ["Hour", "Moves", "Cards Quantity", "Timer"];

  for (let i = 0; i < headingLabels.length; i++) {
    const row = document.createElement("tr");
    row.className = "text-xl";
    table.appendChild(row);

    const headCell = document.createElement("th");
    headCell.textContent = headingLabels[i];
    headCell.className = "pr-6";

    const cell = document.createElement("td");
    cell.textContent = "00";

    row.append(headCell, cell);
  }

  const closeButton = document.createElement("button") as HTMLButtonElement;
  closeButton.className =
    "absolute text-3xl top-2 right-4 hover:text-red-500 focus:text-red-500";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-square-xmark";

  closeButton.appendChild(icon);

  const playAgainButton = document.createElement("button") as HTMLButtonElement;
  playAgainButton.textContent = "Play again";
  playAgainButton.className =
    "text-2xl bg-slate-300 transition-all hover:ring-2 focus:ring-2 px-4 py-2 rounded-2xl";

  box.append(closeButton, winLabel, table, playAgainButton);

  document.body.appendChild(box);
};

export default winBox;
