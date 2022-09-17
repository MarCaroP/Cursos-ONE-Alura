var tabla= document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
    
});


/* NO ELIMINA PACIENTES NO NATIVOS DE HTML
var pacientes=document.querySelectorAll(".paciente");
console.log(paciente);
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function () {
        this.remove();        
    })
    
});*/