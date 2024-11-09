import { describe, test, expect } from "vitest";
import { returnNextArray } from "./index";
import { Cell } from "./Cell.js";

describe("Juego de la vida", () => {
  test("Debería devolver [0, 1, 0]", () => {
    const value = returnNextArray([1, 1, 1]);
    expect(value).toEqual([0, 1, 0]);
  });

  test("Debería devolver [0, 0, 0]", () => {
    const value = returnNextArray([0, 1, 0]);
    expect(value).toEqual([0, 0, 0]);
  });

  test("Debería devolver [0, 1, 1, 1, 1, 0]", () => {
    const value = returnNextArray([1, 1, 1, 1, 1, 1]);
    expect(value).toEqual([0, 1, 1, 1, 1, 0]);
  });

  test("Debería devolver [0, 0, 0, 0, 0][0, 0, 0, 0, 0][0, 0, 0, 0, 0]", () => {
    let array = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const game = new Cell(array);
    game.calcularVecinos(1, 1);
    game.iAmAlive();
  });
});
