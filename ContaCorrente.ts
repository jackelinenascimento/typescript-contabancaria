import Iconta from "./IConta"

class ContaCorrente implements Iconta{
    saldo: number;
    numeroConta: string;
    agencia: string;
    titular: string;
    chequeEspecial: number = 1000;
    
    constructor(numeroConta: string, agencia: string, saldo: number){
        this.numeroConta = numeroConta
        this.agencia = agencia
        this.saldo = saldo
    }

    depositar(valor: number): boolean {
        this.saldo += valor
        return true
    }
    sacar(valor: number): boolean {
        if(this.saldo + this.chequeEspecial < valor) return false
        if(this.saldo < valor){
            this.chequeEspecial +=(this.saldo- valor)
            this.saldo = 0
            return true
        }
        if(this.saldo > valor){
            this.saldo -= valor
            return true
        }
        return false
    }
    getSaldo(): string {
        return `O saldo da conta ${this.numeroConta} é: R$ ${this.saldo}`
    }
}

export default ContaCorrente