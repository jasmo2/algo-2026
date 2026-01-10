/*
 * La raíz digital de un número
 *
 * Dado un número entero `n`, podemos calcular la raíz digital de `n` sumando
 * todos los dígitos de `n` y repitiendo ese proceso en el resultado hasta
 * llegar a un solo dígito. La suma digital de un número es el resultado de
 * un proceso iterativo de sumar los dígitos del mismo.
 *
 * Se te pide escribir un programa que calcule la raíz digital de un número.
 *
 * ## Entrada
 * La entrada contiene un único número entero `n` (0 <= n <= 10^18).
 *
 * ## Salida
 * El programa debe imprimir la raíz digital del número `n`.
 *
 * ## Ejemplos
 * | Entrada | Salida |
 * |---------|--------|
 * | 15      | 6      |
 * | 12345   | 6      |
 *
 * ## Explicación
 * 1. 15 -> 1 + 5 = 6
 * 2. 12345 -> 1 + 2 + 3 + 4 + 5 = 15 -> 1 + 5 = 6
 *
 * ## Constraints
 * - Time limit: 1 second
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 */

let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => main(buffer));

function main(input) {
  const num = input.trim();
  const result = digitalRoot(num)
  console.log(result);
}

function digitalRoot(num) {
  let strNum = String(num)

  if(strNum.length === 1) {
    return strNum
  }

  while (strNum.length > 1) {
    const digitalSqrt = strNum.split("").reduce((acc, current) => {
      acc += Number(current)
      return acc
    }, 0)
    strNum = String(digitalSqrt)
  }

  return strNum
}
