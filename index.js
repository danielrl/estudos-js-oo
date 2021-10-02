import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309, '1234');
const cliente2 = new Cliente("Alice", 88822233309, '5678');

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
//console.log(contaCorrente1);
//console.log(contaCorrente2);

//console.log(ContaCorrente.numeroTotalDeContas);
//console.log(ContaCorrente);

const contaPoupanca = new ContaPoupanca(1001, cliente1, 50);

//console.log(contaCorrente1);
//console.log(contaCorrente2);
//console.log(contaPoupanca);

const contaSalario = new ContaSalario(cliente2);
//contaSalario.depositar(100);
//contaSalario.sacar(10);
//console.log(contaSalario);

const diretor = new Diretor("Rodrigo", 12345678900, 10000);
const gerente = new Gerente("Gabriela", 12345678911, 5000);

diretor.cadastrarSenha('123456');
gerente.cadastrarSenha('12345678');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '12345678');
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, '1234');

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
