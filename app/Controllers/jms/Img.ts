import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Img extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public img1: string

  @column()
  public img2: string

  @column()
  public img3: string

  @column()
  public img4: string

  @column()
  public img5: string

  @column()
  public img6: string

  @column()
  public img7: string

  @column()
  public img8: string

  @column()
  public projectoId: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
