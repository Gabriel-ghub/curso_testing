export class StringCalculator {
  add(value) {
    if (value.length > 1) {
      let newLimit = "";
      let init = "";

      if (value.startsWith == "//") {
        console.log("value", value);
        console.log("entra");
        newLimit = value.charAt(2);
        init = value.substring(0, 4);
      }
      const newValues = value
        .replaceAll(init, "")
        .replaceAll(newLimit, "")
        .replaceAll("\n", ",")
        .split(",")
        .map(Number);

      const total = newValues.reduce((acc, index) => {
        return Number(acc) + Number(index);
      });
      return total;
    }
    return Number(value);
  }
}
