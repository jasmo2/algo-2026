/**
 * Contar vocales
 *
 * Dada una cadena `s`, se desea calcular la cantidad de subcadenas que tengan
 * un número impar de vocales (a, e, i, o, u y y).
 *
 * Definición de una subcadena:
 * Cualquier secuencia contigua de caracteres en la cadena `s` se considera una
 * subcadena de `s`. Por ejemplo, la cadena `abc` tiene como subcadenas `a`, `b`,
 * `c`, `ab`, `bc`, `abc`.
 *
 * Entrada:
 * La entrada contiene una única cadena `s` (1 ≤ |s| ≤ 100) compuesta de letras
 * minúsculas latinas.
 *
 * Salida:
 * El programa debe imprimir la cantidad de subcadenas que tengan un número impar
 * de vocales.
 *
 * Ejemplos:
 * - Input: "abc"   | Output: 3
 * - Input: "hello" | Output: 9
 * - Input: "xyz"   | Output: 4
 *
 * Explicación:
 * 1. abc → a, ab, abc
 * 2. hello → he, hel, hell, e, el, ell, llo, lo, o
 * 3. xyz → xy, xyz, y, yz
 *
 * Constraints:
 * - Time limit: 1.6 seconds
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 */

const vowels = new Set(["a", "e", "i", "o", "u", "y"])

function countVowels(s) {
  // TODO: Implement solution
  const sL = s.length
  let oddVowels = 0

  let isEven = true
  let evenCounter = 1
  let OddCounter = 0

  for (let i = 0; i < sL; i++) {
    const char = s[i]

    if (vowels.has(char)) {
      isEven = !isEven
    }

    //check if is Odd
    if (isEven === false) {
      oddVowels += 1
    }
  }
}

let buffer = ""
process.stdin.on("data", (chunk) => (buffer += chunk))
process.stdin.on("end", () => main(buffer))

function main(input) {
  const s = input.trim()
  const result = countVowels(s)
  console.log(result)
}

/**
 * for (let i = 0; i < sL; i++) {
    let char = s[i]
    substring += char
    if (
      "a" === char ||
      "e" === char ||
      "i" === char ||
      "o" === char ||
      "u" === char ||
      "y" === char
    ) {
      ++oddVowels
    }
    if (oddVowels !== 0 && !(oddVowels % 2 === 0)) {
      counter++
    }
  }
  return counter
 */
