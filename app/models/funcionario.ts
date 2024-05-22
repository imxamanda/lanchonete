import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany} from '@adonisjs/lucid/orm'
import Cargo from './cargo.js'
import Comanda from './comanda.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare nome: string

  @column()
  declare cpf: number

  @column()
  declare sexo: string

  @column()
  declare cargoId: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Cargo)
  declare cargo: BelongsTo<typeof Cargo>

  @hasMany(()=>Comanda)
  declare comandas: HasMany<typeof Comanda>
}