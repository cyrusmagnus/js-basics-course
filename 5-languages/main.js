const userLanguage = 'en';

switch (true){
    case(userLanguage === 'ru'):
        console.log('Привет');
        break;
    case (userLanguage === 'en'):
        console.log('Hello');
        break;
    default:
        console.log(null)
        break;
}