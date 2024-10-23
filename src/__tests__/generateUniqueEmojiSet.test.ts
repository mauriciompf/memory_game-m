import { describe, expect, it, vi } from "vitest";
import generateUniqueEmojiSet from "../ts/utils/generateUniqueEmojiSet";

describe("generateUniqueEmojiSet", async () => {
  const emojiSet = await generateUniqueEmojiSet();
  const mockEmojiData = Array(12)
    .fill(0)
    .map((_, i) => ({ char: `emoji${i}` }));

  it("should return an array of 12 emojis", () => {
    vi.mock("./fetchEmojiData", () => mockEmojiData);
    expect(emojiSet).toHaveLength(12);
  });

  it("should contain exactly 6 unique duplicate once", () => {
    const uniqueEmojis = new Set(emojiSet);
    expect(uniqueEmojis.size).toBe(6);
  });

  it("should shuffle the emoji array", () => {
    const orderedSet = [...mockEmojiData.map((e) => e.char)];
    expect(emojiSet).not.toEqual(orderedSet);
  });
});
