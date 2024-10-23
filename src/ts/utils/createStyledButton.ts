const createStyledButton = (text: string): HTMLButtonElement => {
  const button = document.createElement("button") as HTMLButtonElement;
  button.className =
    "rounded-2xl p-2 bg-white hover:bg-[#0080ff] hover:text-white focus:bg-[#0080ff] focus:text-white ring-offset-2 hover:ring-2 focus:ring-2";
  button.textContent = text;
  return button;
};
export default createStyledButton;
