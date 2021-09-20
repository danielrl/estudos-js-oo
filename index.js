import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

//console.log(cliente1);
//console.log(cliente2);

const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contaCorrente2 = new ContaCorrente(1001, cliente2);

//console.log(contaCorrente1);
//console.log(contaCorrente2);

contaCorrente1.depositar(100);
const valorSacado1 = contaCorrente1.sacar(50);

contaCorrente2.depositar(100);
const valorSacado2 = contaCorrente2.sacar(50);

//console.log(contaCorrente1);
//console.log(contaCorrente2);

contaCorrente1.transferir(contaCorrente2, 40);
console.log(contaCorrente1);
console.log(contaCorrente2);

console.log(ContaCorrente.numeroTotalDeContas);
console.log(ContaCorrente);
