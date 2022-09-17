import { Cliente } from "./Cliente.js";

export class CuentaCorriente{
    #cliente;
    numero;
    #saldo;
    agencia;
    static cantCuentas=0;

    set cliente(valor){
        if(valor instanceof Cliente)
            this.#cliente=valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente,numero,agencia){
        this.cliente=cliente;
        this.numero=numero;
        this.#saldo=0;
        this.agencia=agencia;
        CuentaCorriente.cantCuentas++;

    }

    depositoEnCuenta(valor){
        if(valor>0)
            this.#saldo+=valor;
        return this.#saldo;
    }
    
    retiroEnCuenta(valor){
        if(valor<=this.#saldo)
            this.#saldo-=valor;
        return this.#saldo;
    }
    verSaldo(){
        return this.#saldo;
    }
    transfererir(valor,cuentaDestino){
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}