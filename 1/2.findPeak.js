/**
 * Encontrar el pico (Find the Peak)
 * https://profound.academy/es/algorithms-data-structures/encontrar-el-pico-eFb3XHZRbWxhmrsEI4xz
 *
 * Descripcion:
 * Se te da un array de n enteros. Tu tarea es encontrar el elemento pico mas a la derecha
 * en el array. Un elemento se considera pico si es mayor o igual que ambos vecinos.
 *
 * Formato de entrada:
 * - Primera linea: entero n (3 <= n)
 * - Segunda linea: n enteros representando el array a
 *
 * Formato de salida:
 * Imprime el valor del elemento pico mas a la derecha. Si no existe ningun pico, imprime "Impossible".
 *
 * Ejemplos:
 * | Entrada           | Salida     |
 * |-------------------|------------|
 * | 5                 | 8          |
 * | 7 20 0 8 7        |            |
 * |-------------------|------------|
 * | 6                 | 2          |
 * | 0 2 -1 4 5 7      |            |
 * |-------------------|------------|
 * | 3                 | Impossible |
 * | 1 2 3             |            |
 *
 * Restricciones:
 * - Tiempo limite: 1.6 segundos
 * - Memoria limite: 512 MB
 * - Salida limite: 1 MB
 */


function findPeak(arr) {
  const arrL = arr.length
  for(let i = arrL - 2; i > 0; i--){
    if(arr[i-1] <= arr[i] && arr[i] >= arr[i+1]) {
      const peak = arr[i]
      return peak
    }
  }
  return "Impossible"
}

let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => main(buffer));

function main(input) {
  const inputs = input.trim().split("\n");
  const arr = inputs[1].split(" ").map(Number);
  const result = findPeak(arr);
  console.log(result);
}
