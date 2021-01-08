import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/endpoints/index.ts',
  output: {
    file: 'extensions/endpoints/dasec/index.js',
    format: 'cjs',
  },
  plugins: [
    json(),
    typescript(),
    // nodeResolve(),
    commonjs({ extensions: ['.js', '.ts'] }),
  ],
};
