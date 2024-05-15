import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('mesa', 45).notNullable()
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios').nullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').nullable()
      table.integer('forma_pagamento_id').unsigned().references('id').inTable('forma_pagamento').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}