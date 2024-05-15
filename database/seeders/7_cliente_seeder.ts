import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
    
    await Cliente.createMany([
      {nome: 'Carol', cpf:"123.123.123-12", telefone:'99999-9999'},
      {nome: 'Felippo', cpf:"456.789.457-99", telefone:'99677-8890'},
      {nome: 'Pietra', cpf:"987.345.769-88", telefone:'98677-3321'},
    ])
 
  }
}