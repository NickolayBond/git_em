/* Дан массив с числами, нужно написать код, который проверит является ли этот массив отсортированным */

const array = [2, 3, 4, 1, 2, 3, 4, 5];

// Код, который проверит, является ли массив отсортированным
let isSortedArray = true;

for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
        isSortedArray = false;
        break;
    }
}

console.log(isSortedArray); //false
