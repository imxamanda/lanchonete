import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comanda from '../../app/models/comanda.js'

export default class extends BaseSeeder {
  async run() {
    
    await Comanda.createMany([
      {mesa: '18', funcionarioId: 2, clienteId: 2, formaPagamentoId: 3, dataPagamento:  new Date("2024-05-13"), data: new Date("2024-05-13") },
      {mesa: '17', funcionarioId: 2, clienteId: 3, formaPagamentoId: 4, dataPagamento:  new Date("2024-05-14"), data: new Date("2024-05-14") },
      {mesa: '11', funcionarioId: 2, clienteId: 1, formaPagamentoId: 1, dataPagamento:  new Date("2024-05-13"), data: new Date("2024-05-13") },
    ])

  }
}