/**
 * Árbol de Segmentos
 *
 * Un árbol de segmentos es una estructura de datos basada en un árbol binario que representa un arreglo o lista de elementos.
 * Cada nodo del árbol corresponde a un segmento o subarreglo del arreglo original.
 * En un árbol de segmentos, el nodo raíz representa el arreglo completo,
 * mientras que los nodos hoja representan elementos individuales del arreglo.
 * Los nodos internos representan segmentos que se obtienen al dividir el arreglo en subarreglos más pequeños.
 * Normalmente, si un nodo representa el subarreglo [l, r],
 * su hijo izquierdo representa el subarreglo [l, (l+r)/2] y su hijo derecho el subarreglo [(l+r)/2 + 1, r].
 * Esta división recursiva continúa hasta que cada nodo hoja representa un solo elemento del arreglo original.
 *
 * El valor que se almacena en cada nodo del árbol de segmentos depende del problema o
 * la consulta específica que se desee resolver.
 * Comúnmente, se utilizan para calcular eficientemente valores agregados como sumas, mínimos, máximos
 * u otras operaciones dentro de un subarreglo.
 * El valor en cada nodo se calcula a partir de los valores almacenados en sus hijos.
 * Los árboles de segmentos son especialmente útiles para resolver problemas que involucran
 * consultas o actualizaciones por rango en un arreglo.
 * Al construir un árbol de segmentos, es posible realizar estas operaciones de manera eficiente con una complejidad
 * de O(log N), donde N es el tamaño del arreglo original.
 *
 * En resumen, el árbol de segmentos es una estructura de datos poderosa para manejar operaciones basadas
 * en rangos sobre arreglos y permite consultas y actualizaciones de segmentos de manera eficiente.
 * Se utiliza en varias aplicaciones y algoritmos, como consultas de intervalo, actualizaciones de rango y más.
 *
 * Desafío: Cálculo Iterativo de Nodos en un Árbol de Segmentos
 * Se te da un arreglo de n elementos. Tu tarea es construir un árbol de segmentos de manera iterativa
 * y calcular el valor de cada nodo en el árbol.
 * El valor de cada nodo representa la suma del subarreglo que dicho nodo representa.
 *
 */

/**
 * Entrada
 * La primera línea de la entrada contiene un entero n (1 ≤ n ≤ 100 000)
 * que indica la cantidad de elementos en el arreglo.
 * La segunda línea contiene n enteros separados por espacio
 * a1​ ,a2​ ,...,an​  (0≤ai≤10^9) que son los elementos del arreglo.
 *
 * Salida
 * Imprime el árbol de segmentos con el valor de todos sus nodos. Cada nivel del árbol de segmentos debe imprimirse en una línea separada, con valores separados por un espacio.
 */

/**
 * Ejemplos
 * --------
 * Entrada              Salida
 * 4                    10
 * 1 2 3 4              3 7
 *                      1 2 3 4
 *
 * Entrada              Salida
 * 8                    37
 * 3 7 9 6 2 1 5 4      25 12
 *                      10 15 3 9
 *                      3 7 9 6 2 1 5 4
 */

class Node {
  constructor({ value, left = null, right = null }) {
    this.value = value
    this.left = left
    this.right = right
  }
}

function buildSegmentTree(arr, left, right) {
  if (left === right) {
    return new Node({ value: arr[left] })
  }

  const mid = Math.floor((left + right) / 2)

  const nodeLeft = buildSegmentTree(arr, left, mid)
  const nodeRight = buildSegmentTree(arr, mid + 1, right)

  let nodeVal = nodeLeft.value + nodeRight.value
  const node = new Node({ value: nodeVal, left: nodeLeft, right: nodeRight })

  return node
}

function arrayFromLevel(node) {
  const result = []

  function traverse(currentNode, level) {
    if (!currentNode) return []

    if (result.length === level) {
      result.push([])
    }
    result[level].push(currentNode.value)

    traverse(currentNode.left, level + 1)
    traverse(currentNode.right, level + 1)
  }

  traverse(node, 0)
  return result
}

function printTreeLevels(root) {
  if (!root) return ""

  const matrix = arrayFromLevel(root, 0, [root.value])
  const result = matrix.forEach((level) => {
    console.log(level.join(" "))
  })
  return result
}

function buildSegmentTreeMain(arr) {
  if (arr.length === 0) return ""
  const segmentTree = buildSegmentTree(arr, 0, arr.length - 1)

  const traversedValues = printTreeLevels(segmentTree)
  return traversedValues
}

let buffer = '';
process.stdin.on('data', chunk => buffer += chunk);
process.stdin.on('end', () => main(buffer));

function main(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    buildSegmentTreeMain(arr);
}
