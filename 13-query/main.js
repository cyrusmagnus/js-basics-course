// const query = {
//     getQueryParams: (queryParams) => {
//         // получем массивы с ключом и значением, потом обходим каждый массив и делаем проверку 
           // каждого элемента со значением (второго в массиве), чтобы были только строки или числа 
//         // и объединяем в строку с '=', объединяем всё в строку с '&'
//         return Object.entries(queryParams)
//             .filter(arrayKeyValue => {
//                 if (typeof arrayKeyValue[1] === 'string' || typeof arrayKeyValue[1] === 'number'){
//                     return true
//                 }
//                 return false
//             })
//             .map((arrayKeyValue) => arrayKeyValue.join('='))
//             .join('&');
//     }
// };
// если делать просто функцией
const getQueryParams = queryParams => {
    return Object.entries(queryParams)
        .filter(arrayKeyValue => {
            if (typeof arrayKeyValue[1] === 'string' || typeof arrayKeyValue[1] === 'number'){
                return true
            }
            return false
        })
        .map((arrayKeyValue) => arrayKeyValue.join('='))
        .join('&');
};
const queryParams = {
    search: 'Вася',
    take: 10,
    test: () => 1 
};
console.log(getQueryParams(queryParams));
