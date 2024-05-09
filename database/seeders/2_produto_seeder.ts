import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    
    await Produto.createMany([
      {nome: "Coca-cola lata", preco: 6.5, tamanho: "330 ml", tipoId: 1},
      {nome: "Coca-cola 2L", preco: 10, tamanho: "2l", tipoId: 1},
      {nome: "Coca-cola 600", preco: 8, tamanho: "600 ml", tipoId: 1},
      {nome: "Coca-cola ks", preco: 6.5, tamanho: "290 ml", tipoId: 1},

      {nome: "Hot Dog na chapa", preco: 10, tamanho: "padrao", tipoId: 4},
      {nome: "Hot Dog ao molho", preco: 10, tamanho: "padrao", tipoId: 4},
      {nome: "Hot Dog de frango", preco: 12, tamanho: "padrao", tipoId: 4},

      {nome: "X-bomba", preco: 10, tamanho: "padrao", tipoId: 2},
      {nome: "X-egg", preco: 8, tamanho: "padrao", tipoId: 2},
      {nome: "X-tudo", preco: 12, tamanho: "padrao", tipoId: 2},
      {nome: "X-monstrao", preco: 18, tamanho: "padrao", tipoId: 2},
      
      {nome: "Batata-Frita", preco: 10, tamanho: "500 g", tipoId: 5},
      {nome: "Anéis de cebola", preco: 12, tamanho: "500 g", tipoId: 5},
      {nome: "Mini chicken", preco: 12, tamanho: "500 g", tipoId: 5},
      {nome: "Batata-Frita especial", preco: 15, tamanho: "700 g", tipoId: 5},
      
      {nome: "Brownie", preco: 15, tamanho: "400 g", tipoId: 3},
      {nome: "Torta de Limão", preco: 15, tamanho: "400 g", tipoId: 3},
      {nome: "Petit Gateau", preco: 15, tamanho: "400 g", tipoId: 3},
      

    ])
  }
}