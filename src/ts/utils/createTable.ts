import moreThanTen from "./moreThanTen";
import { DataRegister } from "./types";

export const createTable = (): HTMLTableElement => {
  const today = new Date();
  const time = `${moreThanTen(today.getHours())}:${moreThanTen(
    today.getMinutes()
  )}`;

  const headingLabels = ["Hour", "Moves", "Cards quantity", "Timer"];
  const dataRegister: DataRegister[] = [
    {
      id: 0,
      Hour: time,
      Moves: localStorage.getItem("movesCounter") || "0",
      Cards_quantity: 10,
      Timer: `${localStorage.getItem("minutes") || "00"}:${
        localStorage.getItem("seconds") || "00"
      }`,
    },
  ];

  const table = document.createElement("table") as HTMLTableElement;

  for (let i = 0; i < headingLabels.length; i++) {
    const row = document.createElement("tr");
    row.className = "text-xl";
    table.appendChild(row);

    const headCell = document.createElement("th");
    headCell.textContent = headingLabels[i];
    headCell.className = "pr-6";

    const cell = document.createElement("td");

    const { id, ...rest } = dataRegister[0]; // Assuming single row of data for now
    const key = headingLabels[i].replace(" ", "_");
    cell.textContent = rest[key as keyof typeof rest]?.toString() || "";

    row.append(headCell, cell);
  }

  return table;
};

export default createTable;
