import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial);
    }

    //sobrescreve o método da classe que está sendo herdada.
    sacar(valor) {
        const taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}
