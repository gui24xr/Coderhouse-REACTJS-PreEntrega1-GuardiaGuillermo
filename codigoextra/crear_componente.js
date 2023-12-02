
/*

ESTO ES UNA ESPECIE DE SNIPET DE ELABORACION  PROPIA PARA EJECUTAR ESTE SCRIPT CON NODE POR CONSOLA
Y QUE ME CREE AUTOMATICAMENTE UNA CARPETA CON UN COMPONENTE Y LOS ARCHIVOS CSS Y JSX QUE USO MAS SU TEXTO INICIAL.

SOLO HAY que pasaar por parametro en la consola el nombre de componente
 EJ: node crear_componente MiComponente
*/


//-------------------------------------------------------------------------------------

const fs = require('fs');
const path = require('path');



const getContenidoComponente = (nombreComponente) =>{

    return "import React from 'react';\nimport './"+ nombreComponente + ".styles.css'\n\nconst "+nombreComponente+" = () => {\n    return (\n        <div className='"+nombreComponente.toLowerCase()+"-container'>\n           <h1>"+nombreComponente+"</h1>\n        </div>\n    );\n}\n\nexport default "+nombreComponente+";"
    
}

const getContenidoCssComponente = (nombreComponente) =>{

    return "." + nombreComponente.toLowerCase() + "-container{\n\n}"
    
    
}

const crearComponente = (nombreComponente) =>{
    
    fs.mkdir(nombreComponente, (err) => {
    if (err) {
        console.error('Error al crear la carpeta:', err);
    } else {
        console.log('Carpeta creada exitosamente:', nombreComponente);

        // Crear archivo dentro de la carpeta de forma asíncrona
        let rutaArchivo = path.join(nombreComponente, nombreComponente+'.jsx');
        let contenidoArchivo = getContenidoComponente(nombreComponente);

        //creo el jsx
        fs.writeFile(rutaArchivo, contenidoArchivo, (err) => {
        if (err) {
            console.error('Error al crear el archivo:', err);
        } else {
            console.log('Archivo creado exitosamente:', rutaArchivo);
        }
        });

        //Creo el css
        rutaArchivo = path.join(nombreComponente, nombreComponente+'.styles.css');
        contenidoArchivo = getContenidoCssComponente(nombreComponente)

        fs.writeFile(rutaArchivo, contenidoArchivo, (err) => {
            if (err) {
                console.error('Error al crear el archivo:', err);
            } else {
                console.log('Archivo creado exitosamente:', rutaArchivo);
            }
            });
    }
    });

    


    
}

const nombreComponente = process.argv[2]
crearComponente(nombreComponente)
