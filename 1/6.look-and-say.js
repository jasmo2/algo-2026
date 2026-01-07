/**
 * Secuencia "look-and-say"
 *
 * Descripción del Problema:
 * Dado un número n, la secuencia "look-and-say" se genera al leer los dígitos
 * de n tal y como aparecen en el número.
 *
 * Ejemplo:
 * Si el número n es 43556777, lo leeríamos de la siguiente manera:
 * - Un 4 (14)
 * - Un 3 (13)
 * - Dos 5 (25)
 * - Un 6 (16)
 * - Tres 7 (37)
 *
 * Por lo tanto, el siguiente elemento en la secuencia después del número
 * 43556777 sería 1413251637.
 *
 * Tarea:
 * Dado un número inicial n, se pide calcular el número resultante tras
 * realizar k pasos.
 *
 * Entrada:
 * - Primera línea: número inicial n (1 ≤ n ≤ 10^6)
 * - Segunda línea: número de pasos k (0 ≤ k ≤ 30)
 *
 * Salida:
 * El programa debe imprimir el número resultante después de k pasos en la
 * secuencia "look-and-say", comenzando con el número n.
 *
 * Ejemplos:
 *
 * Ejemplo 1:
 * Input:
 *   6
 *   4
 * Output:
 *   132116
 * Explicación: 6 → 16 → 1116 → 3116 → 132116
 *
 * Ejemplo 2:
 * Input:
 *   33333
 *   1
 * Output:
 *   53
 * Explicación: 33333 → 53 (cinco 3s)
 *
 * Restricciones:
 * - Límite de tiempo: 1 segundo
 * - Límite de memoria: 512 MB
 * - Límite de salida: 1 MB
 */

function lookAndSay(n, k) {
  let nStr = n
  for (let i = 0; i < k; i++) {
    let sequence = ""
    let prev = nStr[0]
    let counter = 0
    for (let char of nStr) {
      if (char === prev) {
        counter++
      } else {
        sequence += `${counter}${prev}`
        prev = char
        counter = 1
      }
    }
    sequence += `${counter}${prev}`

    nStr = sequence
  }

  return nStr
}

let buffer = ""
process.stdin.on("data", (chunk) => (buffer += chunk))
process.stdin.on("end", () => main(buffer))

function main(input) {
  const inputs = input.trim().split("\n")
  const n = inputs[0].trim()
  const k = parseInt(inputs[1].trim(), 10)
  const result = lookAndSay(n, k)
  console.log(result)
}
