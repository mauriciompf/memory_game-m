import moreThanTen from "./moreThanTen";
import { setTimerIntervalState } from "./timerIntervalState";

const startTimer = () => {
  const secondsLabel = document.getElementById("seconds") as HTMLSpanElement;
  const minutesLabel = document.getElementById("minutes") as HTMLSpanElement;

  let seconds = parseInt(localStorage.getItem("seconds") || "00");

  const setTime = () => {
    seconds++;

    const getSeconds = moreThanTen(seconds % 60);
    const getMinutes = moreThanTen(Math.floor(seconds / 60));

    localStorage.setItem("seconds", getSeconds);
    localStorage.setItem("minutes", getMinutes);

    secondsLabel.textContent = getSeconds;
    minutesLabel.textContent = getMinutes;
  };

  setTimerIntervalState(setInterval(setTime, 1000));
};

export default startTimer;
