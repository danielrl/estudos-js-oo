export class Funcionario {

    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1.00;
        this._senha;
    }

    autenticar(senha) {
        return (this._senha == senha);
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }
}
