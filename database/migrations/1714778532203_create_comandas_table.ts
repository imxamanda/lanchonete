import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('mesa', 45).notNullable()
      table.string('dataPagamento').notNullable()
      table.string('data').notNullable()
      table.integer('funcionarioId').unsigned().references('id').inTable('funcionarios').nullable()
      table.integer('clienteId').unsigned().references('id').inTable('clientes').nullable()
      table.integer('formaPagamentoId').unsigned().references('id').inTable('forma_pagamento').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}