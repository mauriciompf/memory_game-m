const createStyledButton = (text: string): HTMLButtonElement => {
  const button = document.createElement("button") as HTMLButtonElement;
  button.className =
    "rounded-2xl w-16 bg-white px-2 py-3 ring-offset-2 hover:ring-2 focus:ring-2";
  button.textContent = text;
  return button;
};
export default createStyledButton;
