console.log(process.env.Prueba)
console.log(process.env.NODE_ENV)
import 'bootstrap/dist/css/bootstrap.css';
import printTestMessage from '@/js/myModule.js'
printTestMessage("hola desde modulo");

// Custom CSS imports
import '@/css/site.css';

console.log('The \'site\' bundle has been loaded!');