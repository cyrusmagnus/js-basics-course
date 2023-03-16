const addressLat = 100; // x1
const addressLong = 30; // y1
const positionLat = 50; // x2
const positionLong = 20; // y2
const getDistance = (x1, y1, x2, y2) => {
    /* Найдем разницу между координатами | Find the difference between the coordinates */
    const differenceX = x2 - x1; // Разница по X | Difference by X
    const differenceY = y2 - y1; // Разница по Y | Difference by Y

    /* Возведем результаты в квадрат и сложим | Let's square the results and add */
    const sumSquared = Math.pow(differenceX, 2) + Math.pow(differenceY, 2);
    /* Извлечем квадратный корень и получим ответ | Extract the square root and get the answer */
    const resultDistance = Math.sqrt(sumSquared);
    return Math.round(resultDistance);
}
/* Короткая запись | Short recording */
// const getDistance = (x1, y1, x2, y2) => Math.round(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));

console.log(getDistance(addressLat, addressLong, positionLat, positionLong)); // 51