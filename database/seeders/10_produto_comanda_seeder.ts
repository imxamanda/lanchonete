import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoComanda from '../../app/models/produto_comanda.js';

export default class extends BaseSeeder {
  async run() {
    await ProdutoComanda.createMany([
     { produtoId: 10, comandaId: 6, quantidade: 3 },
     { produtoId: 10, comandaId: 8, quantidade: 5 },
     { produtoId: 20, comandaId: 7, quantidade: 3 },
     { produtoId: 20, comandaId: 1, quantidade: 3 },
     { produtoId: 20, comandaId: 2, quantidade: 12 },
     
   ]);
 }
}