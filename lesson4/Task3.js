/* Дан объект, в значениях которого может быть любой тип данных. Нужно написать код, который посчитает, сколько каждого типа данных встречалось в объекте. 
Исходный объект мутировать нельзя 
Примечания: Результат должен соответствовать тем типам данных, которые есть в JS. 
Если тип данных не встречается, то в результате должно быть 0. */

const obj = {
    prop1: null,
    prop2: {},
    prop3: 3,
    prop4: "str",
    prop5: 100,
};
const result = {};

for (let key in obj) {
    const type = obj[key] === null ? "null" : typeof obj[key];

    if (!result[type]) result[type] = 1;

    result[type]++;
}

console.log(result); // {null: 1, object: 1, string: 1, number: 2}
