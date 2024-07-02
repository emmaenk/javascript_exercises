/**
 * callbacks
 * son funciones que se pasan como parametro a otras funciones para que estas una vez finalizadas sus tareas ejecuten la funcion enviada como parametro 
 *   
 */

const suma =( a,b, cb)=>cb (a+b);//se reciben tres parametros, a, b y callback

const imprimir =(data)=>console.log(data);

suma(1,2, imprimir);


//**************** */

const getData = (cb)=>{
    setTimeout(() => {
    cb({
    nombre:'emma',
    nombre:'enk',
    nombre:'are'
}) 
    }, 3000);

}

const imprimirData = (data)=>console.log(data);
getData(imprimirData);

////////
/**
 * then- catch
 */

const getData = (cb,cbError)=>{
    if (false) {
        setTimeout(() => {
            cb({
            nombre:'emma',
            nombre:'enk',
            nombre:'are'
        }) 
            }, 3000);
    }else{
        cbError(new Error('No se puddieron obtener los datos'))
    }

}

const imprimirData = (data)=>console.log(data);
const errorHandler = (error)=>console.log(error);
getData(imprimirData, errorHandler);
