/**
 * Manipulación de arreglos
 */

//forEach

var letras= ['a','b','c','d','e'];

/**console.log(letras.length);//cuenta cuantos elementos tiene el arreglo

for (let i = 0; i < letras.length; i++) {
    const element = letras[i];
    console.log(element);
}*/
//foearch permite recorrer elemento del arreglo
//opción 2
letras.forEach((elemento)=>console.log(elemento));
//opción 1
letras.forEach((elemento)=>{
    console.log(elemento);
})

/** funciones mutables
 * push- shift-pop
 */
var letras= ['a','b','c','d','e'];
letras.push('f');//añade un elemento nuevo al arreglo de letras
console.log(letras);
var firstE= letras.shift();//obtiene el primer elemento del arreglo
console.log(`primera letra: ${firstE}`);//imprime la variable firstE que tiene la primera letra del arreglo
console.log(letras);
var LastOne= letras.pop();
console.log(`ultima letra: ${LastOne}`);//imprimir variable con el ultimo elemento
console.log(letras);//obtiene el último elemento del arreglo y lo eliminará
//pop no necesita parametro para ejecutarse

/**
 * map - es inmutable
 */

var estudiantes= ['dana','emmanuel','yisus','are']

//opción 1
var asistencia = estudiantes.map((nombre)=>{//las arrow fuction => tiene implicito el return, no se necesita declarar
        return {
        nombre: nombre,
        asistencia: false
    }
})
//opción 2
var asistencia2 = estudiantes.map((nombre)=>`${nombre}.`);
console.log(estudiantes);//imprime arreglo original
console.log(asistencia);//imprime arreglo modificado
console.log(asistencia2);//imprime arreglo modificado
console.log(estudiantes);//al imrpimir el nuevo arreglo de nuevo, vemos que no se altero el arreglo original

/**
 * map parte 2
 */

var productos = [
    {nombre: 'camisetas', precio: 15},
    {nombre: 'pantalones', precio: 20},
    {nombre: 'sueteres', precio: 25},
    {nombre: 'calcetines', precio: 30}
]

var impuestos= productos.map((producto)=>{
   
    return {
        ...producto,
        taxes: .12
    };
});

var precios = productos.map((producto)=> producto.precio)

console.log(productos);
console.log(impuestos);
console.log(precios);

/**
 * filter -- inmutable
 * se utiliza para generar un filtrado, el retorno ya viene implicito
 */
var estudiantes = [
    {nombre: 'emma', edad: 20, matriculado: true},
    {nombre: 'jesus', edad: 18, matriculado: true},
    {nombre: 'yisus', edad: 21, matriculado: false},
    {nombre: 'are', edad: 22, matriculado: true},
    {nombre: 'enk', edad: 28, matriculado: false}
]

var filtrado = estudiantes.filter((estudiantes)=> estudiantes.edad >= 21)
var filtrado = estudiantes.filter((estudiantes)=> estudiantes.edad >= 21 && estudiantes.matriculado)

console.log(filtrado);
console.log(estudiantes);


/**
 * reduce - inmutable 
 * nos ayudara a reducir todo un array a un solo valor
 * este valor puede ser númerico, string, booleano, un arreglo o un objeto
 */


var calificaciones = [3,5,9,10,10];

var suma = calificaciones.reduce((acumulador, calificacion)=> acumulador + calificacion, 0);

console.log(calificaciones);
console.log(suma);
console.log(suma/calificaciones.length);//dividir entre la cantidad de elementos que tiene un arreglo.

//salida
var edades = [21,21,23,43,43,18,18,23,23,20];

var resultado = edades.reduce((acumulador, edad)=>{
    if (!acumulador[edad]) {
        acumulador[edad]=1;
    }else{
        acumulador[edad]+=1;
    }
    return acumulador;
},{});
console.log(edades);
console.log(resultado);

/**
 * 
 */
var ventas= [
    {nombre: 'camiseta', precio: 15, totalVendido:10},
    {nombre: 'tenis', precio: 200, totalVendido:12},
    {nombre: 'zapatos', precio: 120, totalVendido:18},
    {nombre: 'pantalon', precio: 360, totalVendido:100}
];

var resultado = ventas.reduce((acumulador, producto)=>{
    let totalVentas= producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `$ ${totalVentas}`;
    return acumulador;
},{});
    console.log(ventas);
    console.log(resultado);
    
// otro ejemplo

var estudiantes = [
    {nombre: 'emma', edad: 20, matriculado: true},
    {nombre: 'jesus', edad: 18, matriculado: true},
    {nombre: 'yisus', edad: 21, matriculado: false},
    {nombre: 'are', edad: 22, matriculado: true},
    {nombre: 'enk', edad: 28, matriculado: false}
];

var resultado = estudiantes
.map((estudiante)=>estudiante.matriculado)
.reduce((acumulador,item)=>{
    if (item) {
        acumulador.matriculado +=1;
    }else{
        acumulador.noMatriculado +=1;
    }
    return acumulador;
},{matriculado:0, noMatriculado: 0});

console.log(estudiantes);
console.log(resultado);

/**
 * 
 */

//var numeros = [1,2,3,4,5,6,7,8,0,10];
//devuelve booleanos
var numeros = [1,3,5,7,9];
var resultado= numeros.some((numero)=>numero % 2 ===0);
console.log(resultado);

