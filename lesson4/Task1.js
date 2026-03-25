/* Нужно написать код, который проверит, является ли объект пустым. */

const obj = {};
let isEmpty = false;

if (!Object.keys(obj).length) isEmpty = true;

console.log(isEmpty);
