import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente()
cliente1.nome = 'Alice'
cliente1.cpf = 19046245721

const contaCorrente1 = new ContaCorrente()
contaCorrente1.cliente = cliente1
contaCorrente1.agencia = 1002
contaCorrente1.saldo = 1200

contaCorrente1.sacar(200)
contaCorrente1.depositar(500)

const cliente2 = new Cliente()
cliente2.nome = 'Bruna'
cliente2.cpf = 15972445722

const contaCorrente2 = new ContaCorrente()
contaCorrente2.cliente = cliente2
contaCorrente2.agencia = 1001
contaCorrente2.saldo = 2200

contaCorrente2.sacar(200)
contaCorrente2.depositar(1000)
contaCorrente2.transferir(600, contaCorrente1)
contaCorrente1.transferir(100, contaCorrente2)

console.log(contaCorrente1)
console.log(contaCorrente2)