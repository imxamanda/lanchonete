import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare mesa: number

  @column()
  declare dataPagamento: number

  @column()
  declare data: number

  @column()
  declare funcionarioId: number

  @column()
  declare clienteId: number

  @column()
  declare formaPagamentoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}