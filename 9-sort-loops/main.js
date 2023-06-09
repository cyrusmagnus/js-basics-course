const array = [1, 9, 54, 224, 6, 0];
// Проверка через switch на случай,если будет необходимсоть расширить до сортировки строковых массивов
const sort = (array, sortOrder = 'increasing') => {
    switch (true) {
        /*
            Два цикла, внешний и внутренний перебирают один и тот же массив.
            Первая итерация внешнего цикла даёт первый элемент массива,
            который сравнивается с другими элементами того же массива во внутреннем цикле.
            При выполнении условия, элементы "меняются местами"
        */
        case sortOrder === 'increasing': // по возрастанию |
            for (let i = 0; i < array.length; i++) {
                for (let j = i; j < array.length; j++) {
                    if (array[i] > array[j]) {
                        let t = array[i];
                        array[i] = array[j];
                        array[j] = t;
                    }
                }
            }
            return array;
        case sortOrder === 'decrease': // по уменьшению
            for (let i = 0; i < array.length; i++) {
                for (let j = i; j < array.length; j++) {
                    if (array[i] < array[j]) {
                        let t = array[i];
                        array[i] = array[j];
                        array[j] = t;
                    }
                }
            }
            return array;
        default:
            return null;

    }
};
// Вторая реадизация, если только для чисел
const sortTwo = (array, sortOrder = 'increasing') => {
    let count = 0;
    /*
        Тут один цикл обходит массив и на каждой итерации делает проверку каждого числа
        со следующим числом, если условие выполняется, то чмсла меняются местами
        и счетчик итераций уменьшается на единицу
     */
    if (!sortOrder === 'increasing'){
        while (count < array.length) {
            if (array[count] < array[count + 1]) {
                [array[count], array[count + 1]] = [array[count + 1], array[count]];
                count = -1;
            }
            count++;
        }
        return array;
    } else {
        while (count < array.length) {
            if (array[count] > array[count + 1]) {
                [array[count], array[count + 1]] = [array[count + 1], array[count]];
                count = -1;
            }
            count++;
        }
        return array;
    }
}

console.log(sort(array));
console.log(sortTwo(array));