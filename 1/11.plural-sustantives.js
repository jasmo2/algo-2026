/**
 * SUSTANTIVOS PLURALES (Plural Nouns)
 *
 * PROBLEMA:
 * Crear un programa que convierta un sustantivo en singular a su forma plural
 * siguiendo las reglas gramaticales del inglés.
 *
 * REGLAS DE PLURALIZACIÓN:
 *
 * 1. Para los sustantivos regulares, añade 's' al final
 *    Ejemplos: cat → cats, house → houses
 *
 * 2. Si el sustantivo termina en 's', 'ss', 'sh', 'ch', 'x' o 'z', añade 'es' al final
 *    Ejemplos: bus → buses, tax → taxes
 *
 * 3. Si el sustantivo termina en 'y' y la letra anterior es una consonante,
 *    cambia el final a 'ies'
 *    Ejemplos: city → cities, puppy → puppies
 *
 * 4. Si el sustantivo termina en 'y' y la letra anterior es una vocal, añade 's'
 *    Ejemplos: ray → rays, boy → boys
 *
 * INPUT:
 * Una única palabra w (1 ≤ |w| ≤ 100)
 *
 * OUTPUT:
 * La versión en plural de w
 *
 * EJEMPLOS:
 * Input: bus      Output: buses
 * Input: cat      Output: cats
 * Input: table    Output: tables
 *
 * CONSTRAINTS:
 * - Time limit: 1 seconds
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 */

// Solución aquí

let buffer = ""
process.stdin.on("data", (chunk) => (buffer += chunk))
process.stdin.on("end", () => main(buffer))

function main(input) {
  const word = input.trim()
  const result = pluralSustantives(word)
  console.log(result)
}

function pluralSustantives(word) {
  switch (word.at(-1)) {
    case "s":
    case "x":
    case "z": {
      return word + "es"
    }
    case "y": {
      const beforLastLetter = word.at(-2)
      if (
        beforLastLetter === "a" ||
        beforLastLetter === "e" ||
        beforLastLetter === "i" ||
        beforLastLetter === "o" ||
        beforLastLetter === "u"
      ) {
        return word + "s"
      }

      return word.slice(0, -1) + "ies"
    }
  }

  switch (word.slice(-2)) {
    case "ss":
    case "sh":
    case "ch": {
      return word + "es"
    }
  }

  return word + "s"
}
