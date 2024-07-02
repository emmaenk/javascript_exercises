const axios = require("axios"); // se declara la constante de axios
const fs = require('fs').promises; //fs igual a file system, rqr es iguala require
const path = require('path');//se define la ruta donde se va a almacenar el archivo

const main = async () => {
  // se declara la función constante del main
  //axios es asincrono
  //nos va a devolver una promesa
  /**
   * todas las apis se consumen igual, solo hay que cambiar la url del api
   * también se necesita especificar en el return los campos que se quieren traer de la api
   * estos a su vez se imprimir en un console log para su validación y corroborar que son esos
   */
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  
  let {
    data: { results },
  } = response;
  
  let encabezados = results.map((encabezado)=> {// se crea el arreglo que se va a manejar solo con los encabezados
        return{
          id: encabezado.id,
          name: encabezado.name,
          status: encabezado.status,
          species: encabezado.species,
        }
  });
  let headers= Object.keys(encabezados[0]);// se llama el arreglo con los encabezados
  
  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((personaje) => Object.values(personaje).join(", "))
    .join('\n');
    //se concatenan los arrays
    let cabezal = `${headers}\n ${characters}`;
    //console.log(__dirname); //se imprime una variable global que se usa en node
//dirname devuelve el path donde se encuentra alojado el proyecto
    //se añade un map para formatear los datos y unirlos con una coma (,)
  //console.log(characters); //se imprimen los resultados de los datos
  //console.log(path.join(__dirname,'data.csv'));
//se imprimira como dato la ruta, pero no se generara el archivo data.csv en el dirname osea en el directorio donde esta guardado el proyecto.
///////////
/**
 * impresior de archivos
 * comando para generar el archivo csv, donde primero se llama al awai
 * después se llama al filesystem a través de fs,
 * después 
 */
await fs.writeFile(path.join(__dirname, 'data.csv'), cabezal);
}; 


//////////
main(); //se ejecuta la función main
