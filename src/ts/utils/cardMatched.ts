class CustomCardSet extends Set<HTMLButtonElement> {
  addAtributes(...buttonElements: HTMLButtonElement[]) {
    buttonElements.forEach((button) => {
      this.add(button);

      button.classList.add("ring-2", "ring-[#FFDF00]", "cursor-default");

      button.disabled = true;
    });
  }
}

const cardsMatched = new CustomCardSet();
export default cardsMatched;
