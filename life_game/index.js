export function returnNextArray(array) {
  let nuevoArray = [[]];

  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {}
  }

  for (let index = 0; index < array.length; index++) {
    if (index == 0) {
      nuevoArray[index] = 0;
      continue;
    }
    if (index == array.length - 1) {
      nuevoArray[index] = 0;
      continue;
    }

    if (array[index - 1] == 1 && array[index + 1] == 1 && array[index] == 1) {
      nuevoArray[index] = 1;
    } else {
      nuevoArray[index] = 0;
    }
  }

  return nuevoArray;
}
