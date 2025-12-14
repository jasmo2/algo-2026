function coloredCells(n: number): number {
  if (n === 1) {
    return 1
  }

  const pointsSet = new Set<string>()
  pointsSet.add("0,0")

  for (let i = 2; i <= n; i++) {
    const newPointsSet = new Set<string>()
    for (const pointSet of pointsSet) {
      const point: number[] = pointSet.split(",").map(Number)

      const [x, y] = point as number[]
      const directions = [
        [x + 1, y], // right
        [x - 1, y], // left
        [x, y + 1], // up
        [x, y - 1], // down
      ]

      for (const [newX, newY] of directions) {
        const coordinates = `${newX},${newY}`
        if (!pointsSet.has(coordinates)) {
          newPointsSet.add(coordinates)
        }
      }
    }

    for (const newPoint of newPointsSet) {
      pointsSet.add(newPoint)
    }
  }

  return pointsSet.size
}

console.log(coloredCells(96))
