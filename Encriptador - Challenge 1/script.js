const inputText= document.querySelectorAll(".input-text");
const mensaje= document.querySelectorAll(".input-text-area");

function btnEncriptar() {
    const textEncriptado=encriptar(inputText.value);
    mensaje.value= textEncriptado;
    
}
function encriptar(StringParaEncriptar) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar= StringParaEncriptar.toLoweCase();
    for (let i = 0; i < matrizCodigo.length; i++) {

        if (StringParaEncriptar.includes()) {
            
        }
        const element = matrizCodigo[i];
        
    }
}
