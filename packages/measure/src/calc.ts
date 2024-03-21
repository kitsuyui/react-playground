interface Point {
  x: number
  y: number
}

interface Line {
  start: Point
  end: Point
}

interface Size {
  width: number
  height: number
}

const createPoint = (x: number, y: number): Point => ({ x, y })
const createLine = (start: Point, end: Point): Line => ({ start, end })
const createLineByFourValue = (x1: number, y1: number, x2: number, y2: number): Line => createLine(createPoint(x1, y1), createPoint(x2, y2))

export const createCrossLinesBySize = (size: Size): Line[] => {
  const { width, height } = size
  const centerX = width / 2
  const centerY = height / 2
  return [
    createLineByFourValue(0, 0, centerX, centerY),
    createLineByFourValue(width, 0, centerX, centerY),
    createLineByFourValue(0, height, centerX, centerY),
    createLineByFourValue(width, height, centerX, centerY),
  ]
}
