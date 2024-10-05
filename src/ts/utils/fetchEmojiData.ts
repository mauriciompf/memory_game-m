import axios from "axios";
import { Emoji } from "./types";

const fetchEmojiData = async (): Promise<Emoji[] | undefined> => {
  try {
    const { data: response } = await axios.get<Emoji[]>(
      "https://unpkg.com/emoji.json@15.1.0/emoji.json"
    );

    const emojiData = response.filter(
      (emoji, index) => index < 134 && emoji.char !== "☺️" && emoji.char !== "☺"
    );

    return emojiData;
  } catch (error) {
    console.error("Error in fetching data: ", (error as Error).message);
  }
};

export default fetchEmojiData;
