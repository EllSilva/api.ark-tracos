import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
 


export default class Projecto extends BaseModel {
 

  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public categoria: string

  @column()
  public estado: string
  
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
  public img9: string

  @column()
  public img10: string

  @column()
  public img11: string

  @column()
  public img12: string

  @column()
  public img13: string

  @column()
  public img14: string

  @column()
  public img15: string

  @column()
  public img16: string
 
  @column()
  public img17: string

  @column()
  public img18: string

  @column()
  public img19: string

  @column()
  public img20: string

  @column()
  public descricao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
