export class Cuenta{
    #cliente;
    #saldo;
    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente, numero, agencia, saldo){

        if(this.constructor==Cuenta){
            throw new Error('No se debe instanciar objetos de la clase cuenta');
        }
        this.numero=numero;
        this.agencia=agencia;
        this.#cliente=cliente;
        this.#saldo= saldo;
    
    }
    depositoEnCuenta(valor) {
        
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor,comision) {
        //metodo abstracto
        throw new Error('Debe implementar el metrodo retirar en la cuenta');  
    }
    _retirarDeCuenta(valor,comision) {
        valor=valor* (1+comision/100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }
    

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}