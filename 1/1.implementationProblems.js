/**
 * # Problemas de implementación
 *
 * Al trabajar con algoritmos y estructuras de datos, algunas personas pueden creer
 * equivocadamente que son muy complicados. Sin embargo, en la mayoría de los casos
 * resultan simples e intuitivos. Para dominarlos, lo único necesario es la práctica
 * y la experiencia práctica, lo cual brinda la intuición de cómo funcionan realmente
 * los algoritmos.
 *
 * Cuando uno se enfrenta a problemas y ejercicios concretos, pronto se hace evidente
 * que ciertos grupos y categorías de problemas pueden verse juntos. Comparten
 * características que permiten aplicar las mismas técnicas a todo el conjunto de
 * dichos problemas.
 *
 * Uno de estos grupos son los problemas de implementación. Estos suelen incluir los
 * pasos para llegar a la solución directamente en el enunciado. Es decir, las acciones
 * que el programa necesita realizar aparecen descritas en el mismo problema. La tarea
 * del ingeniero de software consiste en implementar estos pasos de forma óptima para
 * obtener el resultado deseado. Es importante destacar que, a pesar de que los pasos
 * están descritos en el enunciado, no siempre es inmediato implementarlos.
 *
 * ## Desafío - Encontrar el número faltante
 *
 * Dados todos los números del 1 al `n` excepto uno, se pide encontrar el número que falta.
 *
 * ### Entrada
 * - La primera línea de la entrada contiene un único entero `n` (2 ≤ n ≤ 100,000).
 * - La segunda línea de entrada contiene `n-1` enteros separados por espacios aᵢ (1 ≤ aᵢ ≤ n).
 *
 * ### Salida
 * El programa debe imprimir el número faltante.
 *
 * ### Ejemplos
 *
 * | Entrada   | Salida |
 * |-----------|--------|
 * | 4         | 2      |
 * | 3 4 1     |        |
 * |-----------|--------|
 * | 3         | 3      |
 * | 2 1       |        |
 *
 * ### Constraints
 * - Time limit: 1 second
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 *
 * ## Tutorial sobre complejidad y notación Big O
 *
 * Aunque el problema descrito pueda parecer sencillo, la solución ingenua no será lo
 * suficientemente rápida para pasar todas las pruebas.
 *
 * Un enfoque ingenuo podría consistir en leer todos los elementos de la entrada en una
 * lista y luego recorrer los números de `1...n` para verificar si cada número está en
 * la lista. En caso de no estar, habríamos encontrado la respuesta:
 *
 * ```python
 * n = int(input())
 * a = [int(ai) for ai in input().split()]
 *
 * for i in range(1, n + 1):   # n operaciones
 *     if i not in a:          # n operaciones (recorre todos los elementos)
 *         print(i)            # ¡Hemos encontrado la solución!
 * ```
 *
 * Este algoritmo es bastante lento. Recorre todos los números de `1...n` y comprueba
 * si cada uno está en la lista. Verificar si un número está en una lista es una operación
 * lineal: el programa recorre todos los elementos de la lista `a` para comprobar si ese
 * número `i` está ahí o no. Por lo tanto, cada verificación requiere `n` operaciones,
 * aproximadamente (en realidad son n-1, pero la diferencia es mínima).
 *
 * Así que este algoritmo realiza ~n² operaciones en total. El bucle externo realiza `n`
 * iteraciones, y cada verificación de pertenencia a la lista también realiza `n` operaciones.
 * Por tanto, en total, eso equivale aproximadamente a n² operaciones (en el peor de los casos).
 *
 * > 💻 Nuestras computadoras pueden realizar ~10-100 millones de operaciones en un segundo.
 * > Entonces, si el límite de tiempo para un problema es de 1 segundo (típico en problemas
 * > algorítmicos), deberíamos apuntar a realizar como máximo 100 millones de operaciones
 * > en total.
 *
 * En el problema señalado, el número `n` puede llegar a 100,000, lo que implica que el
 * algoritmo realizaría n² = 10¹⁰ operaciones, es decir, 10 mil millones de operaciones.
 * En un computador normal, esto tomaría alrededor de 100 segundos, mientras que el límite
 * de tiempo para el problema es de 1 segundo. Por lo tanto, debemos pensar en una solución
 * más óptima.
 *
 * ### Notación Big O
 *
 * La notación Big O es una forma de describir la cota superior de la tasa de crecimiento
 * de la complejidad temporal de un algoritmo a medida que aumenta el tamaño de la entrada.
 * Da una estimación aproximada de cuántas operaciones realizará un algoritmo en función
 * del tamaño de su entrada.
 *
 * Para este problema, estimamos que el algoritmo realiza ~n² operaciones en total.
 * Por lo tanto, la complejidad del algoritmo se puede expresar como O(n²).
 *
 * A lo largo del curso profundizaremos más en este tema, ofreciendo tanto más intuición
 * como formalidad sobre la notación Big O y cómo se analiza el rendimiento de los algoritmos.
 */


let buffer = '';
process.stdin.on('data', chunk => buffer += chunk);
process.stdin.on('end', () => main(buffer));


function main(num, nums) {
    const n = Number(num);
    const numbers = nums.trim().split(/\s/).map(Number);

    // Your code goes here

    // console.log(ans);
    process.exit();
}