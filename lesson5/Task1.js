/* Задание: обернуть все предыдущие задания в функции */

/*===== lesson 2 ===== */

/* task1 */
function checkNumbers(a, b, c) {
    const sum = a + b + c;

    if (a < 0 || b < 0 || c < 0 || sum === 100) return "нет";

    if (a > c + b) return -1;

    if (sum < 0) return 500;
}
/* task2 */

function checkSum(a, b, max) {
    if (typeof a !== "number" || typeof b !== "number" || typeof max !== "number") return null;
    return !!(a + b > max);
}

/* task3 */

function checkNumbersBool(a, b, c) {
    let x = c ? a || b : a && b;

    /*  if/else:
    if (c) x = a || b;
    else x = a && b;
    */

    return x;
}
const a = true;
const b = true;
const c = true;

let x = checkNumbersBool(a, b, c);

/*===== lesson 3 ===== */

/* task1 */

const arrayPrimitives = [1, 2, 3, "f", true, false];
const copyArray = (arrayPrimitives) => [...arrayPrimitives];

/* task2 */

const unSortedArray = [2, 3, 4, 1, 2, 3, 4, 5];

function isSorted(array) {
    let isSortedArray = true;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= array[i + 1]) {
            isSortedArray = false;
            break;
        }
    }
    return isSortedArray;
}

const isSortedArray = isSorted(unSortedArray);

/* task3 */

const array = [1, 2, 3, 4, 10, 11, 3, 15, 20];

function sortArrayByOdd(array) {
    let oddIndex = 0;
    const oddNumbersArray = array.filter((num) => num % 2 === 1).sort((a, b) => a - b);

    return array.map((num) => {
        if (num % 2 === 0) return num;
        const oddNum = oddNumbersArray[oddIndex];
        oddIndex++;
        return oddNum;
    });
}

const sortedArrayByOdd = sortArrayByOdd(array);

/*===== lesson 4 ===== */

/* task1 */

const emptyObj = {};
let isEmpty = false;

const isEmptyObject = (obj) => {
    if (!Object.keys(obj).length) return true;
    return false;
};

isEmpty = isEmptyObject(emptyObj);

/* task2 */

const objWithAnyValues = { prop1: 1, prop2: 2, prop3: true, prop4: "test", prop5: 10 };

function setEvenNumbersToObj(obj) {
    let resultObj = {};

    for (let key in obj) {
        if (typeof obj[key] === "number" && obj[key] % 2 === 0) resultObj[key] = obj[key];
    }
    return resultObj;
}

const resultObj = setEvenNumbersToObj(objWithAnyValues);

/* task3 */
const objWithAnyTypes = {
    prop1: null,
    prop2: {},
    prop3: 3,
    prop4: "str",
    prop5: 100,
};

function getTypesInObj(obj) {
    const result = {};

    for (let key in obj) {
        const type = obj[key] === null ? "null" : typeof obj[key];
        if (!result[type]) result[type] = 1;
        else result[type]++;
    }
    return result;
}

const resultTypes = getTypesInObj(objWithAnyTypes);

console.log(resultTypes);
