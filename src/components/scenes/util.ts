/** Deterministic pseudo-random number in [0, 1): the same on the server and in the browser. */
export function seeded(index: number, salt = 1) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453
  return Math.round((value - Math.floor(value)) * 1000) / 1000
}
