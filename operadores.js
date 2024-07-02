/**
 * operadores de asignación
 */

/**
 * operador de asignación
 */

var x = 2;
var y =true;
//console.log(x*2);

//operador de asignación de adición (+=)

var x = 2;
var y =1;

x += y;

console.log(x);

//operador de asignación de resta (-=)

var x = 2;
var y =1;

x -= y;

console.log(x);

//operador de asignación de multiplicación (*=)

var x = 2;
var y =2;

x *= y;

console.log(x);

//operador de asignación de división (/=)

var x = 4;
var y =2;

x /= y;

console.log(x);
//operador de asignación de residuo (%=)

var x = 8;
var y =3;

x %= y;

console.log(x);
//operador de asignación de exponenciación (**=)

var x = 2;
var y =3;

x **= y;

console.log(x);

/**
 * operadores de comparación 
 */

//operador igual (==)
console.log(3==3);
console.log(3=='3');//posibles errores

//operador que no es igal (!=)
console.log(3!=3);

//operador estrictamente igual (===)
console.log(3==='3');
//este operador compara estrictamente, en este caso comparar un numero y una cadena
//en desarrollo siempre usar el estrictamente igual pera evitar errores

//operador de desigualdar estricta (!==)
console.log(3!=='3');
//este operador compara estrictamente, en este caso comparar un numero y una cadena
//en desarrollo siempre usar el estrictamente igual pera evitar errores

//operadores >, >=, < y <=

console.log(3>4);
console.log(3>=3);
console.log(2<4);
console.log(2<=4);

/** operadores aritmeticos
 * +,
 * -,
 * /,
 * %,
 * **
 */

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

//operadores de incremento
var numero = 0;
//console.log(++numero);
console.log(numero++);
console.log(numero);

//operador de decremento(--)

var numero =3;
//console.log(--numero); colocarlo de esta manera imprime en la misma linea de codigo
console.log(numero--);
console.log(numero);


/**
 * operadores lógicos
 */

//and &&
console.log(true && true);

console.log(2>3 && 1<=2);

//or ||
console.log(true || true);
console.log(false || false);

//not !
console.log(!false);
console.log(!true);


//operador de cadena o concatenación (+)

var nombre = 'emma';
var app = 'enk';
var nombre_completo = nombre + ' '+ app;
console.log(nombre_completo);

//operador condicional ( condición  ? val1 : val2)

console.log(2 > 3 ? 'es mayor' : 'es menor');

//operador de desestructuración "desestructuración es abstraer un elemento"

var persona ={
    nombre: 'emma',
    app: 'enk'
}
//var {nombre , app} = persona;//sirve para extraer información del 
var {nombre: xyz , app} = persona;
//se cambia el nombre de la variable "nombre" por "xyz" ya que nombre es muy usada
console.log(xyz + ' '+ app);//se manda a llamar a la nueva variable xyz
console.log(persona);


//desestructuración de arreglos
var arreglo = [1,2,3,4,5];

var [primeraPos,dos]= arreglo;
console.log(primeraPos);
console.log(dos);

/**
 * Operador de miembro o acceso de propiedad
 */
//notación punto

var persona = {
    nombre: 'Emma',
    app: 'Enk'
}
console.log(persona.nombre);
console.log(persona.app);

//notación por corchetes
var persona = {
    nombre: 'Emma',
}
console.log(persona['nombre']);

//notación por corchetes en arreglos, se empieza a contar con cero
var arreglo=[21,21,22,24,25,26]
console.log(arreglo[2]);

//operación de determinación de tipo (typeof)
console.log(typeof 'Emma');
console.log(typeof 21);
console.log(typeof true);
