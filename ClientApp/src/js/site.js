import 'bootstrap/dist/css/bootstrap.css';
import '@/css/site.css';
import printTestMessage from '@/js/myModule.js';

const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10];
const numbers3 = [...numbers1, ...numbers2];


printTestMessage("hola desde modulo");
console.log(process.env.Prueba)
console.log(process.env.NODE_ENV)
console.log(numbers3.join(','));
console.log('The \'site\' bundle has been loaded!');