//every
var numeros = [2,4,6,8,10];
var resultado = numeros.every((numero)=> numero%2===0);
console.log(resultado);

var numeros = [1,2,3,4,5,6,7,8,0,10];
var resultado = numeros.every((numero)=> numero);
console.log(resultado);

/**
 * find ---- retorna el primer elemento que coincida con la busqueda
 * a pesar de que haya más elementos con el mismo identificador
 * filter --- regresa un array con los resultados de la busqueda
 * 
 */

var clientes = [
    {id:1, nombre:'emma'},
    {id:2, nombre:'yisus'},
    {id:3, nombre:'are'},
    {id:4, nombre:'mia'},
    {id:1, nombre:'morcito'},
];

var cliente = clientes.find((cliente)=> cliente.id === 2);
var filter = clientes.filter((cliente)=> cliente.id === 1);

console.log(clientes);
console.log(cliente);
console.log(filter);

/**
 * findIndex --- nos va a retornar la posición del elemento dentro del array
 * y devolvera un unico valor
*/

var clientes = [
    {id:1, nombre:'emma'},
    {id:2, nombre:'yisus'},
    {id:3, nombre:'are'},
    {id:4, nombre:'mia'},
    {id:5, nombre:'morcito'},
];

var posicion =  clientes.findIndex((cliente)=>cliente.id===3);
console.log(posicion);
console.log(clientes[posicion]);//muestra el objeto correspondiente en la posición señalada


/**
 * includes --auda a determinar si un elemento en especifico existe en un arreglo
 * y devolvera verdadero o falso
 */

var mascotas= ['perro','gato','conejo'];

var resultado =mascotas.includes('gato');
console.log(resultado);
console.log('emma'.includes('a'));//probando embebido en el console log se puede buscar la letra a en la cadena


//////
var buscador = (parametro) => {
    let clientes = [
        {id:1, nombre:'emma'},
        {id:2, nombre:'yisus'},
        {id:3, nombre:'are'},
        {id:4, nombre:'mia'},
        {id:5, nombre:'morcito'},
    ];

    return clientes.filter((cliente)=> cliente.nombre.includes(parametro));
}
console.log(buscador('ma'));


/**
 * join -- unir todos los elementos de un array
 */

var elementos = ['aire','tierra','agua','fuego'];

var resultado = elementos.join('--');//el valor que se pasa en el join sirve para dividir los string
console.log(resultado);
//////////////
var clientes = [
    {id:1, nombre:'emma'},
    {id:2, nombre:'yisus'},
    {id:3, nombre:'are'},
    {id:4, nombre:'mia'},
    {id:5, nombre:'morcito'},
];

console.log(clientes.join());//join no convierte los objetos del array en string
/////////////////

/**
 * generación de un csv 
 */
var clientes = [
    {id:1, nombre:'emma'},
    {id:2, nombre:'yisus'},
    {id:3, nombre:'are'},
    {id:4, nombre:'mia'},
    {id:5, nombre:'morcito'},
];

var csvGenerator = (array,separator=',')=>{
    let headers= Object.keys(array[0]).join(separator);//solo se obtendran los header de los objetos
    let data = array.map((element) => Object.values(element).join(separator));//values devuelve solo valores del objeto
    console.log(headers);//imprimir cabezales del arreglo
    data.forEach(element=> console.log(element))
}

csvGenerator(clientes);
//console.log(Object.values({id:1, nombre:'emma'}));//devuelve valores
//console.log(Object.keys({id:1, nombre:'emma'}));//devuelve solo las claves del objeto

/**
 * concat
 * sort
 * splice
 * slice
 */
//concat 
var array1 = [ 1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3 = array1.concat(array2);
var array4 = [...array1,...array2];//spread operator, expande los elementos internos dentro de los arreglos con los 3 puntos seguidos ...
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

//sort -- ordenamiento
var array1 = [ 1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

//el ordenamiento se genera tomando como base el codigo ascii
//además ordena por la primera letra en orden alfabetico
var meses = ['Dic', 'Ene','Mar','Feb']
console.log(meses.sort());

///////////////
var array = [1,1000,21,30,4];
//console.log(array.sort());
var ordenado = array.sort((a,b)=> a-b);//ascendente
var ordenado = array.sort((a,b)=> b-a);//descendente
console.log(ordenado);

//splice -- ayuda a remover o modificar elementos del array
//splice es un metodo mutable
var nombres = ['emma','enk','are'];
//nombres.splice(1);
//aquí eliminará solo un elemento del arreglo, definido en el segundo valor
//nombres.splice(1,1);
//aqui removera el elemento definido en el segundo valor pero se agregará un valor en su lugar
nombres.splice(1,1,'yisus');
console.log(nombres);

//slice -- retornara una copia de una parte más pequeña del array
var nombres = ['emma','enk','are'];
var resultado = nombres.slice(1,2);//recibe dos parametros, el primero es desde donde se quiere cortar el arreglo y el segundo parametro es la posición final hasta donde quieres cortar el arreglo
// no se incluye la ultima posición por eso aqui en el ejemplo el valor establecido en el indicador 2 que en este caso es 'are', esta no se tomará en cuenta será una antes del numero definidio
//slices es inmutable a diferencia de splice que si es mutable
console.log(resultado);