
// requerir la funcion del archivo multiplicar.js
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// limpia la pantalla antes de la ejecucion del codigo
console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green))
    .catch(err => console.log(err.red));




