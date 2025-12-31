/**
 * ============================================================================
 * HEAP (MONTÍCULO)
 * ============================================================================
 *
 * Un heap (montículo) es una estructura de datos de tipo árbol especializada
 * que cumple la siguiente propiedad:
 *
 *   Si `P` es el nodo padre de `C`, entonces el valor de `P` es mayor o igual
 *   (en un max-heap) o menor o igual (en un min-heap) que el valor de `C`.
 *
 * ============================================================================
 * TIPOS PRINCIPALES
 * ============================================================================
 *
 * Existen dos tipos principales de heaps:
 *
 * 1. Max Heap: El valor del nodo padre debe ser MAYOR o igual que el de sus
 *    nodos hijos.
 *
 * 2. Min Heap: El valor del nodo padre debe ser MENOR o igual que el de sus
 *    nodos hijos.
 *
 * Nos centraremos en el max-heap, ya que la mayoría de las bibliotecas
 * estándar implementan un max-heap para colas de prioridad. En un max-heap,
 * la raíz del árbol es el elemento más grande, mientras que las hojas son
 * las más pequeñas. Sin embargo, no hay un orden específico para las hojas.
 * Lo único que se garantiza es que el nodo raíz sea el más grande y que sus
 * nodos hijos sean menores o iguales a su valor.
 *
 * Ten en cuenta que la última fila del heap siempre se llena de izquierda a
 * derecha. Es decir, primero se llena la hoja más a la izquierda y, por
 * último, la hoja más a la derecha.
 *
 * ============================================================================
 * IMPLEMENTACIÓN
 * ============================================================================
 *
 * Un heap (montículo) se puede implementar como un arreglo, en donde el primer
 * elemento del arreglo representa el nodo raíz. Dado que cada nodo tiene solo
 * dos nodos hijos, podemos organizar los índices así:
 *
 *   1. El elemento raíz se ubica en el índice 1.
 *   2. Los hijos izquierdo y derecho de un nodo se encuentran en los índices
 *      `2i` y `2i+1`, respectivamente.
 *   3. El nodo padre de un elemento que está en el índice `i` se ubica en el
 *      índice `i // 2`.
 *
 * El heap de abajo se puede representar en una lista así:
 *
 *   // Solo lee cada fila en la figura y coloca los números uno al lado del otro
 *   heap = [null, 8, 5, 7, 1, 1, 6, 3, 1]
 *
 *   // O para visualizarlo mejor
 *   heap = [null,      // Saltamos el índice [0] para simplificar el manejo de índices
 *           8,         // Índice   [1]
 *       5,       7,    // Índices [2, 3]
 *     1,  1,   6,  3,  // Índices [4, 5, 6, 7]
 *   1]                 // Índice   [8]
 *
 * ============================================================================
 * EJEMPLO 1: MAX HEAP VÁLIDO
 * ============================================================================
 *
 *              8
 *            /   \
 *           5     7
 *          / \   / \
 *         1   1 6   3
 *        /
 *       1
 *
 * Representación en array: [null, 8, 5, 7, 1, 1, 6, 3, 1]
 *
 * Todos los nodos padres tienen un valor mayor o igual que sus hijos.
 * Por lo tanto, la propiedad de heap SÍ se cumple.
 * Respuesta: "Yes"
 *
 * ============================================================================
 * EJEMPLO 2: MAX HEAP INVÁLIDO
 * ============================================================================
 *
 *              8
 *            /   \
 *           5     7
 *          / \   / \
 *         1   9 6   3
 *
 * Representación en array: [null, 8, 5, 7, 1, 9, 6, 3]
 *
 * El nodo con valor 9 es mayor que su nodo padre (5).
 * Por lo tanto, la propiedad de heap NO se cumple.
 * Respuesta: "No"
 *
 * ============================================================================
 * DESAFÍO: Verificar si el árbol binario es un heap
 * ============================================================================
 *
 * Dado un árbol binario representado por un arreglo de `n` números (con la
 * misma indexación descrita arriba), se te pide comprobar si cumple las
 * propiedades de un max-heap.
 *
 * ENTRADA:
 * - La primera línea contiene un único número entero `n` (1 ≤ n ≤ 100,000).
 * - La siguiente línea contiene `n` enteros separados por un espacio,
 *   a₁, a₂, ..., aₙ (-10⁹ < aᵢ < 10⁹) que representan los valores de los
 *   elementos en el heap.
 *
 * SALIDA:
 * - El programa debe imprimir `Yes` si el árbol binario de la entrada cumple
 *   la propiedad de max-heap, o `No` en caso contrario.
 *
 * EJEMPLOS:
 * ┌─────────────────────────┬────────┐
 * │ Entrada                 │ Salida │
 * ├─────────────────────────┼────────┤
 * │ 8                       │ Yes    │
 * │ 8 5 7 1 1 6 3 1         │        │
 * ├─────────────────────────┼────────┤
 * │ 7                       │ No     │
 * │ 8 5 7 1 9 6 3           │        │
 * └─────────────────────────┴────────┘
 *
 * RESTRICCIONES:
 * - Límite de tiempo: 1.6 segundos
 * - Límite de memoria: 512 MB
 * - Límite de salida: 1 MB
 *
 * ============================================================================
 */

// Tu solución aquí:
function Log2(x) {
  return Math.log(x) / Math.log(2);
}

function isMaxHeap(arr) {
  const arrL = arr.length;
  for(let i=0; i < arrL; i++){
    const leftChildIndex = 2 * i + 1 ;
    const rightChildIndex = 2 * i + 2; 
    if(leftChildIndex < arrL) {
      if(arr[leftChildIndex] > arr[i]) {
        return "No"
      }
    }
    if(arrL > rightChildIndex) {
      if(arr[i] < arr[rightChildIndex]) {
        return "No"
      }
    }
  }

  return "Yes"
}


let buffer = "";
process.stdin.on("data", (chunk) => (buffer += chunk));
process.stdin.on("end", () => main(buffer));

function main(input) {
  const inputs = input.trim().split("\n");
  const arr = inputs[1].split(" ").map(Number);

  const result = isMaxHeap(arr)

  console.log(result);
}
