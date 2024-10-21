export interface Emoji {
  char: string;
  name: string;
}

export interface DataRegister {
  id: number;
  Hour: Date | string;
  Moves: string | null;
  Cards_quantity: number;
  Timer: string | null;
}
