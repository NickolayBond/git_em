/* Дан массив в примитивными типами данных. Нужно написать код, который скопирует этот массив. */

const array = [1, 2, 3, "f", true, false];

const copyArray = [...array]; //или Array.from(array), или array.slice()
