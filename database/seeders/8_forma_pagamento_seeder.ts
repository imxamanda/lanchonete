import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormaPagamento from '../../app/models/forma_pagamento.js'

export default class extends BaseSeeder {
  async run() {
    
    await FormaPagamento.createMany([
      {id: 1, nome: 'Crédito'},
      {id: 2, nome:'Débito'},
      {id: 3, nome: 'Dinheiro'},
      {id: 4, nome: 'Pix'},
    ])

  }
}