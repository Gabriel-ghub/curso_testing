export class Cell {
  arrayConVecinos = [];
  x;
  y;
  constructor(grid) {
    this.grid = grid;
  }

  calcularVecinos(x, y) {
    this.x = x;
    this.y = y;
    this.arrayConVecinos.push(this.vecinosArriba());
    this.arrayConVecinos.push(this.vecinos());
    this.arrayConVecinos.push(this.vecinosAbajo());
    return this.arrayConVecinos;
  }

  vecinosArriba() {
    let arriba = [];
    arriba.push(this.grid[this.x - 1][this.y - 1]);
    arriba.push(this.grid[this.x - 1][this.y]);
    arriba.push(this.grid[this.x - 1][this.y + 1]);
    return arriba;
  }

  vecinos() {
    let vecinos = [];
    vecinos.push(this.grid[this.x][this.y - 1]);
    vecinos.push(this.grid[this.x][this.y]);
    vecinos.push(this.grid[this.x][this.y + 1]);
    return vecinos;
  }

  vecinosAbajo() {
    let abajo = [];
    abajo.push(this.grid[this.x + 1][this.y - 1]);
    abajo.push(this.grid[this.x + 1][this.y]);
    abajo.push(this.grid[this.x + 1][this.y + 1]);
    return abajo;
  }

  vive() {}

  iAmAlive() {
    console.log("HHOOOLLAA", this.arrayConVecinos);
  }
}
