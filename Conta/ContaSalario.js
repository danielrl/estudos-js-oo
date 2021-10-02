import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(cliente) {
        super(100, cliente, 0.00);
    }

    //sobrescreve o método da classe que está sendo herdada.
    sacar(valor) {
        const taxa = 1.01;
        return super._sacar(valor, taxa);
    }

}
