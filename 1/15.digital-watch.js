/*
 * Reloj Digital
 * https://profound.academy/es/algorithms-data-structures/reloj-digital-p20bPp1KeFFyQYAxro5v
 *
 * ## Descripcion
 * Un reloj digital usa pantallas de siete segmentos para mostrar cada digito.
 * Cada digito (0-9) ilumina una cantidad diferente de segmentos.
 * Dado un tiempo inicial en formato hh:mm y un numero objetivo de segmentos k,
 * encontrar el siguiente tiempo (posterior al dado) en que exactamente k segmentos
 * esten encendidos (sin contar los dos puntos del separador).
 *
 * ## Formato de entrada
 * - Linea 1: Tiempo en formato hh:mm
 * - Linea 2: Entero k (5 <= k <= 30)
 *
 * ## Formato de salida
 * El tiempo mas proximo (posterior al dado) en que exactamente k segmentos estan
 * encendidos, o "Impossible" si no existe tal tiempo en un ciclo de 24 horas.
 *
 * ## Ejemplos
 *
 * Entrada:    Salida:
 * 11:11       11:12
 * 11
 *
 * Entrada:    Salida:
 * 08:03       08:04
 * 23
 *
 * Entrada:    Salida:
 * 10:30       Impossible
 * 29
 *
 * ## Segmentos por digito (display de siete segmentos)
 * 0 -> 6 segmentos
 * 1 -> 2 segmentos
 * 2 -> 5 segmentos
 * 3 -> 5 segmentos
 * 4 -> 4 segmentos
 * 5 -> 5 segmentos
 * 6 -> 6 segmentos
 * 7 -> 3 segmentos
 * 8 -> 7 segmentos
 * 9 -> 6 segmentos
 *
 * ## Restricciones
 * - Limite de tiempo: 1.6 segundos
 * - Limite de memoria: 512 MB
 */

const MINS_IN_A_DAY = 24 * 60 // 1440

const segmentHash = {
  0: 6,
  1: 2,
  2: 5,
  3: 5,
  4: 4,
  5: 5,
  6: 6,
  7: 3,
  8: 7,
  9: 6,
}

let buffer = ""
process.stdin.on("data", (chunk) => (buffer += chunk))
process.stdin.on("end", () => main(buffer))
function main(input) {
  const inputs = input.trim().split("\n")
  const time = inputs[0]
  const segments = inputs[1]

  const result = digitalClock(time, segments)

  console.log(result)
}

function digitalClock(time, k) {
  for (let i = 0; i < MINS_IN_A_DAY; i++) {
    const minutes = timeToMin(time, i)
    const possibleTime = minToTime(minutes)
    const currentTimeSegments = countSegments(possibleTime)
    if (currentTimeSegments === Number(k)) {
      return possibleTime
    }
  }

  return "Impossible"
}

function filterNumbers(time) {
  return time.split("").filter((input) => input !== ":")
}

function countSegments(time) {
  return filterNumbers(time).reduce((accumulator, currentValue) => {
    return accumulator + segmentHash[currentValue]
  }, 0)
}

function timeToMin(time, i) {
  const numbers = filterNumbers(time)
  return (
    // Hours
    (60 * Number(numbers[0] + numbers[1]) +
      // Minutes
      Number(numbers[2] + numbers[3]) +
      i) %
    MINS_IN_A_DAY
  )
}

function minToTime(totalTimeInMin) {
  const minutes = totalTimeInMin % 60
  const hours = Math.floor(totalTimeInMin / 60)

  return String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0")
}
