//Debería devolver FIZZ si es múltiplo de 3
//Debería devolver BUZZ si es múltiplo de 5
//Debería devolver FIZZBUZZ si es múltiplo de ambos

export const fizzBuzz = (value) => {
  if (value % 3 === 0 && value % 5 === 0) return "fizzbuzz";
  if (value % 3 === 0) return "fizz";
  if (value % 5 === 0) return "buzz";
  return value;
};
