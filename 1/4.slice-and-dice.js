/*
 * Slice and dice
 *
 * Dado dos arreglos, se pide comprobar si es posible obtener el segundo a partir
 * del primero, dividiéndolo en una única posición e intercambiando las dos partes
 * resultantes. Se permite que una de las divisiones sea vacía.
 *
 * Entrada:
 * La primera línea de la entrada contiene un único número entero n, que representa
 * el tamaño de ambos arreglos (1 ≤ n ≤ 1000).
 *
 * La segunda línea contiene n valores enteros separados por espacios a_1, a_2, ..., a_n
 * (-10^9 ≤ a_i ≤ 10^9).
 *
 * La tercera línea contiene n valores enteros separados por espacios b_1, b_2, ..., b_n
 * (-10^9 ≤ b_i ≤ 10^9).
 *
 * Salida:
 * El programa debe imprimir "Yes" si es posible encontrar una sola posición en el
 * primer arreglo para cortarlo y, tras intercambiar las dos secciones, obtener el
 * segundo arreglo. De lo contrario, debe imprimir "No".
 *
 * Ejemplos:
 * | Entrada           | Salida |
 * |-------------------|--------|
 * | 4                 | Yes    |
 * | 1 2 3 4           |        |
 * | 3 4 1 2           |        |
 * |-------------------|--------|
 * | 3                 | No     |
 * | 1 2 3             |        |
 * | 4 5 6             |        |
 *
 * Restricciones:
 * - Tiempo límite: 1.6 segundos
 * - Memoria límite: 512 MB
 * - Límite de salida: 1 MB
 */

function sliceNdice(arr1, arr2) {
  const doubleArr1 = [...arr1, ...arr1]

  // Based on the documentation is O(n), includes
  // https://medium.com/@sonu9506517825/string-methods-in-javascript-155f216e4540
  if(includes(doubleArr1, arr2)){
    return "Yes"
  }
  return "No"
}

let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => main(buffer));

function main(input) {
  const inputs = input.trim().split("\n");
  const arr1 = inputs[1].split(" ").map(Number);
  const arr2 = inputs[2].split(" ").map(Number);
  const result = sliceNdice(arr1, arr2)
  console.log(result);
}
