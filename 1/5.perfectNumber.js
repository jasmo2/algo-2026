/**
 * # Número perfecto
 *
 * Se considera que un número es perfecto si es la suma de todos sus divisores
 * excepto el mismo número. Por ejemplo, los divisores de 6 son 1, 2 y 3 (sin
 * incluir el 6). 1 + 2 + 3 = 6 ⇒ 6 es un número perfecto.
 *
 * ## Entrada
 *
 * La entrada contiene un único número entero `n` (1 ≤ n ≤ 10⁶).
 *
 * ## Salida
 *
 * El programa debe imprimir `Yes` si el número dado es perfecto y `No` en caso contrario.
 *
 * ## Ejemplos
 *
 * | Entrada | Salida |
 * |---------|--------|
 * | 6       | Yes    |
 * | 8       | No     |
 *
 * ## Explicación
 *
 * 1. 6 → 1 + 2 + 3 = 6 ⇒ 6 es perfecto
 * 2. 8 → 1 + 2 + 4 = 7 ⇒ 8 no es perfecto
 *
 * ## Constraints
 * - Time limit: 1.6 seconds
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 *
 * ## Enfoque de solución
 *
 * Para resolver este problema, necesitamos:
 * 1. Encontrar todos los divisores del número `n` (excluyendo el propio `n`)
 * 2. Sumar todos esos divisores
 * 3. Comparar la suma con el número original
 *
 * ### Optimización
 *
 * En lugar de iterar hasta `n-1`, podemos iterar solo hasta √n. Cuando encontramos
 * un divisor `i`, también encontramos su par `n/i`. Esto reduce la complejidad
 * temporal de O(n) a O(√n).
 *
 * Por ejemplo, para n=6:
 * - Cuando i=1: encontramos divisores 1 y 6
 * - Cuando i=2: encontramos divisores 2 y 3
 *
 * Debemos tener cuidado de:
 * - No contar el número `n` mismo
 * - No contar el mismo divisor dos veces (cuando i = √n)
 */

function isPerfectNumber(num) {
  const maxCount = Math.floor(Math.sqrt(num))

  let sum = 0
  for (let i = 1; i <= maxCount; i++) {
    if (num % i === 0) {
      if (i !== num) {
        sum += i
      }

      const quotient = num / i
      if (num !== quotient) {
        sum += quotient
      }
    }
  }

  if (sum === num) {
    return "Yes"
  }
  return "No"
}

let buffer = ""
process.stdin.on("data", (chunk) => (buffer += chunk))
process.stdin.on("end", () => main(buffer))

function main(input) {
  const n = parseInt(input.trim(), 10)
  const result = isPerfectNumber(n)
  console.log(result)
}
