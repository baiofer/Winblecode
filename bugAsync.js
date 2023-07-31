/*
    Ejercicio 4 Arreglar bug de asincronia

    Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos a pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo llamado bugAsync.js con la solución.


// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    let usuario;

    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
    }, 2000);

    return usuario;
}

const usuario = obtenerUsuario(1);
console.log(usuario);
*/

// SOLUCION

/*
El problema es que estamos trabajando con una función asincrónica (setTimeout()), por lo que el return usuario se ejecuta antes de que se termine de ejecutar el setTimeout. La solución es esperar a que se termine de ejecutar el setTimeout para retornar el usuario. Esto se puede hacer con callbacks o con promesas. En este caso, lo haremos con promesas.
*/

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe' });
            } else {
                reject('El usuario no existe');
            }
        }, 2000);
    });
}

/*
Y ahora, para obtener el usuario podemos usar el método then() de las promesas, que se ejecuta cuando la promesa se resuelve correctamente, y el método catch() que se ejecuta cuando la promesa se rechaza, o el método async/await. Lo resolveré con promesas.
*/

const usuario1 = obtenerUsuario(1);
usuario1
    .then((usuario1) => console.log('Usuario1: ', usuario1))
    .catch((error1) => console.log('Error1: ', error1));

const usuario2 = obtenerUsuario(2);
usuario2
    .then((usuario2) => console.log('Usuario2: ', usuario2))
    .catch((error2) => console.log('Error2: ', error2));

