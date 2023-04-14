const array = [542, 64324, 533, 32, 6, 4, 341, 5, 75, 3, 6];
/*
    функция принимает на вход массив с данными, функцию - проверку, которая вернёт true или false и значение,
    которое будет использовать, как this в функции callback
*/
const filter = (array, callback, thisArg) => {
    const results = [];
    for (let index = 0; index < array.length; index++){
        /*
            вызываем функцию callback с методом call, чтобы задать this, чтобы можно было легко фильтровать
            ассоциативный массив (json, массив с объектами)
         */
        if (callback.call(thisArg, array[index], index, array)){
            results.push(array[index]);
        }
    }
    return results;
};
// тестовая функция проверки, что число больше 100, к примеру
function checkingValue(value){
    return value > 100;
}
const test = filter(array, checkingValue);
console.log(test)
