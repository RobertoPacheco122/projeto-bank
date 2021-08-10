import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Alice', 19046245721)

const contaCorrente1 = new ContaCorrente(cliente1, 1002)

const cliente2 = new Cliente('Bruna', 15972445722)

const contaCorrente2 = new ContaCorrente(cliente2, 1001)

console.log(contaCorrente1)
console.log(contaCorrente2)

new ContaCorrente(cliente2, 1001)
new ContaCorrente(cliente2, 1001)
new ContaCorrente(cliente2, 1001)
new ContaCorrente(cliente2, 1001)
new ContaCorrente(cliente2, 1001)
new ContaCorrente(cliente2, 1001)
new ContaCorrente(cliente2, 1001)

console.log(ContaCorrente.numeroDeContas)