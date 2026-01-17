/*
 * ============================================================================
 * VALOR MÍNIMO EXCLUIDO (MEX)
 * ============================================================================
 *
 * DESCRIPCIÓN DEL PROBLEMA:
 * -------------------------
 * Consideremos los números enteros no negativos (0, 1, 2, …). Para una lista
 * de números 'l', llamaremos valor mínimo excluido (MEX) de 'l' al entero
 * no negativo más pequeño que no aparezca en 'l'.
 *
 * Se te pide que escribas un programa que, dada la lista 'l', calcule su MEX.
 *
 * ENTRADA:
 * --------
 * - Primera línea: Un único entero n (1 ≤ n ≤ 10^5) que indica la cantidad
 *   de elementos en la lista l
 * - Segunda línea: n elementos que representan la lista (0 ≤ l_i ≤ 10^9)
 *
 * SALIDA:
 * -------
 * El programa debe imprimir el MEX de la lista dada.
 *
 * EJEMPLOS:
 * ---------
 * Ejemplo 1:
 *   Entrada:
 *     3
 *     1 2 3
 *   Salida:
 *     0
 *   Explicación: 0 no está en la lista, por lo tanto MEX = 0
 *
 * Ejemplo 2:
 *   Entrada:
 *     4
 *     0 1 3 4
 *   Salida:
 *     2
 *   Explicación: 0 y 1 están presentes, pero 2 falta, por lo tanto MEX = 2
 *
 * Ejemplo 3:
 *   Entrada:
 *     5
 *     0 1 2 3 4
 *   Salida:
 *     5
 *   Explicación: Todos los números de 0 a 4 están presentes, por lo tanto MEX = 5
 *
 * RESTRICCIONES:
 * --------------
 * - Límite de tiempo: 1.6 segundos
 * - Límite de memoria: 512 MB
 * - Límite de salida: 1 MB
 *
 * ENFOQUE:
 * --------
 * 1. Usar un Set para almacenar todos los números de la lista de entrada
 * 2. Comenzar desde 0 e incrementar hasta encontrar un número que no esté en el Set
 * 3. Devolver ese número como el MEX
 *
 * Complejidad temporal: O(n) donde n es el tamaño de la lista
 * Complejidad espacial: O(n) para el Set
 *
 * ============================================================================
 */

// Implementación de la solución