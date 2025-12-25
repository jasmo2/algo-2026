/*
 * # Anagramas
 *
 * Dos cadenas se consideran anagramas si podemos reordenar las letras de una
 * para obtener la otra. Por ejemplo, las palabras `listen` y `silent` son
 * anagramas, ya que es posible reordenar las letras de `listen` para obtener
 * `silent`. De manera similar, `William Shakespeare` es un anagrama de
 * `I am a weakish speller`.
 *
 * Por lo tanto, al determinar si dos cadenas son anagramas:
 * - La comparación NO debe distinguir entre mayúsculas y minúsculas
 * - Las dos cadenas pueden tener distinta cantidad de espacios
 *
 * Dada una cadena `s` y `n` cadenas adicionales, se te pide calcular cuántas
 * de ellas son anagramas de la cadena `s`.
 *
 * ## Entrada
 *
 * - La primera línea contiene la cadena `s` (1 ≤ |s| ≤ 100)
 * - La segunda línea contiene el número `n` (0 ≤ n ≤ 10^4)
 * - Las siguientes `n` líneas contienen cadenas de longitud ≤ 100
 *
 * ## Salida
 *
 * El programa debe imprimir la cantidad de anagramas de la cadena `s`.
 *
 * ## Ejemplo
 *
 * Entrada:
 *   Tom Marvolo Riddle
 *   2
 *   Some random string
 *   I am Lord Voldemort
 *
 * Salida: 1
 *
 * ## Constraints
 *
 * - Time limit: 1 second
 * - Memory limit: 512 MB
 * - Output limit: 1 MB
 */   

function anagrams(input) {
    const lines = input.trim().split('\n');
    const initialString = lines[0];
    const n = parseInt(lines[1], 10);
    const candidates = lines.slice(2, 2 + n);

    const initialNormalize = normalizeString(initialString)
    const initialMapLetterCount = mapCount(initialNormalize)

    let anagrams = 0

    for(const candidate of candidates) {
        const candidateNormalize = normalizeString(candidate)
        const candidateMapLetterCount = mapCount(candidateNormalize)

        if(compareCandidateWithInitialMappings(initialMapLetterCount, candidateMapLetterCount)){
            anagrams++
        }
    }
    return anagrams

}

function mapCount(str) {
    const charCounter = {}
    const strL = str.length

    for(let i=0; i < strL; i++) {
        const char = str[i];

        if(charCounter[char] === undefined) {
            charCounter[char] = 1
        } else {
            charCounter[char] += 1
        }
    }
    return charCounter
}

function normalizeString(str) {
    const strLower = str.toLowerCase();
    const strNoSpaces = strLower.replace(/\s+/g, '');
    return strNoSpaces;
}

function compareCandidateWithInitialMappings(initialMapLetterCount, candidateMapLetterCount) {
    if(Object.keys(initialMapLetterCount).length !== Object.keys(candidateMapLetterCount).length){
        return false
    }
    for(let letter in initialMapLetterCount) {
        if(initialMapLetterCount[letter] !== candidateMapLetterCount[letter]){
            return false
        }
    }

    return true
}

let buffer = '';
process.stdin.on('data', chunk => buffer += chunk);
process.stdin.on('end', () => main(buffer));

function main(input) {
    const result = anagrams(input);
    console.log(result);
}