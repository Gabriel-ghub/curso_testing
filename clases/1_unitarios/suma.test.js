import { describe, expect, test } from "vitest";
import { sumar } from "./suma";

//ESTA FUNCION PODEMOS SACARLA FUERA Y LUEGO IMPORTARLA

//PODEMOS PONER VARIOS EXPECT
describe("sumar", () => {
  test("suma básica", () => {});

  const resultado = sumar(1, 2);

  expect(resultado).toBe(3);
  //OTROS
  expect(typeof sumar).toBe("function");
  expect("hola").toHaveLength(4);

  //Throw -> Lanzar la funcion dentro del expect, no sirve si lo hacemos fuera, porque corta la ejecución del SCRIPT.

  expect(() => {
    sumar(20, -10);
  }).toThrow();
});
