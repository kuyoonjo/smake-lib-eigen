import { eigen } from '../src/eigen';
import { LLVM_Darwin } from 'smake';
import { addLibs } from '@smake/libs';
import { resolve, sep } from 'path';

test('eigen', () => {
  class A extends LLVM_Darwin {
    files = [];
  }
  const B = addLibs(A, eigen, eigen, eigen);
  const b = new B();
  const p = resolve(__dirname, '..', 'eigen').replace(
    new RegExp(sep, 'g'),
    '/'
  );
  expect(b.sysIncludedirs.includes(p)).toBe(true);
  expect(b.sysIncludedirs.length).toBe(3);
});
