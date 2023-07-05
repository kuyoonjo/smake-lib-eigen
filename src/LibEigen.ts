import { resolve } from 'path';
import { LLVM } from '@smake/llvm';

export abstract class LibEigen {
  static config(llvm: LLVM) {
    llvm.includedirs = [
      ...llvm.includedirs,
      resolve(__dirname, '..', 'eigen').replace(/\\/g, '/'),
    ];
  }
}
