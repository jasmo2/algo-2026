/*
 * Divisibilidad por 11
 *
 * ¿Sabías que existe una forma sencilla de determinar si un número es divisible por 11?
 * Para números grandes, basta con tomar todos los dígitos que estén en posiciones impares
 * y sumarlos entre sí, luego hacer lo mismo con los dígitos en posiciones pares, y finalmente
 * restar ambas sumas. Si el resultado de esta resta es divisible por 11, entonces el número
 * completo también lo es.
 *
 * Entrada:
 * La entrada contiene un número positivo muy grande que puede tener hasta 10^6 (un millón) de dígitos.
 *
 * Salida:
 * El programa debe imprimir "Yes" si el número dado es divisible por 11 y "No" en caso contrario.
 *
 * Ejemplos:
 * | Entrada   | Salida |
 * |-----------|--------|
 * | 563706    | Yes    |
 * | 12345678  | No     |
 *
 * Explicación:
 * 1. 563706 → (5 + 3 + 0) - (6 + 7 + 6) = 8 - 19 = -11, que es divisible por 11
 * 2. 12345678 → (1 + 3 + 5 + 7) - (2 + 4 + 6 + 8) = 16 - 20 = -4, que no es divisible por 11
 */


function divBy11(arr) {
  const arrL = arr.length
  let summatory = 0 - arr[0];
  for(let i = 1; i < arrL; i++){
    if(i % 2 === 0) {
      summatory -= arr[i]
    } else {
      summatory += arr[i]
    }
  }

  if(summatory % 11 === 0) {
    return "Yes"
  }

  return "No"
}

let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => main(buffer));

function main(input) {
  const inputs = input.trim().split("\n");
  const arr = inputs[0].split("").map(Number);

  const result = divBy11(arr)

  console.log(result);
}
