const pass = 'qwerty-123';
const getCryptPass = (pass) => {
    const array = Array.from(pass);
    // просто меняем соседние элементы местами || just swap the neighboring elements in places
    for (let i = 1; i < array.length; i += 2){

    }
    return array.join('');
}
const cryptPass = getCryptPass(pass)
console.log(cryptPass)
const checkPass = (cryptPass, pass) => {
    const array = Array.from(cryptPass);
    // просто повторяем операцию || just repeat the operation
    for (let i = 1; i < array.length; i += 2){
        [ array[i], array[i - 1] ] = [ array[i - 1], array[i] ];
    }
    return pass === cryptPass;
}
console.log(checkPass(cryptPass, pass))