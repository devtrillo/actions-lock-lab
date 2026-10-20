const raw: unknown = JSON.parse('{"n":"x"}');
export const n = (raw as { n: number }).n.toFixed(2); // compiles, throws at runtime
