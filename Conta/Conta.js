import { Cliente } from ".././Cliente.js";
//Classe abstrata
export class Conta {

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

    constructor(agencia, cliente, saldoInicial) {
        if (this.constructor == Conta) {
            throw new Error("A Classe Conta() não pode ser instanciada diretamente, pois é uma classe abstrata.");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    sacar(valor) {
        throw new Error("O método sacar da classe Conta() é abstrato e precisa ser implementado e utilizado o método da classe especializada.");
    }

    transferir(contaCorrenteDestino, valor) {
        const valorSacadoOrigem = this.sacar(valor);
        contaCorrenteDestino.depositar(valorSacadoOrigem);
    }
}
