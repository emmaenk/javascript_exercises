/**
 * promises
 * ayudan a controlar funciones asincronas y
 * ayudan a verificar si la función asincrona se esta resolviendo correctamente,
 * si obtenemos los datos y si no se resuelve correctamte devuelve un callback
 */

//cuando se manejan expresiones se puede evitar colocar return

//getData1 es una función que retorna una promesa, aqui si se pueden pasar parametros
//declaración del método de la promesa
const getData1 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
        nombre: "emma",
        apellido: "enk"
      });
      }, 3000);
      
    } else {
      reject("no se pudieron obtener los datos");
    }
  });


  const getData2 = (error) =>
    new Promise((resolve, reject) => {
      if (!error) {
        setTimeout(() => {
          resolve({
          nombre: "are",
          apellido: "onof"
        });
        }, 3000);
        
      } else {
        reject("no se pudieron obtener los datos de data2");
      }
    });
  
//getData2 es igual a una nueva promesa, aqui no se pueden pasar parametros por que va directoa  la nueva promesa
//   const getData2 = new Promise ((resolve,reject)=>{})

//para llamar la promesa
//then y catch
//then cuando se resuelve exitosamente
//catch cuando no se resuelve
console.log('inicio');
getData1(false)
    .then((data)=>{// para encadenar promesas se hace en el then
        console.log(data);
        //aqui se encadena la otra promesa
        return getData2(true);
    })//llama un callback
    //se llama el then de la segunda promesa
    .then((data)=>{
        console.log(data);
    })
    //con un solo catch se puede capturar el error de todas las promesas declaradas
    .catch((error)=>{
        console.log(error);
    });//llama un callback
console.log('fin');

/**
 * async 
 * await
 * para usar async await y capturar los errores se tiene que usar try catch
 */

const getData = (error) =>
    new Promise((resolve, reject) => {
      if (!error) {
        setTimeout(() => {
          resolve({
          nombre: "emma",
          apellido: "enk"
        });
        }, 3000);
        
      } else {
        reject("no se pudieron obtener los datos");
      }
    });
  
const getData2 = (error) =>
        new Promise((resolve, reject) => {
          if (!error) {
            setTimeout(() => {
              resolve({
              nombre: "emma",
              apellido: "enk"
            });
            }, 3000);
            
          } else {
            reject("no se pudieron obtener los datos 2");
          }
        });
      
    const main = async () =>{//se coloca async antes de colocar await 
        //para los errores se tendra que utilizar el trycatch
        try {
            let resultado=  await getData(false);
            //en este caso para llamar varias promesas solo se debe colocar una nueva linea con await
            let resultado2=  await getData2(true);
            console.log(resultado);
            console.log(resultado2);
        } catch (error) {
            console.log(error);
        }
       
        
    }

    main();