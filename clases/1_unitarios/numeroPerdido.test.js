//Entrada: Un array de enteros ordenados ascendentemente, que represeta una secuencia de numeros consecutirovs de 1 a n, pero donde falta un número en el medio.

//Aca lo ideal hubiese sido probar:
// 1) primero un array que comience en [0]luego ver que el inicio sea otro número random.
import { describe, test, expect, expectTypeOf } from "vitest";
import { foundNumber } from "./numeroPerdido.js";

describe("En búsqueda del número perdido", () => {
  test("Debería estar definida", () => {
    expect(foundNumber).toBeDefined();
  });

  test("Debería devolver un array", () => {
    const resultado = foundNumber([1, 2, 3, 5]);
    expect(resultado).toBe(4);
  });

  test("Debería devolver 4", () => {
    const resultado = foundNumber([1, 2, 3, 5]);
    expect(resultado).toBe(4);
  });

  test("Debería devolver 7", () => {
    const resultado = foundNumber([4, 5, 6, 8]);
    expect(resultado).toBe(7);
  });

  test("Debería devolver -8 ", () => {
    const resultado = foundNumber([-9, -7, -6, -5]);
    expect(resultado).toBe(-8);
  });

  test("Debería hacer un throw", () => {
    expect(() => {
      foundNumber([5, 6, 7, 8]);
    }).toThrow();
  });
});
