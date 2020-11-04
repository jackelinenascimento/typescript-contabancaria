import IConta from "./IConta"

class ContaSalario implements IConta{
    saldo: number;
    numeroConta: string;
    agencia: string;
    titular: string;

    depositar(valor: number): boolean {
        this.saldo += valor
        return true
    }

    sacar(valor: number): boolean {
        if(this.saldo < valor) return false
        this.saldo -= valor
        return true
    }

    getSaldo(): string {
        return `O saldo da conta salário: ${this.numeroConta} é: R$ ${this.saldo}`
    }
    
}

export default ContaSalario