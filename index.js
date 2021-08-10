import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Alice', 19046245721)

const contaCorrente1 = new ContaCorrente(cliente1, 1002)

contaCorrente1.depositar(500)
contaCorrente1.sacar(200)

const cliente2 = new Cliente('Bruna', 15972445722)

const contaCorrente2 = new ContaCorrente(cliente2, 1001)

contaCorrente2.depositar(1000)
contaCorrente2.sacar(200)
contaCorrente2.transferir(600, contaCorrente1)
contaCorrente1.transferir(100, contaCorrente2)

console.log(contaCorrente1.saldo)
console.log(contaCorrente2.saldo)

console.log(contaCorrente1.cliente)
console.log(contaCorrente2.cliente)

console.log(cliente1.cpf)
console.log(cliente2.cpf)

//cliente1.cpf = 12398625412
//cliente2.cpf = 41481247187


console.log(contaCorrente1)
console.log(contaCorrente2)