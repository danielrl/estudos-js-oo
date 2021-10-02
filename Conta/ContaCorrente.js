import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    //#saldo = 0;

    static numeroTotalDeContas = 0;

    constructor(agencia, cliente) {
        super(agencia, cliente, 0);
        ContaCorrente.numeroTotalDeContas++;
    }

    //sobrescreve o método da classe que está sendo herdada.
    sacar(valor) {
        const taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}
