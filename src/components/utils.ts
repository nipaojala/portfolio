export const sliceStringArray = (array: string[] | undefined) => {
  const midpoint = array && Math.ceil(array.length / 2)
  return {
    left: midpoint ? array?.slice(0, midpoint) : [],
    right: midpoint ? array?.slice(midpoint) : [],
  }
}
