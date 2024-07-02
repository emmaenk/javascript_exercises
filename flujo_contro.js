/**
 * controles de flujo
 */

//if

var llueve =true;
if (llueve) {
    console.log('necesito una sombrilla');
}


var administrador ='administrator';
if (administrador === 'administrador') {
    console.log('bienvenido al sistema');
}else{
    console.log('bienvenido usuario promedio');
}

const MayoriaEdad =18;

var persona = 18;

if (persona>=MayoriaEdad) {
    console.log('eres mayor de edad');
} else {
    console.log('eres menor de edad');
}

var semaforo = 'verde';
if (semaforo === 'verde') {
    console.log('pase');
} else if(semaforo === 'amarillo'){
     console.log('cuidado');
}else if(semaforo === 'rojo'){
    console.log('alto, detente');
}else{
    console.log('color no identificado');
}

//switch
var producto = 'cacahuate';
switch (producto) {
    case 'papaya' :
        console.log('las papayas cuestan $1 dll por libra');
        break;
    case 'sandia':
        console.log('las sandias cuestan $2.85 dlls por libra'); 
        break;
    case 'melon':
        console.log('no hay stock');
        break;
    default:
        console.log('no valido, la expresión no se cumplió');
        break;
}