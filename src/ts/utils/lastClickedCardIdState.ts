let lastClickedCardId: string | null = null; // To track the last clicked card

export const setLastClickedCardId = (state: string | null) =>
  (lastClickedCardId = state);

export const getLastClickedCardId = () => lastClickedCardId;
