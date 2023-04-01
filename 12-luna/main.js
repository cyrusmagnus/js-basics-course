// const cardBank = '5469-5500-1770-9210'; // 5148-5132-3741-5702 - это валидная карта
// /* используетя алгоритм луна в упрощенно варианте
// 1. цифры проверяемой последовательности нумеруются справа налево
// 2. цифры, оказавшиеся на нечётных местах, остаются без изменений
// 3. цифры, стоящие на чётных местах, умножаются на 2
// 4. если в результате такого умножения возникает число больше 9, то из него вычетается 9, вместо того, что написано в википедии
// 5. все полученные в результате преобразования цифры складываются. Если сумма кратна 10, то исходные данные верны
//  */
// const validateCardLuna = (card) => {
//     // контрольная сумма
//     let checkSum = 0;
//     // переводим строку в массив, убираем '-' и преобразуем каждый элемент из строки в цифру, и переворачиваем
//     const cardNumbers = card.split('').filter(element => element !== '-').map(Number).reverse();
//     // обходим каждое число
//     // .entries() для того, чтобы сделать обычный обход и сразу получить индекс и число
//     for (const [index, num] of cardNumbers.entries()) {
//         if (index % 2 === 0) {
//             let buffer = num * 2;
//             // если удвоенное число больше 9, то вычитаем из него 9 и прибавляем к контрольной сумме
//             // если нет, то сразу прибавляем к контрольной сумме
//             buffer > 9 ? checkSum += buffer - 9 : checkSum += buffer;
//         }
//         // если число стоит на чётной позиции, то прибавляем его к контрольной сумме
//         else {
//             checkSum += num;
//         }
//     }
//     // проверка контрольной суммы на кратность 10
//     return checkSum % 10 === 0;
// }
// console.log(validateCardLuna(cardBank))