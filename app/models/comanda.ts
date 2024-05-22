import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany} from '@adonisjs/lucid/orm'
import Funcionario from './funcionario.js'
import Cliente from './cliente.js'
import Produto from './produto.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

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

  @belongsTo(() => Funcionario)
  declare funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>

  @manyToMany(() => Produto, {
    pivotTable: 'produto_comandas',
  })
  declare produtos: ManyToMany<typeof Produto>
}