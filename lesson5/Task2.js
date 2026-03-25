/* Написать функцию, которая принимает в себя объект, и строку со значением ‘keys’ или ‘values’. 
Вернуть нужно, либо массив ключей объекта либо массив значений объекта. 
Дефолтное значение для параметра, который определяет, что нужно вернуть равен ‘keys’. 
Если же сам объект не передан, или он передан другой тип данных, то нужно вернуть false */

function getObjectProperties(obj, property = "keys") {
    if (typeof obj !== "object" || obj === null) return false;
    switch (property) {
        case "values":
            return Object.values(obj);
        case "keys":
        default:
            return Object.keys(obj);
    }
}

const user = {
    user: "Nickolay",
    city: "Krasnodar",
};

const objectProperties1 = getObjectProperties(user, "values");
const objectProperties2 = getObjectProperties(user, "keys");
const objectProperties3 = getObjectProperties(user);
const objectProperties4 = getObjectProperties();

console.log({ objectProperties1, objectProperties2, objectProperties3, objectProperties4 });
/* 
{
    objectProperties1: [ 'Nickolay', 'Krasnodar' ],
    objectProperties2: [ 'user', 'city' ],
    objectProperties3: [ 'user', 'city' ],
    objectProperties4: false
}
*/
