const amountMoney = 1000; // сумма денег
const currencyMoney = 'usd' // валюта денег
const currencyConversion = 'rub'; // валюта конвертации

/*
    функция проверки на возможность конвертации, кот
*/
const checkConversion = (currencyMoney, currencyConversion) => {
    switch (true){
        // нам нужно, чтобы одно из значений валюты было равно rub или usd
        case
            (currencyMoney === 'rub' || currencyMoney === 'usd')
            && (currencyConversion === 'rub' || currencyConversion === 'usd')
        :
            return true;
        default:
            return null;
    }
};
const conversion = (amountMoney, currencyMoney, currencyConversion) => {
    if (checkConversion(currencyMoney, currencyConversion)){
        // эта проверка для того, чтобы создать курс валюты к конкретной паре, потому что их может быть несколько
        if (
            (currencyMoney === 'rub' || currencyMoney === 'usd')
            && (currencyConversion === 'rub' || currencyConversion === 'usd')
        ){
            const rateUsdToRub = 76; // прямой курс доллара к рублю
            const resultConversion = currencyMoney === 'rub'
                ? amountMoney * rateUsdToRub
                : amountMoney * (1 / (rateUsdToRub / 1)); // 1/(76/1) обратный курс
            return Math.round(resultConversion);
        }
    } else{
        console.log(null)
    }
};
console.log(conversion(amountMoney, currencyMoney, currencyConversion));
