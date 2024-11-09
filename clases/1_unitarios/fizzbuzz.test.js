import { describe, expect, test } from "vitest";
import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  //Podemos borrar este TEST porque con los TESTS siguientes ya se cubre
  //   test("Debería estar definida", () => {
  //     expect(fizzBuzz).toBeDefined();
  //   });

  test("Debería devolver el valor que se envía", () => {
    const result = fizzBuzz(1);
    expect(result).toBe(1);
  });

  test("Debería devolver otro valor diferente a 1", () => {
    const result = fizzBuzz(2);
    expect(result).toBe(2);
  });

  test("Debería devolver fizz sin el valor es 3", () => {
    const result = fizzBuzz(3);
    expect(result).toBe("fizz");
  });

  test("Debería devolver fizz sin el valor es 6", () => {
    const result = fizzBuzz(6);
    expect(result).toBe("fizz");
  });

  test("Debería devolver fizz sin el valor es 5", () => {
    const result = fizzBuzz(5);
    expect(result).toBe("buzz");
  });

  test("Debería devolver fizz sin el valor es 10", () => {
    const result = fizzBuzz(10);
    expect(result).toBe("buzz");
  });

  test("Debería devolver fizzbuzz sin el valor es 15", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("fizzbuzz");
  });

  test("Debería devolver fizzbuzz sin el valor es 30", () => {
    const result = fizzBuzz(30);
    expect(result).toBe("fizzbuzz");
  });
});
