import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0;
    //#saldo = 0;

    static numeroTotalDeContas = 0;

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroTotalDeContas++;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    transferir(contaCorrenteDestino, valor) {
        const valorSacadoOrigem = this.sacar(valor);
        contaCorrenteDestino.depositar(valorSacadoOrigem);
    }
}
