import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'projectos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('titulo')
      table.string('categoria')
      table.string('estado')
      table.string('img1')
      table.string('img2')
      table.string('img3')
      table.string('img4')
      table.string('img5')
      table.string('img6')
      table.string('img7')
      table.string('img8')
      table.string('img9')
      table.string('img10')
      table.string('img11')
      table.string('img12')
      table.string('img13')
      table.string('img14')
      table.string('img15')
      table.string('img16')
      table.string('img17')
      table.string('img18')
      table.string('img19')
      table.string('img20')
  
      table.string('descricao')
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
  
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
