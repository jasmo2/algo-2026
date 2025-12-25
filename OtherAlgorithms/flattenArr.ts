// Define a more specific primitive type for allowed values
type PrimitiveValue = number | string | boolean

// Define a recursive type for nested arrays
type NestedArray = (PrimitiveValue | NestedArray)[]

// Function signatures remain clear with the new types
function flatRecursive(
  items: NestedArray,
  results: PrimitiveValue[] = []
): PrimitiveValue[] {
  for (let item of items) {
    if (Array.isArray(item)) {
      flatRecursive(item, results)
    } else {
      results.push(item)
    }
  }
  return results
}

// Iterative approach to flatten nested arrays
function flattenIterative(nestedArrays: NestedArray): PrimitiveValue[] {
  const result: PrimitiveValue[] = []
  const stack: (PrimitiveValue | NestedArray)[] = [...nestedArrays]

  while (stack.length > 0) {
    const current = stack.pop()!

    if (Array.isArray(current)) {
      // Add array elements to the stack in reverse order
      // This maintains the original order in the final result
      for (let i = current.length - 1; i >= 0; i--) {
        stack.push(current[i])
      }
    } else {
      result.push(current)
    }
  }

  return result
}

const flattenNestedArraysMainRecursive = (
  nestedArrays: NestedArray
): PrimitiveValue[] => {
  return flatRecursive(nestedArrays, [])
}

// Example usage remains the same
const input = [1, [2, [3, 4], 5, "deel"], 6, [true, 7, 8]]
const resultRecursive = flattenNestedArraysMainRecursive(input)
const resultIterative = flattenIterative(input)
console.log("Results Recursive:", resultRecursive) // [1, 2, 3, 4, 5, 'deel', 6, true, 7, 8]
console.log("Results Iterative:", resultIterative) // [1, 2, 3, 4, 5, 'deel', 6, true, 7, 8]
