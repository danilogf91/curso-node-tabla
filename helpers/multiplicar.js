const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        if (listar) {
            console.log(`===================================================
    Tabla de multiplicar con base: ${base} hasta el ${hasta}
===================================================`);
        }
            let salida = '';
            let consola = '';

            for (let i = 1; i <= hasta; i++) {
                salida = salida + ` ${base} X ${i} = ${base * i}\n`;
                consola = consola + ` ${base} ${'X'.red} ${i} ${'='.green} ${base * i}\n`;
            }

    
        (listar) ? console.log(consola) : "";

        fs.writeFileSync('./salida/tabla_del_${base}.txt', salida);
        return `tabla-${base}.txt creado` ;
    } catch (error) {
        throw error;
    }   
}

module.exports = {
    crearArchivo
}