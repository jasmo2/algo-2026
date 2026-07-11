/*
 * Sudoku
 *
 * ## Descripcion
 * Dada una cuadricula de sudoku de 9x9, determinar si es valida.
 *
 * Una cuadricula es valida si cumple con lo siguiente:
 * - Todos los numeros del 1 al 9 en cada fila.
 * - Todos los numeros del 1 al 9 en cada columna.
 * - Todos los numeros del 1 al 9 dentro de cada subcuadricula de 3x3.
 *
 * Una cuadricula no valida puede presentar:
 * - Numeros repetidos en ciertas filas.
 * - Numeros repetidos en ciertas columnas.
 * - Numeros repetidos dentro de las subcuadriculas de 3x3.
 *
 * ## Formato de entrada
 * Una cuadricula de 9x9 compuesta por numeros enteros del 0 al 9.
 * Las celdas vacias estan representadas con 0.
 *
 * ## Formato de salida
 * - "Valid" si la cuadricula es valida.
 * - "Not valid" en caso contrario.
 *
 * ## Ejemplos
 *
 * Entrada:                  Salida:
 * 0 0 0 0 0 8 0 0 2         Valid
 * 0 7 0 0 0 0 0 1 0
 * 0 2 0 7 0 0 9 0 0
 * 0 0 0 0 0 0 7 0 1
 * 0 0 0 9 0 2 6 0 0
 * 3 0 5 8 0 0 0 4 0
 * 9 0 0 6 0 0 4 0 0
 * 0 0 0 2 0 7 0 6 0
 * 0 0 1 0 0 4 0 0 0
 *
 * Entrada:                  Salida:
 * 0 0 0 0 0 8 0 0 2         Not valid
 * 0 7 0 0 0 0 0 1 0
 * 0 2 0 7 0 0 9 0 0
 * 0 0 0 0 0 0 7 0 1
 * 0 6 0 9 0 2 6 0 0
 * 3 0 5 8 0 0 0 4 0
 * 9 0 0 6 0 0 4 0 0
 * 0 0 0 2 0 7 0 6 0
 * 0 0 1 0 0 4 0 0 0
 *
 * ## Restricciones
 * - Tiempo limite: 1 segundo
 * - Memoria limite: 512 MB
 * - Output limite: 1 MB
 */

// Tu solucion aqui

let buffer = ""
process.stdin.on("data", (chunk) => (buffer += chunk))
process.stdin.on("end", () => main(buffer))

function isValidSudoku(grid) {
  const setRows = Array.from({ length: 9 }, () => new Set())
  const setCols = Array.from({ length: 9 }, () => new Set())
  const setSubGrids = Array.from({ length: 9 }, () => new Set())

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = grid[i][j]

      if (num === 0) {
        continue
      }

      const subGridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

      if (
        setRows[i].has(num) ||
        setCols[j].has(num) ||
        setSubGrids[subGridIndex].has(num)
      ) {
        return "Not valid"
      }

      setRows[i].add(num)
      setCols[j].add(num)
      setSubGrids[subGridIndex].add(num)
    }
  }

  return "Valid"
}

function main(input) {
  const grid = input
    .trim()
    .split("\n")
    .map((row) => row.trim().split(" ").map(Number))
  const response = isValidSudoku(grid)
  console.log(response)
}
