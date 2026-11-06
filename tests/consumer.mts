import * as api from '@lp-labs/sliding-array-window';
import { arrayWindows } from '@lp-labs/sliding-array-window';
console.log(arrayWindows([1, 2, 3, 4], 2));
// @ts-expect-error invalid argument must be rejected by declarations
api.arrayWindows('items', 2);
