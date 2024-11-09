//Entrada: Un array de enteros ordenados ascendentemente, que represeta una secuencia de numeros consecutirovs de 1 a n, pero donde falta un número en el medio.
export const foundNumber = (arrayOfInteger) => {
  //No contempla negativos
  //   for (let index = 0; index < arrayOfInteger.length; index++) {
  //     const element = arrayOfInteger[index];
  //     if (element > 1 && element !== arrayOfInteger[index - 1] + 1) {
  //       numeroquefalta = element - 1;
  //     }
  //   }

  //Contempla números negativos

  for (let index = 0; index < arrayOfInteger.length; index++) {
    const element = arrayOfInteger[index];
    if (index > 0 && element !== arrayOfInteger[index - 1] + 1) {
      return element - 1;
    }
  }
  throw new Error("No se ha encontrado");
};
