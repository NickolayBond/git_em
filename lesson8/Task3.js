const Request1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 100);
    });

const Request2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Ошибка");
        }, 100);
    });

Promise.any([Request1(), Request2()])
    .then((result) => {
        console.log("Успешный ответ: ", result);
    })
    .catch((error) => {
        console.error("Ошиюка: ", error);
    });
