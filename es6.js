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


/* Iteración #5: Filter */

//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let rebels = ages.filter(number => number > 18);
console.log(rebels);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let parNum = ages2.filter(number => (number % 2) == 0)
console.log(parNum);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let gamesMorePlayed = streamers.filter (games => games.gameMorePlayed == 'League of Legends');
console.log(gamesMorePlayed);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
//usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let streamersNameU = streamers2.filter (names => names.name.includes("u"));
console.log(streamersNameU);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//.age sea mayor que 35.

let streamersNameGame = streamers2.filter (games => games.gameMorePlayed.includes('Legends'));
console.log(streamersNameGame);

let streamersAgeGame = streamers2.filter (games => games.age > 35 );
console.log(streamersAgeGame);

let toUpper = streamersAgeGame.map(word => word.gameMorePlayed.toUpperCase());
console.log(toUpper);


//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
//los streamers que incluyan la palabra introducida en el input. De esta forma, si 
//introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/* TODO */
/* 5.7, 5.6 */

/* Iteración #6: Find */

//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];
let findNum = numbers.find (number => number == 100);
console.log(findNum)

//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
let findMovie = movies.find (movie => movie.date == 2010);
console.log(findMovie)

//6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
//'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
//spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
//lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let findAlien = aliens.find (alien => alien.name == 'Cucushumushu');
let findMutations = mutations.find (mutation => mutation.name == 'Porompompero');
console.log(findAlien)
console.log(findMutations)
const objUnido = { ...findAlien, mutation: findMutations };
console.log(objUnido)