const moves = ["up", "right", "down", "left"]

function coloredCells(n: number): number {
  if (n === 1) {
    return 1
  }
  const matrixStack = [[0, 0]]
  const coloredCells = colorsCellsCalculation(n, 0, matrixStack)

  return coloredCells
}

function colorsCellsCalculation(
  n: number,
  coloredCells: number,
  matrixStack: number[][]
) {
  console.log("N: ", n)
  let i = 0
  const pointsSet = new Set("0,0")

  while (matrixStack.length > 0 && i < n) {
    i++
    const point = matrixStack.shift()

    for (let position of moves) {
      const [x, y] = point as number[]
      let newY = 0
      let newX = 0
      if (position === "up") {
        newX = x
        newY = y + 1
      } else if (position === "right") {
        newX = x + 1
        newY = y
      } else if (position === "down") {
        newX = x
        newY = y - 1
      } else if (position === "left") {
        newX = x - 1
        newY = y
      }

      const coordinates = `${newX},${newY}`
      if (!pointsSet.has(coordinates)) {
        pointsSet.add(coordinates)
        matrixStack.unshift([newX, newY])
      }

      console.log(
        "TCL",
        "coloredCells",
        coloredCells,
        "matrixStack:",
        matrixStack.length,
        "i:",
        i
      )
      coloredCells += matrixStack.length
    }
  }

  return coloredCells
}

coloredCells(4)
