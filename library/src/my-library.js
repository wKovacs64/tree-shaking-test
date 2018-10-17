import a from './a';
import b from './b';

/**
 * Desired usage:
 *
 * import * as myLibrary from 'my-library'; // ESM (with tree-shaking)
 * import { a } from 'my-library';          // ESM (with tree-shaking)
 * const { a } = require('my-library');     // CommonJS
 * const myLibrary = require('my-library'); // CommonJS
 */

export { a, b };
