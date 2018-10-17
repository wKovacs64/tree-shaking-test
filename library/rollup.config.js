import glob from 'glob';
import babel from 'rollup-plugin-babel';

// THIS DOESN'T TREE-SHAKE WELL (as far as I can tell):
// (consuming webpack bundle includes external jssha module)
export default {
  input: 'src/my-library.js',
  output: {
    file: 'es/my-library.js',
    format: 'esm',
  },
  external: ['jssha/src/sha1'],
  plugins: [babel({ exclude: 'node_modules/**' })],
};

// THIS WORKS:
// (consuming webpack bundle does NOT include external jssha module)
// export default {
//   experimentalCodeSplitting: true,
//   input: glob.sync('src/**/*.js'),
//   output: {
//     dir: 'es',
//     format: 'esm',
//   },
//   external: ['jssha/src/sha1'],
//   plugins: [babel({ exclude: 'node_modules/**' })],
// };
