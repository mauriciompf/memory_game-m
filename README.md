# Memory Game

This project is a card-matching memory game where users can flip cards to reveal [emojis](https://unpkg.com/emoji.json@15.1.0/emoji.json), and match pairs to win the game. It includes key features such as a move counter, a timer, and the ability to restart the game with shuffled cards.

## Features

- **Display Card Grid**

  - A grid of face-down cards is shown at the start of the game, ready for interaction.

- **Flip Cards**

  - Click or tap on a card to flip it and reveal the emoji. The goal is to find matching pairs.

- **Matching Cards**

  - If two cards match, they stay flipped. If they don't match, they flip back after a short delay.

- **Move Counter**

  - The game tracks how many moves the player has made (a move is counted every time a card is flipped).

- **Timer**

  - The game starts tracking time when the first card is flipped, and it stops when all pairs are matched.

- **Win Condition**

  - A congratulatory message or animation is shown when all pairs have been matched. It also tracks the number of moves, time taken, and the number of cards played.

- **Restart/Reset Game**

  - A button allows players to restart the game with a new shuffled arrangement of cards. The game state is reset, including the move counter and timer.

## Usage

- Upon starting the game, all cards are face down.

- Click on any card to flip it and reveal its emoji.

- The objective is to find and match all pairs of cards.

- The move counter tracks your progress, and a timer starts when you flip the first card.

- If you match all pairs, you'll receive a congratulatory message and can restart the game.

## Tools Used

- **Vite**: A fast build tool for optimized builds.

- **Vitest**: A unit testing framework tailored for Vite projects, used to test game logic.

- **TypeScript**: A typed JavaScript for improved code quality and error checking.

- **Tailwind CSS**: A utility-first CSS framework
