/**
 * while
 */
var dato=1;
while (dato>0) {
    console.log(`la ronda es la numero: ${dato}`);
    dato++;
}   

/**
 * for in
 */

var persona = {
    nombre: 'emma',
    app: 'enk',
    edad:31
}

for (let clave in persona) {
   console.log(clave, persona[clave]);
    
}

/**
 * for of
 */

var arreglo=[1,2,3,4,5];//itera numeros y en el caso de cadenas hace spelling
var persona='emma';
for(let valor of persona){
console.log(valor);
}
