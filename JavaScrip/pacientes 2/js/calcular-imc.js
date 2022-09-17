var pacientes = document.querySelectorAll(".paciente");


for(var i = 0;i< pacientes.length;i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");


    sonDatoValido = datoValido(peso, altura);
    alturaEsValida = true;

    if(!sonDatoValido){
        console.log("Peso incorrecto");
        
        paciente.classList.add("paciente-incorrecto");
    }

  /*   if((altura < 0) || (altura > 3.00)){
        console.log("Altura incorrecta");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    } */

    if(sonDatoValido){
        tdIMC.textContent = calcularIMC(peso,altura);
    }

}

function calcularIMC(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function datoValido(peso, altura){

    if((peso >= 0 && peso <500) && ( altura>= 0 && altura <3.00)) {
        return true;

    }
    else{
        return false;
    }


}




 


