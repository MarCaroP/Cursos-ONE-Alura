console.log('Asignando valores a las variables');
let miNombre='maria';
const miApellido='Caro'
console.log(miNombre);

miNombre= miNombre+' '+miApellido;
console.log(miNombre);

const textoNomb= `Mi nombre es: ${miNombre}${miApellido}`;// comillas invertidas para utilizar la plantilla texto
console.log(textoNomb);

const textoNombC= 'Mi nombre es: ${miNombre}${miApellido}';// no funciona con comillas simples ni dobles
console.log(textoNombC);

let varTexto="un texto";
console.log(varTexto);

varTexto=10;//conversion autromatica de tipo de datos
console.log(varTexto);

