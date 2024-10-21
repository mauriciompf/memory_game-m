import {
  getTimerIntervalState,
  setTimerIntervalState,
} from "./timerIntervalState";

const stopTimer = () => {
  if (getTimerIntervalState !== null) {
    clearInterval(getTimerIntervalState()!);

    setTimerIntervalState(null);
  }
};

export default stopTimer;
