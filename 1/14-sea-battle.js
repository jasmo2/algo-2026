/*
 * Sea Battle - Batalla Naval
 *
 * IMAGEN DE REFERENCIA:
 * https://storage.googleapis.com/profound-academy-4fe37.appspot.com/courses/algorithms-data-structures/exercises/QlPrhs2w2BBvGpZJOHyg/files/screen-22.webp
 *
 * DESCRIPCIÓN:
 * Estás tratando de desarrollar el juego "Sea Battle". Al inicio de la partida,
 * cada jugador coloca varios barcos de batalla en el tablero, ubicándolos en
 * puntos concretos. Cada barco se extiende en línea recta desde (r₁, c₁) hasta
 * (r₂, c₂), donde la línea que conecta esas coordenadas siempre es perpendicular
 * a los bordes de la cuadrícula.
 *
 * Como primer paso, quieres validar el tablero para asegurarte de que los usuarios
 * no pongan los barcos demasiado cerca unos de otros, ni que se crucen entre sí.
 * Cada barco debe tener al menos una celda de agua que lo separe de cualquier otro.
 * Sin embargo, está permitido ubicar un barco justo al lado del borde sin dejar un
 * espacio adicional entre el barco y el borde.
 *
 * INPUT:
 * - Primera línea: 3 enteros
 *   - n: número de barcos (1 ≤ n ≤ 20)
 *   - w: ancho del campo de batalla (1 ≤ w ≤ 1000)
 *   - h: altura del campo de batalla (1 ≤ h ≤ 1000)
 *
 * - Siguientes n líneas: 4 enteros cada una
 *   - (r₁, c₁) y (r₂, c₂): coordenadas de cada barco
 *   - 1 ≤ r₁ ≤ r₂ ≤ h
 *   - 1 ≤ c₁ ≤ c₂ ≤ w
 *
 * OUTPUT:
 * - "Valid" si el tablero es válido
 * - "Invalid" en caso contrario
 *
 * EJEMPLOS:
 *
 * Ejemplo 1:
 * Input:
 *   2 10 10
 *   1 1 1 5
 *   8 1 8 10
 * Output:
 *   Valid
 *
 * Ejemplo 2:
 * Input:
 *   2 10 10
 *   1 1 1 5
 *   2 3 2 10
 * Output:
 *   Invalid
 *
 * RESTRICCIONES:
 * - Tiempo límite: 1.6 segundos
 * - Memoria límite: 512 MB
 * - Output límite: 1 MB
 */

// Tu solución aquí

let buffer = ""
process.stdin.on("data", (chunk) => (buffer += chunk))
process.stdin.on("end", () => main(buffer))

/**
 *
 * @param {array[number]} w,Battle size
 * @param {array[number]} boat1, coordinates row column comma row 2 column 2
 * @param {array[number]} boat2, coordinates row column comma row 2 column 2
 */
function seaBattle(input, boatsArr) {
  const [nBoats, boardW, boardH] = input

  // const [b1R1, b1C1, b1R2, b1C2] = boat1
  for (let boatsIndex = 0; boatsIndex < nBoats; boatsIndex++) {
    for (let boatsJndex = boatsIndex + 1; boatsJndex < nBoats; boatsJndex++) {
      const boatA = boatsArr[boatsIndex]
      const boatB = boatsArr[boatsJndex]
      const [r1A, c1A, r2A, c2A] = boatA // ← puedes desestructurar así
      const [r1B, c1B, r2B, c2B] = boatB

      if (
        //Rows conditions
        0 >= r1B - r2A - 1 &&
        0 >= r1A - r2B - 1 &&
        //columns conditions
        0 >= c1B - c2A - 1 &&
        0 >= c1A - c2B - 1
      ) {
        return "Invalid"
      } else if (
        // validate the boats are inside the board
        // inside the widths
        r1A < 1 ||
        r2A > boardH ||
        r1B < 1 ||
        r2B > boardH ||
        // inside the widths
        //---//---//
        // inside the height
        c1A < 1 ||
        c2A > boardW ||
        c1B < 1 ||
        c2B > boardW
        // inside the height
      ) {
        return "Invalid"
      }
    }
  }

  return "Valid"
}

function main(input) {
  const inputs = input.trim().split("\n")
  const inputArr = inputs[0].split(" ").map(Number)
  inputs.splice(0, 1)
  const boatsArr = inputs.map((boatArr) => boatArr.split(" ").map(Number))
  const result = seaBattle(inputArr, boatsArr)
  console.log(result)
}
