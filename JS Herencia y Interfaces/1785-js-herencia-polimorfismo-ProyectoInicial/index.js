/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutentificacion } from './SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('111222');
console.log(SistemaAutentificacion.login(cliente, '111222'));
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001',0);
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002',0);

const CuentaAhorroLeo= new CuentaAhorro(cliente,'9985', '001',0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());


console.log(CuentaAhorroLeo);
CuentaAhorroLeo.depositoEnCuenta(200);
console.log(CuentaAhorroLeo.verSaldo());
CuentaAhorroLeo.retirarDeCuenta(120);
console.log(CuentaAhorroLeo.verSaldo());

const CuentaNominaLeo= new CuentaNomina(cliente, '3514','001',1000);
console.log(CuentaNominaLeo);

CuentaNominaLeo.depositoEnCuenta(150);
console.log(CuentaNominaLeo.verSaldo());

CuentaNominaLeo.retirarDeCuenta(50);
console.log(CuentaNominaLeo.verSaldo());

const empleado= new Empleado('Juan perez', '2345678',1000);
empleado.asignarClave('123456');
const director= new Director('pedro rivas', '654987',1500);
const gerente= new Gerente('mercedes sanchez', '12345678',2000);
gerente.asignarClave('456456');
console.log('Gestion de Empleados');
console.log(empleado.verBonificacion());
console.log(director.verBonificacion());
console.log(gerente.verBonificacion());

/*Autentificacion*/ 
console.log('Sistema de Autentificacion');
console.log(SistemaAutentificacion.login(empleado, '1123456'));
console.log(SistemaAutentificacion.login(gerente, '456456'));