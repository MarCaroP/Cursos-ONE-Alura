var pacientes= document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var tdPeso= paciente.querySelector(".info-peso");
    var peso= tdPeso.textContent;

    var tdAltura= paciente.querySelector(".info-altura");
    var altura= tdAltura.textContent;
    console.log(peso);
    var tdIMC= paciente.querySelector(".info-imc");

    pesoAlturaValido= true;

    if ((peso < 0 || peso >500) || ( altura< 0 || altura >3.00)) {
        tdIMC.textContent="Valor Incorrecto"; 
        paciente.classList.add("paciente-incorrecto");
        pesoAlturaValido= false;
    }

    if (pesoAlturaValido) {
        
        tdIMC.textContent=calcularIMC(peso, altura);
        
    }
    
}
function calcularIMC(peso, altura) {
    var imc= peso/(altura*altura);
    return imc.toFixed(2);
}

