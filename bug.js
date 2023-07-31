console.log('Ejercicio 2 Arreglar bug');
/*
Ejercicio 2 Arreglar bug

Nuestro cliente está intenando calcular el promedio de una lista de números pero nos dice que no funciona. No nos da el error, solo este código que es el que tiene en producción. Para este ejercicio tenemos que crear un archivo llamado bug.js con la solución.


const calcularPromedio = (numeros) => {

    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

*/


// SOLUCION

/*
El error está en la comparación del bucle for. El bucle for debe ser menor que la longitud del array, no menor o igual, ya que la longitud son 5 elementos y el bucle for va de 0 a 5 (6 elementos), por lo que el último elemento del array no existe y da undefined. La solución es cambiar el bucle for a menor que la longitud del array.
*/

const calcularPromedio = (numeros) => {

    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
      sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log('Promedio: ', promedioNumeros);





