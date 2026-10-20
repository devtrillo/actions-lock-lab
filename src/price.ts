export type Price = { amount: number; currency: "USD" | "EUR" };
export const total: Price = { amount: "10", currency: "USD" }; // TS2322
