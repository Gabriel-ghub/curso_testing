import { describe, test, expect, expectTypeOf } from "vitest";
import { StringCalculator } from "./stringCalculator.js";

describe("StringCalculator", () => {
  //   test("Debería estar definida", () => {
  //     expect(StringCalculator).toBeDefined();
  //   });

  //   test("Debería tener un método a", () => {
  //     const stringCalculator = new StringCalculator();

  //     expect(stringCalculator.add).toBeDefined();
  //   });

  test("Debería devolver 0 cuando es un string vacío", () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add("");
    expect(result).toBe(0);
  });

  test("Debería devolver 1 (number), cuando le escriba 1 (string)", () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add("1");
    expect(result).toBe(1);
  });

  test("Debería devolver 3", () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add("1,2");
    expect(result).toBe(3);
  });

  test("Debería devolver 7", () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add("1,1,5");
    expect(result).toBe(7);
  });

  test("Debería separar por salto de líneas", () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add("1\n1,5");
    expect(result).toBe(7);
  });

  // test("Debería personalizar el delimitador", () => {
  //   const stringCalculator = new StringCalculator();

  //   const result = stringCalculator.add("//;\n1;2");
  //   expect(result).toBe(3);
  // });
});
