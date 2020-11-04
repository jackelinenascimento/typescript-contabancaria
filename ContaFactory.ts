import ContaCorrente from "./ContaCorrente"
import ContaPoupanca from "./ContaPoupanca"
import ContaSalario from "./ContaSalario"

class ContaFactory{
    criarConta(tipo: string){
        if (tipo ==="Corrente") return new ContaCorrente("001", "001", 100)
        if (tipo ==="Poupanca") return new ContaPoupanca("002", "002", 200)
        if (tipo ==="Salario") return new ContaSalario()
    }
}

export default ContaFactory