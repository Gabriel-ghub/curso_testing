export function sumar(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("No se permiten números negativos");
  }
  return a + b;
}
