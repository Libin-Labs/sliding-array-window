export function arrayWindows<T>(items: readonly T[], size: number, step = 1): T[][] {
  if (
    !Array.isArray(items) ||
    !Number.isSafeInteger(size) ||
    size < 1 ||
    !Number.isSafeInteger(step) ||
    step < 1
  )
    throw new RangeError('Expected array and positive window size and step');
  const out: T[][] = [];
  for (let i = 0; i + size <= items.length; i += step) out.push(items.slice(i, i + size));
  return out;
}
