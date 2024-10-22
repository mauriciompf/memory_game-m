/// <reference types="vitest" />
import { defineConfig } from "vite";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: "happy-dom",
  },
};

export default defineConfig({
  test: vitestConfig.test,
  base: "/memory_game_m/",
  build: {
    target: "ES2022",
  },
});
