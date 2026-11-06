import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns overlapping windows', () => {
  assert.deepEqual(api.arrayWindows([1, 2, 3, 4], 2), [
    [1, 2],
    [2, 3],
    [3, 4],
  ]);
});
test('supports step size', () => {
  assert.deepEqual(api.arrayWindows([1, 2, 3, 4, 5], 2, 2), [
    [1, 2],
    [3, 4],
  ]);
});
test('omits incomplete tail', () => {
  assert.deepEqual(api.arrayWindows([1, 2, 3], 2, 2), [[1, 2]]);
});
test('returns empty for oversized window', () => {
  assert.deepEqual(api.arrayWindows([1], 2), []);
});
test('handles empty input', () => {
  assert.deepEqual(api.arrayWindows([], 2), []);
});
test('rejects zero size', () => {
  assert.throws(() => api.arrayWindows([1], 0), RangeError);
});
