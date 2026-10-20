export function firstUpper(xs: string[]): string {
  return xs[0].toUpperCase(); // TS2532 via noUncheckedIndexedAccess
}
export function len(s: string | undefined) {
  return s.length; // TS18048
}
