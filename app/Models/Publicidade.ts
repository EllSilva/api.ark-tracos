import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Comentario from './Comentario'


export default class Publicidade extends BaseModel {
@hasMany(() => Comentario)
public comentarios: HasMany<typeof Comentario> 

  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public descricao: string

  @column()
  public imagem: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
