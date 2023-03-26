const array = [542, 64324, 533, 32, 6, 4, 341, 5, 75, 3, 6];
/*
    функция принимает на вход массив с данными, функцию - проверку, которая вернёт true или false и значение,
    которое будет использовать, как this в функции callback |
    the function accepts an array with data as input, a check function that returns true or false and the value,
    which will be used as this in the callback function
*/
const filter = (array, callback, thisArg) => {
    const results = [];
    for (let index = 0; index < array.length; index++){
        /*
            вызываем функцию callback с методом call, чтобы задать this, чтобы можно было легко фильтровать
            ассоциативный массив (json, массив с объектами) |
            calling the callback function with the call method to set this so that it can be easily filtered
            associative array (json, array with objects)
         */
        if (callback.call(thisArg, array[index], index, array)){
            results.push(array[index]);
        }
    }
    return results;
};
// тестовая функция проверки, что число больше 100, к примеру |
// the test function checks that the number is greater than 100, for example
function checkingValue(value){
    //console.log(value)
    return value > 100;
}
const test = filter(array, checkingValue);
console.log(test)