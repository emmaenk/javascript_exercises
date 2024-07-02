/**
 * variables
 * var
 * let
 * const (palabra reservada)
 */

//variable VAR

var nombre = 'Emmanuel';

console.log(nombre);

var edad= 31;

console.log(edad);

var persona= {
    nombre: 'emma',
    app: 'rendon',
    edad: 31,
    direccion: {
        calle: 'adolfo lopez mateos',
        numero: 1418,

    },
    ciudadesVisitadas: [
        'guanajuato',
        'acapulco',
        'cuernavaca'
    ]
}

var ciudad;
ciudad = ['mexico', 'chile', 'argentina']
console.log(ciudad[2]);
//si llamo la posición dependiendo de la variable en el arreglo se definira comenzando en 0 a N.

//opcion 2 redefinir valor de variable
var ciudad;
ciudad = 'chile';
ciudad = 'méxico';
console.log(ciudad);//imprimirá méxico aun cuando tenga valor 'chile' en su predecesión

/**segunda forma de declarar variables
 * let
 * let funciona solo dentro de un bloque de codigo, mientras que var funciona globalmente
 */

//variables con let

let nombre= "emmanuel";
console.log(nombre);

//un bloque de codigo se declara con llaves {} y la funcion, variable let y contenido del bloque no se puede llamar fuera del mismo


{
    let saludo = 'hola soy emmanuel';
    console.log(saludo);
}

//ejempo con var
{
    var saludo = 'hola soy emmanuel';
    
}
    console.log(saludo);
    //aqui fuera del bloque de código la variable var si funciona por que es global


    //variables CONST se ponen siempre en mayuscula

    const PI= 3.14;
    //PI= 3.14592;
    console.log(PI);

    //template strings

    var nombre = 'emma';
    var saludo= `yo soy ${nombre} 
Como estas?`;
    console.log(saludo);
    
    