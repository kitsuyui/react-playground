import { createCrossLinesBySize, createPoint, createLine, createLineByFourValue } from './calc'

describe('createCrossLinesBySize', () => {
  it('should return 4 lines', () => {
    const size = { width: 100, height: 100 }
    const lines = createCrossLinesBySize(size)
    expect(lines).toHaveLength(4)
  })

  it('should return 4 lines with correct start and end', () => {
    const size = { width: 100, height: 100 }
    const lines = createCrossLinesBySize(size)
    expect(lines[0]).toEqual({ start: { x: 0, y: 0 }, end: { x: 50, y: 50 } })
    expect(lines[1]).toEqual({ start: { x: 100, y: 0 }, end: { x: 50, y: 50 } })
    expect(lines[2]).toEqual({ start: { x: 0, y: 100 }, end: { x: 50, y: 50 } })
    expect(lines[3]).toEqual({ start: { x: 100, y: 100 }, end: { x: 50, y: 50 } })
  })
})

describe('createPoint', () => {
  it('should return a point', () => {
    const point = createPoint(100, 100)
    expect(point).toEqual({ x: 100, y: 100 })
  })
})

describe('createLine', () => {
  it('should return a line', () => {
    const line = createLine({ x: 0, y: 0 }, { x: 100, y: 100 })
    expect(line).toEqual({ start: { x: 0, y: 0 }, end: { x: 100, y: 100 } })
  })
})

describe('createLineByFourValue', () => {
  it('should return a line', () => {
    const line = createLineByFourValue(0, 0, 100, 100)
    expect(line).toEqual({ start: { x: 0, y: 0 }, end: { x: 100, y: 100 } })
  })
})
