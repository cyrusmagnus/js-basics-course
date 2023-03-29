const date = ['10-02-2023', '2023-10-02', '2023-10-02-2023-10-02', 'text', '11/12/2024', '2024/12/11', '00/13/2022', '41/42/2023'];
const conversionDate = (array) =>{
    return array.filter((element) => {
        // проверяем на наличие разделительных символов в дате и чтобы колличесво не привышало и не было меньше 2 |
        // we check for the presence of separating characters in the date and that the number does not exceed or be less than 2
        const numberCharacters = element.split('').filter(item => (item === '-') || (item === '/')).length;
        return numberCharacters === 2;
    }).map((element) => {
        // приводим все даты в один формат написания | we give all the dates in one writing format
        const char = element.split(/\/|\-/); // регулярное выражение на '/' или '-' | regular expression on '/' or '-'
        return char[0].length > 2 ? char.reverse().join('-') : char.join('-');
    }).filter((element) => {
        // финальная проверка, чтобы день не привышал 31 и был больше 0, месяц 12 и 0, и год не начинался с 0 |
        // final check so that the day does not exceed 31 and is greater than 0, the month is 12 and 0, and the year does not start with 0
        const day = Number(element.split('-')[0]);
        const mouth = Number(element.split('-')[1]);
        const year = Number(element.split('-')[2].split('')[0]);
        return ((day <= 31) && (day > 0)) && ((mouth <= 12) && (mouth > 0)) && (year > 0);
    })
};

// версия для людей (на мой взгляд)| version for people
const conversionDateHuman = (array) =>{
    const arrayDate = [];
    for (let index = 0; index < array.length; index++){
        const date = array[index]; // для удобства
        if (getNumberElementsInArray(date) === 2){
            const dateElements = date.split(/\/|\-/); // регулярное выражение на '/' или '-'
            // перееорачиваем массив, если первый элемент год
            if (dateElements[0].length !== 2){
                dateElements.reverse()
            }
            // проверка на валидность елементов даты
            const [dateDay, dateMouth, dateYear] = dateElements;
            switch (true) {
                case !(+dateDay <= 31 && +dateDay > 0) :
                    break;
                case !(+dateMouth <= 12 && +dateMouth > 0) :
                    break;
                case !(+dateYear.split('')[0] !== 0) :
                    break;
                default:
                    arrayDate.push(dateElements.join('-'));
            }
        }
    }
    return arrayDate;
};
function getNumberElementsInArray(string){
    return string
        .split('')
        .filter(element => (element === '/') || (element === '-'))
        .length;
}

console.log(conversionDate(date));
console.log(conversionDateHuman(date));

