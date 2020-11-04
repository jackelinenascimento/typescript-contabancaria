import IConta from "./IConta"
import ContaFactory from "./ContaFactory"

const contaFactory: ContaFactory = new ContaFactory()

const contaTeste: IConta = contaFactory.criarConta("Corrente")

contaTeste.depositar(100)

console.log(contaTeste.getSaldo())