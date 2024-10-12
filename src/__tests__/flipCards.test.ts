import { describe, it, expect, beforeEach } from "vitest";
import { fireEvent } from "@testing-library/dom";
import flipCards from "../ts/flipCards";
import disableAllCardButtons from "../ts/utils/disableAllCardButtons";
import enableAllCardButtons from "../ts/utils/enableAllCardButtons";
import saveMatchedCards from "../ts/utils/saveMatchedCards";

describe("flipCards", async () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="cards-grid"></div>'; // Parent element
  });

  await flipCards();

  const firstCard = document.getElementById("cardId-0") as HTMLDivElement;
  const secondCard = document.getElementById("cardId-1") as HTMLDivElement;

  it("should add the class [transform:rotateY(180deg)] to cardId-0 when clicked", () => {
    if (!firstCard) return;

    fireEvent.click(firstCard);

    expect(firstCard.classList.contains("[transform:rotateY(180deg)]")).toBe(
      true
    );
  });

  it("should disable and enable card buttons after two clicks", () => {
    if (!firstCard && !secondCard) return;

    fireEvent.click(firstCard);
    fireEvent.click(secondCard);

    expect(disableAllCardButtons).toHaveBeenCalledOnce();
    expect(enableAllCardButtons).toHaveBeenCalledOnce();
  });

  it("should save matched cards when two matching cards are flipped ", () => {
    if (!firstCard && !secondCard) return;

    fireEvent.click(firstCard);
    fireEvent.click(secondCard);

    expect(saveMatchedCards).toHaveBeenCalled();
  });

  it("should flip unmatched cards back after a delay", () => {
    if (!firstCard && !secondCard) return;

    fireEvent.click(firstCard);
    fireEvent.click(secondCard);

    setTimeout(() => {
      expect(firstCard.classList).not.toContain("[transform:rotateY(180deg)]");
      expect(secondCard.classList).not.toContain("[transform:rotateY(180deg)]");
    }, 1000);
  });
});
