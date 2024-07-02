/**
 * funciones
 */

//declarativa

//palabra reservada function, nombreDeLaFuncion (){cuerpo de la funcion}

function saludar() {
    console.log('hola soy emmanuel');
}

saludar();

/** 
 * pasar valores como parametros
*/

function saludar(nombre) {
    console.log(`hola soy ${nombre}`);
}
//se agrega la cadena dentro del parentesis para que en la funcion saludar se use el dato ingresado al momento de llamar saludar en lugar de la variable nombre
saludar('emmanuel');

//devuelve valor al terminar todas las tareas
function saludar(nombre) {
    //cuando queremos que una funcion nos devuelva un valor se usa return
    return `hola soy ${nombre}`
}
//se usa una variable nueva para almacenar lo que la funcion saludar retorna, en este caso se utiliza la  variable dato y se imprime en un console log.
var dato= saludar ('emma');

console.log(dato);
//también se puede imprimir de manera directa en el console log sin necesidad de mandarlo a una variable, 
//esto puede ser util si no se reutlizará el contenido de la variable, en caso contrario si se necesita utilizar una variable nueva para almacenar la información.
console.log(saludar ('emma enk'));

//funciones de expresión o anónimas por que no tienen nombre
var suma= function(a,b){
    return a+b;
   
}
console.log(suma(1,6));


/**
 * arrow fuction
 */
var restar = (a,b)=>{
    return a-b;
}
console.log(restar(3,2));

var restar = (a,b)=>{
    if (typeof a === 'number' && typeof b === 'number') {
        return a-b;
    }else{
        return 'solo pueden estar números';
    }
    
}
console.log(restar(4,2));


var multiplicar=(a,b) => a*b;
multiplicar(6,3)
console.log(multiplicar(4,3));

