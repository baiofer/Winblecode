/*
Ejercicio 1

Crea un archivo ejercicio1.js que tenga un objeto con los siguientes campos: Nombre, apellidos, un array con los temas del bootcamp que ya conoces, si estás en busqueda activa con un boolean y un array de objetos el cual tenga un link a alguna red social con el nombre y link de la red social. (Con uno vale, Github por ejemplo, pero dentro de un array).
*/

// SOLUCION

const student = {
    name: 'Fernando',
    surname: 'Jarilla',
    bootcampTopics: [
        'Git', 
        'Fundamentos HTML, CSS3', 
        'Introducción a JavaScript', 
        'Modelado de datos e introducción a SQL', 
        'Desarrollo backend con NodeJS', 
        'Desarrollo frontend con JS',
        'Frontend PRO',
        'Web components',
        'Fundamentos React',
        'TDD con JS',
        'Desarrollo backend avanzado con NodeJS',
        'React avanzado',
        'Configuración de servidores y despliegue de aplicaciones'
    ],
    jobSearch: false,
    socialMedia: [
        {
            name: 'GitHub',
            link: 'https://github.com/baiofer/'
        }
    ]
};

const showStudent = (student) => {
    console.log('Estudiante: ');
    console.log('   Nombre: ', student.name);
    console.log('   Apellido: ', student.surname);
    console.log('   Temas del bootcamp: ');
    for (topic of student.bootcampTopics) {
        console.log('      ', topic);
    }
    console.log('   En búsqueda activa de empleo: ', student.jobSearch ? 'Sí' : 'No');
    console.log('   Redes sociales: ');
    for (socialMedia of student.socialMedia) {
        console.log('      ', socialMedia.name, ': ', socialMedia.link);
    }
}

showStudent(student);
