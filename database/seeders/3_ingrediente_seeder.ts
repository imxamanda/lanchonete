import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    
    await Ingrediente.createMany([
      {nome: 'Pão com gergelim', descricao: 'Pão caseiro feito em casa'},
      {nome: 'Pão Brioche', descricao: 'Pão caseiro feito em casa'},
      {nome: 'Hambúrguer', descricao: 'Carne Moída'},
      {nome: 'Salada p/ Sabduíche', descricao: 'Alface, Tomate, Cebola Caramelizada'},
      {nome: 'Salsicha', descricao: 'Salsicha Perdigão'},
      {nome: 'Batata-Palha', descricao: 'Batata para hot dog'},

      {nome: 'Bolo', descricao: 'brownie'},
      {nome: 'Creme de Limao', descricao: 'Torta'},
      
      {nome: 'Batata Frita', descricao: 'Batata'},
      {nome: 'Aneis de cebola', descricao: 'Cebola'},
      {nome: 'Mini chicken', descricao: 'Frango'},


    ])
  }
}