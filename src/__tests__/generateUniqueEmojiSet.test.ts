import { describe, expect, it, vi } from "vitest";
import generateUniqueEmojiSet from "../ts/utils/generateUniqueEmojiSet";

describe("generateUniqueEmojiSet", async () => {
  const emojiSet = await generateUniqueEmojiSet();
  const mockEmojiData = Array(10)
    .fill(0)
    .map((_, i) => ({ char: `emoji${i}` }));

  it("should return an array of 10 emojis", () => {
    vi.mock("./fetchEmojiData", () => mockEmojiData);
    expect(emojiSet).toHaveLength(10);
  });

  it("should contain exactly 5 unique duplicate once", () => {
    const uniqueEmojis = new Set(emojiSet);
    expect(uniqueEmojis.size).toBe(5);
  });

  it("should shuffle the emoji array", () => {
    const orderedSet = [...mockEmojiData.map((e) => e.char)];
    expect(emojiSet).not.toEqual(orderedSet);
  });
});
