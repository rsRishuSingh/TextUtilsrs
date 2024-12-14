// import x, { b1, c, d } from "./exampleDefaultExport1.mjs"
// console.log(b1) // Error

import x, { b, c, d } from "./exampleDefaultExport1.mjs"
console.log(x);  // default export
console.log(b)  // export using array destructuring