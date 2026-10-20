export function firstUpper(xs: string[]): string {
  return (xs[0] ?? "").toUpperCase();
}
export function len(s: string | undefined) {
  return s?.length ?? 0;
}
