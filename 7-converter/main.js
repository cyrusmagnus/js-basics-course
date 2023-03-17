const amountMoney = 1000; // сумма денег | amount of money
const currencyMoney = 'usd' // валюта денег | currency of money
const currencyConversion = 'rub'; // валюта конвертации | conversion currency

/*
    функция проверки на возможность конвертации, кот |
    the function of checking for the possibility of conversion
*/
const checkConversion = (currencyMoney, currencyConversion) => {
    switch (true){
        /*
            нам нужно, чтобы одно из значений валюты было равно rub или usd |
            we need one of the currency values to be equal to rub or usd
        */
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
        /*
            эта проверка для того, чтобы создать курс валюты к конкретной паре, потому что их может быть несколько |
            this check is in order to create a currency exchange rate for a specific pair, because there may be several of them
        */
        if (
            (currencyMoney === 'rub' || currencyMoney === 'usd')
            && (currencyConversion === 'rub' || currencyConversion === 'usd')
        ){
            const rateUsdToRub = 76; // прямой курс доллара к рублю | direct dollar to ruble exchange rate
            const resultConversion = currencyMoney === 'rub'
                ? amountMoney * rateUsdToRub
                : amountMoney * (1 / (rateUsdToRub / 1)); // 1/(76/1) обратный курс | reverse course
            return Math.round(resultConversion);
        }
    } else{
        console.log(null)
    }
};
console.log(conversion(amountMoney, currencyMoney, currencyConversion));
