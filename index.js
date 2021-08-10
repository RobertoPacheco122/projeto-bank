import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente()
cliente1.nome = 'Alice'
cliente1.cpfs = 19046245721

const conta1 = new ContaCorrente()
conta1.cliente = cliente1
conta1.agencia = 1002
conta1.saldo = 1200


const cliente2 = new Cliente()
cliente2.nome = 'Bruna'
cliente2.cpfs = 15972445722

const conta2 = new ContaCorrente()
conta2.cliente = cliente2
conta2.agencia = 1001
conta2.saldo = 2200

console.log(conta1)
console.log(conta2)