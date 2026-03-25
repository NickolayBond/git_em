/* Дан массив чисел, нужно написать код, который отсортирует только нечетные значения. */

const array = [1, 2, 3, 4, 10, 11, 3, 15, 20];

const oddNumbersArray = array.filter((num) => num % 2 === 1).sort((a, b) => a - b);

let oddIndex = 0;
const sortedByOddArray = array.map((num) => {
    if (num % 2 === 0) return num;
    const oddNum = oddNumbersArray[oddIndex];
    oddIndex++;
    return oddNum;
});

console.log(sortedByOddArray);
/* [1,  2,  3,  4, 10, 3, 11, 15, 20] */
