/*
 * ============================================================================
 * CAPTURA AL CABALLO
 * ============================================================================
 *
 * DESCRIPCION:
 * Dado un tablero de ajedrez 8x8, con un caballo blanco en la posicion (r1, c1)
 * y un caballo negro en la posicion (r2, c2), se desea saber si uno puede
 * capturar al otro en 1 o 2 movimientos.
 *
 * Un caballo captura a otro si se desplaza a la misma casilla donde se
 * encuentra el otro.
 *
 * Como recordatorio, en un solo movimiento, el caballo avanza 2 casillas en
 * una direccion y 1 casilla en otra direccion perpendicular. Puede moverse,
 * por ejemplo, 2 casillas hacia arriba y 1 hacia la izquierda o la derecha,
 * o 2 casillas hacia la derecha y 1 hacia arriba o hacia abajo, etc.
 *
 * En este problema, el segundo caballo permanece en la misma posicion,
 * mientras que el primero realiza exactamente dos movimientos.
 *
 * ----------------------------------------------------------------------------
 * ENTRADA:
 * ----------------------------------------------------------------------------
 * La entrada contiene 2 lineas:
 * - Primera linea: dos coordenadas (r1, c1) - posicion del primer caballo
 * - Segunda linea: dos coordenadas (r2, c2) - posicion del segundo caballo
 *
 * Restricciones: 1 <= r1, c1, r2, c2 <= 8
 * Se garantiza que (r1, c1) es diferente de (r2, c2).
 *
 * ----------------------------------------------------------------------------
 * SALIDA:
 * ----------------------------------------------------------------------------
 * Imprimir "Yes" si el primer caballo puede capturar al segundo en 1 o 2
 * movimientos, y "No" en caso contrario.
 *
 * ----------------------------------------------------------------------------
 * EJEMPLOS:
 * ----------------------------------------------------------------------------
 * Entrada:        Salida:
 * 1 1             Yes
 * 1 3
 *
 * Entrada:        Salida:
 * 1 1             No
 * 8 8
 *
 * ----------------------------------------------------------------------------
 * EXPLICACION:
 * ----------------------------------------------------------------------------
 * Ejemplo 1: (1,1) -> (3,2) -> (1,3) - captura en 2 movimientos
 * Ejemplo 2: Imposible capturar en 2 movimientos desde (1,1) hasta (8,8)
 *
 * ----------------------------------------------------------------------------
 * CONSTRAINTS:
 * ----------------------------------------------------------------------------
 * - Time limit: 1.6 seconds
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 *
 * ============================================================================
 */

let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => main(buffer));

const setM = new Set(
  [
  "2,1", "2,-1",
  "-2,1", "-2,-1",
  "1,2", "1,-2",
  "-1,2", "-1,-2"
]
)

function captureTheHorse(horse1, horse2) {
  const mov = [horse2[0] - horse1[0], horse2[1] - horse1[1]]

  if(setM.has(`${mov[0]},${mov[1]}`)){
    return "Yes"
  }

  for(let str of setM){
    const [row,col] = str.split(",");

    const int_row =  horse1[0] + Number(row);
    const int_col =  horse1[1] + Number(col);

    const mov = [horse2[0] - int_row, horse2[1] - int_col]
    if(setM.has(`${mov[0]},${mov[1]}`)){
      return "Yes"
    }
  }

  return "No"
}

function main(input) {
  const inputs = input.trim().split("\n");
  const arr1 = inputs[0].split(" ").map(Number);
  const arr2 = inputs[1].split(" ").map(Number);
  const result = captureTheHorse(arr1, arr2)
  console.log(result);
}
