// requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');


// tabla de multiplcar
// let base = numero;


let listarTabla = (base, limite = 10) => {

    console.log('============='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${ i } = ${ base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolver, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let dato = '';

        for (let i = 1; i <= limite; i++) {
            dato += `${base} * ${ i } = ${ base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(dato));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolver(`tabla-${ base }-al-${ limite }.txt `)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}