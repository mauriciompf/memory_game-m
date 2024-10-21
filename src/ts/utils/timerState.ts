let timerStarted: boolean = false;

export const setTimerStarted = (state: boolean) => (timerStarted = state);
export const getTimerStarted = () => timerStarted;
