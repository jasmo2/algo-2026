/**
 * Subarreglos de una suma específica
 *
 * Dado un arreglo de números, es posible que desees saber cuántos subarreglos
 * suman exactamente `s`.
 *
 * Entrada:
 * La primera línea de la entrada contiene dos valores enteros: `n`, que representa
 * la cantidad de elementos en el arreglo (1 <= n <= 1000), y `s` (-10^9 < s < 10^9).
 * La segunda línea incluye `n` números separados por un espacio, que corresponden
 * a los elementos del arreglo (-10^9 < a_i < 10^9).
 *
 * Salida:
 * El programa debe imprimir un único número: la cantidad de subarreglos cuya suma
 * es `s`. Si no hay ningún subarreglo que sume `s`, el programa debe imprimir 0.
 *
 * Ejemplos:
 *
 * | Entrada              | Salida |
 * |----------------------|--------|
 * | 6 33                 | 2      |
 * | 9 4 20 3 10 5        |        |
 * |----------------------|--------|
 * | 5 -10                | 3      |
 * | 10 2 -2 -20 10       |        |
 *
 * Explicación:
 * 1. [9 4 20] 3 10 5, 9 4 [20 3 10] 5
 * 2. [10 2 -2 -20] 10, 10 [2 -2 -20 10], 10 2 -2 [-20 10]
 *
 * Constraints:
 * - Time limit: 1.6 seconds
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 */

let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => main(buffer));

function main(input) {
  const inputs = input.trim().split("\n");
  const arr1 = inputs[0].split(" ").map(Number);
  const s = Number(arr1.at(-1))
  const n = Number(arr1.at(0))
  const arr2 = inputs[1].split(" ").map(Number);
  const result = specificSum(n, s, arr2)
  console.log(result);
}


function specificSum(n, s, arr) {
  
  let sumCounter = 0

  const hashMap = {}
  //llenado
  let prefix = 0
  for(let i = 0; i < n; i++) {
    if(prefix in hashMap) {
      hashMap[prefix] +=1 
    } else {
      hashMap[prefix] = 1
    }
    prefix += arr[i]

    const target = prefix - s

    if(target in hashMap) {
      sumCounter += hashMap[target]
    }
  }




  return sumCounter
}