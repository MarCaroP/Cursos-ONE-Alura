console.log(`Trabajando con OPERACIONES LOGICAS`);
console.log(`\n`);
const ciudadesDispLista= new Array();
ciudadesDispLista.push('Montevideo');
ciudadesDispLista.push('Caracas');
ciudadesDispLista.push('Rio');

const edadComprador=5;
const acompaniado=true;

if(edadComprador>=18|acompaniado){
    console.log (`El comprador puede viajar, le muestro la lista`);
        console.log(ciudadesDispLista);
    }else{
        console.log (`El comprador NO es mayor de edad ni esta acompaniado`);
        console.log(`No podemos mostrar datos de destinos`);
    }
// proceso de embarque
const tienePasaje=true;
if(tienePasaje && (edadComprador>=18||acompaniado)){
    console.log(`comprador con pasaje`);
}else{
    console.log(`comprador SIN pasaje`);
}




/*
if(edadComprador>=18){
    console.log (`El comprador es mayor de edad`);
    console.log(ciudadesDispLista);
}else if(acompaniado){
        console.log (`El comprador es menor de edad pero esta acompañado`);
        console.log(ciudadesDispLista);
    }else{
        console.log (`El comprador NO es mayor de edad ni esta acompaniado`);
        console.log(`No podemos mostrar datos de destinos`);


    }
    
*/