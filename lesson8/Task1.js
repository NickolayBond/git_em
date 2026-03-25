/* Задача:
Есть 2 функции, которые отправляют запрос. 
Запрос имитируется при помощи setTimeout, в шаблоне кода эти функци будут определены. 
Нужно написать код, который позволит поочередно выполнить эти запросы. Сначала Request1, потом Request2. 
Вывести в консоль результат выполнения функций
*/

const Request1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success request1");
        }, 100);
    });

const Request2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success request2");
        }, 100);
    });

// через async/await
const asyncRequests = async () => {
    const result1 = await Request1();
    console.log(result1);
    const result2 = await Request2();
    console.log(result2);
};
asyncRequests();

// Через .then
Request1()
    .then((result) => {
        console.log(result);
        return Request2();
    })
    .then((result) => {
        console.log(result);
    });
