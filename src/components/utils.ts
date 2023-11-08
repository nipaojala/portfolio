export const sliceStringArray = (array: string[]) => {
  const midpoint = Math.ceil(array.length / 2)
  return {
    left: array.slice(0, midpoint),
    right: array.slice(midpoint),
  }
}
