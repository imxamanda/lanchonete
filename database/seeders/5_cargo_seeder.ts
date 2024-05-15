import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cargo from '../../app/models/cargo.js'

export default class extends BaseSeeder {
  async run() {
   
    await Cargo.createMany([
      {id: 1, nome: 'Cozinheiro'},
      {id: 2, nome:'Garçom'},
      {id: 3, nome: 'Gerente'},
      {id: 4, nome: 'Balconista'},
      {id: 5, nome: 'Caixa'},
      {id: 6, nome: 'Motoboy'},
    ])

  }
}