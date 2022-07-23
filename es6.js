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



/*     Iteración #3: Spread Operator */

//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
let newPointsList = [...pointsList];
console.log(newPointsList)

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let mytoy = {...toy};

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
//spread operatos.
const pointsLists = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
let myPointList = [...pointsLists, ...pointsLis2];
console.log(myPointList)

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
//con spread operators.
const toys = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
let toysUpdate = {...toys, ...toyUpdate};
console.log(toysUpdate)

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let newColors = [...colors]
newColors.splice(2,1);
console.log(newColors)



/* Iteración #4: Map */

//4.1 Dado el siguiente array, devuelve un array con sus nombres 
//utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let nameUsers = users.map(function(usuarios) {
    return usuarios.name;
})
console.log(nameUsers)

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
//empiece por 'A'.
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


let nameUsers1 = users1.map(usuarios => usuarios.name.startsWith("A")  ? "Anacleto" : usuarios.name) 
console.log(nameUsers1)


/* TODO */
//4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];


