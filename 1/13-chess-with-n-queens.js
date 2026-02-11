/**
 * =========================================================================
 * TABLERO DE AJEDREZ DE N POR N CON N REINAS
 * =========================================================================
 *
 * DESCRIPCIÓN:
 * Dado un tablero de ajedrez de tamaño N × N y N reinas con sus coordenadas,
 * se pide determinar si existe al menos un par de reinas que se ataquen entre sí.
 *
 * -------------------------------------------------------------------------
 * INPUT
 * -------------------------------------------------------------------------
 * - Primera línea: un único número entero N (1 ≤ N ≤ 100)
 * - Siguientes N líneas: coordenadas (r_i, c_i) de las reinas (1 ≤ r_i, c_i ≤ N)
 *
 * -------------------------------------------------------------------------
 * OUTPUT
 * -------------------------------------------------------------------------
 * - "Yes" si hay reinas que se atacan entre sí
 * - "No" en caso contrario
 *
 * -------------------------------------------------------------------------
 * EJEMPLOS
 * -------------------------------------------------------------------------
 *
 * Ejemplo 1:
 * ----------
 * Input:
 *   4
 *   1 2
 *   2 4
 *   3 1
 *   4 3
 *
 * Output:
 *   No
 *
 * Explicación: Las reinas están en posiciones que no se atacan entre sí.
 * Imagen: https://storage.googleapis.com/profound-academy-4fe37.appspot.com/courses/algorithms-data-structures/exercises/zqP9fOoQXQkG805pvdMG/files/Screen_Shot_2022-11-01_at_11.01.56_AM.png
 *
 * Ejemplo 2:
 * ----------
 * Input:
 *   4
 *   1 1
 *   2 3
 *   3 4
 *   4 2
 *
 * Output:
 *   Yes
 *
 * Explicación: Al menos un par de reinas se atacan entre sí.
 * Imagen: https://storage.googleapis.com/profound-academy-4fe37.appspot.com/courses/algorithms-data-structures/exercises/zqP9fOoQXQkG805pvdMG/files/Screen_Shot_2022-11-01_at_11.02.47_AM.png
 *
 * -------------------------------------------------------------------------
 * CONDICIONES DE ATAQUE ENTRE REINAS
 * -------------------------------------------------------------------------
 * Dos reinas se atacan si:
 * 1. Están en la misma fila: r1 === r2
 * 2. Están en la misma columna: c1 === c2
 * 3. Están en la misma diagonal: |r1 - r2| === |c1 - c2|
 *
 * -------------------------------------------------------------------------
 * CONSTRAINTS
 * -------------------------------------------------------------------------
 * - Time limit: 1.6 seconds
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 *
 * =========================================================================
 */

function nQueen(_boardSize, queensPositions) {
  const rowSet = new Set()
  const colSet = new Set()
  const diagonalSet1 = new Set()
  const diagonalSet2 = new Set()

  let Output = "No"

  for (const queen of queensPositions) {
    const [row, col] = queen
    const diagonal1 = col - row
    const diagonal2 = col + row

    if (
      rowSet.has(row) ||
      colSet.has(col) ||
      diagonalSet1.has(diagonal1) ||
      diagonalSet2.has(diagonal2)
    ) {
      return "Yes"
    }

    rowSet.add(row)
    colSet.add(col)
    diagonalSet1.add(diagonal1)
    diagonalSet2.add(diagonal2)
  }

  return Output
}

let buffer = ""
process.stdin.on("data", (chunk) => (buffer += chunk))
process.stdin.on("end", () => main(buffer))

function main(input) {
  const inputs = input.trim().split("\n")
  const boardSize = Number(inputs[0].trim())
  const queensPositions = inputs
    .map((input) => {
      return input.split(" ").map(Number)
    })
    .filter((_currentValue, index) => index !== 0)
  const result = nQueen(boardSize, queensPositions)
  console.log(result)
}
