console.log(`Trabajando con LISTAS`);

const Bogota= "Bogota";
const Lima= "Lima";
const BsAs= "BSAS";
const Santiago="Santiago";

console.log(Bogota,Lima,BsAs,Santiago);
const ciudadesDispo= [`Bogota`,`Lima`,`BSAS`,`Santiago`];
console.log(ciudadesDispo)

const ciudadesDispLista= new Array();
ciudadesDispLista.push('Montevideo');
ciudadesDispLista.push('Caracas');
ciudadesDispLista.push('Rio');

console.log(ciudadesDispLista);

const ciudaddesMasVendidas= [];

ciudaddesMasVendidas.push('San pablo');
ciudaddesMasVendidas.push('cancun');

console.log(ciudaddesMasVendidas);

console.log(ciudaddesMasVendidas[0]);

const cantCiu= ciudadesDispLista.length;
console.log(`cant ciudadesd dispo: ${cantCiu}`);
console.log(ciudadesDispLista);
ciudadesDispLista.splice(1,1);
console.log(ciudadesDispLista);