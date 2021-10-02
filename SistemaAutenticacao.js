/*
Ser autenticável significa ser uma instância de uma classe que tenha um método,
ou herde um método autenticar().
*/

/*Utiliza conceito de duck typing*/
export class SistemaAutenticacao {

    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel
            && autenticavel.autenticar instanceof Function;
    }
}
