const timer = () => {
  const timerElem = document.getElementById("timer") as HTMLDivElement;

  const minutesLabel = document.createElement("span") as HTMLSpanElement;
  minutesLabel.textContent = localStorage.getItem("minutes") || "00";
  minutesLabel.id = "minutes";

  const secondsLabel = document.createElement("span") as HTMLSpanElement;
  secondsLabel.className = "before:content-[':']";
  secondsLabel.textContent = localStorage.getItem("seconds") || "00";
  secondsLabel.id = "seconds";

  const wrapTimer = document.createElement("div") as HTMLDivElement;
  wrapTimer.className = "rounded-2xl bg-white px-2 py-3";
  wrapTimer.append(minutesLabel, secondsLabel);

  timerElem.appendChild(wrapTimer);
};

export default timer;
