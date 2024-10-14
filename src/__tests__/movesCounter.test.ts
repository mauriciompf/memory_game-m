import { beforeEach, describe, expect, it } from "vitest";
import movesCounter from "../ts/movesCounter";
import { fireEvent } from "@testing-library/dom";

describe("movesCounter", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem("movesCounter", JSON.stringify(0));

    movesCounter();
  });

  it("should update move counter and localStorage when card is clicked", async () => {
    const cardButton = document.getElementById("cardId-0") as HTMLButtonElement;
    const counterDiv = document.getElementById(
      "moves-counter"
    ) as HTMLDivElement;
    const counterText = counterDiv?.querySelector("span") as HTMLSpanElement;
    if (!cardButton && !counterDiv && !counterText) return;

    fireEvent.click(cardButton);

    expect(counterText?.textContent).toBe("Moves 1");
    expect(localStorage.getItem("movesCounter")).toBe("1");
  });
});
