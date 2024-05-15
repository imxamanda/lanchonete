import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
   
    await Funcionario.createMany([
      {nome: 'Josepe', cpf:'111.111.111-11', sexo: 'M',cargoId: 1},
      {nome: 'Rogério', cpf:'222.222.222-22', sexo: 'M',cargoId: 2},
      {nome: 'Clara', cpf:'333.333.333-33', sexo: 'F',cargoId: 3},
      {nome: 'Maria', cpf:'444.444.444-44', sexo: 'F',cargoId: 4},
      {nome: 'Helena', cpf:'555.555.555-55', sexo: 'F',cargoId: 5},
      {nome: 'Pedro', cpf:'666.666.666-66', sexo: 'M',cargoId: 6},
    ])

  }
}