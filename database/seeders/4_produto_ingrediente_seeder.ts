import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoIngrediente from '../../app/models/produto_ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    
    await ProdutoIngrediente.createMany([
      {produtoId:5, ingredienteId:1},
      {produtoId:5, ingredienteId:2},
      {produtoId:5, ingredienteId:3},
    ])
  }
}