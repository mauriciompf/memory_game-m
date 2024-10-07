import { describe, it, expect, beforeEach } from "vitest";
import { fireEvent } from "@testing-library/dom";
import flipCards from "../ts/flipCards";

describe("flipCards", () => {
  for (let i = 0; i < 10; i++) {
    beforeEach(() => {
      document.body.innerHTML = "";

      for (let i = 0; i < 10; i++) {
        const button = document.createElement("button");
        button.id = `cardId-${i}`;
        document.body.appendChild(button);
      }
    });
  }

  it("should add in cardId-0 the class [transform:rotateY(180deg)] when clicked", async () => {
    await flipCards();

    const cardButton = window.document.getElementById(
      "cardId-0"
    ) as HTMLButtonElement;

    if (!cardButton) return;

    fireEvent.click(cardButton);

    expect(cardButton.classList.contains("[transform:rotateY(180deg)]")).toBe(
      true
    );
  });
});
