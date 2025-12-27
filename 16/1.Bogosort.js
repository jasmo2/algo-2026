/**
 * # Bogosort
 *
 * Bogosort es un algoritmo de ordenamiento humorístico que mezcla aleatoriamente
 * los elementos y verifica si la lista resultante está ordenada. Repite este
 * proceso hasta que la lista quede ordenada.
 *
 * ## Cómo funciona
 *
 * El algoritmo:
 * 1. Mezcla aleatoriamente todos los números
 * 2. Verifica si la lista está ahora en orden ascendente
 * 3. Repite los pasos 1-2 hasta que esté ordenada
 *
 * > Este algoritmo es completamente aleatorio y puede tardar infinitamente en
 * > completarse. Por lo tanto, sería muy peligroso e ineficiente usar algo así
 * > en entornos de producción.
 *
 * ## Desafío
 *
 * Calcula cuántas iteraciones necesitaría un algoritmo Bogosort para finalmente
 * lograr un resultado ordenado.
 *
 * ### Entrada
 * - La primera línea contiene un entero `n` (1 ≤ n ≤ 10)
 * - La segunda línea contiene `n` enteros separados por espacios donde -10⁹ ≤ aᵢ ≤ 10⁹
 *
 * ### Salida
 * El programa debe imprimir el número de iteraciones necesarias para que Bogosort termine.
 *
 * ### Ejemplo
 *
 * | Entrada       | Salida |
 * |---------------|--------|
 * | 5             | 10     |
 * | 5 -1 2 3 9    |        |
 *
 * > Nota: La salida es aleatoria - la misma entrada podría producir diferentes
 * > resultados en diferentes ejecuciones, ya que el algoritmo depende de mezcla aleatoria.
 *
 * ### Constraints
 * - Time limit: 48 seconds
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 *
 * ## Complejidad
 *
 * - **Peor caso:** O(∞) - podría nunca terminar
 * - **Caso promedio:** O(n × n!) - factorial, extremadamente lento
 * - **Mejor caso:** O(n) - si la lista ya está ordenada
 */

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function bogosort(arr) {
  let array = [...arr]
  const arrL = array.length;
  let counter = 0
  while (true) {
    counter++
    let isSorted = true;
    for (let i = 1; i < arrL; i++) {
      if (array[i - 1]  > array[i]) {
        isSorted = false;
        break;
      }
    }
    if (isSorted) {
      break;
    }
    array = shuffleArray(array)
  }
  return counter
}

let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => main(buffer));

function main(input) {
  const inputs = input.trim().split("\n");
  const arr = inputs[1].split(" ").map(Number);
  const result = bogosort(arr);
  console.log(result);
}
