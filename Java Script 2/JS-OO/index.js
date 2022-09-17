/*const nombreCliente="Leo";
const dniCliente="123123123";
const nroCuenta="987654";
const saldoCuenta=55333;
*/

import{CuentaCorriente} from './CuentaCorriente.js';
import { Cliente } from './Cliente.js';

const cliente= new Cliente('leo','1345611','3322211');

const cuentaLeo= new CuentaCorriente(cliente, '1','001');

console.log(cuentaLeo.cliente);

const cliente2= new Cliente('Maria','332211','123123');

const cuentaMaria= new CuentaCorriente(cliente2,'2','002');

console.log(cuentaMaria.cliente);
console.log('cant cuentas: '+CuentaCorriente.cantCuentas);


const cuentaC1 = new CuentaCorriente();

let saldo=cuentaC1.verSaldo();
console.log('El saldo act es:'+saldo);
saldo= cuentaC1.depositoEnCuenta(1500);

saldo=cuentaC1.verSaldo();
console.log('El saldo act es:'+saldo);

cuentaC1.transfererir(500,cuentaLeo);

saldo=cuentaC1.verSaldo();
console.log('El saldo act es:'+saldo);

