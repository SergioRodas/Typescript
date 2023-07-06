// Funciones Básicas
const sumar = ( a:number, b:number ):number => a + b;

const contar = ( heroes:string[] ):number => heroes.length;
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar:boolean = true ):void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( ...personas:string[] ):string => personas.join(", ");


// Tipo funcion
const noHaceNada = ( numero:number, text:string, booleano:boolean, arreglo:[] ):void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:(n:number, t:string, b:boolean, a:[])=>void;
noHaceNadaTampoco = noHaceNada
