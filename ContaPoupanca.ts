import IConta from './IConta'

class ContaPoupanca implements IConta{
    saldo: number;
    numeroConta: string;
    agencia: string;
    titular: string;
    rede: string = "ligada";
    
    constructor(numeroConta: string, agencia: string, saldo: number){
        this.numeroConta = numeroConta
        this.agencia = agencia
        this.saldo = saldo
    }
    
    depositar(valor: number): boolean {
        if(this.rede == "desligada") return false
        this.saldo += valor
        return true
    }

    sacar(valor: number): boolean {
        if(this.rede == "desligada") return false
        if(this.saldo < valor) return false
        this.saldo -= valor
        return true
    }

    getSaldo(): string {
        return `O saldo da conta ${this.numeroConta} é: R$ ${this.saldo}`
    }
    
}

export default ContaPoupanca