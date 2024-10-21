let timerInterval: number | null = null;

export const setTimerIntervalState = (state: number | null) =>
  (timerInterval = state);
export const getTimerIntervalState = () => timerInterval;
