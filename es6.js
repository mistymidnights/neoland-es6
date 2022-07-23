//Iteración #1: Arrows
//Crea una arrow function que tenga dos parametros a y b y 
//que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
//por consola la suma de los dos parametros.

const sum = (a = 10, b = 5) => {
    return a + b;
}
    console.log(sum());
    console.log(sum(25));
    console.log(sum(30, 75));

//1.1 Ejecuta esta función sin pasar ningún parametro
//1.2 Ejecuta esta función pasando un solo parametro
//1.3 Ejecuta esta función pasando dos parametros



/* Iteración #2: Destructuring */
/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let { title } = game;
let { gender } = game
let { year } = game
console.log(title);
console.log(gender);
console.log(year);

/* 
2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */

const fruits = ['Banana', 'Strawberry', 'Orange'];
let fruit1 = fruits[0],
    fruit2 = fruits[1],
    fruit3 = fruits[2];
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)

/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
    return {name1: 'Bengal Tiger', race: 'Tiger'}
};

let { name1 } = animalFunction();
let { race } = animalFunction();
console.log(name1);
console.log(race);

/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo. */

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
let { name, itv } = car;
console.log( name )
console.log( itv )
let year1 = car.itv[0],
    year2 = car.itv[1],
    year3 = car.itv[2];
    console.log( year1 )
    console.log( year2 )
    console.log( year3 )