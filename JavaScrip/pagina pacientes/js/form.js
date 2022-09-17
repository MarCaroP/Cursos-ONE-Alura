var btnAdicionar = document.querySelector("#adicionar-paciente");
btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form= document.querySelector("#form-adicionar");

    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var tabla= document.querySelector("#tabla-pacientes");

    pacienteTr=document.createElement("tr");
    nombreTD= document.createElement("td");
    pesoTD= document.createElement("td");
    alturaTD= document.createElement("td");
    gorduraTD= document.createElement("td");
    imcTD= document.createElement("td");

    nombreTD.textContent= nombre;
    pesoTD.textContent= peso;
    alturaTD.textContent= altura;
    gorduraTD.textContent= gordura;
    imcTD.textContent= calcularIMC(peso, altura);

    pacienteTr.appendChild(nombreTD);
    pacienteTr.appendChild(pesoTD);
    pacienteTr.appendChild(alturaTD);
    pacienteTr.appendChild(gorduraTD);
    pacienteTr.appendChild(imcTD);

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);

});