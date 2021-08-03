import { resolve } from 'path';
import { LLVM } from 'smake';

export function eigen(t: LLVM) {
  Object.defineProperty(t, 'sysIncludedirs', {
    value: [
      ...t.sysIncludedirs,
      resolve(__dirname, '..', 'eigen').replace(/\\/g, '/'),
    ],
    configurable: true,
  });
}
