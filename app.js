const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.red }`))
            .catch(err => console.log(err));
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}
// tabla de multiplcar
// let base = '7';
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(argv.base);
// console.log('limite', argv.limite);