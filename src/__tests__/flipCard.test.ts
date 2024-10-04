import { describe, it, expect, beforeEach } from "vitest";
import { fireEvent } from "@testing-library/dom";
import flipCard from "../ts/flipCard";

describe("flipCard", () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="cardId"></button>';
  });

  it("should add the class [transform:rotateY(180deg)] when clicked", () => {
    flipCard();

    const cardButton = window.document.getElementById(
      "cardId"
    ) as HTMLButtonElement;

    if (!cardButton) return;

    fireEvent.click(cardButton);

    expect(cardButton.classList.contains("[transform:rotateY(180deg)]")).toBe(
      true
    );
  });
});
