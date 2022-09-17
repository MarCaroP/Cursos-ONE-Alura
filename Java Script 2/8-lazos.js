console.log(`Trabajando con OPERACIONES LOGICAS`);
console.log(`\n`);
const ciudadesDispLista= new Array();
ciudadesDispLista.push('Montevideo');
ciudadesDispLista.push('Caracas');
ciudadesDispLista.push('Rio');

const edadComprador=5;
const acompaniado=true;
const destino="Montevideo";
let posicion=0;
let dispoBoo=false;
console.log(ciudadesDispLista);
console.log(`WHILE\n`);

while (posicion<ciudadesDispLista.length) {
    if(ciudadesDispLista[posicion]==destino){
       dispoBoo=true;
        break;
    }
    posicion++;
}
console.log(`Destino disponible`, dispoBoo);

console.log(`\n`);
console.log(`For\n`);

for (let i = 0; i < ciudadesDispLista.length; i++) {
    if(ciudadesDispLista[i]==destino){
       dispoBoo=true;
        break;
    }
    posicion++;
}
console.log(`Destino disponible`, dispoBoo);