const l = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems=l.flattenDeep(items);
console.log(newItems);
