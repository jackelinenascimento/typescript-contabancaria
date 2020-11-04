interface IConta{
    saldo: number
    numeroConta: string
    agencia: string
    titular: string

    depositar(valor: number): boolean
    sacar(valor: number): boolean
    getSaldo(): string
}

export default IConta